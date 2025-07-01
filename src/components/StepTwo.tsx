import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCPF, validateCPF } from "@/utils/formatters";
import { ArrowLeft } from "lucide-react";

interface StepTwoProps {
  data: {
    firstName: string;
    lastName: string;
    cpf: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const StepTwo = ({ data, onChange, onNext, onPrevious }: StepTwoProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatCPF(value);
    onChange("cpf", formatted);

    if (errors.cpf) {
      setErrors((prev) => ({ ...prev, cpf: "" }));
    }
  };

  const handleNameChange = (field: "firstName" | "lastName", value: string) => {
    // Remove números automaticamente
    const onlyLetters = value.replace(/[0-9]/g, "");
    onChange(field, onlyLetters);
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "Nome é obrigatório";
    } else if (/[0-9]/.test(data.firstName)) {
      newErrors.firstName = "Não use números no nome";
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = "Sobrenome é obrigatório";
    } else if (/[0-9]/.test(data.lastName)) {
      newErrors.lastName = "Não use números no sobrenome";
    }

    if (!data.cpf.trim()) {
      newErrors.cpf = "CPF é obrigatório";
    } else if (!validateCPF(data.cpf)) {
      newErrors.cpf = "CPF inválido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="space-y-8 animate-slide-in">
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-gray-700">
          Informe seus dados pessoais
        </p>
      </div>

      <div className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => handleNameChange("firstName", e.target.value)}
            placeholder="Digite seu nome"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => handleNameChange("lastName", e.target.value)}
            placeholder="Digite seu sobrenome"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            value={data.cpf}
            onChange={handleCPFChange}
            placeholder="000.000.000-00"
            maxLength={14}
            inputMode="numeric"
            pattern="[0-9]*"
            className={errors.cpf ? "border-red-500" : ""}
          />
          {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
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
          className="bg-green-primary hover:bg-green-dark text-white px-8 py-3 rounded-lg font-semibold"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
