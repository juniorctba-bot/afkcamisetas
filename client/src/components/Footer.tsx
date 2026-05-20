/**
 * Footer Component - AFK Camisetas
 * Footer institucional com links, contato e Área Restrita discreta
 */
import { Phone, Mail, MapPin, Instagram, Lock } from "lucide-react";
import { Link } from "wouter";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_NUMBER = "5541987386527";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img
              src={`${CDN}/logo_afk_final(1)_abe56eba.png`}
              alt="AFK Camisetas"
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em personalização de produtos para empresas e pessoas físicas. 
              Qualidade, criatividade e produção flexível a partir de 3 unidades.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/afkcamisetas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/sobre" className="text-gray-400 hover:text-white text-sm transition-colors">Sobre Nós</Link>
              <Link href="/diferencial" className="text-gray-400 hover:text-white text-sm transition-colors">Diferencial</Link>
              <Link href="/para-empresas" className="text-gray-400 hover:text-white text-sm transition-colors">Para Empresas</Link>
              <Link href="/para-voce" className="text-gray-400 hover:text-white text-sm transition-colors">Para Você</Link>
              <Link href="/o-que-ja-fizemos" className="text-gray-400 hover:text-white text-sm transition-colors">O Que Já Fizemos</Link>
              <Link href="/colecao-propria" className="text-gray-400 hover:text-white text-sm transition-colors">Coleção Própria</Link>
            </nav>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Produtos</h3>
            <nav className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm">Camisetas e Moletons</span>
              <span className="text-gray-400 text-sm">Bonés e Acessórios</span>
              <span className="text-gray-400 text-sm">Canecas e Copos</span>
              <span className="text-gray-400 text-sm">Decoração Personalizada</span>
              <span className="text-gray-400 text-sm">Brindes Corporativos</span>
              <span className="text-gray-400 text-sm">Kit Onboarding</span>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (41) 98738-6527
              </a>
              <a
                href="mailto:afkcamisetas@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                afkcamisetas@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Curitiba - PR | Atendemos todo o Brasil
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} AFK Camisetas e Muito +. Todos os direitos reservados. CNPJ: 50.006.273/0001-11
          </p>
          <Link
            href="/admin/login"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-400 text-xs transition-colors"
          >
            <Lock className="w-3 h-3" />
            Área Restrita
          </Link>
        </div>
      </div>
    </footer>
  );
}
