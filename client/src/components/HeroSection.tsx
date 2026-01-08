/**
 * Hero Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Hero com gradiente vibrante e CTA destacado
 * Atualizado com novo texto e preço R$8,50
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
        background: "linear-gradient(135deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)",
      }}
    >
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 md:py-20">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/90 text-yellow-900 font-semibold text-sm mb-6 animate-float">
              <span className="text-lg">✨</span>
              PROMOÇÃO VOLTA ÀS AULAS 2026
              <span className="text-lg">✨</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              <span className="text-yellow-300">AFK</span> ETIQUETAS ESCOLARES{" "}
              <span className="text-orange-400">PERSONALIZADAS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Material: Vinil Adesivo à Prova d'Água. Identifique todos os materiais escolares do seu filho!
            </p>

            {/* Price Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-orange-500 rounded-xl p-4 text-center shadow-lg">
                <p className="text-white/90 text-sm mb-1">Combo 3 Folhas</p>
                <p className="text-3xl md:text-4xl font-extrabold text-white">R$ 22,50</p>
              </div>
              <div className="bg-red-500 rounded-xl p-4 text-center shadow-lg">
                <p className="text-white/90 text-sm mb-1">Folha Avulsa</p>
                <p className="text-3xl md:text-4xl font-extrabold text-white">R$ 8,50</p>
              </div>
            </div>

            {/* Info */}
            <div className="bg-green-500 rounded-xl p-3 mb-6 text-center">
              <p className="text-white font-semibold text-sm md:text-base">
                Etiquetas de Algodão Termocolantes para uniformes disponíveis!
              </p>
            </div>

            {/* Validity */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-300 font-medium mb-6">
              <Clock className="w-5 h-5" />
              Oferta válida até 30/01/2026
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

          {/* Right Column - Card Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/images/card_etiquetas_afk_final.png" 
              alt="AFK Etiquetas Escolares Personalizadas" 
              className="max-w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{ maxHeight: "600px" }}
            />
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
