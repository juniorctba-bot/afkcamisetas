/**
 * Etiquetas Escolares - AFK Camisetas
 * Página dedicada com todas as opções de etiquetas personalizadas
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Droplets, Shirt, Sun, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

export default function Etiquetas() {
  const handleWhatsAppClick = (tipo: string) => {
    const message = `Olá! Gostaria de fazer um orçamento de ${tipo}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 py-16 text-white">
          <div className="container">
            <Link href="/volta-as-aulas">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Volta às Aulas
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Etiquetas Escolares Personalizadas
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                3 opções para identificar todos os materiais do seu filho com segurança e estilo!
              </p>
            </div>
          </div>
        </section>

        {/* Opção 1 - Etiquetas Adesivas */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  <Droplets className="w-4 h-4" />
                  OPÇÃO 1 - À PROVA D'ÁGUA
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Etiquetas Adesivas em Vinil
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Material em vinil adesivo à prova d'água. Ideal para identificar cadernos, agendas, lápis, canetas e todos os materiais escolares.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Etiquetas Grandes (3x10,5cm)</p>
                      <p className="text-gray-600">Ideais para cadernos e pastas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Etiquetas Médias (1,7x6cm)</p>
                      <p className="text-gray-600">Perfeitas para agendas e estojos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Etiquetas Pequenas (0,9x3cm)</p>
                      <p className="text-gray-600">Ótimas para lápis e canetas</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-500 rounded-xl p-4 text-center text-white">
                    <p className="text-sm opacity-90">Combo 3 Folhas</p>
                    <p className="text-3xl font-bold">R$ 22,50</p>
                  </div>
                  <div className="bg-red-500 rounded-xl p-4 text-center text-white">
                    <p className="text-sm opacity-90">Folha Avulsa</p>
                    <p className="text-3xl font-bold">R$ 8,50</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="btn-whatsapp w-full md:w-auto"
                  onClick={() => handleWhatsAppClick("Etiquetas Adesivas em Vinil")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Gabarito A4</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Cada folha A4 contém diversos tamanhos de etiquetas para você identificar todos os materiais!
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`h-8 rounded ${i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                    ))}
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className={`h-4 rounded ${i % 4 === 0 ? 'bg-pink-400' : i % 4 === 1 ? 'bg-purple-400' : i % 4 === 2 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opção 2 - Etiquetas Termocolantes */}
        <section className="py-16 bg-gradient-to-b from-green-50 to-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Aplicação Fácil</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">1</div>
                      <p className="text-gray-700">Posicione a etiqueta no tecido</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">2</div>
                      <p className="text-gray-700">Cubra com papel manteiga</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
                      <p className="text-gray-700">Passe o ferro quente por 15 segundos</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">4</div>
                      <p className="text-gray-700">Pronto! Etiqueta fixada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
                  <Shirt className="w-4 h-4" />
                  OPÇÃO 2 - PARA TECIDOS
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Etiquetas Termocolantes
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ideal para uniformes, aventais e tecidos. Fixe com ferro de passar roupa em casa de forma fácil e rápida!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Adapta-se a todos os tecidos</p>
                      <p className="text-gray-600">Uniformes, aventais, toalhas e mais</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Fácil aplicação em casa</p>
                      <p className="text-gray-600">Apenas com ferro de passar roupa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Você escolhe o tamanho</p>
                      <p className="text-gray-600">De 1 grande até várias pequenas na mesma folha</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-600 rounded-xl p-4 text-center text-white">
                    <p className="text-sm opacity-90">Folha Avulsa A4</p>
                    <p className="text-3xl font-bold">R$ 15,00</p>
                  </div>
                  <div className="bg-teal-600 rounded-xl p-4 text-center text-white">
                    <p className="text-sm opacity-90">3 Folhas A4</p>
                    <p className="text-3xl font-bold">R$ 35,00</p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="btn-whatsapp w-full md:w-auto"
                  onClick={() => handleWhatsAppClick("Etiquetas Termocolantes para Tecido")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Opção 3 - Etiquetas UV */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-4">
                  <Sun className="w-4 h-4" />
                  OPÇÃO 3 - SUPER RESISTENTE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Etiquetas UV para Itens Rígidos
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Técnica DTF-UV com adesão definitiva curada com luz UV. Ideal para itens que precisam de máxima durabilidade!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Pode molhar!</p>
                      <p className="text-gray-600">Não descola nem sai com facilidade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Ideal para itens rígidos</p>
                      <p className="text-gray-600">Cabo de guarda-chuva, galochas, lancheiras, garrafas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Adesão definitiva</p>
                      <p className="text-gray-600">Técnica DTF-UV curada com luz ultravioleta</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                  <p className="text-yellow-800 font-medium">
                    ⚠️ Exceto superfícies de silicone
                  </p>
                </div>

                <div className="bg-purple-600 rounded-xl p-4 text-center text-white mb-6 max-w-xs">
                  <p className="text-sm opacity-90">Folha A4</p>
                  <p className="text-3xl font-bold">R$ 52,00</p>
                  <p className="text-sm opacity-90">Consulte tamanhos menores</p>
                </div>

                <Button 
                  size="lg" 
                  className="btn-whatsapp w-full md:w-auto"
                  onClick={() => handleWhatsAppClick("Etiquetas UV para Itens Rígidos")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Onde Aplicar</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">🌂</p>
                      <p className="text-sm text-gray-700">Guarda-chuvas</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">👢</p>
                      <p className="text-sm text-gray-700">Galochas</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">🍱</p>
                      <p className="text-sm text-gray-700">Lancheiras</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">🍶</p>
                      <p className="text-sm text-gray-700">Garrafas</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">✏️</p>
                      <p className="text-sm text-gray-700">Estojos</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <p className="text-3xl mb-2">📦</p>
                      <p className="text-sm text-gray-700">E muito mais!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativo */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              Qual Etiqueta Escolher?
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-4 text-left">Característica</th>
                    <th className="p-4 text-center bg-blue-600">Adesivas (Vinil)</th>
                    <th className="p-4 text-center bg-green-600">Termocolantes</th>
                    <th className="p-4 text-center bg-purple-600">UV (Rígidos)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Ideal para</td>
                    <td className="p-4 text-center">Cadernos, lápis, agendas</td>
                    <td className="p-4 text-center">Uniformes, aventais</td>
                    <td className="p-4 text-center">Lancheiras, garrafas</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Resistência à água</td>
                    <td className="p-4 text-center">✅ Sim</td>
                    <td className="p-4 text-center">✅ Lavável</td>
                    <td className="p-4 text-center">✅ Máxima</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Aplicação</td>
                    <td className="p-4 text-center">Adesivo (cola e pronto)</td>
                    <td className="p-4 text-center">Ferro de passar</td>
                    <td className="p-4 text-center">Já aplicada</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Preço (folha avulsa)</td>
                    <td className="p-4 text-center font-bold text-blue-600">R$ 8,50</td>
                    <td className="p-4 text-center font-bold text-green-600">R$ 15,00</td>
                    <td className="p-4 text-center font-bold text-purple-600">R$ 52,00</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Combo 3 folhas</td>
                    <td className="p-4 text-center font-bold text-blue-600">R$ 22,50</td>
                    <td className="p-4 text-center font-bold text-green-600">R$ 35,00</td>
                    <td className="p-4 text-center text-gray-500">Consulte</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Personalizar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e solicite seu orçamento. Atendemos Curitiba e região!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg"
                onClick={() => handleWhatsAppClick("Etiquetas Escolares Personalizadas")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Link href="/volta-as-aulas">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
                >
                  Ver Outros Produtos
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-white/80">
              📞 (41) 98738-6527 | ✉️ afkcamisetas@gmail.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
