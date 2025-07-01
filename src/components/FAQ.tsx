
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual o valor mínimo e máximo para empréstimo?",
      answer: "Você pode solicitar empréstimos de R$ 5.000 até R$ 200.000, dependendo da sua análise de crédito."
    },
    {
      question: "Quanto tempo demora para aprovação?",
      answer: "Nossa análise é feita em tempo real. Você recebe a resposta em até 5 minutos após enviar a solicitação."
    },
    {
      question: "Qual a taxa de juros?",
      answer: "Nossas taxas começam a partir de 1,99% ao mês, variando conforme seu perfil de crédito."
    },
    {
      question: "Preciso ter conta no banco?",
      answer: "Não é necessário. Trabalhamos com todos os bancos e você pode receber em qualquer conta de sua titularidade."
    },
    {
      question: "Consulta o SPC/Serasa?",
      answer: "Fazemos nossa própria análise de crédito, sem necessidade de consulta aos órgãos de proteção."
    },
    {
      question: "Como recebo o dinheiro?",
      answer: "Após aprovação, o valor é depositado diretamente na sua conta corrente no mesmo dia útil."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-dark mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nosso empréstimo pessoal
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-green-dark text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-primary" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
