/**
 * CTA Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Seção de urgência com gradiente
 */
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5541987386527";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Quero garantir minha promoção de etiquetas para volta às aulas!");

export default function CTASection() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Não Deixe Para a Última Hora!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Garanta as etiquetas personalizadas para a volta às aulas 2026.
            <br />
            Promoção válida até <span className="font-bold text-yellow-300">15 de Janeiro</span>!
          </p>

          <Button
            size="lg"
            className="btn-whatsapp px-10 py-7 text-xl rounded-xl animate-pulse-glow"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Pedir Agora pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
