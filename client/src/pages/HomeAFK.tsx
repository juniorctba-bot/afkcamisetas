/**
 * Home Page - AFK Camisetas
 * Página principal com banners, hero, produtos em destaque e benefícios
 * Otimizada para SEO com palavras-chave relevantes
 */
import { ArrowRight, Users, Zap, Heart, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

const produtosDestaque = [
  { 
    id: 1, 
    nome: "Canecas Personalizadas", 
    categoria: "Canecas",
    imagem: "/images/canecas_personalizadas.png",
    alt: "Canecas personalizadas com sublimação em Curitiba - AFK Camisetas"
  },
  { 
    id: 2, 
    nome: "Chinelos Personalizados", 
    categoria: "Calçados",
    imagem: "/images/chinelos_personalizados.png",
    alt: "Chinelos personalizados com estampa exclusiva - AFK Camisetas Curitiba"
  },
  { 
    id: 3, 
    nome: "Camisetas e Moletons", 
    categoria: "Vestuário",
    imagem: "/images/camisetas_personalizadas.png",
    alt: "Camisetas e moletons personalizados para eventos e empresas - AFK Curitiba"
  },
  { 
    id: 4, 
    nome: "Mochilas e Necessaires", 
    categoria: "Bolsas",
    imagem: "/images/mochilas_necessaires.png",
    alt: "Mochilas e necessaires personalizadas - Brindes corporativos AFK"
  },
  { 
    id: 5, 
    nome: "Acessórios Personalizados", 
    categoria: "Acessórios",
    imagem: "/images/acessorios_personalizados.png",
    alt: "Acessórios personalizados - Chaveiros, capas de celular e mais - AFK"
  },
  { 
    id: 6, 
    nome: "E Muito Mais!", 
    categoria: "Diversos",
    imagem: "/images/muito_mais.png",
    alt: "Diversos produtos personalizados - Brindes e presentes - AFK Camisetas"
  },
];

const beneficios = [
  {
    icon: Users,
    titulo: "Pedido Mínimo: 3 Unidades",
    descricao: "Atendemos pequenos grupos, associações, times e empresas. Não precisa pedir 300 unidades para personalizar seus produtos!",
  },
  {
    icon: Zap,
    titulo: "Entrega Rápida em Curitiba",
    descricao: "Produção ágil e entrega expressa para Curitiba e região metropolitana do Paraná.",
  },
  {
    icon: Heart,
    titulo: "Qualidade Garantida",
    descricao: "Sublimação de alta resolução e materiais de primeira linha para produtos duráveis e bonitos.",
  },
];

const servicosOferecidos = [
  "Camisetas personalizadas para eventos",
  "Uniformes para empresas",
  "Abadás para blocos de carnaval",
  "Brindes corporativos",
  "Presentes personalizados",
  "Etiquetas escolares",
  "Produtos para festas",
  "Lembrancinhas personalizadas",
];

export default function HomeAFK() {
  // Atualizar título da página para SEO
  useEffect(() => {
    document.title = "AFK Camisetas Personalizadas Curitiba | Camisetas, Bonés, Canecas e Muito Mais";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Banners Promocionais */}
        <div className="flex flex-col md:flex-row">
          <Link 
            href="/volta-as-aulas"
            className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
            aria-label="Promoção Volta às Aulas 2026 - Etiquetas personalizadas"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <p className="font-bold text-white">Volta às Aulas 2026</p>
                <p className="text-white/80 text-sm">Etiquetas personalizadas a partir de R$ 8,50</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
          
          <Link 
            href="/colecoes/carnaval-2026"
            className="flex-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
            aria-label="Coleção Carnaval 2026 - Abadás e acessórios personalizados"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                <span className="text-xl">🎉</span>
              </div>
              <div>
                <p className="font-bold text-white drop-shadow-md">Unidos da AFK - Carnaval 2026</p>
                <p className="text-white/90 text-sm drop-shadow">Abadás, acessórios e muito mais para sua folia!</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1 flex justify-center">
                <img 
                  src="/images/afk_eventos.png" 
                  alt="AFK Camisetas Personalizadas Curitiba - Eventos Especiais - Camisetas, bonés, canecas e muito mais" 
                  className="max-w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: "500px" }}
                  loading="eager"
                />
              </div>
              
              {/* Right - Text Content */}
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Camisetas Personalizadas em Curitiba
                </h1>
                <p className="text-xl text-white/90 mb-4">
                  <strong>AFK Camisetas e Muito Mais</strong> - Sua loja de produtos personalizados em Curitiba.
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Camisetas, bonés, canecas, chinelos, mochilas e muito mais. Pedido mínimo de apenas 3 unidades. 
                  Atendemos eventos, empresas, escolas e pessoas físicas com qualidade e agilidade.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/orcamento"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Faça seu Orçamento Grátis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    href="/produtos"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    Ver Catálogo de Produtos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="py-16 md:py-24 bg-gray-50" id="produtos">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Produtos Personalizados em Destaque
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Confira alguns dos nossos produtos mais populares. Todos podem ser personalizados com sua arte, 
                logo ou mensagem. Sublimação de alta qualidade em Curitiba.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtosDestaque.map((produto) => (
                <article 
                  key={produto.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                      {produto.categoria}
                    </span>
                    <h3 className="font-semibold text-gray-900 mt-2 mb-3 text-lg">
                      {produto.nome}
                    </h3>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${produto.nome}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                      aria-label={`Solicitar orçamento para ${produto.nome}`}
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/produtos"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-pink-500 text-pink-600 font-semibold rounded-full hover:bg-pink-50 transition-colors"
              >
                Ver Todos os Produtos Personalizados
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Por que escolher a AFK */}
        <section className="py-16 md:py-24" id="diferenciais">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Por que escolher a AFK Camisetas?
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Somos especialistas em personalização de produtos em Curitiba, com anos de experiência 
              atendendo eventos, empresas e clientes particulares.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <beneficio.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {beneficio.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços - SEO Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Nossos Serviços de Personalização
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de serviços de personalização em Curitiba e região.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {servicosOferecidos.map((servico, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <p className="font-medium text-gray-800">{servico}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localização - SEO Local */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
                Produtos Personalizados em Curitiba
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <MapPin className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">Localização</h3>
                  <p className="text-gray-600">Curitiba - PR</p>
                  <p className="text-gray-500 text-sm">Atendemos toda a região metropolitana</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <Phone className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="text-pink-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (41) 98738-6527
                  </a>
                  <p className="text-gray-500 text-sm">Atendimento rápido</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <Mail className="w-10 h-10 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
                  <a 
                    href="mailto:afkcamisetas@gmail.com.br"
                    className="text-pink-600 hover:underline"
                  >
                    afkcamisetas@gmail.com.br
                  </a>
                  <p className="text-gray-500 text-sm">Orçamentos e dúvidas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para personalizar seus produtos?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba seu orçamento sem compromisso. 
              Atendemos Curitiba e toda a região metropolitana do Paraná.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/orcamento"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para produtos personalizados.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
