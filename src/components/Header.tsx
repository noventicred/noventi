import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center justify-center w-full sm:w-auto">
          <img
            src="/LOGO.svg"
            alt="Logo NoventiCred"
            className="h-12 w-auto mr-2 sm:mr-3"
          />
          <span className="text-2xl sm:text-3xl font-extrabold text-green-dark">
            NoventiCred
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

        <div className="w-full sm:w-auto flex justify-center">
          <Button
            className="bg-green-primary hover:bg-green-dark text-white w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-base sm:text-lg"
            onClick={() => {
              const element = document.getElementById("formulario");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="hidden sm:inline">Solicitar Agora</span>
            <span className="sm:hidden">Solicitar</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
