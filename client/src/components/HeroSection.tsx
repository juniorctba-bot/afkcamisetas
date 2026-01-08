/**
 * Hero Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Hero com gradiente vibrante e CTA destacado
 * Atualizado com novo texto e preço R$6,50
 */
import { Clock, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATALOG_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de fazer um orçamento de etiquetas personalizadas para volta às aulas.");

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <section 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/30 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center py-12 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/90 text-yellow-900 font-semibold text-sm mb-6 animate-float">
            <span className="text-lg">✨</span>
            PROMOÇÃO VOLTA ÀS AULAS 2026
            <span className="text-lg">✨</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            CHEGOU A HORA DE PERSONALIZAR OS MATERIAIS ESCOLARES E IDENTIFICAR COM{" "}
            <span className="text-yellow-300">ETIQUETAS PARA TODAS APLICAÇÕES</span>
          </h1>

          {/* Price Card */}
          <div className="glass rounded-2xl p-6 md:p-8 max-w-lg mx-auto mb-8 shadow-xl">
            <div className="text-center">
              <p className="text-lg md:text-xl text-foreground mb-2">Etiquetas a partir de</p>
              <p className="text-5xl md:text-6xl font-extrabold text-[#0066FF] mb-2">R$ 6,50*</p>
              <div className="flex items-center justify-center gap-2 text-sm text-[#0066FF] font-medium mb-4">
                <Clock className="w-4 h-4" />
                Oferta válida até 30/01/2026
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                *Valor de 1 página A4 com etiquetas de vinil para itens como lápis, cadernos
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="btn-whatsapp px-8 py-6 text-lg rounded-xl animate-pulse-glow"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-xl bg-white/90 hover:bg-white border-2 border-[#0066FF] text-[#0066FF] hover:text-[#0066FF]"
              asChild
            >
              <a href={CATALOG_URL} target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                Ver Catálogo Completo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
