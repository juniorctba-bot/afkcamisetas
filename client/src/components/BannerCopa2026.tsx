/**
 * BannerCopa2026 - Banner animado no topo do site para Copa do Mundo 2026
 * Exibe mensagem rotativa com CTA para página dedicada
 */
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { X, Trophy } from "lucide-react";

const mensagens = [
  "⚽ COPA DO MUNDO 2026 — Antecipe seus produtos personalizados!",
  "🏆 Camisetas, canecas, brindes e muito mais para a Copa!",
  "🇧🇷 Em breve novos materiais Copa 2026 — Garanta o seu!",
  "⚽ Personalize sua torcida para o HEXA! Solicite orçamento agora",
];

export default function BannerCopa2026() {
  const [visible, setVisible] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Define CSS variable for banner height so Header can position itself correctly
  useEffect(() => {
    const updateHeight = () => {
      const banner = document.getElementById('copa-banner');
      const h = visible && banner ? banner.offsetHeight : 0;
      document.documentElement.style.setProperty('--banner-height', `${h}px`);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [visible]);

  // Rotacionar mensagens a cada 3.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setMsgIndex((prev) => (prev + 1) % mensagens.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      id="copa-banner"
      className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #006400 0%, #009c3b 30%, #FFDF00 60%, #009c3b 80%, #006400 100%)",
        minHeight: "40px",
      }}
    >
      {/* Padrão de losangos decorativos */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.3) 10px,
            rgba(255,255,255,0.3) 11px
          )`,
        }}
      />

      <div className="flex items-center justify-center px-4 py-2 gap-3 relative">
        {/* Ícone troféu */}
        <Trophy className="w-4 h-4 text-yellow-900 flex-shrink-0 hidden sm:block" />

        {/* Mensagem rotativa */}
        <Link href="/copa-2026" className="flex-1 text-center">
          <span
            className="text-xs sm:text-sm font-bold text-green-950 cursor-pointer hover:underline transition-all duration-300"
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 0.4s ease",
              display: "inline-block",
              textShadow: "0 1px 2px rgba(255,255,255,0.4)",
            }}
          >
            {mensagens[msgIndex]}
          </span>
        </Link>

        {/* Badge "Em Breve" */}
        <Link
          href="/copa-2026"
          className="hidden sm:flex items-center gap-1 bg-green-900 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full hover:bg-green-800 transition-colors flex-shrink-0"
        >
          <span>Ver Mais</span>
          <span>→</span>
        </Link>

        {/* Botão fechar */}
        <button
          onClick={() => setVisible(false)}
          className="ml-2 text-green-900 hover:text-green-700 transition-colors flex-shrink-0"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
