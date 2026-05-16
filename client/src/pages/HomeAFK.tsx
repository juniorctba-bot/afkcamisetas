/**
 * Home Page - AFK Camisetas
 * Landing page institucional com foco B2B
 */
import { ArrowRight, Users, Zap, Heart, Shield, Package, Star } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const CATALOGO_DIA_DOS_NAMORADOS_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029766214/GezWpIGpxdrOLHLd.pdf";
const BANNER_DIA_DOS_NAMORADOS_EXPIRA_EM = new Date("2026-06-12T00:00:00-03:00");

const categorias = [
  {
    nome: "Vestuário",
    desc: "Camisetas, moletons, bermudas e aventais",
    img: `${CDN}/afk_camisetas_vestuario_aeba1b02.png`,
  },
  {
    nome: "Bonés",
    desc: "Bonés e chapéus personalizados",
    img: `${CDN}/afk_bones_a1749979.png`,
  },
  {
    nome: "Canecas e Copos",
    desc: "Canecas, copos e squeezes",
    img: `${CDN}/afk_copos_266d485a.png`,
  },
  {
    nome: "Decoração",
    desc: "Almofadas, azulejos, quadros e pratos",
    img: `${CDN}/afk_decoracao_ce9d3b3f.png`,
  },
];

const diferenciais = [
  {
    icon: Package,
    titulo: "A partir de 3 unidades",
    descricao: "Enquanto a concorrência exige 50 a 100 peças, nós atendemos pedidos a partir de 3 unidades.",
  },
  {
    icon: Users,
    titulo: "Foco em PMEs",
    descricao: "Entendemos a realidade de pequenas e médias empresas e oferecemos soluções que cabem no seu orçamento.",
  },
  {
    icon: Star,
    titulo: "Qualidade Superior",
    descricao: "Materiais de primeira linha e tecnologia de sublimação de alta resolução para acabamento impecável.",
  },
  {
    icon: Heart,
    titulo: "Atendimento Consultivo",
    descricao: "Ajudamos você a escolher o melhor produto e técnica de personalização para o seu projeto.",
  },
  {
    icon: Zap,
    titulo: "Entrega Rápida",
    descricao: "Processos otimizados para cumprir prazos com agilidade, sem abrir mão da qualidade.",
  },
  {
    icon: Shield,
    titulo: "Garantia de Satisfação",
    descricao: "Prova virtual antes da produção para total segurança. Sua aprovação é nossa prioridade.",
  },
];

const casosDeUso = [
  { titulo: "Startups", desc: "Uniformes para equipes em crescimento" },
  { titulo: "Eventos Corporativos", desc: "Brindes exclusivos para conferências" },
  { titulo: "Equipes Remotas", desc: "Fortaleça o senso de pertencimento" },
  { titulo: "Clubes e Associações", desc: "Identidade visual para sua comunidade" },
  { titulo: "Pequenos Comércios", desc: "Profissionalismo no dia a dia" },
  { titulo: "Presentes Especiais", desc: "Produtos únicos e personalizados" },
];

export default function HomeAFK() {
  const exibirBannerDiaDosNamorados = new Date() < BANNER_DIA_DOS_NAMORADOS_EXPIRA_EM;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {exibirBannerDiaDosNamorados && (
        <section className="relative pt-20 md:pt-24 bg-gradient-to-r from-rose-50 via-pink-50 to-orange-50 border-b border-rose-100 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-40 bg-rose-200/30 blur-3xl" />
          <div className="absolute inset-y-0 right-0 w-40 bg-orange-200/30 blur-3xl" />
          <div className="container relative z-10 py-5 md:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl bg-white/80 backdrop-blur-sm border border-white shadow-lg shadow-rose-500/10 px-5 md:px-8 py-5">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-white items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-1">
                    Especial Dia dos Namorados
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    Confira o catálogo especial de presentes personalizados
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Disponível por tempo limitado, somente até 11/06.
                  </p>
                </div>
              </div>
              <a
                href={CATALOGO_DIA_DOS_NAMORADOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-400 text-white font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/25 transition-all whitespace-nowrap"
              >
                Acessar Catálogo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-orange-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                <Package className="w-4 h-4" />
                A partir de 3 unidades
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Personalizamos{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  suas ideias
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Soluções criativas em brindes e uniformes para empresas, grupos e eventos. 
                Qualidade e estilo que fortalecem sua marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all text-lg"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/para-empresas"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-cyan-500 hover:text-cyan-600 transition-all text-lg"
                >
                  Soluções Corporativas
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Curitiba e Região
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Atendemos todo o Brasil
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${CDN}/afk_muito_mais-Copia_b8122a4d.png`}
                alt="Produtos AFK Camisetas - Stickers, mousepads, chaveiros, cadernos e muito mais"
                className="w-full max-w-lg mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a AFK?
            </h2>
            <p className="text-gray-600 text-lg">
              Nosso compromisso é entregar qualidade, criatividade e flexibilidade para projetos de qualquer tamanho.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((d, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                  <d.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{d.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-gray-600 text-lg">
              Catálogo completo de produtos personalizáveis para atender às necessidades da sua empresa ou grupo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map((cat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.nome}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{cat.nome}</h3>
                  <p className="text-white/80 text-sm mt-1">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/para-empresas"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
            >
              Ver todas as soluções
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de Categorias Completo */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mais de 20 categorias de produtos
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                De camisetas a azulejos, de canecas a chaveiros. Temos a solução perfeita para 
                personalizar qualquer item com a sua marca.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["Camisetas", "Moletons", "Bermudas", "Bonés", "Canecas", "Chinelos", "Aventais", "Almofadas", "Azulejos", "Quadros", "Toalhas", "Copos", "Chaveiros", "Agendas", "Capinhas", "Necessaires"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div>
              <img
                src={`${CDN}/Designsemnome(2)_9a9563d0.webp`}
                alt="Todas as categorias de produtos AFK Camisetas"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Para quem é a AFK?
            </h2>
            <p className="text-gray-300 text-lg">
              Atendemos desde pequenas equipes até grandes eventos. Veja como podemos ajudar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosDeUso.map((caso, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{caso.titulo}</h3>
                <p className="text-gray-400 text-sm">{caso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-gray-600 text-lg">
              Da ideia à entrega, nosso processo é simples e transparente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", titulo: "Contato e Briefing", desc: "Você nos conta sua ideia e nós ajudamos a transformá-la em um projeto viável." },
              { step: "02", titulo: "Orçamento e Prova", desc: "Enviamos orçamento detalhado e prova virtual de como seu produto ficará." },
              { step: "03", titulo: "Produção", desc: "Com sua aprovação, iniciamos a personalização cuidando de cada detalhe." },
              { step: "04", titulo: "Entrega", desc: "Pedido conferido, embalado e enviado para qualquer lugar do Brasil." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.titulo}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua ideia em realidade!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato com a AFK Camisetas e solicite um orçamento personalizado. 
            Produzimos a partir de 3 unidades!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-lg"
            >
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
