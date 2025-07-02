import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Copy, CheckCircle, Clock, AlertCircle, XCircle } from "lucide-react";
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
  const { pix, transactionId, iofValue, loanValue, totalLoanValue, client } =
    location.state || {};

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Card className="bg-background overflow-hidden shadow-2xl rounded-2xl">
        <div className="bg-green-600 py-4 px-6">
          <h1 className="text-white text-2xl font-bold text-center">
            Pagamento via Pix
          </h1>
        </div>
        <CardContent className="p-6">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <div
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border",
                statusConfig[status].color
              )}
            >
              <StatusIcon size={18} />
              <span className="font-medium">{statusConfig[status].label}</span>
            </div>
          </div>

          {/* Timer for pending payments */}
          {status === "pending" && (
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600 mb-1">
                Tempo restante para pagamento
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg py-2 px-4 inline-block">
                <span className="text-xl font-bold text-green-700">
                  {formatTimer(timer)}
                </span>
              </div>
            </div>
          )}

          {/* QR Code Section */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 flex flex-col items-center">
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
              <p className="text-sm text-gray-500 text-center">
                Escaneie o QR Code com o aplicativo do seu banco
              </p>
            </div>

            <div className="flex-1">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
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
            </div>
          </div>

          <Separator className="my-6" />

          {/* Payment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-800">
              Detalhes do Pagamento
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-600">Cliente:</div>
              <div className="font-medium">{client?.name}</div>
              <div className="text-gray-600">Documento:</div>
              <div className="font-medium">{client?.cpf}</div>
              <div className="text-gray-600">Valor:</div>
              <div className="font-medium">{formatCurrency(loanValue)}</div>
              <div className="text-gray-600">IOF:</div>
              <div className="font-medium">{formatCurrency(iofValue)}</div>
              <Separator className="col-span-2 my-2" />
              <div className="text-gray-800 font-semibold">Total:</div>
              <div className="text-green-700 font-bold text-lg">
                {formatCurrency(totalLoanValue)}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-blue-800 font-medium mb-2">Instruções</h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
              <li>O pagamento é processado em até 30 minutos.</li>
              <li>
                Após o pagamento, você receberá uma confirmação por e-mail.
              </li>
              <li>Em caso de dúvidas, entre em contato com nosso suporte.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PixPaymentDetails;
