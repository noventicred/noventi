
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

const LoadingAnalysis = () => {
  const [countdown, setCountdown] = useState(10);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { loanValue, personalData, contactData } = location.state || {};

  const analysisSteps = [
    { icon: CheckCircle2, text: 'Verificando CPF...', color: 'text-green-500' },
    { icon: TrendingUp, text: 'Consultando score de crédito...', color: 'text-blue-500' },
    { icon: Clock, text: 'Analisando histórico financeiro...', color: 'text-purple-500' },
    { icon: CheckCircle2, text: 'Finalizando análise...', color: 'text-green-500' }
  ];

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % analysisSteps.length);
    }, 2500);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          clearInterval(stepTimer);
          navigate('/aprovado', { 
            state: { 
              loanValue, 
              personalData, 
              contactData 
            } 
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(stepTimer);
    };
  }, [navigate, loanValue, personalData, contactData]);

  const CurrentIcon = analysisSteps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center space-y-8 border border-green-100">
            {/* Animated Header */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center animate-pulse shadow-lg">
                  <Loader2 className="w-10 h-10 text-white animate-spin" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 animate-fade-in">
                  Analisando seus dados
                </h2>
                <p className="text-gray-600 text-lg animate-slide-in-right">
                  Aguarde {countdown} segundos. Nossa IA está verificando sua aprovação!
                </p>
              </div>
            </div>

            {/* Animated Countdown */}
            <div className="space-y-6">
              <div className="relative">
                <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 animate-pulse">
                  {countdown}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-green-200 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg animate-pulse"
                  style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Animated Steps */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 animate-fade-in">
                <CurrentIcon className={`w-6 h-6 ${analysisSteps[currentStep].color} animate-bounce`} />
                <span className="text-lg font-medium text-gray-700 animate-slide-in-right">
                  {analysisSteps[currentStep].text}
                </span>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center space-x-2">
                {analysisSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentStep 
                        ? 'bg-green-500 scale-125 animate-pulse' 
                        : index < currentStep 
                          ? 'bg-green-300' 
                          : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="relative">
              <div className="absolute top-0 left-4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-4 left-12 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnalysis;
