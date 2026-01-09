/**
 * Carnaval 2026 - Unidos da AFK
 * Página especial de Carnaval com produtos personalizados
 */
import { ArrowRight, Sparkles, Music, PartyPopper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

const categoriasProdutos = [
  {
    categoria: "Vestuário",
    icone: "👕",
    produtos: [
      { nome: "Abadá Tradicional", descricao: "Abadá personalizado com a identidade do seu bloco" },
      { nome: "Abadá Premium", descricao: "Tecido diferenciado com acabamento especial" },
      { nome: "Camiseta Personalizada", descricao: "Camiseta com estampa exclusiva para sua folia" },
      { nome: "Moletom", descricao: "Para os dias mais frescos do carnaval" },
    ],
  },
  {
    categoria: "Acessórios de Cabeça",
    icone: "🎩",
    produtos: [
      { nome: "Boné Personalizado", descricao: "Boné com bordado ou sublimação" },
      { nome: "Bucket Hat", descricao: "Chapéu estiloso para a folia" },
      { nome: "Viseira", descricao: "Proteção com estilo" },
      { nome: "Tiara Personalizada", descricao: "Tiaras temáticas para o carnaval" },
      { nome: "Bandana", descricao: "Acessório versátil e estiloso" },
    ],
  },
  {
    categoria: "Bolsas e Transporte",
    icone: "👜",
    produtos: [
      { nome: "Ecobag", descricao: "Sacola ecológica personalizada" },
      { nome: "Mochila", descricao: "Mochila para levar tudo que precisa" },
      { nome: "Necessaire", descricao: "Organize seus itens com estilo" },
      { nome: "Pochete", descricao: "Praticidade para a folia" },
    ],
  },
  {
    categoria: "Copos e Bebidas",
    icone: "🍹",
    produtos: [
      { nome: "Copo Personalizado", descricao: "Copo com a identidade do seu bloco" },
      { nome: "Caneca de Chopp", descricao: "Caneca para a cerveja gelada" },
      { nome: "Squeeze", descricao: "Garrafa para hidratação" },
    ],
  },
  {
    categoria: "Calçados",
    icone: "👟",
    produtos: [
      { nome: "Chinelo Personalizado", descricao: "Chinelo com estampa exclusiva" },
      { nome: "Pantufa", descricao: "Conforto para o pós-folia" },
    ],
  },
  {
    categoria: "Toalhas",
    icone: "🏖️",
    produtos: [
      { nome: "Toalha de Praia", descricao: "Toalha grande personalizada" },
      { nome: "Toalha de Rosto", descricao: "Toalha compacta para o bloco" },
    ],
  },
  {
    categoria: "Acessórios Diversos",
    icone: "🔑",
    produtos: [
      { nome: "Chaveiro", descricao: "Lembrança personalizada do carnaval" },
      { nome: "Porta-Copos", descricao: "Proteção com estilo para suas bebidas" },
    ],
  },
];

export default function Carnaval2026() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 py-16 md:py-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">🎭</div>
            <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">🎉</div>
            <div className="absolute bottom-10 left-1/4 text-4xl opacity-20 animate-bounce delay-100">🎊</div>
            <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-pulse delay-200">🎵</div>
            <div className="absolute top-1/2 right-10 text-6xl opacity-20 animate-bounce delay-300">✨</div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <PartyPopper className="w-12 h-12 text-white drop-shadow-lg" />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                  Unidos da AFK
                </h1>
                <PartyPopper className="w-12 h-12 text-white drop-shadow-lg transform scale-x-[-1]" />
              </div>
              
              <p className="text-2xl md:text-3xl text-white/95 font-semibold mb-4 drop-shadow">
                Carnaval 2026
              </p>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Personalize seu bloco, escola de samba ou grupo de amigos com produtos exclusivos. 
                A folia começa aqui!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para produtos de Carnaval 2026 - Unidos da AFK`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Music className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Coleção Exclusiva</h2>
                <Sparkles className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-lg text-gray-600">
                Mais de <span className="font-bold text-orange-600">20 itens exclusivos</span> para 
                você personalizar com a identidade do seu bloco. Atendemos grupos de todos os tamanhos, 
                desde pequenos blocos de amigos até grandes escolas de samba.
              </p>
            </div>
          </div>
        </section>

        {/* Categorias de Produtos */}
        {categoriasProdutos.map((categoria, catIndex) => (
          <section 
            key={catIndex} 
            className={`py-16 ${catIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-4xl">{categoria.icone}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {categoria.categoria}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoria.produtos.map((produto, prodIndex) => (
                  <div 
                    key={prodIndex}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 group"
                  >
                    <div className="h-32 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex items-center justify-center">
                      <span className="text-5xl opacity-50 group-hover:scale-110 transition-transform">
                        {categoria.icone}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {produto.nome}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {produto.descricao}
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${produto.nome} - Carnaval 2026`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Solicitar Orçamento
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Diferenciais */}
        <section className="py-16 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400">
          <div className="container">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Por que escolher a AFK para seu Carnaval?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Personalização Total
                </h3>
                <p className="text-white/80">
                  Criamos a identidade visual do seu bloco do zero ou adaptamos sua arte existente.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Produção Ágil
                </h3>
                <p className="text-white/80">
                  Entregamos no prazo para você curtir o carnaval sem preocupações.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Todos os Tamanhos
                </h3>
                <p className="text-white/80">
                  Atendemos desde pequenos grupos de amigos até grandes blocos e escolas de samba.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🎭</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                Vamos fazer seu Carnaval 2026 inesquecível!
              </h2>
              <span className="text-4xl">🎭</span>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba um orçamento personalizado para seu bloco ou grupo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para produtos de Carnaval 2026 - Unidos da AFK`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
