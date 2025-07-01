import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPhone, validateEmail } from "@/utils/formatters";
import { ArrowLeft, Play } from "lucide-react";

interface StepThreeProps {
  data: {
    email: string;
    phone: string;
  };
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  onPrevious: () => void;
}

const StepThree = ({
  data,
  onChange,
  onSubmit,
  onPrevious,
}: StepThreeProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      const formatted = formatPhone(value);
      onChange("phone", formatted);

      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange("email", value);

    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!data.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!validateEmail(data.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "WhatsApp é obrigatório";
    } else if (data.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Número inválido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit();
  };

  return (
    <div className="space-y-8 animate-slide-in">
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-gray-700">
          Informe seus dados de contato
        </p>
      </div>

      <div className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={handleEmailChange}
            placeholder="seu@email.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">WhatsApp</Label>
          <Input
            id="phone"
            value={data.phone}
            onChange={handlePhoneChange}
            placeholder="(11) 99999-9999"
            inputMode="numeric"
            pattern="[0-9]*"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between max-w-md mx-auto">
        <Button
          onClick={onPrevious}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Button>

        <Button
          onClick={handleSubmit}
          className="bg-green-primary hover:bg-green-dark text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
        >
          <Play className="w-5 h-5" />
          <span>Fazer Simulação</span>
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
