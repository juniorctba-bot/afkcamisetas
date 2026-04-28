/**
 * Para Empresas - AFK Camisetas
 * Página B2B com soluções corporativas
 */
import { ArrowRight, Briefcase, Gift, UserPlus, CalendarDays, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20solu%C3%A7%C3%B5es%20corporativas.";

const solucoes = [
  {
    id: "uniformes",
    icon: Briefcase,
    titulo: "Uniformes Corporativos",
    descricao: "Camisetas, polos, moletons e jaquetas que vestem sua equipe com conforto e profissionalismo. Personalização com a identidade visual da sua empresa.",
    itens: ["Camisetas polo", "Camisetas gola V e redonda", "Moletons e jaquetas", "Aventais e bermudas"],
    img: `${CDN}/afk_camisetas_vestuario_aeba1b02.png`,
  },
  {
    id: "brindes",
    icon: Gift,
    titulo: "Brindes Personalizados",
    descricao: "Canecas, bonés, ecobags, chaveiros e muito mais para fortalecer o relacionamento com seus clientes e colaboradores.",
    itens: ["Canecas e copos", "Bonés e chapéus", "Ecobags e necessaires", "Chaveiros e acessórios"],
    img: `${CDN}/afk_copos_266d485a.png`,
  },
  {
    id: "kit-onboarding",
    icon: UserPlus,
    titulo: "Kit Onboarding",
    descricao: "Receba novos colaboradores com um kit personalizado que transmite a cultura da empresa desde o primeiro dia. Crie uma experiência memorável de boas-vindas.",
    itens: ["Camiseta com logo da empresa", "Caneca personalizada", "Caderno/agenda corporativa", "Ecobag ou necessaire"],
    img: `${CDN}/afk_muito_mais-Copia_b8122a4d.png`,
  },
  {
    id: "eventos",
    icon: CalendarDays,
    titulo: "Eventos e Feiras",
    descricao: "Produtos personalizados para feiras, congressos e confraternizações, garantindo que sua marca seja lembrada por todos os participantes.",
    itens: ["Camisetas do evento", "Brindes para participantes", "Material promocional", "Decoração personalizada"],
    img: `${CDN}/afk_decoracao_ce9d3b3f.png`,
  },
];

const catalogos = [
  {
    titulo: "Catálogo Natal 2025",
    desc: "Ideias de presentes e brindes para o fim de ano",
    href: `${CDN}/Catalogo-Natal-AFK-2025(1)_be26d8d5.pdf`,
  },
  {
    titulo: "Coleção Carnaval 2026",
    desc: "Produtos temáticos para o carnaval",
    href: `${CDN}/COLEÇÃO_CARNAVAL_2026_-_Bloco_Garibaldis_e_Sacis(1)_703e60af.pptx`,
  },
];

export default function ParaEmpresas() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Soluções Corporativas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções para{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                sua empresa
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Fortalecer a identidade de marca vai muito além do logo. Uniformes e brindes bem pensados 
              comunicam profissionalismo, coesão e cuidado com os detalhes. Na AFK Camisetas, ajudamos 
              pequenas e médias empresas a criar produtos personalizados que representam verdadeiramente seus valores.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all text-lg"
            >
              Solicitar Proposta Comercial
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Nossas Soluções Corporativas
          </h2>
          <div className="space-y-16">
            {solucoes.map((sol, i) => (
              <div
                key={sol.id}
                id={sol.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-600">
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{sol.titulo}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{sol.descricao}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {sol.itens.map((item) => (
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
                    className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                  >
                    Solicitar orçamento
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={sol.img}
                    alt={sol.titulo}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogos */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Catálogos e Materiais
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {catalogos.map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {cat.titulo}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos fortalecer sua marca?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e descubra as melhores soluções em personalização para sua empresa. 
            Produção a partir de 3 unidades!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
          >
            Falar com um Consultor
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
