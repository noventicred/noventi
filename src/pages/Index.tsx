import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanForm from "@/components/LoanForm";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  CreditCard,
  AlertCircle,
  UserCheck,
  Home,
  Briefcase,
  Zap,
  Plus,
  Check,
  Clock,
  Lock,
  Menu,
  X,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.scrollToForm) {
      const element = document.getElementById("formulario");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      // Limpa o estado para evitar scrolls futuros indesejados
      navigate("/", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <Hero />
      <LoanForm />

      {/* Seção de Serviços */}
      <section className="py-10 xs:py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="block text-green-primary font-semibold tracking-wide mb-2 text-base sm:text-lg uppercase">
              Nossos Serviços
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-green-dark mb-4">
              O que a NoventiCred oferece?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {/* Card 1: Empréstimo Pessoal Online */}
            <div className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                Empréstimo Pessoal Online
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Dinheiro rápido na conta, com aprovação em minutos. Tudo feito
                de forma segura e sem sair de casa.
              </p>
            </div>
            {/* Card 2: Empréstimo para Negativado */}
            <div className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                Empréstimo para Negativado
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Mesmo com o nome no SPC ou Serasa, você pode ser aprovado.
                Análise personalizada, sem burocracia.
              </p>
            </div>
            {/* Card 3: Empréstimo para Aposentados */}
            <div className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                Empréstimo para Aposentados
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Dinheiro rápido na conta, com aprovação em minutos. Tudo feito
                de forma segura e sem sair de casa.
              </p>
            </div>
            {/* Card 4: Empréstimo com Garantia */}
            <div className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                Empréstimo com Garantia
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Use seu veículo ou imóvel como garantia e consiga valores
                maiores com as menores taxas do mercado.
              </p>
            </div>
            {/* Card 5: Empréstimo para Autônomos e MEIs */}
            <div className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                Empréstimo para Autônomos e MEIs
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Crédito acessível mesmo sem carteira assinada. Ideal para quem
                empreende ou trabalha por conta própria.
              </p>
            </div>
            {/* Card 6: Empréstimo para Urgência */}
            <div className="bg-gray-light rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                Empréstimo para Urgência
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Indicado para imprevistos e emergências. Liberação rápida e
                condições flexíveis para quem precisa de crédito imediato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre a NoventiCred - Design Premium Melhorado */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Imagem empresarial com efeitos melhorados */}
            <div className="flex-shrink-0 flex justify-center items-center w-full lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-primary to-green-dark rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                  alt="Equipe NoventiCred em reunião"
                  className="relative w-full max-w-lg h-80 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
                />
                {/* Badge decorativo */}
                <div className="absolute -top-4 -right-4 bg-green-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ✓ Confiável
                </div>
              </div>
            </div>

            {/* Conteúdo institucional melhorado */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-dark rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-primary rounded-full mr-2 animate-pulse"></span>
                  Especialistas em Crédito
                </div>

                <h2 className="text-4xl sm:text-6xl font-extrabold text-green-dark leading-tight">
                  Realize seus sonhos com a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-primary to-green-dark">
                    NoventiCred
                  </span>
                </h2>

                <p className="text-xl font-semibold text-green-primary mb-3">
                  Crédito rápido, seguro e feito para você.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                  Somos especialistas em transformar planos em conquistas. Com
                  atendimento humano, taxas justas e agilidade, ajudamos você a
                  tirar seus projetos do papel sem burocracia.
                </p>
              </div>

              {/* Cards de estatísticas melhorados */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-primary to-green-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-green-dark mb-1">
                      10+ anos
                    </span>
                    <span className="text-sm text-gray-600 leading-tight">
                      de experiência no mercado
                    </span>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-primary to-green-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-green-dark mb-1">
                      98% aprovação
                    </span>
                    <span className="text-sm text-gray-600 leading-tight">
                      clientes satisfeitos
                    </span>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-green-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-primary to-green-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <UserCheck className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-green-dark mb-1">
                      3h
                    </span>
                    <span className="text-sm text-gray-600 leading-tight">
                      dinheiro na conta
                    </span>
                  </div>
                </div>
              </div>

              {/* Botão CTA melhorado */}
              <div className="pt-4">
                <button className="group relative bg-gradient-to-r from-green-primary to-green-dark hover:from-green-dark hover:to-green-primary text-white font-bold rounded-2xl px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto">
                  <span>Simule seu crédito agora</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  {/* Efeito de brilho */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Taxas e Condições + Transparência total para sua escolha (unificadas) */}
      <section className="py-12 bg-gradient-to-br from-green-primary to-green-dark text-white">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="block text-green-100 font-semibold tracking-wide mb-2 text-base sm:text-lg uppercase">
              Taxas e Condições
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Transparência e Facilidade para Você
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Cards de Taxas e Condições */}
            <div className="flex items-center bg-white/10 border border-green-100/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Plus className="w-7 h-7 text-green-100" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Taxas a partir de 1,35% a.m.
                </h3>
                <p className="text-green-50 text-sm">
                  Taxas personalizadas conforme seu perfil e modalidade
                  escolhida.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/10 border border-green-100/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Check className="w-7 h-7 text-green-100" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Aprovação para Negativados
                </h3>
                <p className="text-green-50 text-sm">
                  Análise flexível, mesmo para quem está com restrição no CPF.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/10 border border-green-100/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-7 h-7 text-green-100" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Liberação Rápida
                </h3>
                <p className="text-green-50 text-sm">
                  Dinheiro na conta em até 3h após aprovação.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/10 border border-green-100/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-7 h-7 text-green-100" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Parcelamento Flexível
                </h3>
                <p className="text-green-50 text-sm">
                  Escolha o número de parcelas que cabe no seu bolso.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/10 border border-green-100/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/20 rounded-lg flex items-center justify-center mr-4">
                <Menu className="w-7 h-7 text-green-100" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Transparência Total
                </h3>
                <p className="text-green-50 text-sm">
                  Todas as condições são apresentadas antes da contratação.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/10 border border-green-100/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/20 rounded-lg flex items-center justify-center mr-4">
                <X className="w-7 h-7 text-green-100" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Quitação Antecipada
                </h3>
                <p className="text-green-50 text-sm">
                  Pague quando quiser, com desconto nos juros.
                </p>
              </div>
            </div>
          </div>

          {/* Transparência total para sua escolha */}
          <div className="w-full max-w-5xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white text-center mb-2">
              Transparência total para sua escolha
            </h2>
            <p className="text-green-100 text-center mb-8 text-base sm:text-lg">
              Veja as principais condições e exemplos antes de contratar
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
              {/* Prazo para pagar */}
              <div className="flex flex-col items-center flex-1">
                <Lock className="w-8 h-8 text-green-100 mb-2" />
                <span className="font-bold text-white text-lg">
                  Prazo para pagar
                </span>
                <span className="text-green-50 text-sm">de 6 a 64 meses</span>
              </div>
              {/* CET máximo */}
              <div className="flex flex-col items-center flex-1">
                <BarChart2 className="w-8 h-8 text-green-100 mb-2" />
                <span className="font-bold text-white text-lg">CET máximo</span>
                <span className="text-green-50 text-sm">18,5% ao ano</span>
              </div>
              {/* Pagamento mínimo */}
              <div className="flex flex-col items-center flex-1">
                <Clock className="w-8 h-8 text-green-100 mb-2" />
                <span className="font-bold text-white text-lg">
                  Pagamento mínimo
                </span>
                <span className="text-green-50 text-sm">
                  60 dias após contratação
                </span>
              </div>
            </div>
            <div className="bg-white/20 border border-green-100/20 rounded-xl px-4 py-5 mb-4 shadow-sm max-w-2xl mx-auto">
              <span className="block font-bold text-white mb-1">
                Exemplo prático
              </span>
              <span className="text-green-50 text-sm">
                Se você contratar <span className="font-bold">R$ 10.000</span>,
                pode pagar em 24 parcelas de{" "}
                <span className="font-bold">R$ 491,00</span>. O valor total pago
                será de <span className="font-bold">R$ 11.774,00</span>, com
                juros de 1,35% ao mês.
              </span>
            </div>
            <p className="text-xs text-green-50 text-center max-w-2xl mx-auto">
              Permitido apenas para empréstimos pessoais com pagamento integral
              em 60 dias ou mais. Consulte todas as condições antes de
              contratar.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
};

export default Index;
