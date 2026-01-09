import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Páginas do site AFK Camisetas
import HomeAFK from "./pages/HomeAFK";
import Sobre from "./pages/Sobre";
import ProdutosAFK from "./pages/ProdutosAFK";
import Portfolio from "./pages/Portfolio";
import Kits from "./pages/Kits";
import Promocoes from "./pages/Promocoes";
import Colecao from "./pages/Colecao";
import OrcamentoPublico from "./pages/OrcamentoPublico";
import Contato from "./pages/Contato";
import VoltaAsAulas from "./pages/VoltaAsAulas";
import Carnaval2026 from "./pages/Carnaval2026";

// Área Restrita
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import AdminDashboard from "./pages/AdminDashboard";
import Calculadora from "./pages/Calculadora";
import ControlePedidos from "./pages/ControlePedidos";
import GeradorOrcamentos from "./pages/GeradorOrcamentos";
import AprovarOrcamento from "./pages/AprovarOrcamento";


function Router() {
  return (
    <Switch>
      {/* Páginas Públicas */}
      <Route path="/" component={HomeAFK} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/produtos" component={ProdutosAFK} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/kits" component={Kits} />
      <Route path="/promocoes" component={Promocoes} />
      <Route path="/colecoes/carnaval-2026" component={Carnaval2026} />
      <Route path="/colecoes/:slug" component={Colecao} />
      <Route path="/orcamento" component={OrcamentoPublico} />
      <Route path="/contato" component={Contato} />
      <Route path="/volta-as-aulas" component={VoltaAsAulas} />
      
      {/* Área Restrita */}
      <Route path="/admin" component={AdminLogin} />
      <Route path="/admin/home" component={AdminHome} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/calculadora" component={Calculadora} />
      <Route path="/admin/controle-pedidos" component={ControlePedidos} />
      <Route path="/gerador-orcamentos" component={GeradorOrcamentos} />
      
      
      {/* Aprovação de Orçamento (Público) */}
      <Route path="/aprovar/:token" component={AprovarOrcamento} />
      
      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
