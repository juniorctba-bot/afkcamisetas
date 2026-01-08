/**
 * Footer Component - AFK Camisetas
 * Footer completo com links, contato e Área Restrita discreta
 */
import { Phone, Mail, MapPin, Instagram, Facebook, Lock } from "lucide-react";
import { Link } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img 
              src="/images/logo_afk_final.png" 
              alt="AFK Camisetas" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Produtos personalizados para eventos, empresas e pessoas físicas. A partir de 3 unidades.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/sobre" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sobre Nós
              </Link>
              <Link href="/produtos" className="text-gray-400 hover:text-white text-sm transition-colors">
                Produtos
              </Link>
              <Link href="/kits" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kits
              </Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                Portfólio
              </Link>
            </nav>
          </div>

          {/* Promoções */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Coleções Próprias</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/colecoes/natal-2025" className="text-gray-400 hover:text-white text-sm transition-colors">
                Natal 2025
              </Link>
              <Link href="/colecoes/carnaval-2026" className="text-gray-400 hover:text-white text-sm transition-colors">
                Carnaval 2026
              </Link>
              <Link href="/volta-as-aulas" className="text-gray-400 hover:text-white text-sm transition-colors">
                Volta às Aulas
              </Link>
              
              {/* Área Restrita - Discreta */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Acesso Restrito
                </span>
                <Link 
                  href="/admin" 
                  className="text-gray-500 hover:text-gray-400 text-sm transition-colors mt-1 block"
                >
                  Área Restrita
                </Link>
              </div>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                (41) 98738-6527
              </a>
              <a 
                href="mailto:afkcamisetas@gmail.com.br"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                afkcamisetas@gmail.com.br
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                Curitiba e Região
              </div>
              
              {/* Redes Sociais */}
              <div className="flex items-center gap-3 pt-4">
                <a 
                  href="https://instagram.com/afkcamisetas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://facebook.com/afkcamisetas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2026 AFK Camisetas e Muito +. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
