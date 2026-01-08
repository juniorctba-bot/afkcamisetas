/**
 * Themes Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Grid de temas coloridos com hover effects
 */
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const themes = [
  { name: "Animais", emoji: "🦁", className: "theme-animais" },
  { name: "Esportes", emoji: "⚽", className: "theme-esportes" },
  { name: "Estrelas", emoji: "⭐", className: "theme-estrelas" },
  { name: "Dinossauros", emoji: "🦖", className: "theme-dinossauros" },
  { name: "Unicórnios", emoji: "🦄", className: "theme-unicornios" },
  { name: "Carros", emoji: "🚗", className: "theme-carros" },
  { name: "Princesas", emoji: "👑", className: "theme-princesas" },
  { name: "Super-Heróis", emoji: "🦸", className: "theme-herois" },
];

const WHATSAPP_NUMBER = "5541987386527";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de escolher um tema para as etiquetas personalizadas.");

export default function ThemesSection() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <section 
      className="py-16 md:py-24 relative"
      id="temas"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o Tema Favorito do Seu Filho
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 20 opções de temas para personalizar
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`${theme.className} rounded-2xl p-6 md:p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer`}
            >
              <span className="text-4xl md:text-5xl block mb-3">{theme.emoji}</span>
              <h4 className="font-bold text-lg">{theme.name}</h4>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mb-8">
          E muito mais! Personalizamos com o <span className="font-semibold text-foreground">nome completo</span> da criança.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="btn-whatsapp px-8 py-6 text-lg rounded-xl"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Escolher Tema pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
