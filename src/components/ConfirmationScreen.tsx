
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, CreditCard } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const ConfirmationScreen = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};

  const handlePayIOF = () => {
    // Aqui você pode implementar a lógica de pagamento do IOF
    // Por enquanto, apenas um alert
    alert('Redirecionando para pagamento do IOF...');
  };

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Confirmação de sucesso */}
            <div className="text-center space-y-6 mb-8">
              <div className="w-20 h-20 bg-green-primary rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-green-dark">
                  Dados enviados com sucesso!
                </h1>
                <p className="text-lg text-gray-600">
                  Seu dinheiro já está disponível para transferência.
                </p>
              </div>
            </div>

            {/* Resumo dos dados */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 space-y-4">
              <h3 className="font-bold text-green-dark text-lg">Resumo da Solicitação</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Nome:</p>
                  <p className="font-semibold">{personalData?.firstName} {personalData?.lastName}</p>
                </div>
                
                <div>
                  <p className="text-gray-600">Valor aprovado:</p>
                  <p className="font-semibold text-green-primary text-lg">{formatCurrency(loanValue || 0)}</p>
                </div>
                
                <div>
                  <p className="text-gray-600">Banco:</p>
                  <p className="font-semibold">{bankData?.bankName}</p>
                </div>
                
                <div>
                  <p className="text-gray-600">Conta:</p>
                  <p className="font-semibold">Ag: {bankData?.agency} | Conta: {bankData?.account}</p>
                </div>
              </div>
            </div>

            {/* Aviso sobre IOF */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-bold text-yellow-800">Atenção: Taxa IOF obrigatória</h3>
                  <p className="text-yellow-700">
                    Agora, é necessário pagar o imposto IOF no valor de <strong>R$ 19,70</strong> para liberar o depósito.
                  </p>
                  <p className="text-sm text-yellow-600">
                    Esta é uma taxa obrigatória do governo federal para operações de crédito.
                  </p>
                </div>
              </div>
            </div>

            {/* Botão de pagamento */}
            <div className="text-center space-y-4">
              <Button
                onClick={handlePayIOF}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 mx-auto"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pagar agora o IOF - R$ 19,70</span>
              </Button>
              
              <p className="text-sm text-gray-500">
                Pagamento 100% seguro via cartão de crédito ou PIX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
