import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contato = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-green-primary to-green-dark text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
              Entre em Contato
            </h1>
            <p className="text-green-100 text-lg sm:text-2xl font-medium mb-6 max-w-2xl mx-auto">
              Estamos aqui para ajudar você. Fale conosco e tire suas dúvidas
              sobre nossos serviços.
            </p>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="py-16 bg-white border-b border-green-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-green-dark">
                Nossos Canais de Atendimento
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Escolha o canal que preferir para falar conosco. Nossa equipe
                está pronta para ajudar você.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Endereço */}
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <MapPin className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Endereço
                </h3>
                <p className="text-gray-600 text-base">
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                  <br />
                  CEP: 01310-100
                </p>
              </div>

              {/* Telefone */}
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Phone className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Telefone
                </h3>
                <p className="text-gray-600 text-base">
                  (11) 3333-4444
                  <br />
                  0800 123 4567
                  <br />
                  (ligação gratuita)
                </p>
              </div>

              {/* Email */}
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Mail className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Email
                </h3>
                <p className="text-gray-600 text-base">
                  contato@noventicred.com.br
                  <br />
                  comercial@noventicred.com.br
                </p>
              </div>

              {/* Horário */}
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300">
                <Clock className="w-12 h-12 mb-4 text-green-primary" />
                <h3 className="font-bold text-xl mb-2 text-green-dark">
                  Horário
                </h3>
                <p className="text-gray-600 text-base">
                  Segunda à Sexta:
                  <br />
                  08:00 às 18:00
                  <br />
                  Sábado: 08:00 às 12:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Atendimento */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 text-green-dark">
                Atendimento Personalizado
              </h2>
              <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
                Nossa equipe está pronta para oferecer a melhor experiência em
                crédito. Entre em contato e descubra como podemos ajudar você.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="w-12 h-12 mb-4 text-green-primary mx-auto" />
                  <h3 className="font-bold text-xl mb-2 text-green-dark">
                    Atendimento Rápido
                  </h3>
                  <p className="text-gray-600 text-base">
                    Resposta em até 24h para todas as suas dúvidas sobre
                    empréstimos e financiamentos.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="w-12 h-12 mb-4 text-green-primary mx-auto" />
                  <h3 className="font-bold text-xl mb-2 text-green-dark">
                    Suporte Especializado
                  </h3>
                  <p className="text-gray-600 text-base">
                    Consultores especializados para ajudar você a encontrar a
                    melhor solução de crédito.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Clock className="w-12 h-12 mb-4 text-green-primary mx-auto" />
                  <h3 className="font-bold text-xl mb-2 text-green-dark">
                    Horário Flexível
                  </h3>
                  <p className="text-gray-600 text-base">
                    Atendimento de segunda a sábado para sua maior comodidade e
                    conveniência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-br from-green-primary to-green-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
              Precisa de Crédito Rápido?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Não espere mais! Simule seu empréstimo agora mesmo e tenha o
              dinheiro na sua conta em poucas horas.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-white text-green-primary hover:bg-green-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Simular Empréstimo
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contato;
