/**
 * Contact Form Section - AFK Volta às Aulas
 * Design: Gradiente Tropical - Formulário com glass effect
 */
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_NUMBER = "5541987386527";

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
            Garanta Sua Promoção Agora!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e receba seu orçamento personalizado
          </p>
        </div>

        {/* Form Card */}
        <Card className="max-w-xl mx-auto shadow-xl border-0">
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
                  placeholder="Ex: 3 etiquetas com tema de unicórnios para a Maria"
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
                Ao enviar, você será redirecionado para o WhatsApp para finalizar o pedido
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
