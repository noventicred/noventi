import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/LOGO.svg"
                alt="Logo NoventiCred"
                className="h-12 w-auto mr-2 sm:mr-3"
              />
              <span className="text-2xl sm:text-3xl font-extrabold text-green-dark">
                NoventiCred
              </span>
            </a>
          </div>
          {/* Botão Menu Mobile ao lado da logo */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-green-primary hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-primary ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <MenuIcon className="w-7 h-7" />
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a
            href="/"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Home
          </a>
          <a
            href="/sobre"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Sobre
          </a>
          <a
            href="/tipos-emprestimos"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Tipos de Empréstimos
          </a>
          <a
            href="/faq"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contato"
            className="text-gray-600 hover:text-green-dark transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Drawer Mobile */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu lateral */}
            <nav className="relative ml-auto w-80 max-w-full h-full bg-white shadow-2xl rounded-l-3xl flex flex-col px-0 py-0 animate-slide-fade-in border-l border-green-100">
              {/* Topo: Logo e botão fechar */}
              <div className="flex items-center justify-between px-7 pt-7 pb-2">
                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    onClick={() => setMobileOpen(false)}
                  >
                    <img
                      src="/LOGO.svg"
                      alt="Logo NoventiCred"
                      className="h-10 w-auto"
                    />
                    <span className="text-xl font-extrabold text-green-dark">
                      NoventiCred
                    </span>
                  </a>
                </div>
                <button
                  className="text-green-primary hover:bg-green-50 rounded-full p-2 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Fechar menu"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
              {/* Links do menu */}
              <div className="flex flex-col gap-2 px-4 mt-2 mb-4">
                <a
                  href="/"
                  className="text-lg md:text-xl text-green-dark font-semibold rounded-lg px-4 py-4 text-left hover:bg-green-50 hover:text-green-primary transition-colors focus:bg-green-100 focus:text-green-dark outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/sobre"
                  className="text-lg md:text-xl text-green-dark font-semibold rounded-lg px-4 py-4 text-left hover:bg-green-50 hover:text-green-primary transition-colors focus:bg-green-100 focus:text-green-dark outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="/tipos-emprestimos"
                  className="text-lg md:text-xl text-green-dark font-semibold rounded-lg px-4 py-4 text-left hover:bg-green-50 hover:text-green-primary transition-colors focus:bg-green-100 focus:text-green-dark outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  Tipos de Empréstimos
                </a>
                <a
                  href="/faq"
                  className="text-lg md:text-xl text-green-dark font-semibold rounded-lg px-4 py-4 text-left hover:bg-green-50 hover:text-green-primary transition-colors focus:bg-green-100 focus:text-green-dark outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="#contato"
                  className="text-lg md:text-xl text-green-dark font-semibold rounded-lg px-4 py-4 text-left hover:bg-green-50 hover:text-green-primary transition-colors focus:bg-green-100 focus:text-green-dark outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  Contato
                </a>
              </div>
              <div className="flex-1" />
              <div className="px-4">
                <div className="border-t border-green-100 my-4" />
                <Button
                  className="bg-green-primary hover:bg-green-dark text-white w-full px-4 py-3 rounded-lg font-semibold transition-colors text-base mt-2 shadow-lg focus:ring-2 focus:ring-green-300 focus:outline-none mb-4"
                  onClick={() => {
                    setMobileOpen(false);
                    if (location.pathname === "/") {
                      const element = document.getElementById("formulario");
                      element?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate("/", { state: { scrollToForm: true } });
                    }
                  }}
                >
                  Solicitar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}

        <div className="w-full sm:w-auto flex justify-center">
          <Button
            className="bg-green-primary hover:bg-green-dark text-white w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-base sm:text-lg"
            onClick={() => {
              if (location.pathname === "/") {
                const element = document.getElementById("formulario");
                element?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/", { state: { scrollToForm: true } });
              }
            }}
          >
            <span className="hidden sm:inline">Solicitar Agora</span>
            <span className="sm:hidden">Solicitar</span>
          </Button>
        </div>
      </div>
      {/* Animação do Drawer */}
      <style>{`
        @keyframes slide-fade-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-fade-in {
          animation: slide-fade-in 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
};

export default Header;
