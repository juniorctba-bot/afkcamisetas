/**
 * Sobre Nós - AFK Camisetas
 * Página sobre a empresa, história e propósito
 */
import { Check, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const quemAtendemos = [
  "Pequenas associações",
  "Times e torcidas",
  "Grupos e eventos",
  "Empresas de todos os portes",
  "Pessoas físicas",
];

const diferenciais = [
  "A partir de 3 unidades",
  "Valores justos e possíveis",
  "Sem mínimos absurdos",
  "Atendimento personalizado",
  "Qualidade profissional",
];

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre a AFK
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Uma empresa que nasceu de quem sentiu a dor do outro lado
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  A <strong>AFK Camisetas e Muito +</strong> foi concebida por gestores de marketing e financeiro de grandes empresas que uniram forças para criar uma empresa que atenda o mercado de <strong>eventos, treinamentos, promoções</strong> e também consiga dar respaldo à <strong>pessoa física e pequenos grupos</strong> que desejam customizar seus produtos - camisetas, bonés entre outros - para a identidade que merecem.
                </p>
                <p>
                  Hoje o que achamos no mercado são grandes empresas que trabalham e valorizam apenas grandes quantidades, e MEI's que atendem o consumidor final com produtos limitados. A AFK surge para ocupar este vácuo!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nosso Propósito */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nosso Propósito
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Quem Atendemos */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quem Atendemos
                </h3>
                <ul className="space-y-3">
                  {quemAtendemos.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nosso Diferencial */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nosso Diferencial
                </h3>
                <ul className="space-y-3">
                  {diferenciais.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Podemos cobrir pequenas associações, times, torcidas e grupos que precisam de materiais <strong>a partir de 3 unidades</strong> com valores justos e possíveis de pagar. Mas também empresas que muitas vezes precisam de 50 itens, não de mínimos de 300 unidades.
              </p>
              <p className="text-xl font-semibold text-pink-600">
                Conheça-nos e na próxima oportunidade orce seu produto e entenda como podemos diferenciar seu atendimento!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
