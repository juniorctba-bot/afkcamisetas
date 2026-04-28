/**
 * Diferencial - AFK Camisetas
 * Página destacando os diferenciais da empresa
 */
import { Package, Users, Star, Heart, Zap, Shield, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const diferenciais = [
  {
    icon: Package,
    titulo: "Produção a partir de 3 unidades",
    descricao: "Enquanto a maioria das empresas do mercado exige pedidos mínimos de 50 a 100 peças, na AFK você pode personalizar a partir de apenas 3 unidades. Ideal para equipes menores, eventos exclusivos ou testes de novos produtos.",
    destaque: true,
  },
  {
    icon: Users,
    titulo: "Foco em Pequenas e Médias Empresas",
    descricao: "Entendemos a realidade das PMEs e oferecemos soluções que cabem no seu orçamento. Não importa o tamanho do seu negócio, você merece produtos de qualidade profissional.",
    destaque: false,
  },
  {
    icon: Star,
    titulo: "Qualidade Superior",
    descricao: "Selecionamos os melhores materiais e utilizamos tecnologia de sublimação de ponta para garantir um acabamento impecável e duradouro em cada produto.",
    destaque: false,
  },
  {
    icon: Heart,
    titulo: "Atendimento Consultivo",
    descricao: "Ajudamos você a escolher o melhor produto e a melhor técnica de personalização para o seu projeto. Não somos apenas fornecedores, somos parceiros criativos.",
    destaque: false,
  },
  {
    icon: Zap,
    titulo: "Agilidade na Entrega",
    descricao: "Processos otimizados para cumprir os prazos combinados, sem abrir mão da qualidade. Entregamos para todo o Brasil com agilidade.",
    destaque: false,
  },
  {
    icon: Shield,
    titulo: "Prova Virtual Antes da Produção",
    descricao: "Enviamos uma prova virtual detalhada de como seu produto ficará antes de iniciar a produção. Assim, você tem total segurança e controle sobre o resultado final.",
    destaque: false,
  },
];

const comparativo = [
  { item: "Pedido mínimo", afk: "3 unidades", outros: "50 a 100 unidades" },
  { item: "Atendimento", afk: "Consultivo e personalizado", outros: "Padronizado" },
  { item: "Prova virtual", afk: "Inclusa em todo pedido", outros: "Nem sempre disponível" },
  { item: "Foco", afk: "PMEs e pessoas físicas", outros: "Grandes empresas" },
  { item: "Variedade", afk: "20+ categorias de produtos", outros: "Limitado a poucos itens" },
  { item: "Entrega", afk: "Todo o Brasil + retirada em Curitiba", outros: "Variável" },
];

export default function Diferencial() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
              Diferencial
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A AFK Camisetas foi criada para preencher uma lacuna no mercado: oferecer personalização 
            de qualidade profissional com flexibilidade para pedidos de qualquer tamanho.
          </p>
        </div>
      </section>

      {/* Destaque Principal */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                <Package className="w-4 h-4" />
                Principal Diferencial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Atendemos a partir de 3 unidades
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Hoje o que encontramos no mercado são grandes empresas que trabalham e valorizam apenas 
                grandes quantidades, e MEIs que atendem o consumidor final com produtos limitados. 
                A AFK surge para ocupar este espaço!
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Podemos cobrir pequenas associações, times, torcidas e grupos que precisam de materiais 
                a partir de 3 unidades com valores justos. Mas também empresas que muitas vezes precisam 
                de 50 itens, não de mínimos de 300 unidades.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:shadow-xl transition-all"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src={`${CDN}/post1_imagem4_bee12c27.png`}
                alt="AFK - Atendemos a partir de 3 unidades"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Todos os Diferenciais */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Por que escolher a AFK?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {diferenciais.map((d, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all ${
                  d.destaque
                    ? "border-cyan-200 bg-cyan-50 shadow-lg shadow-cyan-500/10"
                    : "border-gray-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/5"
                }`}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${
                  d.destaque ? "bg-cyan-500 text-white" : "bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-600"
                }`}>
                  <d.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{d.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            AFK vs. Mercado Tradicional
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Veja como nos diferenciamos da concorrência.
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white text-sm font-semibold">
              <div className="p-4" />
              <div className="p-4 text-center bg-cyan-600">AFK Camisetas</div>
              <div className="p-4 text-center">Outros</div>
            </div>
            {comparativo.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-4 font-medium text-gray-900">{row.item}</div>
                <div className="p-4 text-center text-cyan-700 font-medium flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  {row.afk}
                </div>
                <div className="p-4 text-center text-gray-500">{row.outros}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para personalizar?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Conheça-nos e na próxima oportunidade orce seu produto e entenda como podemos diferenciar seu atendimento!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
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
