/**
 * Benefits Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Cards com ícones e glass effect
 */
import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Evite Perdas",
    description: "Materiais identificados voltam para casa. Economize comprando menos ao longo do ano.",
    color: "text-[#0066FF]",
    bgColor: "bg-[#0066FF]/10",
  },
  {
    icon: Heart,
    title: "Seu Filho Vai Amar",
    description: "Mais de 20 temas coloridos! Animais, esportes, personagens e muito mais.",
    color: "text-[#EC4899]",
    bgColor: "bg-[#EC4899]/10",
  },
  {
    icon: Sparkles,
    title: "Resistente",
    description: "Etiquetas de pano que não saem na lavagem. Qualidade garantida!",
    color: "text-[#22C55E]",
    bgColor: "bg-[#22C55E]/10",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="sobre">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Etiquetas Personalizadas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organização, economia e tranquilidade para você e seu filho
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
