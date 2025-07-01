
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-primary to-green-dark text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Empréstimo Pessoal
                <span className="block text-white/90">Rápido e Seguro</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Realize seus sonhos com o empréstimo pessoal mais ágil do mercado. 
                Taxa competitiva, aprovação em minutos e dinheiro na conta no mesmo dia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Taxa a partir de 1,99% a.m.</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">Aprovação em 5 minutos</span>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-green-dark hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-bold shadow-lg w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('formulario');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Empréstimo
            </Button>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Principais Vantagens:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">100% Online e Seguro</h4>
                    <p className="text-white/80 text-sm">Processo totalmente digital com máxima segurança</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Aprovação Instantânea</h4>
                    <p className="text-white/80 text-sm">Resposta em até 5 minutos após envio</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Sem Consulta ao SPC/Serasa</h4>
                    <p className="text-white/80 text-sm">Análise própria sem consulta aos órgãos de proteção</p>
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
