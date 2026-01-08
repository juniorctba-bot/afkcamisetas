/**
 * Header Component - AFK Volta às Aulas
 * Design: Gradiente Tropical - Header fixo com glassmorphism
 * Atualizado com logo oficial e links para todas as páginas
 */
import { useState } from "react";
import { Menu, X, ExternalLink, FileText, ShoppingBag, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATALOG_URL, AFK_WEBSITE } from "@/lib/constants";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Etiquetas", href: "#temas" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/images/logo_afk_final.png" 
              alt="AFK Camisetas" 
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {item.label}
              </a>
            ))}
            
            {/* Produtos */}
            <a
              href="/produtos"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              <ShoppingBag className="w-4 h-4" />
              Produtos
            </a>
            
            {/* Orçamento */}
            <a
              href="/orcamento"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0066FF] hover:text-[#0066FF]/80 transition-colors rounded-lg hover:bg-primary/5"
            >
              <ClipboardList className="w-4 h-4" />
              Orçamento
            </a>
            
            {/* Catálogo PDF */}
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0066FF] hover:text-[#0066FF]/80 transition-colors rounded-lg hover:bg-primary/5"
            >
              <FileText className="w-4 h-4" />
              Catálogo
            </a>

            {/* Link para site AFK */}
            <a
              href={AFK_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-gradient-cta rounded-full hover:opacity-90 transition-opacity ml-2"
            >
              Visite Nosso Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="container py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Produtos - Mobile */}
              <a
                href="/produtos"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="w-4 h-4" />
                Produtos
              </a>
              
              {/* Orçamento - Mobile */}
              <a
                href="/orcamento"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#0066FF] hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ClipboardList className="w-4 h-4" />
                Solicitar Orçamento
              </a>
              
              {/* Catálogo PDF - Mobile */}
              <a
                href={CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#0066FF] hover:bg-primary/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-4 h-4" />
                Ver Catálogo Completo
              </a>

              {/* Link para site AFK - Mobile */}
              <a
                href={AFK_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mx-4 mt-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-cta rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Visite Nosso Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
