/**
 * Hero Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Hero com gradiente vibrante e CTA destacado
 */
import { Clock, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5541987386527";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de fazer um pedido de etiquetas personalizadas para volta às aulas.");

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
      <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/20 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center py-12 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/90 text-yellow-900 font-semibold text-sm mb-6 animate-float">
            <span className="text-lg">✨</span>
            PROMOÇÃO VOLTA ÀS AULAS 2026
            <span className="text-lg">✨</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Nunca Mais Perca os{" "}
            <span className="text-yellow-300">Materiais do Seu Filho!</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
            Etiquetas de pano personalizadas que resistem a lavagens.
            <br />
            A partir de 3 unidades com <span className="font-bold text-yellow-300">desconto especial</span>!
          </p>

          {/* Price Card */}
          <div className="glass rounded-2xl p-6 md:p-8 max-w-md mx-auto mb-8 shadow-xl">
            <div className="flex items-center justify-center gap-6">
              <div className="text-left">
                <p className="text-sm text-muted-foreground line-through">De R$ 15,00</p>
                <p className="text-4xl md:text-5xl font-extrabold text-[#0066FF]">R$ 9,99</p>
              </div>
              <div className="text-left border-l-2 border-[#00D4FF] pl-6">
                <p className="text-2xl font-bold text-foreground">3 Etiquetas</p>
                <p className="text-muted-foreground">Personalizadas</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-[#0066FF] font-medium">
              <Clock className="w-4 h-4" />
              Oferta válida até 15 de Janeiro!
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
              Pedir Agora pelo WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-xl bg-white/90 hover:bg-white border-2 border-[#0066FF] text-[#0066FF] hover:text-[#0066FF]"
              onClick={() => document.getElementById("temas")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Mais Detalhes
              <ChevronRight className="w-5 h-5 ml-2" />
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
