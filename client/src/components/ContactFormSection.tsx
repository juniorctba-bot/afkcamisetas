/**
 * Contact Form Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Formulário com glass effect
 * Atualizado com link para catálogo
 */
import { useState } from "react";
import { MessageCircle, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CATALOG_URL, WHATSAPP_NUMBER, AFK_WEBSITE } from "@/lib/constants";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.telefone}\n` +
      `*Pedido:* ${formData.mensagem}`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#EFF6FF] to-white" id="orcamento">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solicite Seu Orçamento!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Preencha o formulário e receba seu orçamento personalizado
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[#0066FF] font-medium">
            <Clock className="w-4 h-4" />
            Promoção válida até 30/01/2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form Card */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium">
                    Nome Completo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    E-mail <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-foreground font-medium">
                    WhatsApp
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-foreground font-medium">
                    O que você precisa?
                  </Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Ex: Etiquetas com tema de unicórnios para a Maria"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="rounded-xl resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-whatsapp py-6 text-lg rounded-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento pelo WhatsApp
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Ao enviar, você será redirecionado para o WhatsApp
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Catalog Card */}
          <div className="flex flex-col gap-6">
            <Card className="shadow-xl border-0 bg-gradient-cta text-white">
              <CardContent className="p-6 md:p-8 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Catálogo Completo</h3>
                <p className="text-white/80 mb-6">
                  Veja todos os nossos produtos e opções de etiquetas personalizadas
                </p>
                <Button
                  size="lg"
                  className="w-full bg-white text-[#0066FF] hover:bg-white/90 py-6 text-lg rounded-xl font-semibold"
                  asChild
                >
                  <a href={CATALOG_URL} target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5 mr-2" />
                    Ver Catálogo em PDF
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold mb-2 text-foreground">Visite Nosso Site</h3>
                <p className="text-muted-foreground mb-6">
                  Conheça todos os produtos da AFK Camisetas
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/5 py-6 text-lg rounded-xl font-semibold"
                  asChild
                >
                  <a href={AFK_WEBSITE} target="_blank" rel="noopener noreferrer">
                    www.afkcamisetas.com.br
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
