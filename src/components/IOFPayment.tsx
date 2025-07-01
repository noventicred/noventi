
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Unlock, AlertTriangle, CheckCircle, Clock, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData, loanDetails } = location.state || {};
  const [isProcessing, setIsProcessing] = useState(false);
  
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

  const handlePayment = () => {
    setIsProcessing(true);
    // Simular processamento
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-xl sm:max-w-2xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 sm:space-y-8">
            {/* Cabeçalho de sucesso com animação sutil */}
            <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              
              <h1 className="text-xl sm:text-2xl font-bold text-green-dark px-2">
                🎉 Seu empréstimo foi aprovado!
              </h1>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                O valor de <span className="font-bold text-green-primary">{formatCurrency(loanValue || 0)}</span> já está reservado para sua conta.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-center space-x-2 py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="ml-2 text-sm text-gray-600">Aprovado</span>
              </div>
              <div className="w-8 h-0.5 bg-green-primary"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <span className="ml-2 text-sm font-medium text-orange-600">Pagamento IOF</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <Unlock className="w-4 h-4 text-gray-500" />
                </div>
                <span className="ml-2 text-sm text-gray-500">Liberação</span>
              </div>
            </div>

            {/* Explicação do IOF - mais clara e focada */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 sm:p-6 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900 text-lg">Última etapa: Pagamento do IOF</h3>
                  
                  <p className="text-blue-800 leading-relaxed text-sm sm:text-base">
                    O IOF é um imposto federal obrigatório para operações de crédito, exigido pelo Banco Central do Brasil.
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-sm">IOF (0,38% do valor total):</span>
                      <span className="font-bold text-xl text-red-600">{formatCurrency(iofValue)}</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Valor calculado sobre: {formatCurrency(totalLoanValue)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo em cards menores e mais organizados */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-dark mb-2 text-sm">Valor do Empréstimo</h4>
                <p className="text-2xl font-bold text-green-primary">{formatCurrency(loanValue || 0)}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2 text-sm">Valor Total (com juros)</h4>
                <p className="text-lg font-semibold text-gray-700">{formatCurrency(totalLoanValue)}</p>
              </div>
            </div>

            {/* Benefícios após pagamento */}
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-dark mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Após o pagamento
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  Transferência em até 3 horas
                </li>
                <li className="flex items-center text-sm text-green-700">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  Processo 100% seguro e protegido
                </li>
                <li className="flex items-center text-sm text-green-700">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  Confirmação automática por SMS e email
                </li>
              </ul>
            </div>

            {/* Botão de pagamento melhorado */}
            <div className="text-center space-y-3">
              <Button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="bg-green-primary hover:bg-green-dark text-white px-6 sm:px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70 w-full sm:w-auto min-w-[280px]"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <Unlock className="w-5 h-5 mr-2" />
                    Pagar {formatCurrency(iofValue)} e liberar
                  </>
                )}
              </Button>
              
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <Shield className="w-3 h-3 mr-1" />
                Pagamento seguro via Pix ou cartão
              </p>
            </div>

            {/* FAQ rápido */}
            <div className="border-t pt-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-700 hover:text-green-primary transition-colors">
                  <span>Por que preciso pagar o IOF?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                  <p>O IOF é um imposto federal obrigatório estabelecido pelo governo brasileiro para todas as operações de crédito. É regulamentado pelo Banco Central e deve ser pago antes da liberação do valor.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOFPayment;
