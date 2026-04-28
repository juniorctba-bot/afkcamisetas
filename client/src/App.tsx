import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Páginas Públicas do site AFK Camisetas
import HomeAFK from "./pages/HomeAFK";
import Sobre from "./pages/Sobre";
import Diferencial from "./pages/Diferencial";
import ParaEmpresas from "./pages/ParaEmpresas";
import ParaVoce from "./pages/ParaVoce";
import OQueJaFizemos from "./pages/OQueJaFizemos";
import ColecaoPropria from "./pages/ColecaoPropria";
import Contato from "./pages/Contato";

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
      <Route path="/diferencial" component={Diferencial} />
      <Route path="/para-empresas" component={ParaEmpresas} />
      <Route path="/para-voce" component={ParaVoce} />
      <Route path="/o-que-ja-fizemos" component={OQueJaFizemos} />
      <Route path="/colecao-propria" component={ColecaoPropria} />
      <Route path="/contato" component={Contato} />
      
      {/* Área Restrita */}
      <Route path="/admin" component={AdminHome} />
      <Route path="/admin/login" component={AdminLogin} />
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
