/**
 * Coleção Própria - AFK Camisetas
 * Produtos próprios com links para Mercado Livre
 */
import { ArrowRight, ShoppingBag, ExternalLink, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Cole%C3%A7%C3%A3o%20Pr%C3%B3pria.";

const produtos = [
  {
    nome: "Camiseta AC/DC Power Up Tour 2026 Brasil",
    preco: "R$ 104,90",
    categoria: "Shows e Turnês",
    link: "https://produto.mercadolivre.com.br/MLB-4464186013-camiseta-acdc-power-up-tour-2026-brasil-_JM",
  },
  {
    nome: "Camiseta Athletico Paranaense - Glórias do Passado (Oséas)",
    preco: "R$ 81,90",
    categoria: "Raiz Rubro Negra",
    link: "https://produto.mercadolivre.com.br/MLB-4358021743-camiseta-athletico-paranaense-glorias-do-passado-oseas-_JM",
  },
  {
    nome: "Camiseta Copa 2026 Hexa + Clubes Brasileirão",
    preco: "R$ 79,90",
    categoria: "Hexa Vem",
    link: "https://www.mercadolivre.com.br/camiseta-copa-2026-hexa--clubes-brasileirao/up/MLBU3853054875",
  },
  {
    nome: "Camisetas Athletico Paranaense - Coleção Glórias do Passado",
    preco: "R$ 81,90",
    categoria: "Raiz Rubro Negra",
    link: "https://produto.mercadolivre.com.br/MLB-4358311789-camisetas-athletico-paranaense-coleco-glorias-do-passado-_JM",
  },
  {
    nome: "Camiseta Athletico Paranaense Raiz Desde 1924 - Cap Furacão",
    preco: "R$ 69,90",
    categoria: "Raiz Rubro Negra",
    link: "https://produto.mercadolivre.com.br/MLB-5979274146-camiseta-athletico-paranaense-raiz-desde-1924-cap-furaco-_JM",
  },
  {
    nome: "Camiseta Cypress Hill Turnê Brasil 2026 - Unissex Preta",
    preco: "R$ 89,90",
    categoria: "Shows e Turnês",
    link: "https://produto.mercadolivre.com.br/MLB-4481802119-camiseta-cypress-hill-turn-brasil-2026-unissex-preta-_JM",
  },
  {
    nome: "Camiseta Copa 2026 Brasil - Hexa Vem",
    preco: "R$ 79,90",
    categoria: "Hexa Vem",
    link: "https://produto.mercadolivre.com.br/MLB-6232333916-camiseta-copa-2026-brasil-hexa-vem-_JM",
  },
  {
    nome: "Camiseta Athletico Paranaense - Copa do Brasil 19",
    preco: "R$ 79,90",
    categoria: "Raiz Rubro Negra",
    link: "https://produto.mercadolivre.com.br/MLB-6036028666-camiseta-athletico-paranaense-copa-do-brasil-19-_JM",
  },
  {
    nome: "Camiseta Athletico Paranaense - Coração Unissex",
    preco: "R$ 69,90",
    categoria: "Raiz Rubro Negra",
    link: "https://www.mercadolivre.com.br/camiseta-atletico-paranaense-coracao-unissex/up/MLBU3895462333",
  },
  {
    nome: "Camisetas de Força e Motivação - Criativas",
    preco: "R$ 69,90",
    categoria: "Força Estoica",
    link: "https://produto.mercadolivre.com.br/MLB-4475552165-camisetas-de-forca-e-motivaco-criativas-_JM",
  },
  {
    nome: "Blusa Baby Look Algodão Feminino - SEJA 1",
    preco: "R$ 69,90",
    categoria: "Sorria",
    link: "https://www.mercadolivre.com.br/blusa-baby-look-algodao-feminino-seja-1/up/MLBU3862509963",
  },
];

const categorias = [
  { nome: "Todos", filtro: "todos" },
  { nome: "Raiz Rubro Negra", filtro: "Raiz Rubro Negra" },
  { nome: "Hexa Vem", filtro: "Hexa Vem" },
  { nome: "Shows e Turnês", filtro: "Shows e Turnês" },
  { nome: "Força Estoica", filtro: "Força Estoica" },
  { nome: "Sorria", filtro: "Sorria" },
];

import { useState } from "react";

export default function ColecaoPropria() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const produtosFiltrados = filtroAtivo === "todos"
    ? produtos
    : produtos.filter((p) => p.categoria === filtroAtivo);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            Coleção Exclusiva AFK
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Coleção{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
              Própria
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Camisetas com design autoral AFK. Cada peça conta uma história. 
            Disponíveis para compra direta no Mercado Livre com frete grátis.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.filtro}
                onClick={() => setFiltroAtivo(cat.filtro)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filtroAtivo === cat.filtro
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.nome}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-xl transition-all"
              >
                {/* Placeholder visual com gradiente */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-orange-500/5" />
                  <div className="text-center p-6 relative z-10">
                    <ShoppingBag className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{p.categoria}</span>
                  </div>
                  {/* Badge Mercado Livre */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">
                    Mercado Livre
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs text-cyan-600 font-medium uppercase tracking-wider">{p.categoria}</span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-1 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                    {p.nome}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">{p.preco}</p>
                    <div className="flex items-center gap-1 text-xs text-cyan-600 font-medium group-hover:translate-x-1 transition-transform">
                      Comprar
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-xs text-green-600 mt-2 font-medium">Frete grátis disponível</p>
                </div>
              </a>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Design Autoral</h3>
              <p className="text-sm text-gray-500">Cada estampa é criada exclusivamente pela equipe AFK</p>
            </div>
            <div className="p-6">
              <ShoppingBag className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Compra Segura</h3>
              <p className="text-sm text-gray-500">Compre pelo Mercado Livre com toda a segurança</p>
            </div>
            <div className="p-6">
              <ExternalLink className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Frete Grátis</h3>
              <p className="text-sm text-gray-500">Entrega para todo o Brasil com frete grátis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer um produto exclusivo para sua marca?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Além da nossa coleção própria, criamos produtos personalizados sob medida para você ou sua empresa.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:shadow-xl transition-all text-lg"
          >
            Solicitar Orçamento Personalizado
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
