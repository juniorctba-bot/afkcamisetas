/**
 * Dia da Mulher 2026 - AFK Camisetas
 * Página especial com presentes personalizados para o Dia da Mulher
 */
import { ArrowRight, Heart, Gift, Users, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

const categoriasProdutos = [
  {
    categoria: "Vestuário Personalizado",
    icone: "👕",
    produtos: [
      { nome: "Camisetas Personalizadas", descricao: "Camisetas com frases inspiradoras ou nome da presenteada" },
      { nome: "Moletons Exclusivos", descricao: "Conforto e estilo com design personalizado" },
      { nome: "Baby Look", descricao: "Modelagem feminina com estampa especial" },
    ],
  },
  {
    categoria: "Canecas e Copos",
    icone: "☕",
    produtos: [
      { nome: "Caneca Personalizada", descricao: "Caneca com foto, nome ou mensagem especial" },
      { nome: "Copo Térmico", descricao: "Mantém a temperatura ideal com design exclusivo" },
      { nome: "Caneca Mágica", descricao: "Revela a imagem ao adicionar líquido quente" },
    ],
  },
  {
    categoria: "Bolsas e Acessórios",
    icone: "👜",
    produtos: [
      { nome: "Necessaire Personalizada", descricao: "Organize seus itens com estilo" },
      { nome: "Ecobag Exclusiva", descricao: "Sustentável e personalizada" },
      { nome: "Mochila Personalizada", descricao: "Prática e com design único" },
      { nome: "Estojo", descricao: "Para maquiagem ou materiais" },
    ],
  },
  {
    categoria: "Casa e Decoração",
    icone: "🏠",
    produtos: [
      { nome: "Almofada Personalizada", descricao: "Conforto com toque especial" },
      { nome: "Toalha de Rosto", descricao: "Toalha com bordado ou sublimação" },
      { nome: "Porta-Retrato", descricao: "Guarde memórias especiais" },
    ],
  },
  {
    categoria: "Acessórios Diversos",
    icone: "💎",
    produtos: [
      { nome: "Chinelo Personalizado", descricao: "Conforto com design exclusivo" },
      { nome: "Chaveiro", descricao: "Lembrança personalizada" },
      { nome: "Espelho de Bolsa", descricao: "Prático e personalizado" },
    ],
  },
];

const kitsEmpresariais = [
  {
    nome: "Kit Essencial",
    descricao: "Ideal para pequenas equipes",
    itens: ["Caneca personalizada", "Ecobag", "Chaveiro"],
    valorAproximado: "A partir de R$ 45,00",
  },
  {
    nome: "Kit Premium",
    descricao: "Para presentear com estilo",
    itens: ["Camiseta personalizada", "Caneca", "Necessaire", "Chinelo"],
    valorAproximado: "A partir de R$ 85,00",
  },
  {
    nome: "Kit Executivo",
    descricao: "Sofisticação e qualidade",
    itens: ["Mochila personalizada", "Copo térmico", "Toalha", "Almofada"],
    valorAproximado: "A partir de R$ 120,00",
  },
];

export default function DiaDaMulher() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 py-16 md:py-24 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-bounce">💐</div>
            <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse">💝</div>
            <div className="absolute bottom-10 left-1/4 text-4xl opacity-20 animate-bounce delay-100">🌸</div>
            <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 animate-pulse delay-200">💜</div>
            <div className="absolute top-1/2 right-10 text-6xl opacity-20 animate-bounce delay-300">✨</div>
          </div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-12 h-12 text-white drop-shadow-lg" />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
                  Dia da Mulher 2026
                </h1>
                <Gift className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
              
              <p className="text-2xl md:text-3xl text-white/95 mb-6 drop-shadow font-semibold">
                Pare de dar flores! 🌹
              </p>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
                Presenteie com algo personalizado e com a cara da presenteada!
              </p>
              
              <p className="text-lg text-white/85 mb-8 drop-shadow">
                O brinde/presente ideal para as mulheres da família, setor, empresa ou grupo de amigos.
              </p>
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para presentes do Dia da Mulher 2026`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-xl"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Kits para Empresas */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white">
          <div className="container">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-10 h-10 text-pink-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Kits Especiais para Empresas
                </h2>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
                <strong>Gestores de Equipe:</strong> Temos kits disponíveis com tamanho e preço adequado para quem tem muitas colaboradoras!
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Presenteie as mulheres da sua equipe com algo especial e personalizado. 
                Demonstre reconhecimento e valorização com presentes que fazem a diferença.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {kitsEmpresariais.map((kit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 border-pink-100"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {kit.nome}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {kit.descricao}
                  </p>
                  <div className="bg-pink-50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-gray-800 mb-2">Inclui:</p>
                    <ul className="space-y-1">
                      {kit.itens.map((item, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-pink-500 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-center font-bold text-pink-600 text-lg mb-4">
                    {kit.valorAproximado}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para o ${kit.nome} - Dia da Mulher 2026`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center">
              <p className="text-lg text-gray-800 mb-4">
                <strong>Desconto especial para grandes quantidades!</strong>
              </p>
              <p className="text-gray-700">
                Entre em contato para orçamentos personalizados para sua empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Produtos Disponíveis */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Produtos Disponíveis para Personalização
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Escolha entre nossa ampla variedade de produtos e crie presentes únicos e especiais.
              </p>
            </div>

            <div className="space-y-8">
              {categoriasProdutos.map((categoria, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{categoria.icone}</span>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {categoria.categoria}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoria.produtos.map((produto, idx) => (
                      <div 
                        key={idx}
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {produto.nome}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {produto.descricao}
                        </p>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para ${produto.nome} - Dia da Mulher 2026`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 font-medium text-sm inline-flex items-center gap-1"
                        >
                          Solicitar orçamento
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que escolher presentes personalizados */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Por que escolher presentes personalizados?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Único e Especial
                </h3>
                <p className="text-gray-600">
                  Cada presente é único e feito especialmente para a presenteada, mostrando cuidado e atenção.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Memorável
                </h3>
                <p className="text-gray-600">
                  Presentes personalizados criam memórias duradouras e são guardados com carinho.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Valorização
                </h3>
                <p className="text-gray-600">
                  Demonstre reconhecimento e valorização das mulheres da sua vida ou equipe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-500">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos celebrar as mulheres especiais da sua vida!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba seu orçamento personalizado para o Dia da Mulher 2026.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para presentes do Dia da Mulher 2026`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            >
              Falar com a AFK no WhatsApp
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
