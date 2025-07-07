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
        {/* Hero institucional melhorado */}
        <section className="py-24 bg-gradient-to-br from-green-primary via-green-dark to-green-primary text-white relative overflow-hidden">
          {/* Elementos decorativos de fundo */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                Conheça Nossa História
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
                Sobre a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">
                  NoventiCred
                </span>
              </h1>
              
              <p className="text-green-100 text-xl sm:text-2xl font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
                Transformando sonhos em conquistas financeiras com tecnologia,
                transparência e atendimento humano.
              </p>
            </div>

            {/* Grid de estatísticas melhorado */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 border border-white/20"
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 w-full">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-white/30 to-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    
                    <span className="block text-3xl lg:text-4xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </span>
                    
                    <span className="text-green-100 text-sm lg:text-base font-medium leading-tight">
                      {stat.label}
                    </span>
                  </div>
                  
                  {/* Decoração adicional */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Seção da imagem redesenhada */}
            <div className="mt-20 flex justify-center">
              <div className="relative group max-w-2xl">
                {/* Moldura com gradiente */}
                <div className="absolute -inset-6 bg-gradient-to-r from-white/30 via-green-100/30 to-white/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                    alt="Equipe NoventiCred trabalhando em escritório moderno"
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge sobre a imagem */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-primary to-green-dark text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl transform rotate-12 group-hover:rotate-6 transition-transform duration-300">
                    <span className="flex items-center gap-2">
                      ⭐ Empresa Confiável
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="text-center mt-16">
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Há mais de 10 anos ajudando brasileiros a realizarem seus sonhos com crédito responsável e atendimento humanizado.
              </p>
              
              <button className="group relative bg-white text-green-dark hover:bg-green-50 font-bold rounded-2xl px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                <span>Conheça Nossos Serviços</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
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
