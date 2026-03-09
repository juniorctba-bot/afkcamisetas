/**
 * Copa2026 - Página dedicada Copa do Mundo 2026
 * Produtos personalizados temáticos - AFK Camisetas
 */
import { Link } from "wouter";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, MessageCircle, Trophy, Zap, Clock, Star, Palette, Users } from "lucide-react";

const WHATSAPP_NUMBER = "5541987386527";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vi a página da Copa do Mundo 2026 no site da AFK Camisetas e gostaria de antecipar meu orçamento para produtos personalizados! 🏆⚽"
);

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663237581047/9vRvPjwToreyUGuKQDcbjR";

// Coleção Autoral - Copa do Mundo (estampas históricas + exclusivas)
const colecaoCopa = [
  {
    nome: "Copa 1950",
    descricao: "Homenagem à primeira Copa do Mundo no Brasil — a tragédia do Maracanã que moldou o futebol brasileiro.",
    imagem: `${CDN}/copa50-1_af297315.png`,
    tag: "Edição Histórica",
  },
  {
    nome: "Copa 1962",
    descricao: "O Bi! Garrincha e Pelé brilharam no Chile. Uma geração de ouro eternizada em estampa exclusiva.",
    imagem: `${CDN}/copa62-1_127d86ef.png`,
    tag: "Edição Histórica",
  },
  {
    nome: "Copa 1970 — Vol. 1",
    descricao: "O melhor time da história. Pelé, Tostão, Rivelino e Jairzinho conquistaram o Tri no México.",
    imagem: `${CDN}/copa70-1_785aeabf.png`,
    tag: "Edição Histórica",
  },
  {
    nome: "Copa 1970 — Vol. 2",
    descricao: "Segunda versão da estampa comemorativa do Tri Campeão de 1970. Arte exclusiva AFK.",
    imagem: `${CDN}/copa70-2_c557bfc5.png`,
    tag: "Edição Histórica",
  },
  {
    nome: "Copa 1994",
    descricao: "O Tetra! Romário e Bebeto celebraram um dos gols mais emocionantes da história da Copa.",
    imagem: `${CDN}/copa94-1_b21bfd90.png`,
    tag: "Edição Histórica",
  },
  {
    nome: "Penta Coração",
    descricao: "Cinco estrelas, um coração. Celebre as cinco conquistas mundiais do Brasil com esta estampa especial.",
    imagem: `${CDN}/penta_coracao_f605c805.png`,
    tag: "Exclusiva AFK",
  },
  {
    nome: "Craques do Brasil",
    descricao: "Os maiores craques da história da Seleção Brasileira reunidos em uma arte autoral única.",
    imagem: `${CDN}/estampa_craques_brasil_final_adf38a11.png`,
    tag: "Exclusiva AFK",
  },
  {
    nome: "Tática 4-4-2",
    descricao: "Para os apaixonados por futebol de verdade. Arte inspirada nas táticas clássicas do jogo bonito.",
    imagem: `${CDN}/tatica_442_89e32885.png`,
    tag: "Exclusiva AFK",
  },
  {
    nome: "TV Copa",
    descricao: "Aquela sensação de assistir a Copa em família. Arte retrô que homenageia as transmissões históricas.",
    imagem: `${CDN}/tv_copa_v3_3b2d299f.png`,
    tag: "Exclusiva AFK",
  },
  {
    nome: "Copa 2026 — ISS",
    descricao: "Estampa exclusiva Copa 2026 com arte inspirada na grandiosidade do evento. Edição limitada.",
    imagem: `${CDN}/mockup_10_iss_copa_2026_8193597e.png`,
    tag: "Copa 2026",
  },
  {
    nome: "12 Anos de Conquistas",
    descricao: "Comemorando 12 anos de AFK Camisetas com estampa especial Copa 2026. Arte autoral exclusiva.",
    imagem: `${CDN}/mockup_12_anos_conquistas_32d141a8.png`,
    tag: "Copa 2026",
  },
];

// Coleção Street Futebol
const colecaoStreet = [
  {
    nome: "Joga Bonito",
    descricao: "O estilo brasileiro em campo. Arte street que celebra a ginga e a magia do futebol nacional.",
    imagem: `${CDN}/streetJogaBonito-1_51e6a7c0.png`,
    tag: "Street",
  },
  {
    nome: "Hexa Vem",
    descricao: "A torcida já está aquecida! Estampa street para quem acredita no Hexa em 2026.",
    imagem: `${CDN}/StreetHexaVem-1_b86d81e1.png`,
    tag: "Street",
  },
  {
    nome: "Real Futebol",
    descricao: "Futebol de rua, futebol de verdade. Arte urbana para quem vive o jogo além dos gramados.",
    imagem: `${CDN}/StreetRealFutebol-1_13e5c17f.png`,
    tag: "Street",
  },
  {
    nome: "Talento",
    descricao: "O talento não se explica, se sente. Estampa street que homenageia os craques do futebol.",
    imagem: `${CDN}/streetTalento-1_a8486291.png`,
    tag: "Street",
  },
];

// Coleção Times Brasileiros
const colecaoTimes = [
  { nome: "Colorado", imagem: `${CDN}/colorado_ajustado_f5ef41c4.png`, cor: "#CC0000" },
  { nome: "Verdão", imagem: `${CDN}/verdao_ajustado_95abad9d.png`, cor: "#006400" },
  { nome: "Timão", imagem: `${CDN}/timao_ajustado_5aae5d00.png`, cor: "#1a1a1a" },
  { nome: "Mengão", imagem: `${CDN}/mengao_ajustado_ddb2bfe1.png`, cor: "#CC0000" },
  { nome: "Vasco", imagem: `${CDN}/vasco_ajustado_e3919593.png`, cor: "#1a1a1a" },
  { nome: "Tricolor Flu", imagem: `${CDN}/tricolor_flu_ajustado_4e013a67.png`, cor: "#8B0000" },
  { nome: "Tricolor SP", imagem: `${CDN}/tricolor_sp_ajustado_00adb012.png`, cor: "#CC0000" },
  { nome: "Tricolor Gaúcho", imagem: `${CDN}/tricolor_gremio_ajustado_fc4d22ff.png`, cor: "#003087" },
  { nome: "Furacão", imagem: `${CDN}/furacao_ajustado_6bce23c7.png`, cor: "#CC0000" },
];

const vantagens = [
  { icone: "⚡", titulo: "Antecipe seu Pedido", descricao: "Garanta seu pedido antes da Copa e evite atrasos na produção" },
  { icone: "🎨", titulo: "Arte Exclusiva", descricao: "Nossa equipe cria artes temáticas exclusivas para o seu pedido" },
  { icone: "📦", titulo: "Pedido Mínimo: 3 un.", descricao: "Atendemos desde pequenos grupos até grandes empresas" },
  { icone: "🚀", titulo: "Entrega Rápida", descricao: "Produção ágil em Curitiba com entrega para todo o Brasil" },
];

type TabType = "copa" | "street" | "times";

export default function Copa2026() {
  const [activeTab, setActiveTab] = useState<TabType>("copa");

  useEffect(() => {
    document.title = "Copa do Mundo 2026 - Coleção Autoral Exclusiva | AFK Camisetas Curitiba";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1" style={{ paddingTop: "64px" }}>

        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #006400 0%, #008000 30%, #FFD700 70%, #FFA500 100%)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-black/10 blur-2xl" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-yellow-300/20 blur-lg" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold mb-6 text-sm">
                <Trophy className="w-4 h-4" />
                Copa do Mundo 2026 — EUA, México e Canadá
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg">
                ⚽ Copa do Mundo<br />
                <span className="text-yellow-300">2026</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                Coleção Autoral com Estampas Exclusivas AFK
              </p>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Estampas únicas criadas pela nossa equipe: homenagens às Copas históricas, 
                coleção street futebol e estampas dos grandes times brasileiros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold text-lg rounded-full hover:bg-yellow-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir Orçamento via WhatsApp
                </a>
                <a
                  href="#colecao"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black/20 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-black/30 transition-all border border-white/30"
                >
                  Ver Coleção
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso Em Breve */}
        <section className="py-6 bg-yellow-400">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-900 flex-shrink-0" />
                <div>
                  <p className="font-black text-yellow-900 text-lg">🎨 Coleção Autoral Exclusiva — Estampas Únicas AFK!</p>
                  <p className="text-yellow-800 text-sm">Arte própria criada pelo nosso time. Personalize com sua logo ou use nossas estampas exclusivas!</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista
              </a>
            </div>
          </div>
        </section>

        {/* ===== COLEÇÃO AUTORAL ===== */}
        <section id="colecao" className="py-16 md:py-24 bg-white">
          <div className="container">
            {/* Header da seção */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Palette className="w-4 h-4" />
                Estampas Exclusivas
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                🏆 Coleção Autoral Copa 2026
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Estampas criadas pelo nosso time de design. Arte exclusiva AFK — disponível para personalização 
                com sua logo, nome ou mensagem especial.
              </p>
            </div>

            {/* Tabs de navegação */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <button
                onClick={() => setActiveTab("copa")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === "copa"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🏆 Copa do Mundo
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === "copa" ? "bg-white/20" : "bg-gray-200"}`}>
                  {colecaoCopa.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab("street")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === "street"
                    ? "bg-yellow-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                🎨 Street Futebol
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === "street" ? "bg-white/20" : "bg-gray-200"}`}>
                  {colecaoStreet.length}
                </span>
              </button>
              <button
                onClick={() => setActiveTab("times")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === "times"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                ⚽ Times Brasileiros
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeTab === "times" ? "bg-white/20" : "bg-gray-200"}`}>
                  {colecaoTimes.length}
                </span>
              </button>
            </div>

            {/* Grid Copa do Mundo */}
            {activeTab === "copa" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {colecaoCopa.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative overflow-hidden bg-gray-50 aspect-square">
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full shadow-sm">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-black text-gray-900 text-base mb-1">{item.nome}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{item.descricao}</p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a estampa "${item.nome}" da Coleção Copa 2026 da AFK Camisetas! ⚽🏆`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-sm rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
                      >
                        Pedir Orçamento
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Grid Street Futebol */}
            {activeTab === "street" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {colecaoStreet.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative overflow-hidden bg-gray-900 aspect-square">
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-sm">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-black text-gray-900 text-base mb-1">{item.nome}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{item.descricao}</p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a estampa Street "${item.nome}" da AFK Camisetas! ⚽🎨`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold text-sm rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all"
                      >
                        Pedir Orçamento
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Grid Times Brasileiros */}
            {activeTab === "times" && (
              <>
                <div className="text-center mb-8">
                  <p className="text-gray-600 text-base">
                    Estampas autorais inspiradas nos grandes times do futebol brasileiro. 
                    <strong> Personalize com sua logo e torça com estilo!</strong>
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {colecaoTimes.map((time, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="relative overflow-hidden bg-gray-50 aspect-square">
                        <img
                          src={time.imagem}
                          alt={time.nome}
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-black text-gray-900 text-sm mb-2 text-center">{time.nome}</h3>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para a estampa do ${time.nome} da AFK Camisetas! ⚽`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-xs rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
                        >
                          Orçamento
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* CTA abaixo da galeria */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-green-50 to-yellow-50 border border-green-200 rounded-2xl p-6">
                <div className="text-left">
                  <p className="font-black text-gray-900 text-lg">Quer personalizar com sua logo ou arte?</p>
                  <p className="text-gray-600 text-sm">Usamos suas estampas ou criamos uma arte exclusiva para você. Fale conosco!</p>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-md whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #006400 0%, #008000 100%)" }}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">
              Por que escolher a AFK para a Copa?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vantagens.map((v, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <span className="text-4xl mb-4 block">{v.icone}</span>
                  <h3 className="font-bold text-white text-lg mb-2">{v.titulo}</h3>
                  <p className="text-white/80 text-sm">{v.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-yellow-400">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-yellow-900 mb-4">
                🏆 Antecipe seu Pedido Copa 2026!
              </h2>
              <p className="text-yellow-800 text-lg mb-8">
                Não espere a Copa chegar para pedir seus produtos personalizados. 
                Entre em contato agora e garanta prioridade na produção!
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-green-700 text-white font-black text-xl rounded-full hover:bg-green-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp Agora
              </a>
              <p className="mt-4 text-yellow-800 text-sm">
                Atendimento rápido • Curitiba e todo o Brasil
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
