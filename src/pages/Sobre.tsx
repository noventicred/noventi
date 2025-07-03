import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Briefcase,
  Shield,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-8 h-8 text-green-primary" />,
    value: "+10 anos",
    label: "de atuação",
  },
  {
    icon: <Users className="w-8 h-8 text-green-primary" />,
    value: "98%",
    label: "aprovação",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-primary" />,
    value: "+20 mil",
    label: "clientes atendidos",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-primary" />,
    value: "100%",
    label: "segurança",
  },
];

const Sobre = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero institucional */}
        <section className="py-20 bg-gradient-to-br from-green-primary to-green-dark text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                Sobre a NoventiCred
              </h1>
              <p className="text-green-100 text-lg sm:text-2xl font-medium mb-6 max-w-2xl">
                Transformando sonhos em conquistas financeiras com tecnologia,
                transparência e atendimento humano.
              </p>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 rounded-xl px-6 py-4 flex flex-col items-center min-w-[120px] shadow-md hover:scale-105 transition-all duration-300"
                  >
                    {stat.icon}
                    <span className="text-2xl font-bold text-white mt-2">
                      {stat.value}
                    </span>
                    <span className="text-green-100 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-green-100 bg-white/10">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                  alt="Equipe NoventiCred"
                  className="w-full max-w-md h-80 object-cover"
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-green-100/20 blur-2xl z-0" />
            </div>
          </div>
        </section>
        {/* Nossa História */}
        <section className="py-16 bg-white border-b border-green-100 animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-green-dark">
                Nossa História
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Fundada em 2013, a NoventiCred nasceu com o propósito de
                democratizar o acesso ao crédito no Brasil. Ao longo dos anos,
                crescemos, inovamos e nos tornamos referência em soluções
                financeiras digitais, sempre colocando o cliente no centro de
                tudo.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="flex-1 flex flex-col items-center">
                <span className="text-green-primary text-4xl font-extrabold mb-2">
                  2013
                </span>
                <p className="text-gray-600 text-center">
                  Fundação da NoventiCred e início das operações em São Paulo.
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <span className="text-green-primary text-4xl font-extrabold mb-2">
                  2017
                </span>
                <p className="text-gray-600 text-center">
                  Primeiro milhão em créditos concedidos e expansão para todo o
                  Brasil.
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <span className="text-green-primary text-4xl font-extrabold mb-2">
                  2021
                </span>
                <p className="text-gray-600 text-center">
                  Reconhecimento nacional em inovação financeira e atendimento
                  ao cliente.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Diferenciais */}
        <section className="py-16 bg-gradient-to-br from-green-primary to-green-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
                Nossos Diferenciais
              </h2>
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                Por que milhares de brasileiros escolhem a NoventiCred todos os
                dias?
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Shield className="w-12 h-12 mb-4 text-green-100" />
                <h3 className="font-bold text-xl mb-2">Segurança Total</h3>
                <p className="text-green-50 text-base">
                  Tecnologia bancária de ponta e criptografia avançada.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Users className="w-12 h-12 mb-4 text-green-100" />
                <h3 className="font-bold text-xl mb-2">
                  Atendimento Humanizado
                </h3>
                <p className="text-green-50 text-base">
                  Equipe pronta para ajudar, com empatia e agilidade.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Award className="w-12 h-12 mb-4 text-green-100" />
                <h3 className="font-bold text-xl mb-2">Inovação</h3>
                <p className="text-green-50 text-base">
                  Soluções digitais, contratação 100% online e rápida aprovação.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Briefcase className="w-12 h-12 mb-4 text-green-100" />
                <h3 className="font-bold text-xl mb-2">Transparência</h3>
                <p className="text-green-50 text-base">
                  Sem letras miúdas, taxas e condições sempre claras.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Compromisso com o Cliente */}
        <section className="py-16 bg-white border-b border-green-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-green-dark">
                Compromisso com o Cliente
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Acreditamos que crédito é uma ferramenta de transformação. Por
                isso, nosso compromisso é com a ética, a educação financeira e o
                respeito em todas as etapas do relacionamento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Shield className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Ética e Respeito
                </h3>
                <p className="text-gray-600 text-base">
                  Atuamos com responsabilidade, honestidade e foco no bem-estar
                  do cliente.
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Award className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Educação Financeira
                </h3>
                <p className="text-gray-600 text-base">
                  Conteúdo, dicas e suporte para você tomar as melhores
                  decisões.
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Users className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Foco no Cliente
                </h3>
                <p className="text-gray-600 text-base">
                  Soluções personalizadas e atendimento próximo em todas as
                  etapas.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Responsabilidade Social */}
        <section className="py-16 bg-gradient-to-br from-green-primary to-green-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
                Responsabilidade Social
              </h2>
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                A NoventiCred acredita em um futuro mais justo e sustentável.
                Por isso, apoia projetos de inclusão financeira, educação e
                sustentabilidade.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-xl mb-2 text-white">
                  Inclusão Financeira
                </h3>
                <p className="text-green-50 text-base">
                  Parcerias com ONGs e projetos para levar crédito a quem mais
                  precisa.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-xl mb-2 text-white">Educação</h3>
                <p className="text-green-50 text-base">
                  Ações e conteúdos para promover a educação financeira em
                  comunidades.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-xl mb-2 text-white">
                  Sustentabilidade
                </h3>
                <p className="text-green-50 text-base">
                  Compromisso com práticas sustentáveis e redução do impacto
                  ambiental.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA final */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-green-dark">
              Pronto para transformar sua vida financeira?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
              Simule seu crédito agora mesmo e descubra as melhores condições
              para realizar seus sonhos com a NoventiCred.
            </p>
            <a
              href="/"
              className="inline-block bg-gradient-to-br from-green-primary to-green-dark text-white font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Simular Crédito
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
