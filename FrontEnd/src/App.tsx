import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Newsletters from "./pages/Newsletters";
import NewsletterPost from "./pages/NewsletterPost";
import NewsletterArchive from "./pages/NewsletterArchive";
import Livros from "./pages/Livros";
import Filmes from "./pages/Filmes";
import Series from "./pages/Series";
import Podcasts from "./pages/Podcasts";
import AdminLogin from "./pages/AdminLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/Projeto_Programacao/isadora-luparele-blog/Public/dist/">
        <Routes>
          {/* Tela de login - Acesso restrito para administradores */}
          <Route path="/admin-luparele-editor" element={<AdminLogin />} />

          {/* Página inicial - Layout principal do blog */}
          <Route path="/" element={<Index />} />

          {/* Recomendações por categoria */}
          <Route path="/series" element={<Series />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/filmes" element={<Filmes />} />

          {/* Sistema de newsletters */}
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/newsletter/:id" element={<NewsletterPost />} />
          <Route path="/arquivo" element={<NewsletterArchive />} />

          {/* FUTURO: Se houver falha de conexão com a API ou erro de rede, redirecionaremos programaticamente para <NotFound /> ou outra tela específica */}
          
          {/* Rota padrão para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
