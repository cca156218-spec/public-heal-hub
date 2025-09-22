import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Layout } from "@/components/Layout";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ChatDemo from "./pages/ChatDemo";
import OutbreakAlerts from "./pages/OutbreakAlerts";
import Features from "./pages/Features";
import AshaWorkers from "./pages/AshaWorkers";
import VaccinationSchedule from "./pages/VaccinationSchedule";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Layout>
                  <Index />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute>
                <Layout>
                  <ChatDemo />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/alerts" element={
              <ProtectedRoute>
                <Layout>
                  <OutbreakAlerts />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/features" element={
              <ProtectedRoute>
                <Layout>
                  <Features />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/asha-workers" element={
              <ProtectedRoute>
                <Layout>
                  <AshaWorkers />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/vaccination" element={
              <ProtectedRoute>
                <Layout>
                  <VaccinationSchedule />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
