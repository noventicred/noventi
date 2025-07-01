import { useState, useEffect } from "react";
import { formatCurrency } from "@/utils/formatters";
import InstallmentSelector from "./InstallmentSelector";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, Percent, CreditCard } from "lucide-react";

interface ValueSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const ValueSlider = ({ value, onChange }: ValueSliderProps) => {
  const minValue = 5000;
  const maxValue = 200000;
  const step = 5000;
  const [installments, setInstallments] = useState("24");

  // Valor inicial do slider
  useEffect(() => {
    if (value === 50000) {
      onChange(10000);
    }
    // eslint-disable-next-line
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  const calculateMonthlyPayment = (amount: number, numInstallments: number) => {
    const rate = 0.0135; // 1.35% a.m.

    if (numInstallments === 1) {
      return amount;
    }

    const monthlyPayment =
      (amount * (rate * Math.pow(1 + rate, numInstallments))) /
      (Math.pow(1 + rate, numInstallments) - 1);
    return monthlyPayment;
  };

  const getSliderStyles = () => {
    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
    return {
      background: `linear-gradient(to right, #8edb00 0%, #8edb00 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
    };
  };

  const selectedInstallments = parseInt(installments);
  const monthlyPayment = calculateMonthlyPayment(value, selectedInstallments);
  const totalWithInterest = monthlyPayment * selectedInstallments;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <label className="text-lg font-medium text-gray-700">
          Selecione o valor que você precisa
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

        <style
          dangerouslySetInnerHTML={{
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
          `,
          }}
        />
      </div>

      {/* Novo seletor de parcelas */}
      <InstallmentSelector
        value={installments}
        onChange={setInstallments}
        loanAmount={value}
      />

      <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 rounded-2xl shadow-md mt-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-green-700 text-lg flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-green-500" /> Resumo do
            Empréstimo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {selectedInstallments === 1 ? (
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-green-400" /> Pagamento à
                vista:
              </span>
              <span className="text-xl font-bold text-green-700">
                {formatCurrency(value)}
              </span>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600 flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-green-400" /> Valor
                  solicitado:
                </span>
                <span className="font-medium">{formatCurrency(value)}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600 flex items-center gap-1">
                  <Percent className="w-4 h-4 text-green-400" /> Juros (1,35%
                  a.m.):
                </span>
                <span className="font-medium">
                  {formatCurrency(totalWithInterest - value)}
                </span>
              </div>
              <div className="flex justify-between items-center border-t pt-2 mt-2">
                <span className="text-gray-600 flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-green-400" /> Valor total:
                </span>
                <span className="font-semibold">
                  {formatCurrency(totalWithInterest)}
                </span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-green-700 border-t pt-2 mt-2">
                <span className="flex items-center gap-1">
                  <CreditCard className="w-5 h-5 text-green-500" /> Parcela
                  mensal:
                </span>
                <span>{formatCurrency(monthlyPayment)}</span>
              </div>
              <p className="text-sm text-green-600 text-center mt-1 font-medium">
                {selectedInstallments}x de {formatCurrency(monthlyPayment)}
              </p>
              <p className="text-xs text-gray-500 text-center mt-1 font-medium">
                Primeira parcela só em 60 dias
              </p>
            </>
          )}
        </CardContent>
      </Card>
      <div className="mt-8" />
    </div>
  );
};

export default ValueSlider;
