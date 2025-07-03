import {
  Shield,
  Clock,
  CreditCard,
  Users,
  Calculator,
  Headphones,
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Seguro",
      description:
        "Seus dados protegidos com criptografia de ponta e tecnologia bancária",
    },
    {
      icon: Clock,
      title: "Aprovação Rápida",
      description: "Resposta em até 5 minutos, sem burocracy desnecessária",
    },
    {
      icon: CreditCard,
      title: "Sem Consulta SPC",
      description:
        "Análise própria sem consulta aos órgãos de proteção ao crédito",
    },
    {
      icon: Calculator,
      title: "Taxa Competitiva",
      description: "A partir de 1,99% ao mês, uma das menores do mercado",
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Equipe especializada pronta para ajudar você",
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento disponível todos os dias da semana",
    },
  ];

  return (
    <section id="vantagens" className="py-8 xs:py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-green-dark mb-2 xs:mb-3 sm:mb-4">
            Por que escolher nosso empréstimo?
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 xs:px-4">
            Oferecemos as melhores condições do mercado com total transparência
            e agilidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
