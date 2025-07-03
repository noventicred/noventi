import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
  import {
    CreditCard,
    AlertCircle,
    UserCheck,
    Home,
    Briefcase,
    Zap,
    Calculator,
    ArrowRight,
    Clock,
    TrendingDown,
    Headphones,
    Smartphone,
    Shield,
    Settings,
  } from "lucide-react";

const TiposEmprestimos = () => {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [installments, setInstallments] = useState(24);
  const location = useLocation();
  const navigate = useNavigate();

  // Função para calcular a parcela
  const calculateInstallment = (
    amount: number,
    months: number,
    rate: number = 0.0135
  ) => {
    const monthlyRate = rate;
    const installmentValue =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return installmentValue;
  };

  const monthlyPayment = calculateInstallment(loanAmount, installments);
  const totalAmount = monthlyPayment * installments;

  const handleSolicitarAgora = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("formulario");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToForm: true } });
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Modalidades de Empréstimos */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white border-b border-green-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <span className="block text-green-primary font-semibold tracking-wide mb-2 text-sm sm:text-base lg:text-lg uppercase">
                Nossas Modalidades
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 text-green-dark leading-tight">
                Crédito sob medida para cada necessidade
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-2 max-w-2xl mx-auto">
                Escolha entre nossas modalidades de empréstimo e encontre a
                solução ideal para seus objetivos financeiros.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Empréstimo Pessoal */}
              <div className="bg-gray-light rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <CreditCard className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                  Empréstimo Pessoal Online
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  Dinheiro rápido na conta, com aprovação em minutos. Processo
                  100% digital, sem burocracia e com taxas personalizadas.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-xs sm:text-sm mb-2 space-y-1">
                  <li>Sem garantia</li>
                  <li>Parcelamento flexível</li>
                  <li>Liberação em até 24h</li>
                  <li>Valores até R$ 100.000</li>
                </ul>
              </div>

              {/* Empréstimo para Negativado */}
              <div className="bg-gray-light rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <AlertCircle className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                  Empréstimo para Negativado
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  Mesmo com restrição no nome, você pode ser aprovado. Análise
                  personalizada e sem consulta ao SPC/Serasa.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-xs sm:text-sm mb-2 space-y-1">
                  <li>Sem consulta ao SPC/Serasa</li>
                  <li>Análise flexível</li>
                  <li>Atendimento humanizado</li>
                  <li>Aprovação em até 3h</li>
                </ul>
              </div>

              {/* Empréstimo para Aposentados */}
              <div className="bg-gray-light rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <UserCheck className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                  Empréstimo para Aposentados
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  Condições especiais para aposentados e pensionistas.
                  Facilidade na aprovação e taxas reduzidas.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-xs sm:text-sm mb-2 space-y-1">
                  <li>Taxas reduzidas</li>
                  <li>Parcelamento em até 72x</li>
                  <li>Sem burocracia</li>
                  <li>Desconto direto no benefício</li>
                </ul>
              </div>

              {/* Empréstimo com Garantia */}
              <div className="bg-gray-light rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Home className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                  Empréstimo com Garantia
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  Use seu veículo ou imóvel como garantia e consiga valores
                  maiores com as menores taxas do mercado.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-xs sm:text-sm mb-2 space-y-1">
                  <li>Valores altos</li>
                  <li>Taxas a partir de 1,35% a.m.</li>
                  <li>Parcelamento longo</li>
                  <li>Até 80% do valor do bem</li>
                </ul>
              </div>

              {/* Empréstimo para Autônomos e MEIs */}
              <div className="bg-gray-light rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Briefcase className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                  Empréstimo para Autônomos e MEIs
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  Crédito acessível mesmo sem carteira assinada. Ideal para quem
                  empreende ou trabalha por conta própria.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-xs sm:text-sm mb-2 space-y-1">
                  <li>Sem comprovação de renda formal</li>
                  <li>Processo digital</li>
                  <li>Atendimento especializado</li>
                  <li>Análise de movimentação bancária</li>
                </ul>
              </div>

              {/* Empréstimo para Urgência */}
              <div className="bg-gray-light rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col items-start shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-green-100">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-dark mb-2">
                  Empréstimo para Urgência
                </h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                  Indicado para imprevistos e emergências. Liberação rápida e
                  condições flexíveis para quem precisa de crédito imediato.
                </p>
                <ul className="list-disc pl-4 sm:pl-5 text-gray-600 text-xs sm:text-sm mb-2 space-y-1">
                  <li>Liberação em até 24h</li>
                  <li>Parcelamento flexível</li>
                  <li>Sem burocracia</li>
                  <li>Aprovação expressa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Simulador */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white border-b border-green-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-14">
              <span className="block text-green-primary font-semibold tracking-wide mb-2 text-sm sm:text-base lg:text-lg uppercase">
                Simulador de Empréstimo
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 text-green-dark">
                Simule Suas Condições
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Use nossa calculadora gratuita para simular seu empréstimo e
                descobrir as melhores condições.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl max-w-2xl w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-dark mb-4 sm:mb-6 text-center">
                  Simulador Interativo
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {/* Controle de Valor */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Valor desejado:
                    </label>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">
                        R$ 5.000
                      </span>
                      <input
                        type="range"
                        min="5000"
                        max="100000"
                        step="1000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="flex-1 h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #16a34a 0%, #16a34a ${
                            ((loanAmount - 5000) / (100000 - 5000)) * 100
                          }%, #bbf7d0 ${
                            ((loanAmount - 5000) / (100000 - 5000)) * 100
                          }%, #bbf7d0 100%)`,
                        }}
                      />
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">
                        R$ 100.000
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-primary">
                        R$ {loanAmount.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  </div>

                  {/* Controle de Parcelas */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Número de parcelas:
                    </label>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">
                        6x
                      </span>
                      <input
                        type="range"
                        min="6"
                        max="64"
                        step="6"
                        value={installments}
                        onChange={(e) =>
                          setInstallments(Number(e.target.value))
                        }
                        className="flex-1 h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #16a34a 0%, #16a34a ${
                            ((installments - 6) / (64 - 6)) * 100
                          }%, #bbf7d0 ${
                            ((installments - 6) / (64 - 6)) * 100
                          }%, #bbf7d0 100%)`,
                        }}
                      />
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">
                        64x
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-primary">
                        {installments}x
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      Valor da parcela:
                    </span>
                    <span className="text-base sm:text-lg lg:text-2xl font-bold text-green-primary">
                      R${" "}
                      {monthlyPayment.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      Total a pagar:
                    </span>
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-700">
                      R${" "}
                      {totalAmount.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center bg-green-primary rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm text-white">
                    <span className="font-medium text-sm sm:text-base">
                      Taxa aplicada:
                    </span>
                    <span className="text-base sm:text-lg lg:text-2xl font-bold">
                      1,35% a.m.
                    </span>
                  </div>
                </div>
                <button
                  className="w-full bg-green-primary hover:bg-green-dark text-white font-bold rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg shadow-lg hover:scale-105 transition-all duration-300 mt-4 sm:mt-6 flex items-center justify-center gap-2"
                  onClick={handleSolicitarAgora}
                >
                  <Calculator className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                  Solicitar Agora
                  <ArrowRight className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-r from-green-primary to-green-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4">
              Realize seus sonhos hoje mesmo!
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-green-100 leading-relaxed">
              Não perca mais tempo. Solicite seu empréstimo agora e tenha o
              dinheiro na sua conta em até 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 max-w-md sm:max-w-none mx-auto">
              <button
                className="bg-white text-green-primary hover:bg-green-50 font-bold rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={handleSolicitarAgora}
              >
                <CreditCard className="w-4 sm:w-5 h-4 sm:h-5" />
                Solicitar Empréstimo
              </button>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-green-primary font-bold rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={handleSolicitarAgora}
              >
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5" />
                Simular Condições
              </button>
            </div>
            <p className="text-xs sm:text-sm text-green-100 mt-4 sm:mt-6">
              Sem compromisso • Resposta em minutos • 100% seguro
            </p>
          </div>
        </section>

        {/* Vantagens da NoventiCred */}
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-green-50 to-green-100 border-b border-green-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-3 sm:mb-4 text-green-dark leading-tight">
                Por que escolher a NoventiCred?
              </h2>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Mais de 50.000 clientes confiam em nossa experiência e qualidade
                no mercado de crédito.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Aprovação Rápida */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  Aprovação em Minutos
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Análise automatizada e resposta rápida. Seu dinheiro na conta
                  em até 24 horas.
                </p>
              </div>

              {/* Taxas Competitivas */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingDown className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  Taxas Competitivas
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  As melhores taxas do mercado, personalizadas de acordo com seu
                  perfil de crédito.
                </p>
              </div>

              {/* Atendimento 24h */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Headphones className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  Atendimento 24h
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Suporte especializado disponível todos os dias, para tirar
                  suas dúvidas.
                </p>
              </div>

              {/* Processo Digital */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Smartphone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  100% Digital
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Todo o processo online, sem papelada e sem sair de casa.
                  Simples e rápido.
                </p>
              </div>

              {/* Segurança */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  Máxima Segurança
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Seus dados protegidos com criptografia bancária e certificação
                  SSL.
                </p>
              </div>

              {/* Flexibilidade */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Settings className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-green-dark mb-2">
                  Flexibilidade Total
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Parcelas que cabem no seu bolso e condições personalizadas
                  para seu perfil.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TiposEmprestimos;
