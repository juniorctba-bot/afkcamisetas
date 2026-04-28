/**
 * Para Você (Pessoas Físicas) - AFK Camisetas
 */
import { ArrowRight, Gift, PartyPopper, Home, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20personalizar%20um%20produto.";

const solucoes = [
  {
    id: "presentes",
    icon: Gift,
    titulo: "Presentes Personalizados",
    descricao: "Surpreenda quem você ama com presentes únicos e exclusivos. Canecas, camisetas, almofadas e muito mais com a cara de quem vai receber.",
    itens: ["Canecas com fotos", "Camisetas exclusivas", "Almofadas personalizadas", "Chaveiros e acessórios"],
    img: `${CDN}/afk_copos_266d485a.png`,
  },
  {
    id: "eventos",
    icon: PartyPopper,
    titulo: "Eventos e Festas",
    descricao: "Aniversários, formaturas, despedidas, chás de bebê... Personalize produtos para tornar seu evento ainda mais especial e memorável.",
    itens: ["Camisetas temáticas", "Bonés personalizados", "Brindes para convidados", "Decoração exclusiva"],
    img: `${CDN}/afk_bones_a1749979.png`,
  },
  {
    id: "decoracao",
    icon: Home,
    titulo: "Decoração Personalizada",
    descricao: "Transforme sua casa com peças únicas. Almofadas, azulejos, quadros e pratos decorativos com estampas exclusivas.",
    itens: ["Almofadas decorativas", "Azulejos personalizados", "Quadros exclusivos", "Pratos decorativos"],
    img: `${CDN}/afk_decoracao_ce9d3b3f.png`,
  },
];

const catalogos = [
  {
    titulo: "Catálogo Natal 2025",
    desc: "Ideias de presentes personalizados para o Natal",
    href: `${CDN}/Catalogo-Natal-AFK-2025(1)_be26d8d5.pdf`,
  },
  {
    titulo: "Coleção Carnaval 2026",
    desc: "Produtos temáticos para curtir o carnaval",
    href: `${CDN}/COLEÇÃO_CARNAVAL_2026_-_Bloco_Garibaldis_e_Sacis(1)_703e60af.pptx`,
  },
];

export default function ParaVoce() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <Gift className="w-4 h-4" />
              Para Pessoas Físicas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Personalize{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                para você
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Presentes únicos, decoração exclusiva e produtos personalizados para seus eventos especiais. 
              Na AFK, transformamos suas ideias em produtos que encantam. A partir de 3 unidades!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/25 transition-all text-lg"
            >
              Quero Personalizar
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="space-y-16">
            {solucoes.map((sol, i) => (
              <div
                key={sol.id}
                id={sol.id}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 text-orange-600">
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{sol.titulo}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{sol.descricao}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {sol.itens.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
            Catálogos e Inspirações
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {catalogos.map((cat, i) => (
              <a
                key={i}
                href={cat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {cat.titulo}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-500 flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme suas ideias em realidade!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Presentes, decoração, eventos... Personalizamos tudo com qualidade e carinho. 
            A partir de 3 unidades!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
          >
            Falar no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
