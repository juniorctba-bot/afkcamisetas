/**
 * Catálogos Promocionais - AFK Camisetas
 * Página com catálogos para datas comemorativas
 */
import { Calendar, Download, MessageCircle, Heart, Ribbon, Gift, Sun, Snowflake, GraduationCap, Baby, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

const catalogos = [
  {
    id: "volta-aulas",
    nome: "Volta às Aulas 2026",
    descricao: "Etiquetas escolares, mochilas, estojos e kits personalizados para a volta às aulas.",
    icon: GraduationCap,
    cor: "from-blue-500 to-cyan-500",
    meses: ["Janeiro", "Fevereiro"],
    produtos: ["Etiquetas escolares", "Mochilas", "Estojos", "Canecas infantis", "Camisetas escolares"],
    link: "/volta-as-aulas",
    disponivel: true,
  },
  {
    id: "carnaval",
    nome: "Carnaval 2026",
    descricao: "Abadás, acessórios e kits completos para blocos e festas de carnaval.",
    icon: Sun,
    cor: "from-yellow-400 to-orange-500",
    meses: ["Fevereiro", "Março"],
    produtos: ["Abadás personalizados", "Viseiras", "Squeezes", "Pochetes", "Óculos personalizados"],
    link: "/colecoes/carnaval-2026",
    disponivel: true,
  },
  {
    id: "dia-mulher",
    nome: "Dia da Mulher",
    descricao: "Presentes especiais para homenagear as mulheres da sua empresa.",
    icon: Heart,
    cor: "from-pink-400 to-rose-500",
    meses: ["Março"],
    produtos: ["Canecas", "Necessaires", "Camisetas", "Ecobags", "Kits de presentes"],
    disponivel: false,
  },
  {
    id: "pascoa",
    nome: "Páscoa",
    descricao: "Embalagens e brindes temáticos para a Páscoa.",
    icon: Gift,
    cor: "from-purple-400 to-pink-500",
    meses: ["Abril"],
    produtos: ["Sacolas personalizadas", "Canecas temáticas", "Camisetas", "Embalagens"],
    disponivel: false,
  },
  {
    id: "dia-maes",
    nome: "Dia das Mães",
    descricao: "Presentes personalizados para homenagear as mães.",
    icon: Heart,
    cor: "from-pink-500 to-red-500",
    meses: ["Maio"],
    produtos: ["Canecas com foto", "Camisetas personalizadas", "Necessaires", "Almofadas", "Porta-retratos"],
    disponivel: false,
  },
  {
    id: "dia-namorados",
    nome: "Dia dos Namorados",
    descricao: "Presentes românticos e personalizados para casais.",
    icon: Heart,
    cor: "from-red-400 to-pink-500",
    meses: ["Junho"],
    produtos: ["Canecas de casal", "Camisetas combinando", "Almofadas", "Porta-retratos"],
    disponivel: false,
  },
  {
    id: "dia-pais",
    nome: "Dia dos Pais",
    descricao: "Presentes especiais para homenagear os pais.",
    icon: Gift,
    cor: "from-blue-600 to-indigo-600",
    meses: ["Agosto"],
    produtos: ["Canecas", "Camisetas", "Chinelos", "Squeezes", "Porta-copos"],
    disponivel: false,
  },
  {
    id: "setembro-amarelo",
    nome: "Setembro Amarelo",
    descricao: "Produtos para campanhas de conscientização sobre saúde mental.",
    icon: Ribbon,
    cor: "from-yellow-400 to-yellow-600",
    meses: ["Setembro"],
    produtos: ["Camisetas amarelas", "Fitas de conscientização", "Canecas", "Adesivos"],
    disponivel: false,
  },
  {
    id: "outubro-rosa",
    nome: "Outubro Rosa",
    descricao: "Produtos para campanhas de conscientização sobre o câncer de mama.",
    icon: Ribbon,
    cor: "from-pink-400 to-pink-600",
    meses: ["Outubro"],
    produtos: ["Camisetas rosa", "Fitas de conscientização", "Canecas", "Ecobags", "Bonés"],
    disponivel: false,
  },
  {
    id: "novembro-azul",
    nome: "Novembro Azul",
    descricao: "Produtos para campanhas de conscientização sobre a saúde do homem.",
    icon: Ribbon,
    cor: "from-blue-400 to-blue-600",
    meses: ["Novembro"],
    produtos: ["Camisetas azuis", "Fitas de conscientização", "Canecas", "Squeezes", "Bonés"],
    disponivel: false,
  },
  {
    id: "natal",
    nome: "Natal 2026",
    descricao: "Presentes e brindes natalinos para colaboradores e clientes.",
    icon: Snowflake,
    cor: "from-red-500 to-green-600",
    meses: ["Dezembro"],
    produtos: ["Camisetas natalinas", "Canecas", "Kits de presentes", "Ecobags", "Calendários"],
    disponivel: false,
  },
  {
    id: "aniversario",
    nome: "Aniversários e Festas",
    descricao: "Lembrancinhas e produtos personalizados para festas e aniversários.",
    icon: Baby,
    cor: "from-purple-500 to-pink-500",
    meses: ["O ano todo"],
    produtos: ["Camisetas temáticas", "Canecas", "Chinelos", "Sacolas", "Lembrancinhas"],
    disponivel: false,
  },
];

export default function CatalogosPromocionais() {
  const catalogosDisponiveis = catalogos.filter(c => c.disponivel);
  const catalogosEmBreve = catalogos.filter(c => !c.disponivel);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Catálogos Promocionais
              </h1>
              <p className="text-xl text-white/90">
                Planeje suas campanhas com antecedência! Confira nossos catálogos para cada data comemorativa do ano.
              </p>
            </div>
          </div>
        </section>

        {/* Catálogos Disponíveis */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Catálogos Disponíveis
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {catalogosDisponiveis.map((catalogo) => {
                const Icon = catalogo.icon;
                return (
                  <div 
                    key={catalogo.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border-2 border-green-200"
                  >
                    {/* Header colorido */}
                    <div className={`bg-gradient-to-r ${catalogo.cor} p-6`}>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {catalogo.nome}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {Array.isArray(catalogo.meses) ? catalogo.meses.join(" - ") : catalogo.meses}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">
                        {catalogo.descricao}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-500 mb-2">Produtos sugeridos:</p>
                        <div className="flex flex-wrap gap-1">
                          {catalogo.produtos.slice(0, 3).map((produto, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600"
                            >
                              {produto}
                            </span>
                          ))}
                          {catalogo.produtos.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                              +{catalogo.produtos.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Botões */}
                      <div className="flex gap-2">
                        {catalogo.link ? (
                          <a
                            href={catalogo.link}
                            className="flex-1 text-center px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm"
                          >
                            Ver Catálogo
                          </a>
                        ) : (
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de ver o catálogo de ${catalogo.nome}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm"
                          >
                            Solicitar Catálogo
                          </a>
                        )}
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${catalogo.nome}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors text-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Catálogos Em Breve */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="w-6 h-6 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-900">
                Em Breve
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catalogosEmBreve.map((catalogo) => {
                const Icon = catalogo.icon;
                return (
                  <div 
                    key={catalogo.id}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 opacity-75"
                  >
                    {/* Header colorido com overlay */}
                    <div className={`bg-gradient-to-r ${catalogo.cor} p-6 relative`}>
                      <div className="absolute inset-0 bg-gray-900/30"></div>
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {catalogo.nome}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {Array.isArray(catalogo.meses) ? catalogo.meses.join(" - ") : catalogo.meses}
                          </p>
                        </div>
                      </div>
                      {/* Badge Em Breve */}
                      <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Em Breve
                      </div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="p-6">
                      <p className="text-gray-500 mb-4">
                        {catalogo.descricao}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-400 mb-2">Produtos sugeridos:</p>
                        <div className="flex flex-wrap gap-1">
                          {catalogo.produtos.slice(0, 3).map((produto, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-400"
                            >
                              {produto}
                            </span>
                          ))}
                          {catalogo.produtos.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-400">
                              +{catalogo.produtos.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Botão desabilitado */}
                      <div className="flex gap-2">
                        <button
                          disabled
                          className="flex-1 text-center px-4 py-2 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed text-sm"
                        >
                          Disponível em breve
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dica de Planejamento */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Calendar className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Planeje com Antecedência!
              </h2>
              <p className="text-gray-600 mb-6">
                Para garantir a melhor qualidade e preço, recomendamos fazer seu pedido com pelo menos 
                <strong> 15 a 30 dias de antecedência</strong> da data comemorativa. 
                Assim, temos tempo para produzir com calma e você recebe tudo no prazo.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de planejar uma campanha promocional para minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Planejar Minha Campanha
              </a>
            </div>
          </div>
        </section>

        {/* Download Catálogo PDF */}
        <section className="py-12 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Catálogo Completo de Brindes
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Baixe nosso catálogo completo em PDF com todos os produtos, preços e especificações técnicas.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de receber o catálogo completo de brindes corporativos em PDF.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              <Download className="w-5 h-5" />
              Solicitar Catálogo PDF
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
