/**
 * O Que Já Fizemos - AFK Camisetas
 * Portfólio de trabalhos realizados (aguardando fotos do cliente)
 */
import { ArrowRight, Camera, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento.";

// Placeholder - será preenchido com fotos reais do cliente
const trabalhos: { img: string; titulo: string; categoria: string }[] = [];

export default function OQueJaFizemos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            <Camera className="w-4 h-4" />
            Nosso Portfólio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Já{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
              Fizemos
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Confira alguns dos projetos que já realizamos para nossos clientes. 
            Cada trabalho é único e feito com dedicação e qualidade.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {trabalhos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trabalhos.map((t, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-100">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={t.img}
                      alt={t.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">{t.categoria}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{t.titulo}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Estado vazio - aguardando fotos */
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-50 to-teal-50">
                <ImageIcon className="w-12 h-12 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Em breve, nosso portfólio completo!
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Estamos preparando uma galeria com fotos dos nossos melhores trabalhos. 
                Enquanto isso, confira nossos produtos e entre em contato para ver exemplos 
                de projetos já realizados.
              </p>
              
              {/* Preview com imagens de categorias */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={`${CDN}/afk_camisetas_vestuario_aeba1b02.png`} alt="Vestuário" className="w-full h-full object-cover object-top" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={`${CDN}/afk_bones_a1749979.png`} alt="Bonés" className="w-full h-full object-cover object-top" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={`${CDN}/afk_copos_266d485a.png`} alt="Copos" className="w-full h-full object-cover object-top" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img src={`${CDN}/afk_decoracao_ce9d3b3f.png`} alt="Decoração" className="w-full h-full object-cover object-top" />
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl transition-all text-lg"
              >
                Ver exemplos no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer ser nosso próximo case de sucesso?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e vamos criar algo incrível juntos. Produção a partir de 3 unidades!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
