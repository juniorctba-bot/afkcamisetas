/**
 * Header Component - AFK Camisetas
 * Menu institucional B2B com navegação completa
 */
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";

const paraEmpresasItems = [
  { label: "Uniformes Corporativos", href: "/para-empresas#uniformes" },
  { label: "Brindes Personalizados", href: "/para-empresas#brindes" },
  { label: "Kit Onboarding", href: "/para-empresas#kit-onboarding" },
  { label: "Eventos e Feiras", href: "/para-empresas#eventos" },
  { 
    label: "Catálogo Natal 2025", 
    href: `${CDN}/Catalogo-Natal-AFK-2025(1)_be26d8d5.pdf`,
    external: true 
  },
];

const paraPFItems = [
  { label: "Presentes Personalizados", href: "/para-voce#presentes" },
  { label: "Eventos e Festas", href: "/para-voce#eventos" },
  { label: "Decoração", href: "/para-voce#decoracao" },
  { 
    label: "Catálogo Natal 2025", 
    href: `${CDN}/Catalogo-Natal-AFK-2025(1)_be26d8d5.pdf`,
    external: true 
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [empresasOpen, setEmpresasOpen] = useState(false);
  const [pfOpen, setPfOpen] = useState(false);
  const empresasRef = useRef<HTMLDivElement>(null);
  const pfRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (empresasRef.current && !empresasRef.current.contains(event.target as Node)) {
        setEmpresasOpen(false);
      }
      if (pfRef.current && !pfRef.current.contains(event.target as Node)) {
        setPfOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setEmpresasOpen(false);
    setPfOpen(false);
  }, [location]);

  const isActive = (href: string) => location === href;

  const navLinkClass = (href: string) =>
    `px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
      isActive(href) ? "text-cyan-600" : "text-gray-700 hover:text-cyan-600"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={`${CDN}/logo_afk_final(1)_abe56eba.png`}
              alt="AFK Camisetas e Muito +"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <Link href="/sobre" className={navLinkClass("/sobre")}>
              Sobre Nós
            </Link>

            <Link href="/diferencial" className={navLinkClass("/diferencial")}>
              Diferencial
            </Link>

            {/* Para Empresas Dropdown */}
            <div ref={empresasRef} className="relative">
              <button
                onClick={() => { setEmpresasOpen(!empresasOpen); setPfOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                  location.startsWith("/para-empresas") ? "text-cyan-600" : "text-gray-700 hover:text-cyan-600"
                }`}
              >
                Para Empresas
                <ChevronDown className={`w-4 h-4 transition-transform ${empresasOpen ? "rotate-180" : ""}`} />
              </button>
              {empresasOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {paraEmpresasItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                        onClick={() => setEmpresasOpen(false)}
                      >
                        {item.label}
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                        onClick={() => setEmpresasOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Para Pessoas Físicas Dropdown */}
            <div ref={pfRef} className="relative">
              <button
                onClick={() => { setPfOpen(!pfOpen); setEmpresasOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                  location.startsWith("/para-voce") ? "text-cyan-600" : "text-gray-700 hover:text-cyan-600"
                }`}
              >
                Para Você
                <ChevronDown className={`w-4 h-4 transition-transform ${pfOpen ? "rotate-180" : ""}`} />
              </button>
              {pfOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  {paraPFItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                        onClick={() => setPfOpen(false)}
                      >
                        {item.label}
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                        onClick={() => setPfOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Link href="/o-que-ja-fizemos" className={navLinkClass("/o-que-ja-fizemos")}>
              O Que Já Fizemos
            </Link>

            <Link href="/colecao-propria" className={navLinkClass("/colecao-propria")}>
              Coleção Própria
            </Link>

            <Link href="/contato" className={navLinkClass("/contato")}>
              Contato
            </Link>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Orçamento Grátis
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-semibold rounded-full"
            >
              Orçamento
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="container py-4">
            <nav className="flex flex-col gap-1">
              <Link href="/" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                Home
              </Link>
              <Link href="/sobre" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                Sobre Nós
              </Link>
              <Link href="/diferencial" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                Diferencial
              </Link>

              {/* Para Empresas */}
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">Para Empresas</span>
              </div>
              {paraEmpresasItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-2 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg"
                  >
                    {item.label}
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className="px-6 py-2 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                    {item.label}
                  </Link>
                )
              )}

              {/* Para Você */}
              <div className="px-4 py-2 mt-2">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">Para Você</span>
              </div>
              {paraPFItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg"
                  >
                    {item.label}
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className="px-6 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg">
                    {item.label}
                  </Link>
                )
              )}

              <div className="border-t border-gray-100 my-2" />
              <Link href="/o-que-ja-fizemos" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                O Que Já Fizemos
              </Link>
              <Link href="/colecao-propria" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                Coleção Própria
              </Link>
              <Link href="/contato" className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
