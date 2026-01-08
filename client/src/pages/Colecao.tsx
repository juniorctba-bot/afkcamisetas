/**
 * Coleção - AFK Camisetas
 * Página genérica para coleções (Natal, Carnaval, etc.)
 */
import { ArrowRight, Gift, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

const colecoes: Record<string, {
  titulo: string;
  subtitulo: string;
  descricao: string;
  cor: string;
  validade: string;
  produtos: { nome: string; descricao: string }[];
}> = {
  "natal-2025": {
    titulo: "Natal 2025",
    subtitulo: "Presenteie com produtos personalizados",
    descricao: "Neste Natal, surpreenda quem você ama com presentes únicos e personalizados. Canecas, camisetas, almofadas e muito mais!",
    cor: "from-red-500 to-green-500",
    validade: "Até 25/12/2025",
    produtos: [
      { nome: "Caneca Natalina", descricao: "Caneca personalizada com tema natalino" },
      { nome: "Camiseta de Natal", descricao: "Camiseta com estampa natalina personalizada" },
      { nome: "Almofada Natalina", descricao: "Almofada decorativa para o Natal" },
      { nome: "Kit Família Natal", descricao: "Camisetas combinando para toda a família" },
    ],
  },
  "carnaval-2026": {
    titulo: "Carnaval 2026",
    subtitulo: "Camisetas para blocos e grupos",
    descricao: "Prepare-se para o Carnaval 2026! Camisetas personalizadas para blocos de carnaval, escolas de samba, grupos de amigos e muito mais.",
    cor: "from-purple-500 to-pink-500",
    validade: "Até 15/02/2026",
    produtos: [
      { nome: "Camiseta de Bloco", descricao: "Camiseta personalizada para seu bloco" },
      { nome: "Abadá Personalizado", descricao: "Abadá com a cara do seu grupo" },
      { nome: "Kit Carnaval", descricao: "Camiseta + Squeeze + Viseira" },
      { nome: "Fantasia Personalizada", descricao: "Camisetas temáticas para fantasias" },
    ],
  },
};

export default function Colecao() {
  const params = useParams();
  const slug = params.slug || "";
  const colecao = colecoes[slug];

  if (!colecao) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Coleção não encontrada</h1>
            <Link href="/promocoes" className="text-pink-600 hover:underline">
              Ver todas as promoções
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className={`bg-gradient-to-br ${colecao.cor} py-16 md:py-24`}>
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-10 h-10 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {colecao.titulo}
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-2">
              {colecao.subtitulo}
            </p>
            <p className="text-white/70">
              {colecao.validade}
            </p>
          </div>
        </section>

        {/* Descrição */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600">
                {colecao.descricao}
              </p>
            </div>
          </div>
        </section>

        {/* Produtos */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Produtos da Coleção
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {colecao.produtos.map((produto, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className={`h-32 bg-gradient-to-br ${colecao.cor} opacity-20 flex items-center justify-center`}>
                    <Gift className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {produto.nome}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {produto.descricao}
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${produto.nome} da coleção ${colecao.titulo}`}
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
          </div>
        </section>

        {/* CTA */}
        <section className={`py-16 bg-gradient-to-r ${colecao.cor}`}>
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Aproveite esta promoção!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato e garanta seus produtos personalizados
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre a coleção ${colecao.titulo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors"
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
