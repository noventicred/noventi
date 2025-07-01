
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Unlock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};
  
  // IOF calculado como 0,38% do valor do empréstimo
  const iofRate = 0.0038; // 0,38%
  const iofValue = (loanValue || 0) * iofRate;

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-xl sm:max-w-2xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Cabeçalho de alerta */}
            <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full mx-auto flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 px-2">
                ⚠️ Última etapa para liberação do valor!
              </h1>
            </div>

            {/* Explicação do IOF */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Para que possamos transferir o valor aprovado para sua conta, é necessário realizar o pagamento do Imposto sobre Operações Financeiras (IOF), conforme exigência legal.
              </p>
              
              <div className="space-y-2">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  IOF (0,38% sobre o valor): <span className="text-green-primary">{formatCurrency(iofValue)}</span>
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Esse imposto é obrigatório em toda operação de crédito no Brasil.
                </p>
              </div>
            </div>

            {/* Resumo do empréstimo */}
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
              <h3 className="font-semibold text-green-dark mb-2 text-sm sm:text-base">Resumo do seu empréstimo:</h3>
              <p className="text-green-dark text-sm sm:text-base">
                Valor aprovado: <span className="font-bold">{formatCurrency(loanValue || 0)}</span>
              </p>
              <p className="text-green-dark text-sm sm:text-base">
                IOF (0,38%): <span className="font-bold text-red-600">{formatCurrency(iofValue)}</span>
              </p>
              <p className="text-xs sm:text-sm text-green-600 mt-1">
                Será depositado em sua conta após o pagamento do IOF
              </p>
            </div>

            {/* Botão de pagamento */}
            <div className="text-center">
              <Button 
                className="bg-green-primary hover:bg-green-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                size="lg"
              >
                <Unlock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Pagar {formatCurrency(iofValue)} e liberar depósito
              </Button>
            </div>

            {/* Informação adicional */}
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-gray-500">
                Pagamento 100% seguro e protegido
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOFPayment;
