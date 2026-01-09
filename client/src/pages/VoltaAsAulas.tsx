/**
 * Volta às Aulas - AFK Camisetas
 * Página promocional completa com todos os produtos do catálogo
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ThemesSection from "@/components/ThemesSection";
import ContactFormSection from "@/components/ContactFormSection";
import CTASection from "@/components/CTASection";
import { MessageCircle, Backpack, UtensilsCrossed, Droplets, PenTool, BookOpen, Bath, ChefHat, Percent, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

const produtos = [
  {
    nome: "Mochilas Personalizadas",
    preco: "A partir de R$ 16,90",
    icon: Backpack,
    descricao: "Mochilas resistentes com estampa personalizada",
    cor: "from-purple-500 to-purple-600"
  },
  {
    nome: "Lancheiras Personalizadas",
    preco: "A partir de R$ 5,90",
    icon: UtensilsCrossed,
    descricao: "Lancheiras térmicas com o tema favorito",
    cor: "from-pink-500 to-pink-600"
  },
  {
    nome: "Garrafas/Squeezes",
    preco: "A partir de R$ 7,90",
    icon: Droplets,
    descricao: "Garrafas personalizadas para hidratação",
    cor: "from-cyan-500 to-cyan-600"
  },
  {
    nome: "Estojos Personalizados",
    preco: "A partir de R$ 9,90",
    icon: PenTool,
    descricao: "Estojos com design exclusivo",
    cor: "from-orange-500 to-orange-600"
  },
  {
    nome: "Cadernos Personalizados",
    preco: "A partir de R$ 15,90",
    icon: BookOpen,
    descricao: "Cadernos com capa personalizada",
    cor: "from-green-500 to-green-600"
  },
  {
    nome: "Toalhas Personalizadas",
    preco: "A partir de R$ 7,90",
    icon: Bath,
    descricao: "Toalhas macias com nome bordado",
    cor: "from-blue-500 to-blue-600"
  },
  {
    nome: "Aventais Personalizados",
    preco: "A partir de R$ 15,00",
    icon: ChefHat,
    descricao: "Aventais para aulas de culinária e arte",
    cor: "from-red-500 to-red-600"
  }
];

const outrosMateriais = [
  "Mouse Pad (vários modelos)",
  "Sacola Personalizada",
  "Kit Banho",
  "Estojo Lápis de Cor",
  "Saquinho de Roupas (suja e limpa)"
];

export default function VoltaAsAulas() {
  const handleWhatsAppClick = (produto?: string) => {
    const message = produto 
      ? `Olá! Gostaria de fazer um orçamento de ${produto} para volta às aulas.`
      : "Olá! Gostaria de fazer um orçamento de produtos personalizados para volta às aulas.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        
        {/* Banner de Desconto */}
        <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-6">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
              <Percent className="w-10 h-10 animate-bounce" />
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  GARANTA SEU DESCONTO DE 10% NO PEDIDO TOTAL!
                </p>
                <p className="text-sm md:text-base opacity-90">
                  *Fazendo até 15/01 mediante pagamento de sinal e fechamento do pedido total
                </p>
              </div>
              <Percent className="w-10 h-10 animate-bounce hidden md:block" />
            </div>
          </div>
        </section>

        {/* Seção de Etiquetas - Link para página dedicada */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Etiquetas Escolares Personalizadas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                3 opções para identificar todos os materiais do seu filho!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Etiquetas Adesivas */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white text-center">
                  <h3 className="text-xl font-bold">Etiquetas Adesivas</h3>
                  <p className="text-sm opacity-90">Vinil à Prova d'Água</p>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Grandes (3x10,5cm) - Cadernos</p>
                    <p className="text-sm text-gray-600">Médias (1,7x6cm) - Agendas</p>
                    <p className="text-sm text-gray-600">Pequenas (0,9x3cm) - Lápis</p>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-3 mb-4">
                    <p className="text-2xl font-bold text-orange-600">R$ 8,50</p>
                    <p className="text-sm text-gray-600">Folha Avulsa</p>
                  </div>
                  <div className="bg-red-100 rounded-lg p-3">
                    <p className="text-2xl font-bold text-red-600">R$ 22,50</p>
                    <p className="text-sm text-gray-600">Combo 3 Folhas</p>
                  </div>
                </CardContent>
              </Card>

              {/* Etiquetas Termocolantes */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-200">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white text-center">
                  <h3 className="text-xl font-bold">Termocolantes</h3>
                  <p className="text-sm opacity-90">Para Tecidos/Uniformes</p>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Ideal para uniformes e aventais</p>
                    <p className="text-sm text-gray-600">Fixe com ferro de passar</p>
                    <p className="text-sm text-gray-600">Fácil aplicação em casa</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3 mb-4">
                    <p className="text-2xl font-bold text-green-600">R$ 15,00</p>
                    <p className="text-sm text-gray-600">Folha Avulsa A4</p>
                  </div>
                  <div className="bg-teal-100 rounded-lg p-3">
                    <p className="text-2xl font-bold text-teal-600">R$ 35,00</p>
                    <p className="text-sm text-gray-600">3 Folhas A4</p>
                  </div>
                </CardContent>
              </Card>

              {/* Etiquetas UV */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-purple-200">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white text-center">
                  <h3 className="text-xl font-bold">Etiquetas UV</h3>
                  <p className="text-sm opacity-90">Para Itens Rígidos</p>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">Galochas, lancheiras, garrafas</p>
                    <p className="text-sm text-gray-600">Pode molhar! Não descola</p>
                    <p className="text-sm text-gray-600">Técnica DTF-UV definitiva</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 mb-4">
                    <p className="text-2xl font-bold text-purple-600">R$ 52,00</p>
                    <p className="text-sm text-gray-600">Folha A4</p>
                  </div>
                  <p className="text-xs text-gray-500">Consulte tamanhos menores</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/etiquetas">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Ver Catálogo Completo de Etiquetas
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção de Produtos */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Materiais Escolares Personalizados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tudo que seu filho precisa para a volta às aulas com a cara dele!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {produtos.map((produto, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <div className={`bg-gradient-to-r ${produto.cor} p-6 text-white text-center`}>
                    <produto.icon className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold">{produto.nome}</h3>
                  </div>
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-gray-600 mb-3">{produto.descricao}</p>
                    <p className="text-xl font-bold text-gray-800 mb-4">{produto.preco}</p>
                    <Button 
                      size="sm" 
                      className="w-full btn-whatsapp"
                      onClick={() => handleWhatsAppClick(produto.nome)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Outros Materiais */}
            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Entre Outros Materiais (Consulte)
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {outrosMateriais.map((material, index) => (
                  <span 
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {material}
                  </span>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">
                  Não achou o que queria? Entre em contato que ajudamos a criar!
                </p>
                <Button 
                  size="lg" 
                  className="btn-whatsapp"
                  onClick={() => handleWhatsAppClick()}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com a AFK
                </Button>
              </div>
            </div>
          </div>
        </section>

        <BenefitsSection />
        <ThemesSection />
        <ContactFormSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
