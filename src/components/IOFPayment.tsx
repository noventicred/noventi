
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Unlock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};
  
  const iofValue = 19.70;

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Cabeçalho de alerta */}
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-800">
                ⚠️ Última etapa para liberação do valor!
              </h1>
            </div>

            {/* Explicação do IOF */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Para que possamos transferir o valor aprovado para sua conta, é necessário realizar o pagamento do Imposto sobre Operações Financeiras (IOF), conforme exigência legal.
              </p>
              
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">
                  O valor do IOF é fixo: <span className="text-green-primary">{formatCurrency(iofValue)}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Esse imposto é obrigatório em toda operação de crédito no Brasil.
                </p>
              </div>
            </div>

            {/* Resumo do empréstimo */}
            <div className="bg-green-50 rounded-lg p-4 mb-8">
              <h3 className="font-semibold text-green-dark mb-2">Resumo do seu empréstimo:</h3>
              <p className="text-green-dark">
                Valor aprovado: <span className="font-bold">{formatCurrency(loanValue || 0)}</span>
              </p>
              <p className="text-sm text-green-600 mt-1">
                Será depositado em sua conta após o pagamento do IOF
              </p>
            </div>

            {/* Botão de pagamento */}
            <div className="text-center">
              <Button 
                className="bg-green-primary hover:bg-green-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Unlock className="w-5 h-5 mr-2" />
                Pagar IOF e liberar depósito
              </Button>
            </div>

            {/* Informação adicional */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
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
