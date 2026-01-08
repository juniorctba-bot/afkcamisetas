/**
 * Testimonials Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Cards de depoimentos com estrelas
 */
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Mãe do Pedro, 7 anos",
    text: "Nunca mais perdi nada! As etiquetas são lindas e resistem mesmo à lavagem. Meu filho adora o tema de dinossauros!",
    rating: 5,
  },
  {
    name: "Juliana M.",
    role: "Mãe de 3",
    text: "Comprei para os 3 filhos e economizei muito! Não preciso mais ficar comprando material novo todo mês porque 'sumiu' na escola.",
    rating: 5,
  },
  {
    name: "Fernanda L.",
    role: "Mãe da Sofia, 5 anos",
    text: "Atendimento rápido, entrega antes do prazo e qualidade excelente. Super recomendo a AFK!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="depoimentos">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Dizem Nossas Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mães que já usam aprovam!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-border/50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-foreground">— {testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
