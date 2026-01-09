/**
 * Admin Login Page - Acesso Restrito
 * Página de login com senha para área administrativa
 */
import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

// Senha de acesso (em produção, isso seria validado no backend)
const ADMIN_PASSWORD = "afk2025";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular delay de verificação
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (senha === ADMIN_PASSWORD) {
      // Salvar sessão no localStorage
      localStorage.setItem("afk_admin_auth", "true");
      localStorage.setItem("afk_admin_auth_time", Date.now().toString());
      toast.success("Acesso autorizado!");
      setLocation("/admin/home");
    } else {
      toast.error("Senha incorreta!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] via-[#E9ECEF] to-[#DEE2E6]">
      <div className="w-full max-w-md p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">
              <span className="text-[#FF6B6B]">P</span>
              <span className="text-[#4ECDC4]">o</span>
              <span className="text-[#45B7D1]">r</span>
              <span className="text-[#96CEB4]">t</span>
              <span className="text-[#FFEAA7]">a</span>
              <span className="text-[#DDA0DD]">l</span>
              {" "}
              <span className="text-[#FF6B6B]">A</span>
              <span className="text-[#4ECDC4]">d</span>
              <span className="text-[#45B7D1]">m</span>
              <span className="text-[#96CEB4]">i</span>
              <span className="text-[#FFEAA7]">n</span>
              <span className="text-[#DDA0DD]">i</span>
              <span className="text-[#FF6B6B]">s</span>
              <span className="text-[#4ECDC4]">t</span>
              <span className="text-[#45B7D1]">r</span>
              <span className="text-[#96CEB4]">a</span>
              <span className="text-[#FFEAA7]">t</span>
              <span className="text-[#DDA0DD]">i</span>
              <span className="text-[#FF6B6B]">v</span>
              <span className="text-[#4ECDC4]">o</span>
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="senha">Senha de Acesso</Label>
              <div className="relative">
                <Input
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite a senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="pr-10 h-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading || !senha}
              className="w-full h-12 bg-gradient-to-r from-[#4ECDC4] via-[#45B7D1] to-[#FFEAA7] hover:opacity-90 text-white font-semibold"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 animate-pulse" />
                  Verificando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Acessar Portal
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
