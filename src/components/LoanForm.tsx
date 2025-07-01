import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const LoanForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loanValue, setLoanValue] = useState(50000);
  const [personalData, setPersonalData] = useState({
    firstName: '',
    lastName: '',
    cpf: ''
  });
  const [contactData, setContactData] = useState({
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handlePersonalDataChange = (field: string, value: string) => {
    setPersonalData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactDataChange = (field: string, value: string) => {
    setContactData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Navegar para tela de carregamento passando todos os dados
    navigate('/analise', { 
      state: { 
        loanValue, 
        personalData, 
        contactData 
      } 
    });
  };

  const renderProgressBar = () => {
    const progress = (currentStep / 3) * 100;
    
    return (
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-primary h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span className={currentStep >= 1 ? 'text-green-primary font-medium' : ''}>
            Valor
          </span>
          <span className={currentStep >= 2 ? 'text-green-primary font-medium' : ''}>
            Dados Pessoais
          </span>
          <span className={currentStep >= 3 ? 'text-green-primary font-medium' : ''}>
            Contato
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="formulario" className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {renderProgressBar()}
            
            {currentStep === 1 && (
              <StepOne
                value={loanValue}
                onChange={setLoanValue}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <StepTwo
                data={personalData}
                onChange={handlePersonalDataChange}
                onNext={() => setCurrentStep(3)}
                onPrevious={() => setCurrentStep(1)}
              />
            )}

            {currentStep === 3 && (
              <StepThree
                data={contactData}
                onChange={handleContactDataChange}
                onSubmit={handleSubmit}
                onPrevious={() => setCurrentStep(2)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanForm;
