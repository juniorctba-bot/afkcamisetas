/**
 * Copa2026 - Página dedicada Copa do Mundo 2026
 * Apresenta produtos em breve e CTA para antecipar orçamento
 */
import { Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerCopa2026 from "@/components/BannerCopa2026";
import {
  Trophy,
  Clock,
  MessageCircle,
  Shirt,
  Coffee,
  Package,
  Star,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";

const WHATSAPP_NUMBER = "5541987386527";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vi a página da Copa do Mundo 2026 no site da AFK Camisetas e gostaria de antecipar meu orçamento para produtos personalizados! 🏆⚽"
);

const produtosEmBreve = [
  {
    icon: Shirt,
    nome: "Camisetas Temáticas",
    descricao: "Camisetas personalizadas com estampas exclusivas da Copa do Mundo 2026. Verde, amarelo e muito estilo!",
    destaque: "Sublimação Full Print",
  },
  {
    icon: Coffee,
    nome: "Canecas & Copos",
    descricao: "Canecas e copos personalizados para torcer com estilo. Perfeitas para bares, restaurantes e torcedores.",
    destaque: "Sublimação HD",
  },
  {
    icon: Package,
    nome: "Kits Torcedor",
    descricao: "Kits completos com camiseta, bandeira, copo e acessórios personalizados para sua torcida.",
    destaque: "Kit Completo",
  },
  {
    icon: Star,
    nome: "Brindes Corporativos",
    descricao: "Brindes temáticos da Copa para sua empresa: chaveiros, canetas, bolsas e muito mais!",
    destaque: "Ideal para Empresas",
  },
  {
    icon: Users,
    nome: "Uniformes de Torcida",
    descricao: "Uniformes personalizados para grupos de torcedores, bares temáticos e eventos corporativos.",
    destaque: "Pedido Mínimo: 3 un.",
  },
  {
    icon: Zap,
    nome: "Acessórios Copa",
    descricao: "Bandeiras, bonés, mochilas e acessórios personalizados com a temática da Copa do Mundo 2026.",
    destaque: "Entrega Rápida",
  },
];

const vantagens = [
  {
    emoji: "⚡",
    titulo: "Antecipe e Garanta",
    texto: "Quem antecipa o pedido garante melhor prazo de entrega e pode planejar com calma.",
  },
  {
    emoji: "💰",
    titulo: "Preço Especial",
    texto: "Pedidos antecipados podem ter condições especiais. Entre em contato e consulte!",
  },
  {
    emoji: "🎨",
    titulo: "Arte Exclusiva",
    texto: "Nossa equipe cria artes exclusivas temáticas da Copa para o seu produto.",
  },
  {
    emoji: "📦",
    titulo: "Pedido Mínimo: 3 un.",
    texto: "Não precisa pedir centenas de peças. Atendemos pequenos grupos e grandes empresas.",
  },
];

export default function Copa2026() {
  useEffect(() => {
    document.title = "Copa do Mundo 2026 - Produtos Personalizados | AFK Camisetas";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <BannerCopa2026 />
      <Header />

      {/* Hero Section */}
      <section
        className="relative pb-20 overflow-hidden"
        style={{
          paddingTop: 'calc(var(--banner-height, 40px) + 80px)',
          background: "linear-gradient(135deg, #004d1a 0%, #006400 25%, #009c3b 50%, #FFDF00 80%, #f5c800 100%)",
        }}
      >
        {/* Padrão decorativo */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
              radial-gradient(circle at 60% 80%, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bolas decorativas */}
        <div className="absolute top-10 right-10 text-8xl opacity-10 select-none hidden md:block">⚽</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10 select-none hidden md:block">🏆</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-10 select-none hidden lg:block">🇧🇷</div>

        <div className="container relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 text-xs font-black px-4 py-2 rounded-full mb-6 uppercase tracking-wider shadow-lg">
            <Trophy className="w-4 h-4" />
            <span>Copa do Mundo 2026 — EUA, Canadá e México</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            🇧🇷 Prepare sua Torcida
            <br />
            <span className="text-yellow-300">para o HEXA!</span>
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Em breve teremos uma linha completa de produtos personalizados para a Copa do Mundo 2026.
            <br />
            <strong className="text-yellow-300">Mas se você já sabe o que quer, antecipe e entre em contato para orçar!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-800 font-black px-8 py-4 rounded-full text-lg shadow-xl hover:bg-yellow-50 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Antecipar Meu Orçamento
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 bg-green-900/50 border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-green-900/70 transition-all"
            >
              Ver Produtos em Breve
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Countdown / Em Breve */}
      <section className="py-10 bg-green-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-yellow-400 font-black text-xl">Copa do Mundo 2026</p>
                <p className="text-green-200 text-sm">11 de junho a 19 de julho de 2026</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-green-700" />
            <div className="text-center">
              <p className="text-white font-bold text-lg">🏟️ Sedes: EUA, Canadá e México</p>
              <p className="text-green-300 text-sm">48 seleções — Maior Copa da história!</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-green-700" />
            <div className="text-center">
              <p className="text-yellow-400 font-black text-lg">⚽ Brasil na Copa!</p>
              <p className="text-green-300 text-sm">Vamos juntos torcer pelo HEXA!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Breve */}
      <section id="produtos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              Em Breve
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Produtos que estão por vir 🏆
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Estamos preparando uma linha especial para a Copa. Mas se você já sabe o que precisa,{" "}
              <strong className="text-green-700">entre em contato agora e antecipe seu pedido!</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {produtosEmBreve.map((produto, idx) => {
              const Icon = produto.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <Icon className="w-6 h-6 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{produto.nome}</h3>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                          {produto.destaque}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{produto.descricao}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA central */}
          <div className="text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-black px-10 py-5 rounded-full text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Quero Antecipar Meu Orçamento!
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Resposta rápida pelo WhatsApp · Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* Por que antecipar */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Por que antecipar seu pedido? 💡
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Quem planeja com antecedência garante mais tempo, mais qualidade e mais tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantagens.map((v, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all"
              >
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="font-black text-gray-900 mb-2">{v.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagens de referência */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-green-700">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                🇧🇷 Personalize sua torcida
                <br />
                <span className="text-yellow-300">do jeito que você quiser!</span>
              </h2>
              <p className="text-green-200 text-lg mb-6 leading-relaxed">
                Na AFK Camisetas, você personaliza qualquer produto com a sua arte ou a nossa.
                Camisetas, canecas, brindes, kits completos — tudo com qualidade e entrega rápida em Curitiba e região.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black px-8 py-4 rounded-full text-lg shadow-lg transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento Agora
                </a>
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all"
                >
                  Ver Todos os Produtos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="/images/copa_kit_torcida.jpg"
                alt="Kit torcedor personalizado Copa do Mundo"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: "200px" }}
              />
              <img
                src="/images/copa_kit_verde.jpg"
                alt="Camiseta personalizada Copa do Mundo verde"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: "200px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-10">
            Dúvidas frequentes ❓
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Quando os produtos da Copa estarão disponíveis?",
                a: "Estamos preparando a linha completa. Em breve lançaremos os produtos oficiais. Mas se você já sabe o que precisa, pode entrar em contato agora e já começamos a trabalhar no seu pedido!",
              },
              {
                q: "Qual o pedido mínimo?",
                a: "Atendemos a partir de 3 unidades! Não precisa pedir centenas de peças para personalizar seus produtos.",
              },
              {
                q: "Vocês criam a arte ou preciso enviar pronta?",
                a: "Podemos criar a arte para você ou utilizar a arte que você enviar. Nossa equipe de design está pronta para ajudar!",
              },
              {
                q: "Qual o prazo de entrega?",
                a: "O prazo varia conforme o produto e quantidade. Em geral, trabalhamos com 5 a 10 dias úteis após aprovação da arte. Pedidos antecipados têm mais flexibilidade de prazo.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">▶</span>
                  {item.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #006400 0%, #009c3b 50%, #FFDF00 100%)",
        }}
      >
        <div className="container">
          <div className="text-6xl mb-6">⚽🏆🇧🇷</div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
            Vamos juntos torcer pelo HEXA!
          </h2>
          <p className="text-green-100 text-xl mb-8 max-w-xl mx-auto">
            Entre em contato agora e antecipe seus produtos personalizados para a Copa do Mundo 2026.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-800 font-black px-12 py-5 rounded-full text-xl shadow-2xl hover:bg-yellow-50 transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
