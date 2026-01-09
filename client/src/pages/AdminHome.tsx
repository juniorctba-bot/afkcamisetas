import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calculator,
  FileText,
  Package,
  BarChart3,
  LogOut,
  ArrowRight,
  DollarSign,
  ClipboardList,
  Workflow,
  FileSpreadsheet,
  Lock,
  Unlock,
} from "lucide-react";
import { toast } from "sonner";

const SENHA_CORRETA = "afk2025";

export default function AdminHome() {
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("afk_admin_auth") === "true";
  });
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [senha, setSenha] = useState("");
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("afk_admin_auth");
    localStorage.removeItem("afk_admin_auth_time");
    setIsAuthenticated(false);
    toast.success("Logout realizado!");
  };

  const handleMenuClick = (href: string) => {
    if (isAuthenticated) {
      setLocation(href);
    } else {
      setPendingHref(href);
      setShowPasswordDialog(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (senha === SENHA_CORRETA) {
      localStorage.setItem("afk_admin_auth", "true");
      localStorage.setItem("afk_admin_auth_time", Date.now().toString());
      setIsAuthenticated(true);
      setShowPasswordDialog(false);
      setSenha("");
      toast.success("Acesso liberado!");
      if (pendingHref) {
        setLocation(pendingHref);
        setPendingHref(null);
      }
    } else {
      toast.error("Senha incorreta!");
      setSenha("");
    }
  };

  const menuItems = [
    {
      title: "Calculadora de Custos",
      description: "Calcule o custo de produção dos itens com base em materiais, mão de obra e margem de lucro",
      icon: Calculator,
      href: "/admin/calculadora",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Gerador de Orçamentos",
      description: "Crie orçamentos profissionais para seus clientes com cálculo automático de valores",
      icon: FileText,
      href: "/gerador-orcamentos",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Workflow de Pedidos",
      description: "Acompanhe e gerencie o fluxo de aprovação e produção dos pedidos",
      icon: Workflow,
      href: "/admin/dashboard",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      title: "Métricas e Relatórios",
      description: "Visualize gráficos de desempenho, faturamento e estatísticas de pedidos",
      icon: BarChart3,
      href: "/admin/dashboard?tab=metricas",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Controle de Pedidos",
      description: "Planilha editável para controle completo de pedidos, insumos e pagamentos",
      icon: FileSpreadsheet,
      href: "/admin/controle-pedidos",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  AFK Admin
                </h1>
                <p className="text-xs text-gray-500">Painel de Controle</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isAuthenticated ? (
                <>
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <Unlock className="w-3 h-3" />
                    Acesso Liberado
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-red-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair
                  </Button>
                </>
              ) : (
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Clique em uma opção para desbloquear
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Área Administrativa AFK
          </h2>
          <p className="text-gray-600">
            {isAuthenticated 
              ? "Selecione uma das opções abaixo para começar"
              : "Digite a senha ao clicar em uma opção para acessar as funcionalidades"}
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.title}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 overflow-hidden"
              onClick={() => handleMenuClick(item.href)}
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${item.bgColor}`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    {!isAuthenticated && (
                      <Lock className="w-4 h-4 text-gray-400" />
                    )}
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
                <CardTitle className="text-lg mt-3">{item.title}</CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className={`w-full justify-center bg-gradient-to-r ${item.color} text-white hover:opacity-90`}
                >
                  {isAuthenticated ? "Acessar" : "Desbloquear e Acessar"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Package className="w-4 h-4" />
              <span className="text-xs">Acesso Rápido</span>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Use os cards acima para navegar entre as funcionalidades
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-xs">Dica</span>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Calcule custos antes de gerar orçamentos
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <ClipboardList className="w-4 h-4" />
              <span className="text-xs">Workflow</span>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Orçamentos geram pedidos automaticamente
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <BarChart3 className="w-4 h-4" />
              <span className="text-xs">Relatórios</span>
            </div>
            <p className="text-sm font-medium text-gray-700">
              Exporte dados em CSV para análise
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-4 text-center text-sm text-gray-400">
        AFK Camisetas e Muito Mais © {new Date().getFullYear()}
      </footer>

      {/* Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-pink-500" />
              Acesso Restrito
            </DialogTitle>
            <DialogDescription>
              Digite a senha para acessar as funcionalidades administrativas
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite a senha..."
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handlePasswordSubmit();
                  }
                }}
                autoFocus
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPasswordDialog(false)}>
              Cancelar
            </Button>
            <Button 
              onClick={handlePasswordSubmit}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            >
              <Unlock className="w-4 h-4 mr-2" />
              Desbloquear
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
