/**
 * Orçamento Público - AFK Camisetas
 * Formulário de orçamento para clientes
 */
import { useState } from "react";
import { Send, Package, User, Phone, Mail, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5541987386527";

const produtos = [
  "Camiseta Adulto",
  "Camiseta Infantil",
  "Boné/Trucker",
  "Chinelo",
  "Caneca",
  "Almofada",
  "Mochila Saco",
  "Ecobag",
  "Etiquetas",
  "Outro",
];

export default function OrcamentoPublico() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    produto: "",
    quantidade: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mensagem = `Olá! Gostaria de solicitar um orçamento.

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*E-mail:* ${formData.email}
*Produto:* ${formData.produto}
*Quantidade:* ${formData.quantidade}
*Detalhes:* ${formData.mensagem}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-10 h-10 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Solicite seu Orçamento
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Preencha o formulário e entraremos em contato rapidamente!
            </p>
          </div>
        </section>

        {/* Formulário */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
                <div className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Telefone e Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4" />
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                        placeholder="(41) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4" />
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Produto e Quantidade */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Package className="w-4 h-4" />
                        Produto *
                      </label>
                      <select
                        required
                        value={formData.produto}
                        onChange={(e) => setFormData({ ...formData, produto: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 bg-white"
                      >
                        <option value="">Selecione um produto</option>
                        {produtos.map((produto) => (
                          <option key={produto} value={produto}>{produto}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Quantidade *
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        value={formData.quantidade}
                        onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                        placeholder="Ex: 10"
                      />
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4" />
                      Detalhes do Pedido
                    </label>
                    <textarea
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 resize-none"
                      placeholder="Descreva os detalhes do seu pedido: cores, tamanhos, arte, etc."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Orçamento via WhatsApp
                  </Button>
                </div>
              </form>

              {/* Info */}
              <div className="mt-8 text-center text-gray-600">
                <p className="text-sm">
                  Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos.
                </p>
                <p className="text-sm mt-2">
                  Respondemos em até 24 horas úteis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
