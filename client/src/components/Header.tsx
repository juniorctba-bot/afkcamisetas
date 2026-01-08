/**
 * Header Component - AFK Camisetas
 * Navegação completa do site com dropdown para Produtos e Coleções
 */
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const productCategories = [
  { label: "Todos os Produtos", href: "/produtos" },
  { label: "Calçados", href: "/produtos?categoria=calcados" },
  { label: "Vestuário Infantil", href: "/produtos?categoria=infantil" },
  { label: "Vestuário Adulto", href: "/produtos?categoria=adulto" },
  { label: "Casa e Decoração", href: "/produtos?categoria=casa" },
  { label: "Acessórios", href: "/produtos?categoria=acessorios" },
];

const colecoes = [
  { label: "Natal 2025", href: "/colecoes/natal-2025" },
  { label: "Carnaval 2026", href: "/colecoes/carnaval-2026" },
  { label: "Volta às Aulas", href: "/volta-as-aulas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);
  const [colecoesOpen, setColecoesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const produtosRef = useRef<HTMLDivElement>(null);
  const colecoesRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (produtosRef.current && !produtosRef.current.contains(event.target as Node)) {
        setProdutosOpen(false);
      }
      if (colecoesRef.current && !colecoesRef.current.contains(event.target as Node)) {
        setColecoesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) => location === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo_afk_final.png" 
              alt="AFK Camisetas" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos... (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="/sobre"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/sobre") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Sobre Nós
            </Link>

            {/* Produtos Dropdown */}
            <div ref={produtosRef} className="relative">
              <button
                onClick={() => setProdutosOpen(!produtosOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.startsWith("/produtos") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`}
              >
                Produtos
                <ChevronDown className={`w-4 h-4 transition-transform ${produtosOpen ? "rotate-180" : ""}`} />
              </button>
              {produtosOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {productCategories.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setProdutosOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/portfolio") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Portfólio
            </Link>

            <Link
              href="/kits"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/kits") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Kits
            </Link>

            <Link
              href="/promocoes"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/promocoes") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Promoções
            </Link>

            {/* Coleções Dropdown */}
            <div ref={colecoesRef} className="relative">
              <button
                onClick={() => setColecoesOpen(!colecoesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors rounded-lg"
              >
                Coleções
                <ChevronDown className={`w-4 h-4 transition-transform ${colecoesOpen ? "rotate-180" : ""}`} />
              </button>
              {colecoesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {colecoes.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setColecoesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/orcamento"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/orcamento") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Orçamento
            </Link>

            <Link
              href="/contato"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/contato") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container py-4">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/produtos"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/portfolio"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
              <Link
                href="/kits"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Kits
              </Link>
              <Link
                href="/promocoes"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </Link>
              
              {/* Coleções submenu */}
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Coleções</span>
              </div>
              {colecoes.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-2 text-sm font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                href="/orcamento"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Orçamento
              </Link>
              <Link
                href="/contato"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
