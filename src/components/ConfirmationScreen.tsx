
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const ConfirmationScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loanValue, personalData, bankData } = location.state || {};

  useEffect(() => {
    // Redirecionar automaticamente após 3 segundos para a validação bancária
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
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Confirmação de sucesso */}
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-primary rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-green-dark">
                  Dados enviados com sucesso!
                </h1>
                <p className="text-lg text-gray-600">
                  Aguarde enquanto validamos suas informações bancárias...
                </p>
              </div>

              {/* Resumo rápido */}
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="text-gray-600">Valor aprovado: <span className="font-semibold text-green-primary">{formatCurrency(loanValue || 0)}</span></p>
                <p className="text-gray-600">Banco: <span className="font-semibold">{bankData?.bankName}</span></p>
              </div>

              {/* Indicador de progresso */}
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
