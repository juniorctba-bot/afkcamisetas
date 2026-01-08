/**
 * Footer Component - AFK Volta às Aulas
 * Design: Gradiente Tropical - Footer com gradiente escuro
 */
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Kits", href: "#kits" },
  { label: "Coleções Próprias", href: "#colecoes" },
  { label: "Portfólio", href: "#portfolio" },
];

const promos = [
  { label: "Natal 2025", href: "#" },
  { label: "Carnaval 2026", href: "#" },
  { label: "Volta às Aulas", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1628] to-[#0F172A] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">AFK</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Produtos personalizados para eventos, empresas e pessoas físicas. A partir de 3 unidades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Promos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Promoções</h4>
            <ul className="space-y-2">
              {promos.map((promo) => (
                <li key={promo.label}>
                  <a
                    href={promo.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {promo.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5541987386527"
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

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2026 AFK Camisetas e Muito +. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
