import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Railway from "./pages/Railway.tsx";
import Manufacturing from "./pages/Manufacturing.tsx";
import Pricing from "./pages/Pricing.tsx";
import Banking from "./pages/Banking.tsx";
import OilGas from "./pages/OilGas.tsx";
import Logistics from "./pages/Logistics.tsx";
import Retail from "./pages/Retail.tsx";
import Education from "./pages/Education.tsx";
import Healthcare from "./pages/Healthcare.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/railway" element={<Layout><Railway /></Layout>} />
          <Route path="/manufacturing" element={<Layout><Manufacturing /></Layout>} />
          <Route path="/banking" element={<Layout><Banking /></Layout>} />
          <Route path="/oil-gas" element={<Layout><OilGas /></Layout>} />
          <Route path="/logistics" element={<Layout><Logistics /></Layout>} />
          <Route path="/retail" element={<Layout><Retail /></Layout>} />
          <Route path="/education" element={<Layout><Education /></Layout>} />
          <Route path="/healthcare" element={<Layout><Healthcare /></Layout>} />
          <Route path="/pricing" element={<Pricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
