/**
 * Produtos - AFK Camisetas
 * Página de produtos com galeria de imagens reais
 */
import { useState } from "react";
import { Package, Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

// Galeria de produtos reais da AFK
const produtosGaleria = [
  {
    id: 1,
    nome: "Blocos Personalizados",
    imagem: "/images/produtos/blocos-personalizados.jpeg",
    descricao: "Blocos de anotações personalizados com frases inspiradoras",
  },
  {
    id: 2,
    nome: "Kit de Produtos Personalizados",
    imagem: "/images/produtos/kit-produtos.jpeg",
    descricao: "Kit completo com chinelos, boné, caneca, agenda e muito mais",
  },
  {
    id: 3,
    nome: "Canecas Personalizadas",
    imagem: "/images/produtos/canecas-personalizadas.jpeg",
    descricao: "Canecas de cerâmica com estampas exclusivas e personalizadas",
  },
  {
    id: 4,
    nome: "Camiseta Branca Girassol",
    imagem: "/images/produtos/camiseta-branca-girassol.jpeg",
    descricao: "Camiseta branca feminina com estampa delicada de girassol",
  },
  {
    id: 5,
    nome: "Camiseta Dificuldades Fortalecem",
    imagem: "/images/produtos/camiseta-cinza-mente.jpeg",
    descricao: "Camiseta cinza com estampa motivacional exclusiva",
  },
  {
    id: 6,
    nome: "Camiseta Athletico Brasileirão 96",
    imagem: "/images/produtos/camiseta-athletico.jpeg",
    descricao: "Camiseta preta comemorativa do Athletico Paranaense",
  },
  {
    id: 7,
    nome: "Camiseta Antes Morto do que Verde",
    imagem: "/images/produtos/camiseta-antes-morto.jpeg",
    descricao: "Camiseta preta com estampa rubro-negra exclusiva",
  },
  {
    id: 8,
    nome: "Camiseta Rosa Minimalista",
    imagem: "/images/produtos/camiseta-rosa.jpeg",
    descricao: "Camiseta rosa feminina com estampa delicada",
  },
  {
    id: 9,
    nome: "Camiseta Calma é Poder",
    imagem: "/images/produtos/camiseta-azul-calma.jpeg",
    descricao: "Camiseta azul com estampa de girassóis e frase inspiradora",
  },
  {
    id: 10,
    nome: "Camiseta Sorria o Tanto que Respira",
    imagem: "/images/produtos/camiseta-amarela-sorria.jpeg",
    descricao: "Camiseta amarela vibrante com mensagem positiva",
  },
  {
    id: 11,
    nome: "Chinelo Pulhas Personalizado",
    imagem: "/images/produtos/chinelo-pulhas.jpeg",
    descricao: "Chinelo vermelho personalizado com logo e mascote",
  },
  {
    id: 12,
    nome: "Porta-Copos Personalizados",
    imagem: "/images/produtos/porta-copos.jpeg",
    descricao: "Porta-copos coloridos com nomes personalizados",
  },
  {
    id: 13,
    nome: "Bloco Planificador Espanha",
    imagem: "/images/produtos/bloco-espanha.jpeg",
    descricao: "Bloco de notas temático para planejamento de viagem",
  },
  {
    id: 14,
    nome: "Meias Carros Personalizadas",
    imagem: "/images/produtos/meias-carros.jpeg",
    descricao: "Meias infantis personalizadas com tema Carros da Disney",
  },
  {
    id: 15,
    nome: "Bloco Bora Planejar a Viagem",
    imagem: "/images/produtos/bloco-viagem.jpeg",
    descricao: "Bloco de notas personalizado com foto para planejamento",
  },
];

export default function ProdutosAFK() {
  const [busca, setBusca] = useState("");
  const [imagemAmpliada, setImagemAmpliada] = useState<number | null>(null);

  const produtosFiltrados = produtosGaleria.filter((produto) => {
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       produto.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchBusca;
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
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Produtos
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Confira nossa galeria de produtos personalizados. Cada item é único e feito com carinho para você!
            </p>
          </div>
        </section>

        {/* Busca */}
        <section className="py-8 bg-white border-b sticky top-16 md:top-20 z-40">
          <div className="container">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
              />
            </div>
            <p className="text-center text-gray-500 mt-4">
              {produtosFiltrados.length} produto{produtosFiltrados.length !== 1 ? 's' : ''} encontrado{produtosFiltrados.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Galeria de Produtos */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {produtosFiltrados.map((produto) => (
                <div 
                  key={produto.id}
                  className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden cursor-pointer"
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
                    <div className="p-3 w-full">
                      <h3 className="text-white font-semibold text-sm line-clamp-2">
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
        <section className="py-12 bg-white">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gostou do que viu?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Todos os nossos produtos são personalizáveis! Entre em contato para criar o seu item exclusivo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi os produtos no site e gostaria de fazer um orçamento personalizado.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
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
