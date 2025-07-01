
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const LoadingAnalysis = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  const location = useLocation();
  const { loanValue, personalData, contactData } = location.state || {};

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Navegar para tela de aprovação passando os dados
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

    return () => clearInterval(timer);
  }, [navigate, loanValue, personalData, contactData]);

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
                Analisando seus dados
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg px-2">
                Aguarde {countdown} segundos. Estamos analisando seus dados para verificar a aprovação do empréstimo.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-4xl sm:text-6xl font-bold text-green-primary">
                {countdown}
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div 
                  className="bg-green-primary h-2 sm:h-3 rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-gray-500 space-y-1">
              <p>✓ Verificando CPF</p>
              <p>✓ Consultando score de crédito</p>
              <p>✓ Analisando histórico financeiro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnalysis;
