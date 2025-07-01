
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-primary rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <span className="text-2xl font-bold">EmpréstimoPro</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Sua solução em empréstimos pessoais com as melhores condições do mercado.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Produtos</h3>
            <ul className="space-y-2 text-white/80">
              <li>Empréstimo Pessoal</li>
              <li>Crédito Consignado</li>
              <li>Refinanciamento</li>
              <li>Antecipação do 13º</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Empresa</h3>
            <ul className="space-y-2 text-white/80">
              <li>Sobre Nós</li>
              <li>Como Funciona</li>
              <li>Segurança</li>
              <li>Termos de Uso</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-primary" />
                <span className="text-white/80">(11) 4000-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-primary" />
                <span className="text-white/80">contato@emprestimopro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-primary" />
                <span className="text-white/80">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 EmpréstimoPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
