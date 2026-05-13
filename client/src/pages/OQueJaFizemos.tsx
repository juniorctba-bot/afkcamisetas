/**
 * O Que Já Fizemos - AFK Camisetas
 * Portfólio de trabalhos realizados com fotos reais
 */
import { useState } from "react";
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";
const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20e%20gostaria%20de%20um%20or%C3%A7amento.";

const trabalhos = [
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.07PM_286d0904.jpeg`, titulo: "Camiseta Personalizada", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.13PM_99f99b21.jpeg`, titulo: "Estampa Exclusiva", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.18PM_cb58c931.jpeg`, titulo: "Projeto Especial", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.24PM_b54f7261.jpeg`, titulo: "Personalização Criativa", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.25PM_1cf076f5.jpeg`, titulo: "Produto Sob Medida", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.26PM_fa71ff2f.jpeg`, titulo: "Camiseta Temática", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.27PM_d36acbed.jpeg`, titulo: "Estampa Artística", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.29PM_d84b518f.jpeg`, titulo: "Projeto Corporativo", categoria: "Empresas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.30PM_fd50d13f.jpeg`, titulo: "Uniforme Personalizado", categoria: "Empresas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.32PM(1)_325bfb4e.jpeg`, titulo: "Kit Especial", categoria: "Kits" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.32PM_0dafe7f0.jpeg`, titulo: "Produto Premium", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.33PM_61b298fc.jpeg`, titulo: "Camiseta Exclusiva", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.35PM(1)_c2f6e1f0.jpeg`, titulo: "Design Autoral", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.35PM_0dffdf8f.jpeg`, titulo: "Estampa Personalizada", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.36PM_e26ae0cb.jpeg`, titulo: "Projeto Criativo", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.37PM(1)_2ee8b9a5.jpeg`, titulo: "Produto Exclusivo", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.37PM_b810cea7.jpeg`, titulo: "Camiseta Artesanal", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.38PM(1)_8d87aabc.jpeg`, titulo: "Kit Personalizado", categoria: "Kits" },
  { img: `${CDN}/WhatsAppImage2026-05-10at6.57.38PM_69faa5b2.jpeg`, titulo: "Produto Especial", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-04-10at10.39.58PM_84337752.jpeg`, titulo: "Camiseta Esportiva", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-04-24at8.39.51PM_f4e31bb4.jpeg`, titulo: "Uniforme Empresarial", categoria: "Empresas" },
  { img: `${CDN}/WhatsAppImage2026-04-24at8.39.52PM(2)_cf555601.jpeg`, titulo: "Kit Onboarding", categoria: "Kits" },
  { img: `${CDN}/WhatsAppImage2026-04-24at8.39.52PM(1)_9ff1c473.jpeg`, titulo: "Brinde Corporativo", categoria: "Empresas" },
  { img: `${CDN}/WhatsAppImage2026-04-24at8.39.52PM_b59c5d3b.jpeg`, titulo: "Camiseta Evento", categoria: "Empresas" },
  { img: `${CDN}/WhatsAppImage2026-04-24at8.39.53PM_7cd0bc7e.jpeg`, titulo: "Produto Personalizado", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-05at3.36.39PM_71c559b7.jpeg`, titulo: "Estampa Criativa", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-05at9.53.05PM_d5e6d06d.jpeg`, titulo: "Design Exclusivo", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-07at9.40.20AM_87223022.jpeg`, titulo: "Projeto Sob Medida", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-07at10.02.41AM(1)_70d65fd0.jpeg`, titulo: "Kit Empresa", categoria: "Kits" },
  { img: `${CDN}/WhatsAppImage2026-05-07at10.02.41AM_3f2c624f.jpeg`, titulo: "Uniforme Equipe", categoria: "Empresas" },
  { img: `${CDN}/WhatsAppImage2026-05-07at10.47.49AM_3e379027.jpeg`, titulo: "Camiseta Premium", categoria: "Camisetas" },
  { img: `${CDN}/WhatsAppImage2026-05-08at1.18.06PM_f80e3a33.jpeg`, titulo: "Projeto Especial", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-08at1.19.36PM_3a97dfd8.jpeg`, titulo: "Produto Artesanal", categoria: "Personalizados" },
  { img: `${CDN}/WhatsAppImage2026-05-08at1.18.05PM_4fea9b95.jpeg`, titulo: "Kit Presente", categoria: "Kits" },
  { img: `${CDN}/WhatsAppImage2026-05-08at1.18.04PM_2cdaa313.jpeg`, titulo: "Camiseta Exclusiva", categoria: "Camisetas" },
];

const categorias = [
  { nome: "Todos", filtro: "todos" },
  { nome: "Camisetas", filtro: "Camisetas" },
  { nome: "Empresas", filtro: "Empresas" },
  { nome: "Personalizados", filtro: "Personalizados" },
  { nome: "Kits", filtro: "Kits" },
];

export default function OQueJaFizemos() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const trabalhosFiltrados = filtroAtivo === "todos"
    ? trabalhos
    : trabalhos.filter((t) => t.categoria === filtroAtivo);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? trabalhosFiltrados.length - 1 : lightboxIndex - 1);
    }
  };
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === trabalhosFiltrados.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

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
          <p className="text-sm text-gray-500 mt-4">
            {trabalhos.length} trabalhos realizados e contando!
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.filtro}
                onClick={() => setFiltroAtivo(cat.filtro)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filtroAtivo === cat.filtro
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.nome}
                <span className="ml-1 text-xs opacity-75">
                  ({cat.filtro === "todos" ? trabalhos.length : trabalhos.filter(t => t.categoria === cat.filtro).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {trabalhosFiltrados.map((t, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">{t.categoria}</span>
                    <h3 className="text-sm md:text-base font-semibold text-white mt-0.5">{t.titulo}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={trabalhosFiltrados[lightboxIndex].img}
              alt={trabalhosFiltrados[lightboxIndex].titulo}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">
                {trabalhosFiltrados[lightboxIndex].categoria}
              </span>
              <h3 className="text-lg font-semibold text-white mt-1">
                {trabalhosFiltrados[lightboxIndex].titulo}
              </h3>
              <p className="text-sm text-white/50 mt-1">
                {lightboxIndex + 1} de {trabalhosFiltrados.length}
              </p>
            </div>
          </div>
        </div>
      )}

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
