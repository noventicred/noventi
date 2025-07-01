
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Unlock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};
  const [installments, setInstallments] = useState('1');
  
  const iofValue = 19.70;
  const monthlyRate = 0.0135; // 1.35% ao mês

  const calculateInstallmentValue = (totalValue: number, numInstallments: number) => {
    if (numInstallments === 1) {
      return totalValue;
    }
    
    const monthlyPayment = totalValue * (monthlyRate * Math.pow(1 + monthlyRate, numInstallments)) / (Math.pow(1 + monthlyRate, numInstallments) - 1);
    return monthlyPayment;
  };

  const installmentOptions = [
    { value: '1', label: '1x' },
    { value: '2', label: '2x' },
    { value: '3', label: '3x' },
    { value: '6', label: '6x' },
    { value: '12', label: '12x' }
  ];

  const selectedInstallments = parseInt(installments);
  const installmentValue = calculateInstallmentValue(iofValue, selectedInstallments);
  const totalWithInterest = installmentValue * selectedInstallments;

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

            {/* Seleção de parcelas */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-gray-700 mb-4">
                Escolha a forma de pagamento:
              </label>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-gray-600 min-w-[120px]">Parcelas:</label>
                  <Select value={installments} onValueChange={setInstallments}>
                    <SelectTrigger className="w-full max-w-xs">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {installmentOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Resumo do pagamento */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Valor do IOF:</span>
                    <span className="font-medium">{formatCurrency(iofValue)}</span>
                  </div>
                  
                  {selectedInstallments > 1 && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Juros (1,35% a.m.):</span>
                        <span className="font-medium">{formatCurrency(totalWithInterest - iofValue)}</span>
                      </div>
                      <div className="flex justify-between items-center border-t pt-2">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-semibold text-lg">{formatCurrency(totalWithInterest)}</span>
                      </div>
                    </>
                  )}
                  
                  <div className="flex justify-between items-center text-lg font-bold text-green-primary border-t pt-2">
                    <span>Valor da parcela:</span>
                    <span>{formatCurrency(installmentValue)}</span>
                  </div>
                  
                  {selectedInstallments > 1 && (
                    <p className="text-sm text-gray-500 text-center">
                      {selectedInstallments}x de {formatCurrency(installmentValue)}
                    </p>
                  )}
                </div>
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
