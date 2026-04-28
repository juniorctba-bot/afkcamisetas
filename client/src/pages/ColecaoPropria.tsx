/**
 * Coleção Própria - AFK Camisetas
 * Produtos próprios com links para Mercado Livre (aguardando links do cliente)
 */
import { ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Cole%C3%A7%C3%A3o%20Pr%C3%B3pria.";

// Placeholder - será preenchido com produtos reais e links do Mercado Livre
const produtos: { img: string; nome: string; preco: string; link: string }[] = [];

export default function ColecaoPropria() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            Coleção Exclusiva
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coleção{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
              Própria
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Conheça nossos produtos exclusivos com design autoral AFK. 
            Disponíveis para compra direta no Mercado Livre.
          </p>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {produtos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {produtos.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={p.img}
                      alt={p.nome}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{p.nome}</h3>
                    <p className="text-lg font-bold text-cyan-600">{p.preco}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-500 group-hover:text-cyan-600 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                      Comprar no Mercado Livre
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            /* Estado vazio - aguardando produtos */
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-yellow-50">
                <ShoppingBag className="w-12 h-12 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Em breve, nossa coleção completa!
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Estamos preparando nossa coleção própria com produtos exclusivos de design autoral AFK. 
                Em breve você poderá comprar diretamente pelo Mercado Livre.
              </p>
              <p className="text-gray-500 mb-8">
                Enquanto isso, confira nossos produtos personalizados e solicite um orçamento.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-xl transition-all text-lg"
              >
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
