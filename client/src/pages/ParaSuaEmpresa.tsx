/**
 * Para sua Empresa - AFK Camisetas
 * Página B2B para empresas
 */
import { Building2, Users, Award, Clock, CheckCircle, MessageCircle, Calendar, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

const beneficios = [
  {
    icon: Users,
    titulo: "Uniformes Corporativos",
    descricao: "Camisetas polo, camisetas básicas e uniformes completos para sua equipe com sua logo sublimada.",
  },
  {
    icon: Gift,
    titulo: "Brindes Corporativos",
    descricao: "Canecas, squeezes, ecobags, necessaires e muito mais para presentear clientes e colaboradores.",
  },
  {
    icon: Calendar,
    titulo: "Datas Comemorativas",
    descricao: "Kits especiais para Dia das Mães, Pais, Outubro Rosa, Novembro Azul, Natal e outras datas.",
  },
  {
    icon: Award,
    titulo: "Qualidade Premium",
    descricao: "Sublimação de alta resolução que não desbota, não descasca e mantém as cores vibrantes.",
  },
  {
    icon: Clock,
    titulo: "Entrega Rápida",
    descricao: "Produção ágil e entrega expressa para Curitiba e região metropolitana.",
  },
  {
    icon: Building2,
    titulo: "Atendimento Personalizado",
    descricao: "Consultoria para escolher os melhores produtos e materiais para sua empresa.",
  },
];

const produtos = [
  { nome: "Camisetas Polo", imagem: "/images/produtos/kit-produtos.jpeg" },
  { nome: "Camisetas Básicas", imagem: "/images/produtos/kit-produtos-variados.jpeg" },
  { nome: "Canecas", imagem: "/images/produtos/canecas-personalizadas.jpeg" },
  { nome: "Squeezes", imagem: "/images/produtos/kit-produtos.jpeg" },
  { nome: "Ecobags", imagem: "/images/produtos/kit-produtos-variados.jpeg" },
  { nome: "Necessaires", imagem: "/images/produtos/kit-produtos.jpeg" },
];

export default function ParaSuaEmpresa() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-6">
                Soluções B2B
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Produtos Personalizados para sua Empresa
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Uniformes, brindes corporativos e kits promocionais com sublimação de alta qualidade. 
                Fortaleça sua marca com produtos exclusivos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para produtos corporativos para minha empresa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
                <a
                  href="/catalogos-promocionais"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
                >
                  Ver Catálogos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Por que escolher a AFK para sua empresa?
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Somos especialistas em personalização de produtos corporativos em Curitiba, 
              com anos de experiência atendendo empresas de todos os portes.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;
                return (
                  <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-gray-600">
                      {beneficio.descricao}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Produtos para Empresas
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Confira alguns dos produtos mais solicitados por nossos clientes corporativos.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {produtos.map((produto, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-gray-900 text-sm">
                      {produto.nome}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="/produtos?filtro=para-empresa"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
              >
                Ver Todos os Produtos
              </a>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Nossos Diferenciais
              </h2>
              
              <div className="space-y-4">
                {[
                  "Pedido mínimo de apenas 3 unidades",
                  "Sublimação de alta resolução que não desbota",
                  "Entrega rápida para Curitiba e região",
                  "Orçamento sem compromisso",
                  "Atendimento personalizado via WhatsApp",
                  "Consultoria para escolher os melhores produtos",
                  "Possibilidade de amostras antes da produção",
                  "Nota fiscal para sua empresa",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para fortalecer sua marca?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Entre em contato agora e receba um orçamento personalizado para sua empresa. 
              Atendemos Curitiba e toda a região metropolitana.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para produtos corporativos para minha empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Consultor
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
