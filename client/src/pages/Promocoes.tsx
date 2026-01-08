/**
 * Promoções - AFK Camisetas
 * Página de promoções ativas
 */
import { ArrowRight, Gift, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const promocoes = [
  {
    id: 1,
    titulo: "Natal 2025",
    subtitulo: "Presenteie com produtos personalizados",
    descricao: "Canecas, camisetas, almofadas e muito mais para presentear quem você ama neste Natal.",
    cor: "from-red-500 to-green-500",
    validade: "Até 25/12/2025",
    href: "/colecoes/natal-2025",
    destaque: false,
  },
  {
    id: 2,
    titulo: "Carnaval 2026",
    subtitulo: "Camisetas para blocos e grupos",
    descricao: "Camisetas personalizadas para blocos de carnaval, escolas de samba e grupos de amigos.",
    cor: "from-purple-500 to-pink-500",
    validade: "Até 15/02/2026",
    href: "/colecoes/carnaval-2026",
    destaque: false,
  },
  {
    id: 3,
    titulo: "Volta às Aulas 2026",
    subtitulo: "Etiquetas a partir de R$ 6,50",
    descricao: "Etiquetas personalizadas para identificar materiais escolares. Nunca mais perca os itens do seu filho!",
    cor: "from-cyan-400 to-blue-500",
    validade: "Até 30/01/2026",
    href: "/volta-as-aulas",
    destaque: true,
  },
];

export default function Promocoes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-10 h-10 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Promoções
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Confira nossas ofertas especiais e aproveite!
            </p>
          </div>
        </section>

        {/* Promoções */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promocoes.map((promo) => (
                <Link
                  key={promo.id}
                  href={promo.href}
                  className={`block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
                    promo.destaque ? "ring-2 ring-pink-500" : ""
                  }`}
                >
                  <div className={`h-32 bg-gradient-to-r ${promo.cor} flex items-center justify-center relative`}>
                    {promo.destaque && (
                      <span className="absolute top-3 right-3 bg-white text-pink-600 text-xs font-bold px-2 py-1 rounded-full">
                        DESTAQUE
                      </span>
                    )}
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {promo.titulo}
                    </h3>
                    <p className="text-pink-600 font-medium mb-3">
                      {promo.subtitulo}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {promo.descricao}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {promo.validade}
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-pink-600">
                        Ver mais
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <Tag className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fique por dentro das novidades!
              </h2>
              <p className="text-gray-600 mb-6">
                Siga nossas redes sociais para não perder nenhuma promoção e receber ofertas exclusivas.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com/afkcamisetas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
