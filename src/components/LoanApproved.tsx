
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, CreditCard } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

const LoanApproved = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loanValue, personalData } = location.state || {};

  const [bankData, setBankData] = useState({
    bankName: '',
    agency: '',
    account: '',
    pixKeyType: '',
    pixKey: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setBankData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!bankData.bankName.trim()) {
      newErrors.bankName = 'Nome do banco é obrigatório';
    }
    if (!bankData.agency.trim()) {
      newErrors.agency = 'Agência é obrigatória';
    }
    if (!bankData.account.trim()) {
      newErrors.account = 'Conta é obrigatória';
    }
    if (!bankData.pixKeyType) {
      newErrors.pixKeyType = 'Tipo de chave PIX é obrigatório';
    }
    if (!bankData.pixKey.trim()) {
      newErrors.pixKey = 'Chave PIX é obrigatória';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate('/confirmacao', { 
      state: { 
        loanValue, 
        personalData, 
        bankData 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Seção de aprovação */}
            <div className="text-center space-y-6 mb-12">
              <div className="w-20 h-20 bg-green-primary rounded-full mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-green-dark">
                  Parabéns, {personalData?.firstName}!
                </h1>
                <h2 className="text-2xl font-bold text-green-primary">
                  Seu empréstimo no valor de {formatCurrency(loanValue || 0)} foi aprovado!
                </h2>
                <p className="text-gray-600">
                  Agora precisamos dos seus dados bancários para realizar o depósito.
                </p>
              </div>
            </div>

            {/* Formulário bancário */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="w-6 h-6 text-green-primary" />
                <h3 className="text-xl font-bold text-green-dark">
                  Dados Bancários
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="bankName">Nome do banco</Label>
                  <Input
                    id="bankName"
                    value={bankData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    placeholder="Ex: Banco do Brasil, Itaú, Santander..."
                    className={errors.bankName ? 'border-red-500' : ''}
                  />
                  {errors.bankName && (
                    <p className="text-red-500 text-sm">{errors.bankName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agency">Agência (com dígito, se houver)</Label>
                  <Input
                    id="agency"
                    value={bankData.agency}
                    onChange={(e) => handleInputChange('agency', e.target.value)}
                    placeholder="Ex: 1234-5"
                    className={errors.agency ? 'border-red-500' : ''}
                  />
                  {errors.agency && (
                    <p className="text-red-500 text-sm">{errors.agency}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="account">Conta (com dígito, se houver)</Label>
                  <Input
                    id="account"
                    value={bankData.account}
                    onChange={(e) => handleInputChange('account', e.target.value)}
                    placeholder="Ex: 12345-6"
                    className={errors.account ? 'border-red-500' : ''}
                  />
                  {errors.account && (
                    <p className="text-red-500 text-sm">{errors.account}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pixKeyType">Tipo de chave PIX</Label>
                  <Select value={bankData.pixKeyType} onValueChange={(value) => handleInputChange('pixKeyType', value)}>
                    <SelectTrigger className={errors.pixKeyType ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cpf">CPF</SelectItem>
                      <SelectItem value="email">E-mail</SelectItem>
                      <SelectItem value="phone">Telefone</SelectItem>
                      <SelectItem value="random">Chave aleatória</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.pixKeyType && (
                    <p className="text-red-500 text-sm">{errors.pixKeyType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pixKey">Chave PIX</Label>
                  <Input
                    id="pixKey"
                    value={bankData.pixKey}
                    onChange={(e) => handleInputChange('pixKey', e.target.value)}
                    placeholder="Digite sua chave PIX"
                    className={errors.pixKey ? 'border-red-500' : ''}
                  />
                  {errors.pixKey && (
                    <p className="text-red-500 text-sm">{errors.pixKey}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  onClick={handleSubmit}
                  className="bg-green-primary hover:bg-green-dark text-white px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Enviar dados bancários para depósito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApproved;
