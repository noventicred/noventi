
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Unlock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData, loanDetails } = location.state || {};
  
  // Calcular o valor total do empréstimo (principal + juros)
  const calculateTotalLoanValue = () => {
    if (loanDetails?.totalWithInterest) {
      return loanDetails.totalWithInterest;
    }
    
    // Fallback: calcular com valores padrão se loanDetails não estiver disponível
    const installments = 24;
    const rate = 0.0135; // 1.35% a.m.
    const monthlyPayment = loanValue * (rate * Math.pow(1 + rate, installments)) / (Math.pow(1 + rate, installments) - 1);
    return monthlyPayment * installments;
  };

  const totalLoanValue = calculateTotalLoanValue();
  
  // IOF calculado como 0,38% do valor total do empréstimo
  const iofRate = 0.0038; // 0,38%
  const iofValue = totalLoanValue * iofRate;

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            
            {/* Cabeçalho de sucesso */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h1 className="text-xl sm:text-2xl font-bold text-green-dark mb-3">
                🎉 Seu valor já está disponível para transferência!
              </h1>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
                O seu empréstimo foi aprovado e o valor já está reservado para sua conta.
              </p>
            </div>

            {/* Seção principal do IOF */}
            <div className="space-y-6">
              
              {/* Explicação do IOF */}
              <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                        Última etapa para liberação
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        No entanto, falta apenas uma última etapa: o pagamento do Imposto sobre Operações Financeiras (IOF).
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Conforme exigência legal do Banco Central, é necessário quitar esse imposto para que o valor seja liberado 100% e transferido imediatamente para sua conta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumo do empréstimo */}
              <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-green-dark mb-4">
                  Resumo do seu empréstimo
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-green-dark">Valor aprovado:</span>
                    <span className="text-sm sm:text-base font-bold text-green-dark">{formatCurrency(loanValue || 0)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-green-dark">Valor total (com juros):</span>
                    <span className="text-sm sm:text-base font-bold text-green-dark">{formatCurrency(totalLoanValue)}</span>
                  </div>
                  <div className="border-t border-green-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-green-dark">IOF (0,38% do total):</span>
                      <span className="text-base sm:text-lg font-bold text-red-600">{formatCurrency(iofValue)}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-green-700 mt-2">
                      O IOF é um tributo obrigatório em operações de crédito no Brasil.
                    </p>
                  </div>
                </div>
              </div>

              {/* Informação de tempo */}
              <div className="bg-green-100 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-sm sm:text-base text-green-700 font-medium">
                  ⏱️ Assim que o pagamento for confirmado, a transferência será feita em até 3 horas
                </p>
              </div>

            </div>

            {/* Botão de pagamento - Melhor posicionamento */}
            <div className="mt-8 space-y-4">
              <div className="flex justify-center">
                <Button 
                  className="bg-green-primary hover:bg-green-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-md"
                  size="lg"
                >
                  <Unlock className="w-5 h-5 mr-2" />
                  Pagar {formatCurrency(iofValue)} e liberar depósito
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-500">
                  🔒 Pagamento 100% seguro e protegido
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IOFPayment;
