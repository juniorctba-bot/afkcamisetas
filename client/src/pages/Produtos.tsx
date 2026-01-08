/**
 * Produtos Page - Lista de produtos da AFK com preços
 * Design: Gradiente Tropical - Consistente com o site de Volta às Aulas
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MessageCircle, 
  Shirt, 
  Coffee, 
  Package,
  ArrowLeft,
  Filter
} from "lucide-react";
import { WHATSAPP_NUMBER, CATALOG_URL } from "@/lib/constants";

// Dados dos produtos
const produtos = [
  {
    id: 1,
    nome: "Etiquetas de Vinil (Página A4)",
    categoria: "Etiquetas",
    descricao: "Etiquetas de vinil para lápis, cadernos e materiais escolares. Página A4 completa.",
    precoBase: 6.50,
    minimo: 1,
    imagem: "/images/etiqueta_01_dinossauros.png",
    destaque: true,
  },
  {
    id: 2,
    nome: "Etiquetas de Pano (3 unidades)",
    categoria: "Etiquetas",
    descricao: "Etiquetas de pano personalizadas que resistem a lavagens. Kit com 3 unidades.",
    precoBase: 9.99,
    minimo: 3,
    imagem: "/images/etiqueta_02_unicornio.png",
    destaque: true,
  },
  {
    id: 3,
    nome: "Camiseta Branca Adulto",
    categoria: "Vestuário",
    descricao: "Camiseta branca 100% poliéster para sublimação. Ideal para uniformes e eventos.",
    precoBase: 35.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 4,
    nome: "Camiseta Colorida Adulto",
    categoria: "Vestuário",
    descricao: "Camiseta colorida 100% poliéster. Diversas cores disponíveis.",
    precoBase: 40.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 5,
    nome: "Camiseta Infantil",
    categoria: "Vestuário",
    descricao: "Camiseta infantil personalizada. Tamanhos de 2 a 14 anos.",
    precoBase: 30.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 6,
    nome: "Caneca de Cerâmica 325ml",
    categoria: "Casa",
    descricao: "Caneca branca de cerâmica para sublimação. Acompanha embalagem.",
    precoBase: 25.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 7,
    nome: "Caneca com Colher 325ml",
    categoria: "Casa",
    descricao: "Caneca de cerâmica com colher interna e alça colorida.",
    precoBase: 30.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 8,
    nome: "Chinelo Personalizado",
    categoria: "Calçados",
    descricao: "Chinelo branco com personalização nas tiras. Tamanhos 23 a 46.",
    precoBase: 28.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 9,
    nome: "Boné Trucker",
    categoria: "Acessórios",
    descricao: "Boné modelo trucker com frente para personalização. Diversas cores.",
    precoBase: 25.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 10,
    nome: "Mouse Pad Redondo",
    categoria: "Escritório",
    descricao: "Mouse pad redondo personalizado. Tamanho 18,5cm x 18,5cm.",
    precoBase: 18.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 11,
    nome: "Almofada Oxford",
    categoria: "Casa",
    descricao: "Almofada em tecido Oxford personalizada. Diversos formatos.",
    precoBase: 35.00,
    minimo: 3,
    imagem: null,
  },
  {
    id: 12,
    nome: "Quebra-Cabeça MDF 36 peças",
    categoria: "Brinquedos",
    descricao: "Quebra-cabeça em MDF com imagem personalizada. 20cm x 20cm.",
    precoBase: 22.00,
    minimo: 3,
    imagem: null,
  },
];

const categorias = ["Todos", "Etiquetas", "Vestuário", "Casa", "Calçados", "Acessórios", "Escritório", "Brinquedos"];

export default function Produtos() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const produtosFiltrados = produtos.filter((produto) => {
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       produto.descricao.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaAtiva === "Todos" || produto.categoria === categoriaAtiva;
    return matchBusca && matchCategoria;
  });

  const handleWhatsApp = (produto: typeof produtos[0]) => {
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para: ${produto.nome}\n\nPreço base: R$ ${produto.precoBase.toFixed(2)}\nQuantidade mínima: ${produto.minimo} unidades`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero text-white py-16 md:py-20">
        <div className="container">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Volta às Aulas
          </a>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Nossos Produtos
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Personalize com alta qualidade. Pedido mínimo a partir de 3 unidades.
          </p>
        </div>
      </header>

      {/* Filtros */}
      <section className="py-6 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((cat) => (
                <Button
                  key={cat}
                  variant={categoriaAtiva === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoriaAtiva(cat)}
                  className={categoriaAtiva === cat ? "bg-gradient-cta border-0" : ""}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className={`bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  produto.destaque ? "border-[#0066FF]/30 ring-2 ring-[#0066FF]/20" : "border-border"
                }`}
              >
                {/* Imagem */}
                <div className="aspect-square bg-gradient-to-br from-[#E0F2FE] to-[#DBEAFE] flex items-center justify-center p-4 relative">
                  {produto.destaque && (
                    <span className="absolute top-3 left-3 bg-gradient-cta text-white text-xs font-bold px-2 py-1 rounded-full">
                      Promoção
                    </span>
                  )}
                  {produto.imagem ? (
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white/50 flex items-center justify-center">
                      {produto.categoria === "Vestuário" && <Shirt className="w-10 h-10 text-[#0066FF]/50" />}
                      {produto.categoria === "Casa" && <Coffee className="w-10 h-10 text-[#0066FF]/50" />}
                      {!["Vestuário", "Casa"].includes(produto.categoria) && (
                        <Package className="w-10 h-10 text-[#0066FF]/50" />
                      )}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="text-xs font-medium text-[#0066FF] bg-[#0066FF]/10 px-2 py-1 rounded-full">
                    {produto.categoria}
                  </span>
                  
                  <h3 className="font-bold text-foreground mt-2 mb-1 line-clamp-2">
                    {produto.nome}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {produto.descricao}
                  </p>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">A partir de</p>
                      <p className="text-2xl font-black text-[#0066FF]">
                        R$ {produto.precoBase.toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Mín: {produto.minimo} un.
                      </p>
                    </div>
                    
                    <Button
                      size="sm"
                      className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                      onClick={() => handleWhatsApp(produto)}
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Orçar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-muted-foreground">
                Tente buscar com outros termos ou selecione outra categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-hero text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Entre em contato conosco! Temos muito mais opções disponíveis e podemos personalizar conforme sua necessidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#0066FF] hover:bg-white/90 font-bold"
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os produtos da AFK.")}`, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open(CATALOG_URL, "_blank")}
            >
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-6 bg-[#0A1628] text-white/60 text-center text-sm">
        <div className="container">
          <p>© 2026 AFK Camisetas e Muito +. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
