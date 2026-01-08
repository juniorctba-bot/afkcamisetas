/**
 * Footer Component - AFK Volta às Aulas
 * Design: Gradiente Tropical - Footer com gradiente escuro
 * Atualizado com links para catálogo e site
 */
import { Phone, Mail, MapPin, Instagram, FileText, ExternalLink } from "lucide-react";
import { CATALOG_URL, WHATSAPP_NUMBER, AFK_WEBSITE } from "@/lib/constants";

const quickLinks = [
  { label: "Etiquetas", href: "#temas" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Catálogo PDF", href: CATALOG_URL, external: true },
  { label: "Site AFK", href: AFK_WEBSITE, external: true },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1628] to-[#0F172A] text-white" id="contato">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <img 
              src="/images/logo_afk_final.png" 
              alt="AFK Camisetas" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Produtos personalizados para eventos, empresas e pessoas físicas. Etiquetas para materiais escolares a partir de R$ 6,50.
            </p>
            <a
              href={AFK_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#00F5D4] transition-colors text-sm font-medium"
            >
              Visite nosso site completo
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.external && <ExternalLink className="w-3 h-3" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Catalog CTA */}
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-[#0066FF] hover:bg-[#0066FF]/80 rounded-lg transition-colors text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              Ver Catálogo Completo
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (41) 98738-6527
                </a>
              </li>
              <li>
                <a
                  href="mailto:afkcamisetas@gmail.com.br"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  afkcamisetas@gmail.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                Curitiba e Região
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mt-10 p-4 rounded-xl bg-gradient-cta/20 border border-[#00D4FF]/30 text-center">
          <p className="text-white/90 text-sm">
            <span className="font-bold text-[#00D4FF]">Promoção Volta às Aulas!</span> Etiquetas a partir de R$ 6,50 - Válido até 30/01/2026
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2026 AFK Camisetas e Muito +. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
