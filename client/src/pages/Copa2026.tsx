/**
 * Copa2026 - Página dedicada Copa do Mundo 2026
 * Produtos personalizados temáticos - AFK Camisetas
 */
import { Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, MessageCircle, Trophy, Zap, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5541987386527";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vi a página da Copa do Mundo 2026 no site da AFK Camisetas e gostaria de antecipar meu orçamento para produtos personalizados! 🏆⚽"
);

const produtos = [
  {
    nome: "Camisetas Temáticas",
    descricao: "Camisetas personalizadas com estampas exclusivas da Copa 2026. Verde, amarelo e muito estilo! Sublimação full print de alta resolução.",
    icone: "👕",
    badge: "Mais Pedido",
    cor: "from-green-500 to-green-700",
  },
  {
    nome: "Kits Torcedor",
    descricao: "Kits completos com camiseta, bandeira, copo e acessórios personalizados. Ideal para grupos de torcedores e bares temáticos.",
    icone: "🎁",
    badge: "Kit Completo",
    cor: "from-yellow-500 to-yellow-700",
  },
  {
    nome: "Canecas & Copos",
    descricao: "Canecas e copos personalizados para torcer com estilo. Perfeitos para bares, restaurantes e fãs de futebol.",
    icone: "☕",
    badge: "Sublimação HD",
    cor: "from-green-600 to-emerald-800",
  },
  {
    nome: "Brindes Corporativos",
    descricao: "Brindes temáticos da Copa para sua empresa: chaveiros, canetas, bolsas e muito mais! Presenteie clientes e colaboradores.",
    icone: "🏢",
    badge: "Para Empresas",
    cor: "from-yellow-600 to-amber-800",
  },
  {
    nome: "Uniformes de Torcida",
    descricao: "Uniformes personalizados para grupos de torcedores, bares temáticos e eventos corporativos. Pedido mínimo de apenas 3 unidades.",
    icone: "⚽",
    badge: "Min. 3 un.",
    cor: "from-green-700 to-teal-800",
  },
  {
    nome: "Acessórios Temáticos",
    descricao: "Bandanas, bonés, pulseiras e muito mais com estampas exclusivas da Copa do Mundo 2026. Complete o look da torcida!",
    icone: "🎽",
    badge: "Em Breve",
    cor: "from-yellow-700 to-orange-800",
  },
];

const vantagens = [
  { icone: "⚡", titulo: "Antecipe seu Pedido", descricao: "Garanta seu pedido antes da Copa e evite atrasos na produção" },
  { icone: "🎨", titulo: "Arte Exclusiva", descricao: "Nossa equipe cria artes temáticas exclusivas para o seu pedido" },
  { icone: "📦", titulo: "Pedido Mínimo: 3 un.", descricao: "Atendemos desde pequenos grupos até grandes empresas" },
  { icone: "🚀", titulo: "Entrega Rápida", descricao: "Produção ágil em Curitiba com entrega para todo o Brasil" },
];

export default function Copa2026() {
  useEffect(() => {
    document.title = "Copa do Mundo 2026 - Produtos Personalizados | AFK Camisetas Curitiba";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1" style={{ paddingTop: "64px" }}>

        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006400 0%, #008000 30%, #FFD700 70%, #FFA500 100%)",
          }}
        >
          {/* Decorative balls */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-black/10 blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-yellow-300/20 blur-lg" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6 text-sm">
                <Trophy className="w-4 h-4" />
                Copa do Mundo 2026 — EUA, México e Canadá
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
                ⚽ Copa do Mundo<br />
                <span className="text-yellow-300">2026</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                Produtos personalizados para você torcer com muito estilo!
              </p>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Camisetas, kits torcedor, canecas, brindes corporativos e muito mais. 
                Antecipe seu pedido e garanta os melhores produtos para a Copa!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full hover:bg-yellow-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Antecipar Orçamento via WhatsApp
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black/20 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-black/30 transition-all border border-white/30"
                >
                  Ver Produtos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso Em Breve */}
        <section className="py-8 bg-yellow-400">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-900 flex-shrink-0" />
                <div>
                  <p className="font-black text-yellow-900 text-lg">🚨 Em Breve: Linha Completa Copa 2026!</p>
                  <p className="text-yellow-800 text-sm">Já sabe o que quer? Antecipe seu orçamento e garanta prioridade na produção!</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista
              </a>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section id="produtos" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                🏆 Produtos Copa do Mundo 2026
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Personalize tudo para a maior festa do futebol mundial! 
                Todos os produtos com arte exclusiva e sublimação de alta qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtos.map((produto, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${produto.cor} p-8 flex flex-col items-center justify-center`}>
                    <span className="text-6xl mb-3">{produto.icone}</span>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {produto.badge}
                    </span>
                  </div>
                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{produto.nome}</h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{produto.descricao}</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para ${produto.nome} temáticos da Copa do Mundo 2026! ⚽`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #006400 0%, #008000 100%)" }}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
              Por que escolher a AFK para a Copa?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vantagens.map((v, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <span className="text-4xl mb-4 block">{v.icone}</span>
                  <h3 className="font-bold text-white text-lg mb-2">{v.titulo}</h3>
                  <p className="text-white/80 text-sm">{v.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-yellow-400">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-yellow-900 mb-4">
                🏆 Antecipe seu Pedido Copa 2026!
              </h2>
              <p className="text-yellow-800 text-lg mb-8">
                Não espere a Copa chegar para pedir seus produtos personalizados. 
                Entre em contato agora e garanta prioridade na produção!
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-green-700 text-white font-black text-xl rounded-full hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp Agora
              </a>
              <p className="mt-4 text-yellow-800 text-sm">
                Atendimento rápido • Curitiba e todo o Brasil
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
