
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const ConfirmationScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loanValue, personalData, bankData } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/validacao-bancaria', { 
        state: { 
          loanValue, 
          personalData, 
          bankData 
        } 
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, loanValue, personalData, bankData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100">
            {/* Success Animation */}
            <div className="text-center space-y-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center animate-bounce shadow-lg">
                  <CheckCircle className="w-12 h-12 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 animate-spin">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="absolute -bottom-2 -left-2 animate-bounce delay-300">
                  <Sparkles className="w-6 h-6 text-green-400" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 animate-fade-in">
                  Dados enviados com sucesso!
                </h1>
                <p className="text-xl text-gray-600 animate-slide-in-right">
                  Aguarde enquanto validamos suas informações bancárias...
                </p>
              </div>

              {/* Enhanced Summary */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 space-y-4 animate-scale-in border border-green-100">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <ArrowRight className="w-5 h-5 text-green-600 animate-bounce" />
                  <span className="text-lg font-semibold text-gray-700">Resumo da Aprovação</span>
                  <ArrowRight className="w-5 h-5 text-green-600 animate-bounce delay-200" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm animate-slide-in-right">
                    <p className="text-gray-600 text-sm">Valor aprovado</p>
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                      {formatCurrency(loanValue || 0)}
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm animate-slide-in-right delay-100">
                    <p className="text-gray-600 text-sm">Banco de destino</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {bankData?.bankName || 'Banco informado'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Progress */}
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-200 border-t-green-600"></div>
                    <div className="absolute inset-0 rounded-full animate-ping border-2 border-green-300 opacity-20"></div>
                  </div>
                </div>
                
                <p className="text-green-600 font-medium animate-pulse">
                  Processando informações...
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex justify-center space-x-4">
                {[1, 2, 3].map((step, index) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index <= 1 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-gray-300 animate-bounce'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-16 right-12 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-12 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
