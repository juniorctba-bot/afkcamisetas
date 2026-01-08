/**
 * Orçamento Page - Formulário de solicitação de orçamento
 * Design: Gradiente Tropical - Consistente com o site de Volta às Aulas
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Send, 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  FileText,
  ExternalLink
} from "lucide-react";
import { WHATSAPP_NUMBER, CATALOG_URL, AFK_WEBSITE } from "@/lib/constants";

const tiposProduto = [
  { value: "etiquetas-vinil", label: "Etiquetas de Vinil" },
  { value: "etiquetas-pano", label: "Etiquetas de Pano" },
  { value: "camisetas", label: "Camisetas" },
  { value: "bones", label: "Bonés" },
  { value: "canecas", label: "Canecas" },
  { value: "chinelos", label: "Chinelos" },
  { value: "almofadas", label: "Almofadas" },
  { value: "outros", label: "Outros Produtos" },
];

export default function Orcamento() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProduto: "",
    quantidade: "",
    mensagem: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tipoProdutoLabel = tiposProduto.find(t => t.value === formData.tipoProduto)?.label || formData.tipoProduto;
    
    const mensagem = encodeURIComponent(
      `*Solicitação de Orçamento - AFK*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Email:* ${formData.email}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Produto:* ${tipoProdutoLabel}\n` +
      `*Quantidade:* ${formData.quantidade} unidades\n\n` +
      `*Detalhes:*\n${formData.mensagem}`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-16 md:py-20">
        <div className="container">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Volta às Aulas
          </a>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Faça seu Orçamento
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Preencha o formulário e receba uma proposta personalizada sem compromisso
          </p>
        </div>
      </header>

      {/* Conteúdo */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-xl p-6 md:p-8 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome / Razão Social *</Label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome ou empresa"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email e WhatsApp */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="(41) 98765-4321"
                        value={formData.whatsapp}
                        onChange={(e) => handleChange("whatsapp", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Tipo de Produto e Quantidade */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipoProduto">Que tipo de item busca? *</Label>
                      <Select
                        value={formData.tipoProduto}
                        onValueChange={(value) => handleChange("tipoProduto", value)}
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                        <SelectContent>
                          {tiposProduto.map((tipo) => (
                            <SelectItem key={tipo.value} value={tipo.value}>
                              {tipo.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantidade">Quantidade *</Label>
                      <Input
                        id="quantidade"
                        type="number"
                        placeholder="Mínimo: 3"
                        min="1"
                        value={formData.quantidade}
                        onChange={(e) => handleChange("quantidade", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem / Detalhes</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Conte-nos mais sobre o que você precisa... (cores, tamanhos, tema, prazo, etc.)"
                      value={formData.mensagem}
                      onChange={(e) => handleChange("mensagem", e.target.value)}
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  {/* Botão Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-cta hover:opacity-90 text-white font-bold h-14 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Orçamento
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Ao enviar, você será direcionado para o WhatsApp para finalizar o contato
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Catálogo */}
              <div className="bg-gradient-to-br from-[#0066FF]/10 to-[#00D4FF]/10 rounded-2xl p-6 border border-[#0066FF]/20">
                <FileText className="w-10 h-10 text-[#0066FF] mb-4" />
                <h3 className="font-bold text-lg mb-2">Catálogo Completo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Veja todos os nossos produtos e opções de personalização
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10"
                  onClick={() => window.open(CATALOG_URL, "_blank")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Ver Catálogo em PDF
                </Button>
              </div>

              {/* Site AFK */}
              <div className="bg-gradient-to-br from-[#00D4FF]/10 to-[#00F5D4]/10 rounded-2xl p-6 border border-[#00D4FF]/20">
                <ExternalLink className="w-10 h-10 text-[#00D4FF] mb-4" />
                <h3 className="font-bold text-lg mb-2">Visite Nosso Site</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Conheça todos os produtos da AFK Camisetas
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10"
                  onClick={() => window.open(AFK_WEBSITE, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  www.afkcamisetas.com.br
                </Button>
              </div>

              {/* Contato */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">Contato Direto</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#25D366]" />
                      <span>(41) 98738-6527</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:afkcamisetas@gmail.com.br"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#0066FF]" />
                      <span>afkcamisetas@gmail.com.br</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-[#FF6B6B]" />
                    <span>Curitiba e Região</span>
                  </li>
                </ul>
              </div>

              {/* Promoção */}
              <div className="bg-gradient-cta rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Promoção Volta às Aulas!</h3>
                <p className="text-white/90 text-sm mb-3">
                  Etiquetas a partir de R$ 6,50
                </p>
                <p className="text-white/70 text-xs">
                  Válido até 30/01/2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-6 bg-[#0A1628] text-white/60 text-center text-sm">
        <div className="container">
          <p>© 2026 AFK Camisetas e Muito +. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
