/**
 * Produtos - AFK Camisetas
 * Página de produtos com categorias, ícones e botões WhatsApp
 */
import { useState } from "react";
import { 
  Package, Search, User, Building2, PartyPopper, Eye,
  Square, Shirt, Key, Footprints, Umbrella, Puzzle, 
  ShoppingBag, BookOpen, Bath, Frame, Heart, Baby,
  Briefcase, Sparkles, PenTool, Scissors, Backpack,
  Wine, GraduationCap, Coffee, MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

// Categorias de produtos com imagens reais
const categoriasProdutos = [
  {
    id: "azulejos",
    nome: "Azulejos",
    icon: Square,
    imagem: "/images/produtos/azulejos.png",
    descricao: "Azulejos personalizados em diversos tamanhos",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "camisetas",
    nome: "Camisetas",
    icon: Shirt,
    imagem: "/images/produtos/camiseta-branca-girassol.jpeg",
    descricao: "Camisetas em algodão, poliéster e dryfit",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "chaveiros",
    nome: "Chaveiros",
    icon: Key,
    imagem: "/images/produtos/chaveiros1.png",
    descricao: "Chaveiros em diversos formatos",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "chinelos",
    nome: "Chinelos",
    icon: Footprints,
    imagem: "/images/produtos/chinelos.png",
    descricao: "Chinelos personalizados em todas as cores",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "guarda-chuvas",
    nome: "Sombrinhas e Guarda-Chuvas",
    icon: Umbrella,
    imagem: "/images/produtos/guarda-chuvas.png",
    descricao: "Guarda-chuvas e sombrinhas personalizadas",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "quebra-cabeca",
    nome: "Quebra-Cabeça",
    icon: Puzzle,
    imagem: "/images/produtos/quebra-cabeca.png",
    descricao: "Quebra-cabeças personalizados",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "mochilas-sacolas",
    nome: "Mochilas e Sacolas",
    icon: ShoppingBag,
    imagem: "/images/produtos/mochilas-sacolas.png",
    descricao: "Mochilas saco e ecobags personalizadas",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "agendas-cadernos",
    nome: "Agendas e Cadernos",
    icon: BookOpen,
    imagem: "/images/produtos/agendas-cadernos.png",
    descricao: "Agendas, cadernos e blocos de anotação",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "toalhas",
    nome: "Toalhas",
    icon: Bath,
    imagem: "/images/produtos/toalhas.png",
    descricao: "Toalhas de praia, banho e lavabo",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "porta-retratos",
    nome: "Porta-Retratos",
    icon: Frame,
    imagem: "/images/produtos/porta-retratos.png",
    descricao: "Porta-retratos em MDF personalizados",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "cuecas-calcinhas",
    nome: "Cuecas e Calcinhas",
    icon: Heart,
    imagem: "/images/produtos/cuecas-calcinhas.png",
    descricao: "Roupas íntimas para sublimação",
    filtros: ["para-mim"],
  },
  {
    id: "bebes",
    nome: "Para Bebês",
    icon: Baby,
    imagem: "/images/produtos/bodies1.png",
    descricao: "Bodies e babadores personalizados",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "camisa-polo",
    nome: "Camisa Social e Polo",
    icon: Briefcase,
    imagem: "/images/produtos/polo1.png",
    descricao: "Camisas sociais e polos corporativas",
    filtros: ["para-mim", "para-empresa"],
  },
  {
    id: "necessaires",
    nome: "Necessaires",
    icon: Sparkles,
    imagem: "/images/produtos/necessaires1.png",
    descricao: "Necessaires e porta-objetos",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "roupoes",
    nome: "Roupões",
    icon: Bath,
    imagem: "/images/produtos/roupoes.png",
    descricao: "Roupões infantis personalizados",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "pijamas",
    nome: "Pijamas",
    icon: Sparkles,
    imagem: "/images/produtos/pijamas.png",
    descricao: "Pijamas infantis personalizados",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "meias",
    nome: "Meias",
    icon: Footprints,
    imagem: "/images/produtos/meias.png",
    descricao: "Meias para sublimação",
    filtros: ["para-mim", "para-evento"],
  },
  {
    id: "shorts-bermudas",
    nome: "Shorts e Bermudas",
    icon: Scissors,
    imagem: "/images/produtos/shorts1.png",
    descricao: "Shorts e bermudas esportivas",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "coletes",
    nome: "Coletes Esportivos",
    icon: Shirt,
    imagem: "/images/produtos/coletes.png",
    descricao: "Coletes para eventos e esportes",
    filtros: ["para-empresa", "para-evento"],
  },
  {
    id: "mochilas",
    nome: "Mochilas",
    icon: Backpack,
    imagem: "/images/produtos/mochilas.png",
    descricao: "Mochilas infantis e executivas",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "abridores",
    nome: "Abridores",
    icon: Wine,
    imagem: "/images/produtos/abridores.png",
    descricao: "Abridores de garrafa personalizados",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "bones",
    nome: "Bonés",
    icon: GraduationCap,
    imagem: "/images/produtos/bones.png",
    descricao: "Bonés trucker e fechados",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
  {
    id: "canecas-copos",
    nome: "Canecas e Copos",
    icon: Coffee,
    imagem: "/images/produtos/canecas-copos.png",
    descricao: "Canecas, copos de chopp e térmicos",
    filtros: ["para-mim", "para-empresa", "para-evento"],
  },
];

// Filtros principais
const filtros = [
  { id: "todos", nome: "Todos", icon: Package },
  { id: "para-mim", nome: "Para Mim", icon: User },
  { id: "para-empresa", nome: "Para Empresa", icon: Building2 },
  { id: "para-evento", nome: "Para meu Evento", icon: PartyPopper },
  { id: "portfolio", nome: "Veja alguns materiais", icon: Eye },
];

// Galeria de produtos já feitos (Portfolio)
const produtosPortfolio = [
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
    descricao: "Canecas de cerâmica com estampas exclusivas",
  },
  {
    id: 4,
    nome: "Camiseta Branca Girassol",
    imagem: "/images/produtos/camiseta-branca-girassol.jpeg",
    descricao: "Camiseta branca feminina com estampa de girassol",
  },
  {
    id: 5,
    nome: "Camiseta Sorria Tanto Quanto Respira",
    imagem: "/images/produtos/camiseta-cinza-mente.jpeg",
    descricao: "Camiseta cinza da Coleção SORRIA",
  },
  {
    id: 6,
    nome: "Camiseta Athletico Brasileirão 96",
    imagem: "/images/produtos/camiseta-athletico.jpeg",
    descricao: "Camiseta comemorativa do Athletico Paranaense",
  },
  {
    id: 7,
    nome: "Chinelo Pulhas Personalizado",
    imagem: "/images/produtos/chinelo-pulhas.jpeg",
    descricao: "Chinelo vermelho personalizado com logo",
  },
  {
    id: 8,
    nome: "Porta-Copos Personalizados",
    imagem: "/images/produtos/porta-copos.jpeg",
    descricao: "Porta-copos coloridos com nomes",
  },
  {
    id: 9,
    nome: "Kit Camisetas Natal da Família",
    imagem: "/images/produtos/kit-natal-familia.jpeg",
    descricao: "Kit de camisetas para toda a família",
  },
  {
    id: 10,
    nome: "Copo Stanley Filhinhos da Mamãe",
    imagem: "/images/produtos/copo-stanley-filhos.jpeg",
    descricao: "Copo térmico com ilustração personalizada",
  },
  {
    id: 11,
    nome: "Meias com Rosto Personalizado",
    imagem: "/images/produtos/meias-rosto-personalizado.jpeg",
    descricao: "Meias com estampa do rosto personalizado",
  },
  {
    id: 12,
    nome: "Quebra-Cabeça Marcas Famosas",
    imagem: "/images/produtos/quebra-cabeca-marcas.jpeg",
    descricao: "Quebra-cabeça personalizado",
  },
];

export default function ProdutosAFK() {
  const [busca, setBusca] = useState("");
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  // Filtrar categorias baseado no filtro ativo
  const categoriasFiltradas = filtroAtivo === "todos" || filtroAtivo === "portfolio"
    ? categoriasProdutos
    : categoriasProdutos.filter(cat => cat.filtros.includes(filtroAtivo));

  // Filtrar por busca
  const categoriasExibidas = categoriasFiltradas.filter(cat =>
    cat.nome.toLowerCase().includes(busca.toLowerCase()) ||
    cat.descricao.toLowerCase().includes(busca.toLowerCase())
  );

  // Ordenar alfabeticamente
  const categoriasOrdenadas = [...categoriasExibidas].sort((a, b) => 
    a.nome.localeCompare(b.nome, 'pt-BR')
  );

  const abrirWhatsApp = (mensagem: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-12 md:py-16">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Nossos Produtos
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Escolha a categoria e solicite modelos disponíveis ou faça seu orçamento personalizado!
            </p>
          </div>
        </section>

        {/* Filtros Principais */}
        <section className="py-6 bg-white border-b sticky top-16 md:top-20 z-40">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {filtros.map((filtro) => {
                const Icon = filtro.icon;
                return (
                  <button
                    key={filtro.id}
                    onClick={() => setFiltroAtivo(filtro.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                      filtroAtivo === filtro.id
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm md:text-base">{filtro.nome}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Barra de Busca */}
        <section className="py-4 bg-white border-b">
          <div className="container">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar categoria..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        {filtroAtivo === "portfolio" ? (
          /* Portfolio - Produtos já feitos */
          <section className="py-12">
            <div className="container">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Veja Alguns Materiais que Já Fizemos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {produtosPortfolio.map((produto) => (
                  <div
                    key={produto.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-1">
                        {produto.nome}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {produto.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Portfolio */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                  Gostou do que viu? Entre em contato e faça o seu também!
                </p>
                <button
                  onClick={() => abrirWhatsApp("Olá! Vi o portfólio de vocês e gostaria de fazer um orçamento.")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* Categorias de Produtos */
          <section className="py-12">
            <div className="container">
              {categoriasOrdenadas.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Nenhuma categoria encontrada</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {categoriasOrdenadas.map((categoria) => {
                    const Icon = categoria.icon;
                    return (
                      <div
                        key={categoria.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                      >
                        {/* Imagem da Categoria */}
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            src={categoria.imagem}
                            alt={categoria.nome}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/images/placeholder-produto.png";
                            }}
                          />
                          {/* Ícone overlay */}
                          <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow">
                            <Icon className="w-4 h-4 text-purple-600" />
                          </div>
                        </div>
                        
                        {/* Info da Categoria */}
                        <div className="p-3">
                          <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">
                            {categoria.nome}
                          </h3>
                          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                            {categoria.descricao}
                          </p>
                          
                          {/* Botões WhatsApp */}
                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => abrirWhatsApp(`Olá! Gostaria de ver os modelos disponíveis de ${categoria.nome}.`)}
                              className="w-full px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1"
                            >
                              <Eye className="w-3 h-3" />
                              Solicite Modelos
                            </button>
                            <button
                              onClick={() => abrirWhatsApp(`Olá! Gostaria de fazer um orçamento de ${categoria.nome} personalizados.`)}
                              className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1"
                            >
                              <MessageCircle className="w-3 h-3" />
                              Faça o Orçamento
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-500">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Trabalhamos com diversos outros produtos! Entre em contato e conte-nos o que você precisa.
            </p>
            <button
              onClick={() => abrirWhatsApp("Olá! Gostaria de saber mais sobre os produtos personalizados da AFK.")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
