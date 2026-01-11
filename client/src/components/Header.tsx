/**
 * Header Component - AFK Camisetas
 * Navegação completa do site com dropdown para Produtos e Coleções Próprias SEJA UM
 */
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const productFilters = [
  { label: "Todos", href: "/produtos" },
  { label: "Para Mim", href: "/produtos?filtro=para-mim" },
  { label: "Para Empresa", href: "/produtos?filtro=para-empresa" },
  { label: "Para meu Evento", href: "/produtos?filtro=para-evento" },
  { label: "Veja alguns materiais", href: "/portfolio" },
];

const colecoesProprias = [
  { label: "SORRIA", href: "/colecoes-proprias/sorria", description: "Delicadeza que Transforma" },
  { label: "RAIZ RUBRO NEGRA", href: "/colecoes-proprias/furacao", description: "Paixão Athleticana" },
  { label: "HEXA VEM", href: "/colecoes-proprias/hexa-vem", description: "Seleção Brasileira" },
  { label: "BUSHIDO", href: "/colecoes-proprias/bushido", description: "Caminho do Guerreiro" },
  { label: "FORÇA ESTOICA", href: "/colecoes-proprias/forca-estoica", description: "Stoic Power" },
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
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
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
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="/sobre"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/sobre") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Sobre Nós
            </Link>

            {/* Produtos Dropdown */}
            <div ref={produtosRef} className="relative">
              <button
                onClick={() => setProdutosOpen(!produtosOpen)}
                className={`flex items-center gap-1 px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.startsWith("/produtos") || location.startsWith("/portfolio") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`}
              >
                Produtos
                <ChevronDown className={`w-4 h-4 transition-transform ${produtosOpen ? "rotate-180" : ""}`} />
              </button>
              {produtosOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {productFilters.map((item) => (
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
              href="/kits"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/kits") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Kits
            </Link>

            <Link
              href="/para-sua-empresa"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/para-sua-empresa") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Para sua Empresa
            </Link>

            <Link
              href="/catalogos-promocionais"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                isActive("/catalogos-promocionais") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Catálogos
            </Link>

            {/* Coleções Próprias Dropdown */}
            <div ref={colecoesRef} className="relative">
              <button
                onClick={() => setColecoesOpen(!colecoesOpen)}
                className={`flex items-center gap-1 px-2.5 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                  location.startsWith("/colecoes-proprias") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
                }`}
              >
                Coleções Próprias
                <ChevronDown className={`w-4 h-4 transition-transform ${colecoesOpen ? "rotate-180" : ""}`} />
              </button>
              {colecoesOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {/* Banner SEJA UM */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <img 
                      src="/seja_um_banner.png" 
                      alt="SEJA UM - Camisetas com design exclusivo" 
                      className="w-full h-auto rounded"
                    />
                  </div>
                  {colecoesProprias.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 hover:bg-pink-50 group"
                      onClick={() => setColecoesOpen(false)}
                    >
                      <span className="block text-sm font-semibold text-gray-800 group-hover:text-pink-600">
                        {item.label}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/orcamento"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive("/orcamento") ? "text-pink-600" : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Orçamento
            </Link>

            <Link
              href="/contato"
              className={`px-2.5 py-2 text-sm font-medium transition-colors rounded-lg ${
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
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
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
              
              {/* Produtos submenu */}
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Produtos</span>
              </div>
              {productFilters.map((item) => (
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
                href="/kits"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Kits
              </Link>

              <Link
                href="/para-sua-empresa"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Para sua Empresa
              </Link>

              <Link
                href="/catalogos-promocionais"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Catálogos Promocionais
              </Link>
              
              {/* Coleções Próprias submenu */}
              <div className="px-4 py-2 mt-2">
                <span className="text-xs font-semibold text-gray-400 uppercase">Coleções Próprias - SEJA UM</span>
              </div>
              <div className="px-4 py-2">
                <img 
                  src="/seja_um_banner.png" 
                  alt="SEJA UM" 
                  className="w-full max-w-[200px] h-auto rounded"
                />
              </div>
              {colecoesProprias.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-2 text-sm font-medium text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="block">{item.label}</span>
                  <span className="block text-xs text-gray-400">{item.description}</span>
                </Link>
              ))}
              
              <Link
                href="/orcamento"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg mt-2"
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
