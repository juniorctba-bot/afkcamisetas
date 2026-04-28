/**
 * Sobre Nós - AFK Camisetas
 * Página institucional sobre a empresa
 */
import { Target, Eye, Heart, Calendar, MapPin, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";

const valores = [
  { icon: Heart, titulo: "Qualidade em cada detalhe", desc: "Selecionamos os melhores materiais e utilizamos tecnologia de ponta." },
  { icon: Target, titulo: "Atendimento personalizado", desc: "Cada cliente é único e merece atenção especial ao seu projeto." },
  { icon: Calendar, titulo: "Flexibilidade e agilidade", desc: "Processos otimizados para cumprir prazos sem abrir mão da qualidade." },
  { icon: Award, titulo: "Criatividade e inovação", desc: "Buscamos sempre as melhores soluções criativas para cada projeto." },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Sobre a{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                  AFK Camisetas
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A AFK Camisetas nasceu da paixão por criar e personalizar. Entendemos que cada marca tem 
                uma história única, e nosso propósito é contá-la através de produtos que vestem e representam.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos o parceiro ideal para pequenas e médias empresas que buscam fortalecer sua identidade 
                visual com uniformes, brindes e itens promocionais. Nossa equipe se dedica a entender as 
                necessidades de cada cliente, oferecendo consultoria criativa e as melhores soluções em personalização.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com um processo de produção moderno e flexível, atendemos desde grandes volumes até pedidos 
                especiais a partir de 3 unidades, sempre com o mesmo padrão de qualidade e atenção aos detalhes.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm font-medium">Fundada em outubro de 2022</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm font-medium">Curitiba - PR</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={`${CDN}/post1_imagem1_3e8545ca.png`}
                alt="AFK Camisetas - Personalizamos suas ideias"
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500 text-white mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Democratizar a personalização de produtos, oferecendo qualidade profissional com 
                atendimento humanizado e flexibilidade para pedidos de qualquer tamanho.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Nossa Visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser referência em personalização no Paraná, reconhecida pela qualidade, 
                criatividade e compromisso com cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {valores.map((v, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.titulo}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Como Produzimos
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Da ideia à entrega, nosso processo é pensado para ser simples e transparente.
          </p>
          <div className="space-y-8">
            {[
              { step: "1", titulo: "Contato e Briefing", desc: "Você nos conta sua ideia, e nós ajudamos a transformá-la em um projeto viável. Entendemos suas necessidades e sugerimos as melhores opções." },
              { step: "2", titulo: "Orçamento e Prova Virtual", desc: "Enviamos um orçamento detalhado e uma prova virtual de como seu produto ficará. Assim, você tem total segurança antes da produção." },
              { step: "3", titulo: "Produção", desc: "Com sua aprovação, iniciamos a personalização dos itens, cuidando de cada detalhe para garantir qualidade e fidelidade ao projeto aprovado." },
              { step: "4", titulo: "Entrega", desc: "Seu pedido é conferido, embalado com cuidado e enviado para você em qualquer lugar do Brasil. Retirada em Curitiba também disponível." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
