import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/lib/i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Insights from "./pages/Insights";
import Application from "./pages/Application";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,_hsl(0_0%_100%_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,_hsl(0_0%_100%_/_0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
          >
            <div className="absolute inset-y-0 left-10 w-px border-l border-dashed border-accent/25" />
            <div className="absolute left-4 top-4 h-6 w-6 opacity-50">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/60" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-accent/60" />
            </div>
            <div className="absolute right-4 top-4 h-6 w-6 opacity-50">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/60" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-accent/60" />
            </div>
            <div className="absolute bottom-4 left-4 h-6 w-6 opacity-50">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/60" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-accent/60" />
            </div>
            <div className="absolute bottom-4 right-4 h-6 w-6 opacity-50">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/60" />
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-accent/60" />
            </div>
          </div>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/apply" element={<Application />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;