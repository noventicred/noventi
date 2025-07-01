import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-primary rounded-lg mr-2 sm:mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg">$</span>
          </div>
          <span className="text-lg sm:text-2xl font-bold text-green-dark">
            EmpréstimoPro
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          <a
            href="#como-funciona"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#vantagens"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Vantagens
          </a>
          <a
            href="#contato"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Contato
          </a>
        </nav>

        <Button
          className="bg-green-primary hover:bg-green-dark text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
          onClick={() => {
            const element = document.getElementById("formulario");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="hidden sm:inline">Solicitar Agora</span>
          <span className="sm:hidden">Solicitar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
