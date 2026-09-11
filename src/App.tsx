import React, { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout.tsx";
import ScrollToTop from "@/components/ScrollToTop";
import ThankYou from "@/pages/Thankyou.tsx";

// Lazy loaded page components
const Index = lazy(() => import("./pages/Index.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Railway = lazy(() => import("./pages/Railway.tsx"));
const Manufacturing = lazy(() => import("./pages/Manufacturing.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const Banking = lazy(() => import("./pages/Banking.tsx"));
const OilGas = lazy(() => import("./pages/OilGas.tsx"));
const Logistics = lazy(() => import("./pages/Logistics.tsx"));
const Retail = lazy(() => import("./pages/Retail.tsx"));
const Education = lazy(() => import("./pages/Education.tsx"));
const Healthcare = lazy(() => import("./pages/Healthcare.tsx"));

const queryClient = new QueryClient();

// Premium Page Loader fallback
const PageLoader = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-neutral-500 font-roboto font-medium text-sm tracking-wide">Loading...</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

