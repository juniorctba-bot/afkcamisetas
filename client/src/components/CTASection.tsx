/**
 * CTA Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Seção de urgência com gradiente
 * Atualizado com data 30/01/2026 e links para catálogo
 */
import { MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATALOG_URL, WHATSAPP_NUMBER } from "@/lib/constants";

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
            Promoção válida até <span className="font-bold text-yellow-300">30/01/2026</span>!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="btn-whatsapp px-10 py-7 text-xl rounded-xl animate-pulse-glow"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-7 text-lg rounded-xl bg-white/90 hover:bg-white border-0 text-[#0066FF] hover:text-[#0066FF]"
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
    </section>
  );
}
