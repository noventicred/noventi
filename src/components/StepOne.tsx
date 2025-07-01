
import { Button } from "@/components/ui/button";
import ValueSlider from "./ValueSlider";

interface StepOneProps {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

const StepOne = ({ value, onChange, onNext }: StepOneProps) => {
  return (
    <div>
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
