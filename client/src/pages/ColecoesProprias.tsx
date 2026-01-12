/**
 * Coleções Próprias - SEJA UM
 * Página principal das coleções exclusivas da marca SEJA UM
 */
import { useState } from "react";
import { ExternalLink, MessageCircle, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";
const MERCADO_LIVRE_BASE = "https://www.mercadolivre.com.br";

// Dados das coleções
const colecoes = {
  sorria: {
    nome: "SORRIA",
    subtitulo: "Delicadeza que Transforma",
    descricao: "Em um mundo de estampas gritantes, escolhemos sussurrar com elegância. A Coleção SORRIA foi criada para a mulher que encontra beleza na sutileza e força na delicadeza.",
    cor: "#D4A5A5",
    corTexto: "#8B4513",
    imagem: "/images/colecoes/sorria/capa.png",
    cardFrases: "/images/colecoes/sorria/card_frases_numeradas.png",
    cardCores: "/images/colecoes/sorria/card_cores.png",
    estampas: [
      { id: 1, nome: "A propósito, estou usando o sorriso que você me deu!", imagem: "/images/colecoes/sorria/produto_01_branco.png", preco: "R$ 89,90" },
      { id: 2, nome: "Sorria tanto quanto você respira", imagem: "/images/colecoes/sorria/produto_02_azul.png", preco: "R$ 89,90" },
      { id: 3, nome: "Seu sorriso pode ser o começo de uma cura", imagem: "/images/colecoes/sorria/produto_03_verde_agua.png", preco: "R$ 89,90" },
      { id: 4, nome: "O mundo melhora quando um sorriso nasce", imagem: "/images/colecoes/sorria/produto_04_verde.png", preco: "R$ 89,90" },
      { id: 5, nome: "Um pequeno sorriso, uma grande mudança", imagem: "/images/colecoes/sorria/produto_05_lilas.png", preco: "R$ 89,90" },
      { id: 6, nome: "Sorrir é tocar o invisível no outro", imagem: "/images/colecoes/sorria/produto_06_amarelo.png", preco: "R$ 89,90" },
      { id: 7, nome: "Seu sorriso: o sol inesperado no dia de alguém", imagem: "/images/colecoes/sorria/produto_07_laranja.png", preco: "R$ 89,90" },
      { id: 8, nome: "Há sorrisos que iluminam até o que não vemos", imagem: "/images/colecoes/sorria/produto_08_preto.png", preco: "R$ 89,90" },
      { id: 9, nome: "Quando você sorri, alguém respira melhor", imagem: "/images/colecoes/sorria/produto_09_rosa.png", preco: "R$ 89,90" },
      { id: 10, nome: "Um sorriso simples, um mundo menos pesado", imagem: "/images/colecoes/sorria/produto_10_creme.png", preco: "R$ 89,90" },
    ],
    cores: ["Branco", "Azul Claro", "Verde Menta", "Verde", "Lilás", "Amarelo", "Laranja", "Preto", "Rosa", "Creme"],
  },
  furacao: {
    nome: "RAIZ RUBRO NEGRA",
    subtitulo: "Paixão Athleticana",
    descricao: "Tradição Rubro-Negra. Glória Eterna. Futebol de Raiz. Esta coleção não é apenas sobre camisetas. É sobre identidade, resistência, memória e amor verdadeiro ao Athletico Paranaense.",
    cor: "#E30613",
    corTexto: "#FFFFFF",
    imagem: "/images/produtos/camiseta-athletico.jpeg",
    estampas: [
      { id: 1, nome: "Brasileirão 96", imagem: "/images/produtos/camiseta-athletico.jpeg", preco: "R$ 139,90" },
      { id: 2, nome: "Antes Morto do que Verde", imagem: "/images/produtos/camiseta-antes-morto.jpeg", preco: "R$ 119,90" },
      { id: 3, nome: "Paulo Baier - Geometria", imagem: "/images/produtos/camiseta-paulo-baier.png", preco: "R$ 139,90" },
    ],
    cores: ["Preto", "Vermelho", "Branco"],
  },
  "hexa-vem": {
    nome: "HEXA VEM",
    subtitulo: "Seleção Brasileira",
    descricao: "A paixão pelo futebol brasileiro em estampas exclusivas. Aguarde novidades desta coleção!",
    cor: "#009C3B",
    corTexto: "#FFDF00",
    imagem: "/images/produtos/kit-produtos.jpeg",
    estampas: [],
    cores: ["Amarelo", "Verde", "Azul"],
    emBreve: true,
  },
  bushido: {
    nome: "BUSHIDO",
    subtitulo: "Caminho do Guerreiro",
    descricao: "Disciplina Samurai. Mente Zen. Espírito Moderno. A coleção BUSHIDO traz a sabedoria milenar dos samurais para o guerreiro moderno, com os 7 princípios fundamentais do código de honra japonês.",
    cor: "#2E4057",
    corTexto: "#FFFFFF",
    imagem: "/images/produtos/kit-produtos-variados.jpeg",
    estampas: [
      { id: 1, nome: "GI - Retidão", descricao: "Faça o que é certo, não o que é fácil", preco: "R$ 109,90" },
      { id: 2, nome: "YŪ - Coragem", descricao: "Coragem não é não ter medo. É agir apesar dele.", preco: "R$ 109,90" },
      { id: 3, nome: "JIN - Compaixão", descricao: "Força sem compaixão é brutalidade", preco: "R$ 109,90" },
      { id: 4, nome: "REI - Respeito", descricao: "Respeite a si mesmo e o mundo respeitará você", preco: "R$ 109,90" },
      { id: 5, nome: "MAKOTO - Honestidade", descricao: "Seja verdadeiro. A mentira mais perigosa é a que você conta a si mesmo.", preco: "R$ 109,90" },
      { id: 6, nome: "MEIYO - Honra", descricao: "Sua palavra é sua espada. Não a quebre.", preco: "R$ 109,90" },
      { id: 7, nome: "CHŪGI - Lealdade", descricao: "Seja leal aos seus valores, não às opiniões dos outros", preco: "R$ 109,90" },
      { id: 8, nome: "ICHIGO ICHIE", descricao: "Este momento nunca voltará. Viva-o plenamente.", preco: "R$ 109,90" },
    ],
    cores: ["Preto", "Branco", "Vermelho Torii", "Azul Índigo"],
  },
  "forca-estoica": {
    nome: "FORÇA ESTOICA",
    subtitulo: "Stoic Power",
    descricao: "Ancient Wisdom. Modern Power. A coleção STOIC POWER traz frases de filósofos estoicos em designs contemporâneos. Não venda apenas camisetas. Venda ferramentas de autoexpressão.",
    cor: "#1A1A1A",
    corTexto: "#FFFFFF",
    imagem: "/images/produtos/kit-produtos.jpeg",
    estampas: [
      { id: 1, nome: "BE ONE", descricao: "Marco Aurélio - Pare de discutir o que é certo. Simplesmente seja.", preco: "R$ 109,90" },
      { id: 2, nome: "POWER OVER MIND", descricao: "Geometric Minimal", preco: "R$ 109,90" },
      { id: 3, nome: "EMBODY IT", descricao: "Psychedelic Stoic", preco: "R$ 129,90" },
      { id: 4, nome: "CHOOSE NOT TO BE HARMED", descricao: "Y2K Philosophy", preco: "R$ 129,90" },
      { id: 5, nome: "BEST REVENGE", descricao: "Urban Grunge", preco: "R$ 129,90" },
      { id: 6, nome: "NO WIND FAVORABLE", descricao: "Cosmic Wisdom", preco: "R$ 109,90" },
      { id: 7, nome: "DEMAND THE BEST", descricao: "Minimalist Power", preco: "R$ 109,90" },
      { id: 8, nome: "SUFFER IN IMAGINATION", descricao: "Vibrant Contrast", preco: "R$ 129,90" },
    ],
    cores: ["Preto", "Branco", "Bege", "Cinza", "Navy"],
  },
};

export default function ColecoesProprias() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "sorria";
  const colecao = colecoes[slug as keyof typeof colecoes] || colecoes.sorria;
  const [estampaSelecionada, setEstampaSelecionada] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Banner SEJA UM */}
        <section className="bg-gray-100 py-6">
          <div className="container">
            <div className="flex justify-center">
              <img 
                src="/seja_um_banner.png" 
                alt="SEJA UM - Camisetas com design exclusivo" 
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Hero da Coleção */}
        <section 
          className="py-16 md:py-24"
          style={{ backgroundColor: colecao.cor }}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{ color: colecao.corTexto }}
              >
                {colecao.nome}
              </h1>
              <p 
                className="text-xl md:text-2xl mb-6 opacity-90"
                style={{ color: colecao.corTexto }}
              >
                {colecao.subtitulo}
              </p>
              <p 
                className="text-lg opacity-80 max-w-2xl mx-auto"
                style={{ color: colecao.corTexto }}
              >
                {colecao.descricao}
              </p>
            </div>
          </div>
        </section>

        {/* Seção Como Funciona - apenas para SORRIA */}
        {slug === 'sorria' && (
          <section className="py-12 bg-gradient-to-b from-amber-50 to-white">
            <div className="container">
              <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">
                Como Funciona a Compra
              </h2>
              
              {/* Card Como Funciona - 3 passos */}
              <div className="max-w-4xl mx-auto mb-12">
                <img 
                  src="/colecoes/sorria/como_funciona.png" 
                  alt="Como funciona: 1. Escolha a cor e tamanho, 2. Após a compra entraremos em contato, 3. Informe a frase e local da aplicação"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Destaque: Todas as combinações */}
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mb-12">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 mb-2">
                    🌻 Todas as Combinações Disponíveis!
                  </h3>
                  <p className="text-gray-600">
                    Você escolhe a combinação perfeita para você ou para presentear
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-amber-50 rounded-xl p-6">
                    <div className="text-4xl font-bold text-amber-600 mb-2">10</div>
                    <div className="text-lg font-semibold text-gray-800">Cores</div>
                    <div className="text-sm text-gray-500 mt-1">Branco, Azul, Verde, Lilás, Amarelo, Laranja, Preto, Rosa, Creme e mais</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6">
                    <div className="text-4xl font-bold text-amber-600 mb-2">10</div>
                    <div className="text-lg font-semibold text-gray-800">Frases</div>
                    <div className="text-sm text-gray-500 mt-1">Mensagens inspiradoras sobre sorrisos e positividade</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6">
                    <div className="text-4xl font-bold text-amber-600 mb-2">3</div>
                    <div className="text-lg font-semibold text-gray-800">Posições</div>
                    <div className="text-sm text-gray-500 mt-1">Peito esquerdo, Centro ou Costela lateral</div>
                  </div>
                </div>
                
                <p className="text-center text-amber-700 font-semibold mt-6">
                  = 300 combinações possíveis!
                </p>
              </div>

              {/* Cards de Frases e Posições */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">Escolha sua Frase</h3>
                  <img 
                    src="/colecoes/sorria/card_frases_numeradas.png" 
                    alt="10 frases disponíveis na coleção SORRIA"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">Escolha o Local</h3>
                  <img 
                    src="/colecoes/sorria/card_3_posicoes.png" 
                    alt="3 posições de aplicação: Peito esquerdo, Centro, Costela lateral"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cores Disponíveis */}
        <section className="py-8 bg-white border-b">
          <div className="container">
            <h3 className="text-center text-gray-600 mb-4">Cores disponíveis:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {colecao.cores.map((cor) => (
                <span 
                  key={cor}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                >
                  {cor}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Estampas */}
        {'emBreve' in colecao && colecao.emBreve ? (
          <section className="py-16 bg-gray-50">
            <div className="container text-center">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Em Breve!</h2>
                <p className="text-gray-600 mb-6">
                  Esta coleção está sendo desenvolvida. Cadastre-se para ser avisado quando lançarmos!
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de ser avisado quando a coleção ${colecao.nome} for lançada.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  Avise-me do Lançamento
                </a>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 bg-gray-50">
            <div className="container">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Estampas da Coleção
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {colecao.estampas.map((estampa) => (
                  <div 
                    key={estampa.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group"
                  >
                    {'imagem' in estampa && estampa.imagem && (
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={estampa.imagem} 
                          alt={estampa.nome}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {estampa.nome}
                      </h3>
                      {'descricao' in estampa && estampa.descricao && (
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                          {estampa.descricao}
                        </p>
                      )}
                      <p className="text-lg font-bold text-pink-600 mb-3">
                        {estampa.preco}
                      </p>
                      
                      {/* Botões de Compra */}
                      <div className="flex flex-col gap-2">
                        <a
                          href={MERCADO_LIVRE_BASE}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors text-sm"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Compre no ML
                        </a>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de comprar a camiseta "${estampa.nome}" da coleção ${colecao.nome}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Compre Direto
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navegação entre Coleções */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Outras Coleções SEJA UM
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(colecoes).map(([key, col]) => (
                <a
                  key={key}
                  href={`/colecoes-proprias/${key}`}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                    key === slug
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {col.nome}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-500">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Quer personalizar sua própria camiseta?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Além das coleções SEJA UM, criamos produtos 100% personalizados para você, sua empresa ou evento.
            </p>
            <a
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento Personalizado
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
