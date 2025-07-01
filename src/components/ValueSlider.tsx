
import { useState, useEffect } from 'react';
import { formatCurrency } from '@/utils/formatters';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ValueSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const ValueSlider = ({ value, onChange }: ValueSliderProps) => {
  const minValue = 5000;
  const maxValue = 200000;
  const step = 5000;
  const [installments, setInstallments] = useState('24');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  const calculateMonthlyPayment = (amount: number, numInstallments: number) => {
    const rate = 0.0135; // 1.35% a.m.
    
    if (numInstallments === 1) {
      return amount;
    }
    
    const monthlyPayment = amount * (rate * Math.pow(1 + rate, numInstallments)) / (Math.pow(1 + rate, numInstallments) - 1);
    return monthlyPayment;
  };

  const getSliderStyles = () => {
    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
    return {
      background: `linear-gradient(to right, #8edb00 0%, #8edb00 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
    };
  };

  const installmentOptions = [
    { value: '1', label: '1x à vista' },
    { value: '6', label: '6x' },
    { value: '12', label: '12x' },
    { value: '18', label: '18x' },
    { value: '24', label: '24x' },
    { value: '30', label: '30x' },
    { value: '36', label: '36x' },
    { value: '42', label: '42x' },
    { value: '48', label: '48x' },
    { value: '54', label: '54x' },
    { value: '60', label: '60x' },
    { value: '64', label: '64x' }
  ];

  const selectedInstallments = parseInt(installments);
  const monthlyPayment = calculateMonthlyPayment(value, selectedInstallments);
  const totalWithInterest = monthlyPayment * selectedInstallments;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <label className="text-lg font-medium text-gray-700">
          Quanto você precisa?
        </label>
        <div className="text-4xl font-bold text-green-dark">
          {formatCurrency(value)}
        </div>
      </div>

      <div className="relative">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={getSliderStyles()}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>{formatCurrency(minValue)}</span>
          <span>{formatCurrency(maxValue)}</span>
        </div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #8edb00;
              cursor: pointer;
              border: 2px solid #ffffff;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            }

            input[type="range"]::-moz-range-thumb {
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #8edb00;
              cursor: pointer;
              border: 2px solid #ffffff;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            }
          `
        }} />
      </div>

      {/* Seleção de parcelas */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="text-gray-600 min-w-[120px]">Parcelar em:</label>
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
      </div>

      <div className="bg-gray-light rounded-lg p-4 space-y-2">
        {selectedInstallments === 1 ? (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Pagamento à vista:</span>
            <span className="text-xl font-bold text-green-dark">
              {formatCurrency(value)}
            </span>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Valor solicitado:</span>
              <span className="font-medium">{formatCurrency(value)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Juros (1,35% a.m.):</span>
              <span className="font-medium">{formatCurrency(totalWithInterest - value)}</span>
            </div>
            <div className="flex justify-between items-center border-t pt-2">
              <span className="text-gray-600">Valor total:</span>
              <span className="font-semibold">{formatCurrency(totalWithInterest)}</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-green-dark border-t pt-2">
              <span>Parcela mensal:</span>
              <span>{formatCurrency(monthlyPayment)}</span>
            </div>
            <p className="text-sm text-gray-500 text-center">
              {selectedInstallments}x de {formatCurrency(monthlyPayment)}
            </p>
          </>
        )}
        <p className="text-sm text-gray-500">
          *Taxa de juros: 1,35% a.m. Sujeito à análise de crédito.
        </p>
      </div>
    </div>
  );
};

export default ValueSlider;
