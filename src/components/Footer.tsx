import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="bg-green-dark text-white py-6 xs:py-8 sm:py-12"
    >
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center">
              <img
                src="/LOGO.svg"
                alt="Logo NoventiCred"
                className="h-10 w-auto mr-2 sm:mr-3"
              />
              <span className="text-xl sm:text-2xl font-bold">NoventiCred</span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              Sua solução em empréstimos pessoais com as melhores condições do
              mercado.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Produtos</h3>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li>Empréstimo Pessoal</li>
              <li>Crédito Consignado</li>
              <li>Refinanciamento</li>
              <li>Antecipação do 13º</li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Empresa</h3>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li>
                <a href="/sobre" className="hover:text-green-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/tipos-emprestimos" className="hover:text-green-primary transition-colors">
                  Tipos de Empréstimos
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-green-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-green-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-primary flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">
                  (11) 4000-1234
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-primary flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base break-all">
                  contato@noventicred.com
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-primary flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">
                  São Paulo, SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-4 xs:mt-6 sm:mt-8 pt-4 xs:pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs xs:text-sm sm:text-base">
            © 2025 NoventiCred. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
