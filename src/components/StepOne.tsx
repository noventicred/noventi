
import { Button } from "@/components/ui/button";
import ValueSlider from "./ValueSlider";

interface StepOneProps {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

const StepOne = ({ value, onChange, onNext }: StepOneProps) => {
  return (
    <div className="space-y-8 animate-slide-in">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-green-dark">
          Etapa 1 de 3
        </h2>
        <p className="text-gray-600">
          Selecione o valor que você precisa
        </p>
      </div>

      <ValueSlider value={value} onChange={onChange} />

      <div className="flex justify-center">
        <Button
          onClick={onNext}
          className="bg-green-primary hover:bg-green-dark text-white px-8 py-3 rounded-lg font-semibold text-lg"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
