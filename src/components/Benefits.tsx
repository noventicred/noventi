
import { Shield, Clock, CreditCard, Users, Calculator, HeadphonesIcon } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Seus dados protegidos com criptografia de ponta e tecnologia bancária"
    },
    {
      icon: Clock,
      title: "Aprovação Rápida",
      description: "Resposta em até 5 minutos, sem burocracy desnecessária"
    },
    {
      icon: CreditCard,
      title: "Sem Consulta SPC",
      description: "Análise própria sem consulta aos órgãos de proteção ao crédito"
    },
    {
      icon: Calculator,
      title: "Taxa Competitiva",
      description: "A partir de 1,99% ao mês, uma das menores do mercado"
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Equipe especializada pronta para ajudar você"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte 24/7",
      description: "Atendimento disponível todos os dias da semana"
    }
  ];

  return (
    <section id="vantagens" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-dark mb-4">
            Por que escolher nosso empréstimo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos as melhores condições do mercado com total transparência e agilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-light rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-green-primary rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
