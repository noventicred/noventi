
import { useState } from 'react';
import { formatCurrency } from '@/utils/formatters';

interface InstallmentOption {
  value: string;
  label: string;
  months: number;
}

interface InstallmentSelectorProps {
  value: string;
  onChange: (value: string) => void;
  loanAmount: number;
}

const InstallmentSelector = ({ value, onChange, loanAmount }: InstallmentSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const installmentOptions: InstallmentOption[] = [
    { value: '1', label: '1x à vista', months: 1 },
    { value: '6', label: '6x', months: 6 },
    { value: '12', label: '12x', months: 12 },
    { value: '18', label: '18x', months: 18 },
    { value: '24', label: '24x', months: 24 },
    { value: '30', label: '30x', months: 30 },
    { value: '36', label: '36x', months: 36 },
    { value: '42', label: '42x', months: 42 },
    { value: '48', label: '48x', months: 48 },
    { value: '54', label: '54x', months: 54 },
    { value: '60', label: '60x', months: 60 },
    { value: '64', label: '64x', months: 64 }
  ];

  const calculateMonthlyPayment = (amount: number, months: number) => {
    const rate = 0.0135; // 1.35% a.m.
    
    if (months === 1) {
      return amount;
    }
    
    return amount * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
  };

  const selectedOption = installmentOptions.find(opt => opt.value === value);

  return (
    <div className="relative">
      <label className="block text-gray-600 mb-3 font-medium">
        Parcelar em:
      </label>
      
      {/* Botão principal */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border-2 border-gray-200 rounded-lg p-4 text-left hover:border-green-primary transition-colors focus:outline-none focus:border-green-primary"
      >
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-gray-800">
              {selectedOption?.label}
            </div>
            <div className="text-sm text-gray-500">
              {selectedOption?.months === 1 ? (
                'Pagamento à vista'
              ) : (
                `${formatCurrency(calculateMonthlyPayment(loanAmount, selectedOption?.months || 1))} por mês`
              )}
            </div>
          </div>
          <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Dropdown com opções */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
          {installmentOptions.map((option) => {
            const monthlyPayment = calculateMonthlyPayment(loanAmount, option.months);
            const isSelected = value === option.value;
            
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full p-4 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                  isSelected ? 'bg-green-50 border-green-200' : ''
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className={`font-medium ${isSelected ? 'text-green-dark' : 'text-gray-800'}`}>
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {option.months === 1 ? (
                        'Sem juros'
                      ) : (
                        `${formatCurrency(monthlyPayment)} por mês`
                      )}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="text-green-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}
      
      {/* Clique fora para fechar */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default InstallmentSelector;
