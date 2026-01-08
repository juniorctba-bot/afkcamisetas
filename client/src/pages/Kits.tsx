/**
 * Kits - AFK Camisetas
 * Página de kits personalizados
 */
import { ArrowRight, GraduationCap, Briefcase, Heart, Users, Home, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

const kits = [
  {
    id: 1,
    nome: "Kit Escolar",
    descricao: "Camiseta + Mochila saco + Squeeze personalizado para estudantes",
    icon: GraduationCap,
    preco: "89,90",
    itens: ["Camiseta personalizada", "Mochila saco", "Squeeze 500ml", "Estojo (opcional)"],
    cor: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    nome: "Kit Presenteie seu Time do Trabalho",
    descricao: "Camiseta + Caneca + Ecobag para equipes e colaboradores",
    icon: Briefcase,
    preco: "79,90",
    itens: ["Camiseta personalizada", "Caneca 325ml", "Ecobag", "Chaveiro (opcional)"],
    cor: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    nome: "Kit Ao Mestre com Amor",
    descricao: "Caneca + Azulejo + Ecobag para homenagear professores",
    icon: Heart,
    preco: "69,90",
    itens: ["Caneca personalizada", "Azulejo 20x20cm", "Ecobag", "Cartão personalizado"],
    cor: "from-pink-400 to-rose-500",
  },
  {
    id: 4,
    nome: "Kit Amigos do Coração",
    descricao: "Camisetas + Canecas + Chinelos para grupos de amigos",
    icon: Users,
    preco: "99,90",
    itens: ["Camisetas personalizadas", "Canecas 325ml", "Chinelos", "Necessaire (opcional)"],
    cor: "from-purple-400 to-violet-500",
  },
  {
    id: 5,
    nome: "Kit Família",
    descricao: "Camisetas + Meias + Almofadas para toda a família",
    icon: Home,
    preco: "149,90",
    itens: ["Camisetas (adulto e infantil)", "Meias personalizadas", "Almofadas", "Porta-retratos"],
    cor: "from-orange-400 to-amber-500",
  },
  {
    id: 6,
    nome: "Kit Personalizado",
    descricao: "Monte seu kit com os produtos que você quiser!",
    icon: Sparkles,
    preco: null,
    itens: ["Escolha os produtos", "Defina as quantidades", "Personalize do seu jeito"],
    cor: "from-pink-500 to-purple-500",
  },
];

export default function Kits() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kits Personalizados
            </h1>
            <p className="text-xl text-white/90">
              Conjuntos especiais para todas as ocasiões
            </p>
          </div>
        </section>

        {/* Kits */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kits.map((kit) => (
                <div 
                  key={kit.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className={`h-24 bg-gradient-to-r ${kit.cor} flex items-center justify-center`}>
                    <kit.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {kit.nome}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {kit.descricao}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Inclui:</p>
                      <ul className="space-y-1">
                        {kit.itens.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      {kit.preco ? (
                        <p className="text-pink-600 font-bold">
                          A partir de R$ {kit.preco}
                        </p>
                      ) : (
                        <p className="text-pink-600 font-bold">
                          Consulte-nos
                        </p>
                      )}
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para o ${kit.nome}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-pink-600 hover:text-pink-700"
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quer um kit personalizado?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Monte seu kit do jeito que você quiser com os produtos que preferir
            </p>
            <Link 
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Montar Meu Kit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
