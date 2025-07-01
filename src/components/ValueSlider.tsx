
import { useState, useEffect } from 'react';
import { formatCurrency } from '@/utils/formatters';

interface ValueSliderProps {
  value: number;
  onChange: (value: number) => void;
}

const ValueSlider = ({ value, onChange }: ValueSliderProps) => {
  const minValue = 5000;
  const maxValue = 200000;
  const step = 5000;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange(newValue);
  };

  const calculateMonthlyPayment = (amount: number) => {
    const rate = 0.0199; // 1.99% a.m.
    const months = 24;
    const monthlyPayment = amount * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    return monthlyPayment;
  };

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
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>{formatCurrency(minValue)}</span>
          <span>{formatCurrency(maxValue)}</span>
        </div>
      </div>

      <div className="bg-gray-light rounded-lg p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Parcela estimada (24x):</span>
          <span className="text-xl font-bold text-green-dark">
            {formatCurrency(calculateMonthlyPayment(value))}
          </span>
        </div>
        <p className="text-sm text-gray-500">
          *Simulação com taxa de 1,99% a.m. Sujeito à análise de crédito.
        </p>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #8edb00;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #8edb00;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-webkit-slider-track {
          background: linear-gradient(to right, #8edb00 0%, #8edb00 ${((value - minValue) / (maxValue - minValue)) * 100}%, #e5e7eb ${((value - minValue) / (maxValue - minValue)) * 100}%, #e5e7eb 100%);
        }
      `}</style>
    </div>
  );
};

export default ValueSlider;
