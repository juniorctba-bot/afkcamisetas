/**
 * Portfólio - AFK Camisetas
 * Galeria de trabalhos realizados
 */
import { useState } from "react";
import { Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const WHATSAPP_NUMBER = "5541987386527";

const trabalhos = [
  { id: 1, nome: "Canecas Personalizadas", categoria: "Para Mim" },
  { id: 2, nome: "Cadernos Personalizados", categoria: "Para Mim" },
  { id: 3, nome: "Meias Personalizadas", categoria: "Para Evento" },
  { id: 4, nome: "Camiseta Athletico", categoria: "Para Evento" },
  { id: 5, nome: "Porta-Copos Personalizados", categoria: "Para Mim" },
  { id: 6, nome: "Etiqueta Personalizada", categoria: "Para Empresa" },
  { id: 7, nome: "Camiseta Flamengo", categoria: "Para Evento" },
  { id: 8, nome: "Garrafa Térmica Personalizada", categoria: "Para Mim" },
  { id: 9, nome: "Chinelo Personalizado", categoria: "Para Mim" },
  { id: 10, nome: "Chinelo Personalizado", categoria: "Para Mim" },
  { id: 11, nome: "Tecido Estampado", categoria: "Para Empresa" },
  { id: 12, nome: "Produtos Diversos", categoria: "Para Mim" },
  { id: 13, nome: "Camisetas e Acessórios", categoria: "Para Evento" },
  { id: 14, nome: "Produtos Corporativos", categoria: "Para Empresa" },
];

const categorias = ["Todos", "Para Mim", "Para Empresa", "Para Evento"];

export default function Portfolio() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const trabalhosFiltrados = trabalhos.filter((trabalho) => 
    categoriaSelecionada === "Todos" || trabalho.categoria === categoriaSelecionada
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 py-16 md:py-24">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-10 h-10 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Nosso Portfólio
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Confira alguns dos trabalhos que já realizamos. Cada produto é único e feito com muito carinho!
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 bg-white border-b sticky top-16 md:top-20 z-40">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaSelecionada(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoriaSelecionada === cat
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trabalhosFiltrados.map((trabalho) => (
                <div 
                  key={trabalho.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                >
                  <div className="aspect-square bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 flex items-center justify-center relative overflow-hidden">
                    <Camera className="w-16 h-16 text-gray-300" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium">Ver detalhes</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">
                      {trabalho.nome}
                    </h3>
                    <span className="text-sm text-pink-600">
                      {trabalho.categoria}
                    </span>
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
              Gostou do que viu?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Faça seu orçamento sem compromisso e crie produtos personalizados incríveis!
            </p>
            <Link 
              href="/orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
