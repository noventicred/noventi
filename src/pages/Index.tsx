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

const Index = () => {
  return (
    <div className="min-h-screen">
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

      {/* Seção Sobre a NoventiCred - institucional premium alinhada ao grid, copy e UX/UI aprimorados */}
      <section className="py-20 bg-white border-b border-green-100 animate-fade-in">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Imagem empresarial */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
              alt="Equipe NoventiCred em reunião"
              className="w-full max-w-md h-72 object-cover rounded-2xl shadow-xl bg-white"
            />
          </div>
          {/* Conteúdo institucional */}
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 text-green-dark leading-tight">
              Realize seus sonhos com a{" "}
              <span className="text-green-primary">NoventiCred</span>
            </h2>
            <p className="text-green-primary text-lg font-semibold mb-2">
              Crédito rápido, seguro e feito para você.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-7 max-w-xl">
              Somos especialistas em transformar planos em conquistas. Com
              atendimento humano, taxas justas e agilidade, ajudamos você a
              tirar seus projetos do papel sem burocracia.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex flex-col items-center min-w-[100px] bg-green-50 rounded-xl py-4 px-3 shadow-sm">
                <Clock className="w-9 h-9 text-green-primary mb-1" />
                <span className="text-xl font-bold text-green-dark">
                  10+ anos
                </span>
                <span className="text-xs text-gray-600 text-center">
                  de experiência no mercado
                </span>
              </div>
              <div className="flex flex-col items-center min-w-[100px] bg-green-50 rounded-xl py-4 px-3 shadow-sm">
                <CheckCircle2 className="w-9 h-9 text-green-primary mb-1" />
                <span className="text-xl font-bold text-green-dark">
                  98% aprovação
                </span>
                <span className="text-xs text-gray-600 text-center">
                  clientes satisfeitos
                </span>
              </div>
              <div className="flex flex-col items-center min-w-[100px] bg-green-50 rounded-xl py-4 px-3 shadow-sm">
                <UserCheck className="w-9 h-9 text-green-primary mb-1" />
                <span className="text-xl font-bold text-green-dark">3h</span>
                <span className="text-xs text-gray-600 text-center">
                  dinheiro na conta
                </span>
              </div>
            </div>
            <button className="bg-green-primary hover:bg-green-dark text-white font-semibold rounded-xl px-8 py-3 text-base shadow-md transition-colors flex items-center gap-2 w-full sm:w-fit group">
              Simule seu crédito agora
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

      {/* Seção Taxas e Condições */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="block text-green-primary font-semibold tracking-wide mb-2 text-base sm:text-lg uppercase">
              Taxas e Condições
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-green-dark mb-4">
              Transparência e Facilidade para Você
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex items-center bg-white border border-green-primary/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Plus className="w-7 h-7 text-green-primary" />
              </div>
              <div>
                <h3 className="font-bold text-green-dark text-lg mb-1">
                  Taxas a partir de 1,35% a.m.
                </h3>
                <p className="text-gray-700 text-sm">
                  Taxas personalizadas conforme seu perfil e modalidade
                  escolhida.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center bg-white border border-green-primary/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Check className="w-7 h-7 text-green-primary" />
              </div>
              <div>
                <h3 className="font-bold text-green-dark text-lg mb-1">
                  Aprovação para Negativados
                </h3>
                <p className="text-gray-700 text-sm">
                  Análise flexível, mesmo para quem está com restrição no CPF.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-center bg-white border border-green-primary/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-7 h-7 text-green-primary" />
              </div>
              <div>
                <h3 className="font-bold text-green-dark text-lg mb-1">
                  Liberação Rápida
                </h3>
                <p className="text-gray-700 text-sm">
                  Dinheiro na conta em até 24h após aprovação.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex items-center bg-white border border-green-primary/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-7 h-7 text-green-primary" />
              </div>
              <div>
                <h3 className="font-bold text-green-dark text-lg mb-1">
                  Parcelamento Flexível
                </h3>
                <p className="text-gray-700 text-sm">
                  Escolha o número de parcelas que cabe no seu bolso.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="flex items-center bg-white border border-green-primary/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Menu className="w-7 h-7 text-green-primary" />
              </div>
              <div>
                <h3 className="font-bold text-green-dark text-lg mb-1">
                  Transparência Total
                </h3>
                <p className="text-gray-700 text-sm">
                  Todas as condições são apresentadas antes da contratação.
                </p>
              </div>
            </div>
            {/* Card 6 */}
            <div className="flex items-center bg-white border border-green-primary/30 rounded-2xl shadow-sm p-5 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-primary/10 rounded-lg flex items-center justify-center mr-4">
                <X className="w-7 h-7 text-green-primary" />
              </div>
              <div>
                <h3 className="font-bold text-green-dark text-lg mb-1">
                  Quitação Antecipada
                </h3>
                <p className="text-gray-700 text-sm">
                  Pague quando quiser, com desconto nos juros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Transparência total para sua escolha */}
      <section className="py-12 bg-green-50 flex justify-center">
        <div className="w-full max-w-5xl px-2 xs:px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-green-dark text-center mb-2">
            Transparência total para sua escolha
          </h2>
          <p className="text-green-primary text-center mb-8 text-base sm:text-lg">
            Veja as principais condições e exemplos antes de contratar
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
            {/* Prazo para pagar */}
            <div className="flex flex-col items-center flex-1">
              <Lock className="w-8 h-8 text-green-primary mb-2" />
              <span className="font-bold text-green-dark text-lg">
                Prazo para pagar
              </span>
              <span className="text-gray-700 text-sm">de 6 a 64 meses</span>
            </div>
            {/* CET máximo */}
            <div className="flex flex-col items-center flex-1">
              <BarChart2 className="w-8 h-8 text-green-primary mb-2" />
              <span className="font-bold text-green-dark text-lg">
                CET máximo
              </span>
              <span className="text-gray-700 text-sm">18,5% ao ano</span>
            </div>
            {/* Pagamento mínimo */}
            <div className="flex flex-col items-center flex-1">
              <Clock className="w-8 h-8 text-green-primary mb-2" />
              <span className="font-bold text-green-dark text-lg">
                Pagamento mínimo
              </span>
              <span className="text-gray-700 text-sm">
                60 dias após contratação
              </span>
            </div>
          </div>
          <div className="bg-white/80 border border-green-primary/20 rounded-xl px-4 py-5 mb-4 shadow-sm max-w-2xl mx-auto">
            <span className="block font-bold text-green-dark mb-1">
              Exemplo prático
            </span>
            <span className="text-gray-700 text-sm">
              Se você contratar <span className="font-bold">R$ 10.000</span>,
              pode pagar em 24 parcelas de{" "}
              <span className="font-bold">R$ 491,00</span>. O valor total pago
              será de <span className="font-bold">R$ 11.774,00</span>, com juros
              de 1,35% ao mês.
            </span>
          </div>
          <p className="text-xs text-gray-600 text-center max-w-2xl mx-auto">
            Permitido apenas para empréstimos pessoais com pagamento integral em
            60 dias ou mais. Consulte todas as condições antes de contratar.
          </p>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
