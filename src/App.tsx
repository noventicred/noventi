
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingAnalysis from "./components/LoadingAnalysis";
import LoanApproved from "./components/LoanApproved";
import ConfirmationScreen from "./components/ConfirmationScreen";
import BankValidationLoading from "./components/BankValidationLoading";
import IOFPayment from "./components/IOFPayment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/analise" element={<LoadingAnalysis />} />
          <Route path="/aprovado" element={<LoanApproved />} />
          <Route path="/confirmacao" element={<ConfirmationScreen />} />
          <Route path="/validacao-bancaria" element={<BankValidationLoading />} />
          <Route path="/pagamento-iof" element={<IOFPayment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
