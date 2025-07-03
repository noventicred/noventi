import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingAnalysis from "./components/LoadingAnalysis";
import LoanApproved from "./components/LoanApproved";
import ConfirmationScreen from "./components/ConfirmationScreen";
import BankValidationLoading from "./components/BankValidationLoading";
import IOFPayment from "./components/IOFPayment";
import PixPaymentDetails from "./components/pages/PixPaymentDetails";
import Sobre from "./pages/Sobre";
import TiposEmprestimos from "./pages/TiposEmprestimos";
import FAQPage from "./pages/FAQ";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/analise"
          element={
            <PageTransition>
              <LoadingAnalysis />
            </PageTransition>
          }
        />
        <Route
          path="/aprovado"
          element={
            <PageTransition>
              <LoanApproved />
            </PageTransition>
          }
        />
        <Route
          path="/confirmacao"
          element={
            <PageTransition>
              <ConfirmationScreen />
            </PageTransition>
          }
        />
        <Route
          path="/validacao-bancaria"
          element={
            <PageTransition>
              <BankValidationLoading />
            </PageTransition>
          }
        />
        <Route
          path="/pagamento-iof"
          element={
            <PageTransition>
              <IOFPayment />
            </PageTransition>
          }
        />
        <Route
          path="/pagamento-pix"
          element={
            <PageTransition>
              <PixPaymentDetails />
            </PageTransition>
          }
        />
        <Route
          path="/sobre"
          element={
            <PageTransition>
              <Sobre />
            </PageTransition>
          }
        />
        <Route
          path="/tipos-emprestimos"
          element={
            <PageTransition>
              <TiposEmprestimos />
            </PageTransition>
          }
        />
        <Route
          path="/faq"
          element={
            <PageTransition>
              <FAQPage />
            </PageTransition>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
