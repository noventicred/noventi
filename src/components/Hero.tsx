import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-primary to-green-dark text-white py-8 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Empréstimo Pessoal
                <span className="block text-white/90">
                  Rápido, Seguro e Sem Burocracia
                </span>
              </h1>
              <p className="text-base xs:text-lg sm:text-xl text-white/90 leading-relaxed">
                Conquiste seus objetivos com facilidade: solicite seu empréstimo
                em poucos cliques, tenha resposta em menos de 1 minuto e
                aproveite uma das maiores taxas de aprovação do Brasil. Dinheiro
                rápido, sem complicação e direto na sua conta.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-white text-green-dark hover:bg-gray-100 text-base xs:text-lg sm:text-xl px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 rounded-xl font-bold shadow-lg w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("formulario");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar Empréstimo
            </Button>
          </div>

          <div className="lg:pl-12 mt-2 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 space-y-4 sm:space-y-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-3 xs:mb-4 sm:mb-5">
                Principais Vantagens:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      100% Online e Seguro
                    </h4>
                    <p className="text-white/80 text-sm">
                      Processo totalmente digital com máxima segurança
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      Aprovação Instantânea
                    </h4>
                    <p className="text-white/80 text-sm">
                      Resposta em menos de 1 minuto após envio dos seus dados
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      Sem Consulta ao SPC/Serasa
                    </h4>
                    <p className="text-white/80 text-sm">
                      Análise própria sem consulta aos órgãos de proteção
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
