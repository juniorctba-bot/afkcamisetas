/**
 * Produtos - AFK Camisetas
 * Página de produtos com filtros e categorias
 */
import { useState } from "react";
import { Package, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

const produtos = [
  {
    id: 1,
    nome: "Chinelo Personalizado",
    categoria: "Calçados",
    tipo: ["Para Mim", "Para Evento"],
    descricao: "Chinelo branco confortável com personalização exclusiva na frente das tiras.",
  },
  {
    id: 2,
    nome: "Camiseta Infantil Personalizada",
    categoria: "Vestuário Infantil",
    tipo: ["Para Mim"],
    descricao: "Camiseta infantil 100% poliéster, macia e confortável.",
  },
  {
    id: 3,
    nome: "Camiseta Colorida Adulto",
    categoria: "Vestuário Adulto",
    tipo: ["Para Empresa", "Para Evento"],
    descricao: "Camiseta adulta 100% poliéster em cores vibrantes.",
  },
  {
    id: 4,
    nome: "Camiseta Branca Adulto",
    categoria: "Vestuário Adulto",
    tipo: ["Para Mim", "Para Empresa"],
    descricao: "Camiseta branca básica 100% poliéster, versátil e confortável.",
  },
  {
    id: 5,
    nome: "Caneca de Cerâmica com Colher 325ml",
    categoria: "Casa e Decoração",
    tipo: ["Para Mim", "Para Empresa"],
    descricao: "Caneca de cerâmica 325ml com colher interna e alça colorida.",
  },
  {
    id: 6,
    nome: "Caneca Branca de Cerâmica 325ml",
    categoria: "Casa e Decoração",
    tipo: ["Para Mim"],
    descricao: "Caneca branca clássica de cerâmica 325ml.",
  },
  {
    id: 7,
    nome: "Cueca ou Calcinha Personalizada",
    categoria: "Vestuário Íntimo",
    tipo: ["Para Mim"],
    descricao: "Cueca ou calcinha com personalização exclusiva.",
  },
  {
    id: 8,
    nome: "Meias Personalizadas",
    categoria: "Acessórios",
    tipo: ["Para Mim", "Para Evento"],
    descricao: "Meias personalizadas com fotos ou designs exclusivos.",
  },
  {
    id: 9,
    nome: "Azulejos Personalizados",
    categoria: "Casa e Decoração",
    tipo: ["Para Mim", "Para Empresa"],
    descricao: "Azulejos decorativos personalizados em diversos tamanhos.",
  },
  {
    id: 10,
    nome: "Almofada em Oxford Personalizada",
    categoria: "Casa e Decoração",
    tipo: ["Para Mim"],
    descricao: "Almofada em tecido Oxford com estampa personalizada.",
  },
  {
    id: 11,
    nome: "Boné Trucker Personalizado",
    categoria: "Acessórios",
    tipo: ["Para Mim", "Para Empresa", "Para Evento"],
    descricao: "Boné modelo trucker com tela traseira e frente para personalização.",
  },
  {
    id: 12,
    nome: "Quebra-Cabeça Personalizado em MDF",
    categoria: "Brinquedos e Jogos",
    tipo: ["Para Mim"],
    descricao: "Quebra-cabeça em MDF com 36 peças e imagem personalizada.",
  },
  {
    id: 13,
    nome: "Mouse Pad Redondo Personalizado",
    categoria: "Tecnologia e Escritório",
    tipo: ["Para Mim", "Para Empresa"],
    descricao: "Mouse pad redondo com estampa personalizada.",
  },
];

const categorias = [
  "Todas as Categorias",
  "Calçados",
  "Vestuário Infantil",
  "Vestuário Adulto",
  "Casa e Decoração",
  "Vestuário Íntimo",
  "Acessórios",
  "Brinquedos e Jogos",
  "Tecnologia e Escritório",
];

const tipos = ["Todos", "Para Mim", "Para Empresa", "Para Evento"];

export default function ProdutosAFK() {
  const [tipoSelecionado, setTipoSelecionado] = useState("Todos");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas as Categorias");
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) => {
    const matchTipo = tipoSelecionado === "Todos" || produto.tipo.includes(tipoSelecionado);
    const matchCategoria = categoriaSelecionada === "Todas as Categorias" || produto.categoria === categoriaSelecionada;
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       produto.descricao.toLowerCase().includes(busca.toLowerCase());
    return matchTipo && matchCategoria && matchBusca;
  });

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
            <p className="text-xl text-white/90">
              Personalize com alta qualidade e tecnologia de ponta
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 bg-white border-b sticky top-16 md:top-20 z-40">
          <div className="container">
            {/* Tipo */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tipos.map((tipo) => (
                <button
                  key={tipo}
                  onClick={() => setTipoSelecionado(tipo)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    tipoSelecionado === tipo
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tipo}
                </button>
              ))}
            </div>
            
            {/* Busca e Categoria */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={categoriaSelecionada}
                  onChange={(e) => setCategoriaSelecionada(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 appearance-none bg-white"
                >
                  {categorias.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {produtosFiltrados.map((produto) => (
                <div 
                  key={produto.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                        {produto.categoria}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {produto.nome}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {produto.descricao}
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${produto.nome}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {produtosFiltrados.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Nenhum produto encontrado com os filtros selecionados.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco! Temos muito mais opções disponíveis.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os produtos disponíveis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
