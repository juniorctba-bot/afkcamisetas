/**
 * Themes Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Grid com imagens reais das etiquetas
 * Atualizado com imagens enviadas pelo cliente
 */
import { MessageCircle, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATALOG_URL, WHATSAPP_NUMBER } from "@/lib/constants";

const etiquetas = [
  { name: "Dinossauros", image: "/images/etiqueta_01_dinossauros.png" },
  { name: "Unicórnio", image: "/images/etiqueta_02_unicornio.png" },
  { name: "Patrulha Canina", image: "/images/etiqueta_03_patrulha_canina.png" },
  { name: "Princesas", image: "/images/etiqueta_04_princesas.png" },
  { name: "Minecraft", image: "/images/etiqueta_05_minecraft.png" },
  { name: "Futebol", image: "/images/etiqueta_06_futebol.png" },
  { name: "Espacial", image: "/images/etiqueta_07_espacial.png" },
  { name: "Música", image: "/images/etiqueta_08_musica.png" },
  { name: "Gamer", image: "/images/etiqueta_09_gamer.png" },
  { name: "Skateboard", image: "/images/etiqueta_10_skateboard.png" },
];

const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para etiquetas personalizadas com um tema específico.");

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
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha o Tema Favorito do Seu Filho
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-[#0066FF] font-medium mb-4">
            <Sparkles className="w-5 h-5" />
            <span>Criamos as artes do tema conforme sua vontade!</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja alguns exemplos de etiquetas que já produzimos. Personalizamos com qualquer tema e com o nome completo da criança.
          </p>
        </div>

        {/* Etiquetas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto mb-10">
          {etiquetas.map((etiqueta, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={etiqueta.image} 
                  alt={`Etiqueta tema ${etiqueta.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h4 className="font-bold text-white text-sm md:text-base text-center">{etiqueta.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Info Text */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-2">
            Não encontrou o tema que procura? <span className="font-semibold text-foreground">Nós criamos!</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Entre em contato e solicite seu orçamento personalizado.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="btn-whatsapp px-8 py-6 text-lg rounded-xl"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicitar Orçamento
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-xl border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/5"
            asChild
          >
            <a href={CATALOG_URL} target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Ver Catálogo Completo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
