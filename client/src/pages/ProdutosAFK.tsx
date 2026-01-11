/**
 * Produtos - AFK Camisetas
 * Página de produtos com filtros (Para Mim, Para Empresa, Para Evento) e ícones por categoria
 */
import { useState, useEffect } from "react";
import { Package, Search, X, ChevronLeft, ChevronRight, Shirt, Coffee, Footprints, Backpack, Gift, Sparkles, Building2, PartyPopper, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

// Categorias com ícones
const categorias = [
  { id: "todos", nome: "Todos", icon: Package },
  { id: "camisetas", nome: "Camisetas", icon: Shirt },
  { id: "canecas", nome: "Canecas", icon: Coffee },
  { id: "chinelos", nome: "Chinelos", icon: Footprints },
  { id: "bolsas", nome: "Bolsas", icon: Backpack },
  { id: "acessorios", nome: "Acessórios", icon: Gift },
  { id: "diversos", nome: "Diversos", icon: Sparkles },
];

// Filtros principais
const filtros = [
  { id: "todos", nome: "Todos", icon: Package },
  { id: "para-mim", nome: "Para Mim", icon: User },
  { id: "para-empresa", nome: "Para Empresa", icon: Building2 },
  { id: "para-evento", nome: "Para meu Evento", icon: PartyPopper },
];

// Galeria de produtos reais da AFK com categorias e filtros
const produtosGaleria = [
  {
    id: 1,
    nome: "Blocos Personalizados",
    imagem: "/images/produtos/blocos-personalizados.jpeg",
    descricao: "Blocos de anotações personalizados com frases inspiradoras",
    categoria: "diversos",
    filtros: ["para-mim", "para-empresa"],
  },
  {
    id: 2,
    nome: "Kit de Produtos Personalizados",
    imagem: "/images/produtos/kit-produtos.jpeg",
    descricao: "Kit completo com chinelos, boné, caneca, agenda e muito mais",
    categoria: "diversos",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: 3,
    nome: "Canecas Personalizadas",
    imagem: "/images/produtos/canecas-personalizadas.jpeg",
    descricao: "Canecas de cerâmica com estampas exclusivas e personalizadas",
    categoria: "canecas",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: 4,
    nome: "Camiseta Branca Girassol",
    imagem: "/images/produtos/camiseta-branca-girassol.jpeg",
    descricao: "Camiseta branca feminina com estampa delicada de girassol",
    categoria: "camisetas",
    filtros: ["para-mim"],
  },
  {
    id: 5,
    nome: "Camiseta Sorria Tanto Quanto Respira",
    imagem: "/images/produtos/camiseta-cinza-mente.jpeg",
    descricao: "Camiseta cinza da Coleção SORRIA com frase inspiradora",
    categoria: "camisetas",
    filtros: ["para-mim"],
  },
  {
    id: 6,
    nome: "Camiseta Athletico Brasileirão 96",
    imagem: "/images/produtos/camiseta-athletico.jpeg",
    descricao: "Camiseta preta comemorativa do Athletico Paranaense",
    categoria: "camisetas",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: 7,
    nome: "Camiseta Antes Morto do que Verde",
    imagem: "/images/produtos/camiseta-antes-morto.jpeg",
    descricao: "Camiseta preta com estampa rubro-negra exclusiva",
    categoria: "camisetas",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: 8,
    nome: "Camiseta Rosa Minimalista",
    imagem: "/images/produtos/camiseta-rosa.jpeg",
    descricao: "Camiseta rosa feminina com estampa delicada",
    categoria: "camisetas",
    filtros: ["para-mim"],
  },
  {
    id: 9,
    nome: "Camiseta Calma é Poder",
    imagem: "/images/produtos/camiseta-azul-calma.jpeg",
    descricao: "Camiseta azul com estampa de girassóis e frase inspiradora",
    categoria: "camisetas",
    filtros: ["para-mim"],
  },
  {
    id: 10,
    nome: "Camiseta Sorria o Tanto que Respira",
    imagem: "/images/produtos/camiseta-amarela-sorria.jpeg",
    descricao: "Camiseta amarela vibrante com mensagem positiva",
    categoria: "camisetas",
    filtros: ["para-mim"],
  },
  {
    id: 11,
    nome: "Chinelo Pulhas Personalizado",
    imagem: "/images/produtos/chinelo-pulhas.jpeg",
    descricao: "Chinelo vermelho personalizado com logo e mascote",
    categoria: "chinelos",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: 12,
    nome: "Porta-Copos Personalizados",
    imagem: "/images/produtos/porta-copos.jpeg",
    descricao: "Porta-copos coloridos com nomes personalizados",
    categoria: "acessorios",
    filtros: ["para-mim", "para-empresa"],
  },
  {
    id: 13,
    nome: "Bloco Planificador Espanha",
    imagem: "/images/produtos/bloco-espanha.jpeg",
    descricao: "Bloco de notas temático para planejamento de viagem",
    categoria: "diversos",
    filtros: ["para-mim"],
  },
  {
    id: 14,
    nome: "Meias Carros Personalizadas",
    imagem: "/images/produtos/meias-carros.jpeg",
    descricao: "Meias infantis personalizadas com tema Carros da Disney",
    categoria: "acessorios",
    filtros: ["para-mim"],
  },
  {
    id: 15,
    nome: "Bloco Bora Planejar a Viagem",
    imagem: "/images/produtos/bloco-viagem.jpeg",
    descricao: "Bloco de notas personalizado com foto para planejamento",
    categoria: "diversos",
    filtros: ["para-mim"],
  },
  {
    id: 16,
    nome: "Kit Camisetas Natal da Família",
    imagem: "/images/produtos/kit-natal-familia.jpeg",
    descricao: "Kit de camisetas personalizadas para toda a família com tema natalino",
    categoria: "camisetas",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: 17,
    nome: "Copo Stanley Filhinhos da Mamãe",
    imagem: "/images/produtos/copo-stanley-filhos.jpeg",
    descricao: "Copo térmico estilo Stanley com ilustração personalizada",
    categoria: "canecas",
    filtros: ["para-mim"],
  },
  {
    id: 18,
    nome: "Meias com Rosto Personalizado",
    imagem: "/images/produtos/meias-rosto-personalizado.jpeg",
    descricao: "Meias pretas com estampa do rosto personalizado",
    categoria: "acessorios",
    filtros: ["para-mim"],
  },
  {
    id: 19,
    nome: "Quebra-Cabeça Marcas Famosas",
    imagem: "/images/produtos/quebra-cabeca-marcas.jpeg",
    descricao: "Quebra-cabeça personalizado com logos de marcas famosas",
    categoria: "diversos",
    filtros: ["para-mim", "para-empresa"],
  },
  {
    id: 20,
    nome: "Kit Produtos Variados AFK",
    imagem: "/images/produtos/kit-produtos-variados.jpeg",
    descricao: "Kit com chinelos, boné, caneca, agenda, meias e muito mais",
    categoria: "diversos",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: 21,
    nome: "Chinelo Ana Elisabeth Personalizado",
    imagem: "/images/produtos/chinelo-ana-elisabeth.png",
    descricao: "Chinelo branco com ilustração estilo anime personalizada",
    categoria: "chinelos",
    filtros: ["para-mim"],
  },
  {
    id: 22,
    nome: "Camiseta Paulo Baier - Geometria",
    imagem: "/images/produtos/camiseta-paulo-baier.png",
    descricao: "Camiseta vermelha comemorativa do ídolo Paulo Baier",
    categoria: "camisetas",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: 23,
    nome: "Chinelo Rosiane Personalizado",
    imagem: "/images/produtos/chinelo-rosiane.png",
    descricao: "Chinelo branco com ilustração personalizada e nome",
    categoria: "chinelos",
    filtros: ["para-mim"],
  },
  // Produtos para Empresa
  {
    id: 24,
    nome: "Uniformes Corporativos",
    imagem: "/images/produtos/kit-produtos.jpeg",
    descricao: "Camisetas polo e uniformes para sua equipe",
    categoria: "camisetas",
    filtros: ["para-empresa"],
  },
  {
    id: 25,
    nome: "Brindes Corporativos",
    imagem: "/images/produtos/kit-produtos-variados.jpeg",
    descricao: "Kits de brindes personalizados para sua empresa",
    categoria: "diversos",
    filtros: ["para-empresa"],
  },
];

export default function ProdutosAFK() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [filtroAtivo, setFiltroAtivo] = useState("todos");
  const [imagemAmpliada, setImagemAmpliada] = useState<number | null>(null);
  const [location] = useLocation();

  // Ler filtro da URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filtroUrl = params.get("filtro");
    if (filtroUrl && filtros.some(f => f.id === filtroUrl)) {
      setFiltroAtivo(filtroUrl);
    }
  }, [location]);

  const produtosFiltrados = produtosGaleria.filter((produto) => {
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       produto.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaAtiva === "todos" || produto.categoria === categoriaAtiva;
    const matchFiltro = filtroAtivo === "todos" || produto.filtros.includes(filtroAtivo);
    return matchBusca && matchCategoria && matchFiltro;
  });

  const navegarImagem = (direcao: 'anterior' | 'proxima') => {
    if (imagemAmpliada === null) return;
    const indexAtual = produtosFiltrados.findIndex(p => p.id === imagemAmpliada);
    if (direcao === 'anterior') {
      const novoIndex = indexAtual > 0 ? indexAtual - 1 : produtosFiltrados.length - 1;
      setImagemAmpliada(produtosFiltrados[novoIndex].id);
    } else {
      const novoIndex = indexAtual < produtosFiltrados.length - 1 ? indexAtual + 1 : 0;
      setImagemAmpliada(produtosFiltrados[novoIndex].id);
    }
  };

  const produtoAmpliado = produtosGaleria.find(p => p.id === imagemAmpliada);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Nossos Produtos
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Confira nossa galeria de produtos personalizados. Cada item é único e feito com carinho para você!
            </p>
          </div>
        </section>

        {/* Filtros Principais */}
        <section className="py-6 bg-white border-b">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {filtros.map((filtro) => {
                const Icon = filtro.icon;
                return (
                  <button
                    key={filtro.id}
                    onClick={() => setFiltroAtivo(filtro.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all ${
                      filtroAtivo === filtro.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{filtro.nome}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Categorias com Ícones */}
        <section className="py-4 bg-gray-50 border-b sticky top-16 md:top-20 z-40">
          <div className="container">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categorias.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setCategoriaAtiva(cat.id)}
                    className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg min-w-[70px] transition-all ${
                      categoriaAtiva === cat.id
                        ? "bg-pink-100 text-pink-600"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium whitespace-nowrap">{cat.nome}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Busca */}
            <div className="relative max-w-md mx-auto mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-3">
              {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Galeria de Produtos - Imagens menores */}
        <section className="py-8 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
              {produtosFiltrados.map((produto) => (
                <div 
                  key={produto.id}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
                  onClick={() => setImagemAmpliada(produto.id)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-2 w-full">
                      <h3 className="text-white font-medium text-xs line-clamp-2">
                        {produto.nome}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {produtosFiltrados.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Nenhum produto encontrado.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-white">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Gostou do que viu?
            </h2>
            <p className="text-gray-600 mb-5 max-w-xl mx-auto">
              Todos os nossos produtos são personalizáveis! Entre em contato para criar o seu item exclusivo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi os produtos no site e gostaria de fazer um orçamento personalizado.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal de Imagem Ampliada */}
      {imagemAmpliada && produtoAmpliado && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setImagemAmpliada(null)}
        >
          <button
            onClick={() => setImagemAmpliada(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navegarImagem('anterior'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navegarImagem('proxima'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            className="max-w-4xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={produtoAmpliado.imagem} 
              alt={produtoAmpliado.nome}
              className="max-h-[70vh] object-contain rounded-lg"
            />
            <div className="bg-white rounded-lg mt-4 p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {produtoAmpliado.nome}
              </h3>
              <p className="text-gray-600 mb-4">
                {produtoAmpliado.descricao}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${produtoAmpliado.nome}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
