/**
 * Kits Corporativos de Boas-Vindas - AFK Camisetas
 * Página de Kits de Onboarding para empresas
 */
import { Heart, Megaphone, Star, Users, Rocket, Package, CheckCircle, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5541987386527";
const EMAIL = "afkcamisetas@gmail.com.br";

const beneficios = [
  {
    icon: Heart,
    titulo: "Engajamento Imediato",
    descricao: "Colaboradores se sentem valorizados desde o primeiro dia",
  },
  {
    icon: Megaphone,
    titulo: "Reforço de Marca",
    descricao: "Itens personalizados fortalecem a identidade corporativa",
  },
  {
    icon: Star,
    titulo: "Profissionalismo",
    descricao: "Demonstra organização e cuidado com a equipe",
  },
  {
    icon: Users,
    titulo: "Senso de Pertencimento",
    descricao: "Cria conexão emocional com a empresa",
  },
  {
    icon: Rocket,
    titulo: "Produtividade",
    descricao: "Itens úteis facilitam o trabalho diário",
  },
];

const kits = [
  {
    nome: "Kit Onboarding Clássico",
    cor: "from-pink-500 to-rose-500",
    itens: [
      "Caderno personalizado capa dura",
      "Caneta metálica com logo",
      "Squeeze 500ml",
      "Mochila ou ecobag personalizada",
      "Cartão de boas-vindas",
    ],
    ideal: "Empresas de todos os segmentos",
    personalizacao: true,
    pedidoMinimo: "3 unidades",
  },
  {
    nome: "Kit Onboarding Tecnológico",
    cor: "from-orange-500 to-amber-500",
    itens: [
      "Pen drive 16GB personalizado",
      "Power bank 10.000mAh",
      "Fone de ouvido wireless",
      "Mouse pad ergonômico",
      "Suporte para notebook",
    ],
    ideal: "Startups e empresas de tecnologia",
  },
  {
    nome: "Kit Onboarding Conforto",
    cor: "from-yellow-500 to-orange-500",
    investimento: "R$ 150,00 - R$ 220,00 por kit",
    itens: [
      "Almofada ergonômica personalizada",
      "Manta soft com logo bordado",
      "Caneca térmica premium",
      "Creme para as mãos",
      "Vela aromática",
    ],
    ideal: "Empresas que valorizam bem-estar",
  },
  {
    nome: "Kit Onboarding Ecológico",
    cor: "from-teal-500 to-cyan-500",
    investimento: "R$ 110,00 - R$ 160,00 por kit",
    itens: [
      "Caneta de bambu personalizada",
      "Ecobag 100% algodão",
      "Garrafa reutilizável inox",
      "Caderno reciclado",
      "Semente para plantio",
    ],
    ideal: "Empresas com foco em sustentabilidade",
  },
];

const categorias = [
  { nome: "Papelaria e Escritório", icon: "📝" },
  { nome: "Tecnologia", icon: "💻" },
  { nome: "Hidratação e Alimentação", icon: "☕" },
  { nome: "Bolsas e Acessórios", icon: "👜" },
  { nome: "Conforto e Bem-Estar", icon: "🛋️" },
  { nome: "Vestuário", icon: "👕" },
];

const tecnicas = [
  {
    nome: "Serigrafia",
    descricao: "Ideal para grandes quantidades com cores sólidas",
  },
  {
    nome: "Sublimação",
    descricao: "Cores vibrantes em poliéster e superfícies claras",
  },
  {
    nome: "Gravação a Laser",
    descricao: "Elegante em metal, madeira e couro",
  },
  {
    nome: "Bordado",
    descricao: "Sofisticado e durável, perfeito para tecidos",
  },
  {
    nome: "Transfer Laser",
    descricao: "Designs complexos com alta precisão",
  },
  {
    nome: "UV Digital",
    descricao: "Alta definição em diversos materiais",
  },
  {
    nome: "DTF",
    descricao: "Tecnologia moderna para tecidos diversos",
  },
];

export default function KitsCorporativos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero com gradiente da identidade AFK */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-pink-400 to-orange-400 opacity-90" />
          <div className="relative container py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="mb-6">
                <img 
                  src="/images/logo-afk.png" 
                  alt="AFK Camisetas" 
                  className="h-20 mx-auto mb-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Onboarding
              </h1>
              <p className="text-2xl md:text-3xl mb-4">
                Transforme a chegada de novos colaboradores
              </p>
              <p className="text-lg opacity-90">
                seguem algumas idéias para ajudar a sua decisão, mas é claro que se precisar tem Muito +
              </p>
            </div>
          </div>
        </section>

        {/* Por Que Investir */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pink-600">
              Por Que Investir em Kits de Onboarding?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-pink-500 mx-auto mb-12" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-gray-600">
                      {beneficio.descricao}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kits Disponíveis */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nossos Kits de Onboarding
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {kits.map((kit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${kit.cor}`} />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {kit.nome}
                    </h3>
                    
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-pink-600 mb-3">O que inclui:</p>
                      <ul className="space-y-2">
                        {kit.itens.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-1">IDEAL PARA:</p>
                      <p className="text-gray-900">{kit.ideal}</p>
                    </div>
                    
                    {kit.investimento && (
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-4 mb-4">
                        <p className="text-sm font-semibold text-white mb-1">INVESTIMENTO</p>
                        <p className="text-xl font-bold text-white">{kit.investimento}</p>
                      </div>
                    )}
                    
                    {kit.personalizacao && (
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-4 text-white">
                        <p className="font-semibold">Podemos personalizar com o nome do colaborador</p>
                        <p className="text-sm">Pedidos a partir de {kit.pedidoMinimo}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monte Seu Kit */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                Monte Seu Kit Personalizado
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-pink-500 mx-auto mb-6" />
              <p className="text-lg text-gray-700">
                Além dos kits prontos, você pode montar seu próprio kit escolhendo itens individualmente de acordo com as necessidades da sua empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {categorias.map((categoria, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-pink-400 transition-colors">
                  <div className="text-4xl mb-3">{categoria.icon}</div>
                  <p className="font-semibold text-gray-900">{categoria.nome}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white max-w-2xl mx-auto">
              <Package className="w-12 h-12 mx-auto mb-4" />
              <p className="text-2xl font-bold">
                Mais de 50 itens disponíveis para personalização!
              </p>
            </div>
          </div>
        </section>

        {/* Técnicas de Personalização */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pink-600">
              Técnicas de Personalização de Alta Qualidade
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-pink-500 mx-auto mb-12" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tecnicas.map((tecnica, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tecnica.nome}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tecnica.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência de Unboxing */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-pink-600">
                Experiência Completa de Unboxing
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-pink-500 mx-auto mb-8" />
              
              <p className="text-lg text-gray-700 text-center mb-8">
                Transforme a abertura do kit em um momento memorável com embalagens personalizadas que refletem a identidade da sua marca.
              </p>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inclui:</h3>
                <ul className="space-y-3">
                  {[
                    "Caixa kraft ou rígida personalizada com logo",
                    "Papel de seda com logo impresso",
                    "Fita adesiva personalizada",
                    "Cartão de boas-vindas exclusivo",
                    "Adesivos com logo AFK",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-center text-white">
                <p className="text-2xl font-bold">
                  A primeira impressão é fundamental!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-br from-teal-400 via-pink-400 to-orange-400">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para criar kits incríveis para sua equipe?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Entre em contato e receba um orçamento personalizado
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para Kits Corporativos de Boas-Vindas.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (41) 98738-6527
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                  {EMAIL}
                </a>
              </div>
              
              <p className="text-sm opacity-75">
                Curitiba - PR | Atendemos toda a região metropolitana
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
