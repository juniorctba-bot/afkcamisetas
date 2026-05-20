/**
 * Contato - AFK Camisetas
 */
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_URL = "https://wa.me/5541987386527?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-br from-cyan-50 via-white to-orange-50">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
              Contato
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estamos prontos para ajudar você a criar produtos personalizados incríveis. 
            Escolha o canal que preferir e fale conosco!
          </p>
        </div>
      </section>

      {/* Canais de Contato */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-xl hover:shadow-green-500/10 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 text-white group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-semibold text-lg">(41) 98738-6527</p>
              <p className="text-gray-500 text-sm mt-2">Resposta rápida</p>
            </a>

            {/* E-mail */}
            <a
              href="mailto:afkcamisetas@gmail.com"
              className="group p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-cyan-500 text-white group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
              <p className="text-cyan-600 font-semibold">afkcamisetas@gmail.com</p>
              <p className="text-gray-500 text-sm mt-2">Para propostas e orçamentos</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/afkcamisetas"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 hover:shadow-xl hover:shadow-pink-500/10 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-white group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-pink-600 font-semibold">@afkcamisetas</p>
              <p className="text-gray-500 text-sm mt-2">Novidades e inspirações</p>
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-500" />
                Localização
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Curitiba - Paraná<br />
                Atendemos toda a região metropolitana e enviamos para todo o Brasil.
              </p>
              <p className="text-sm text-gray-500">
                Retirada disponível em Curitiba mediante agendamento.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-500" />
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 9h às 13h</p>
                <p className="text-sm text-gray-500 mt-4">
                  WhatsApp disponível fora do horário comercial para mensagens.
                </p>
              </div>
            </div>
          </div>

          {/* Mensagem de Orçamento */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Como solicitar um orçamento?</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cada projeto é único. Para solicitar o seu orçamento personalizado, basta entrar em contato 
              conosco por WhatsApp ou e-mail informando:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Produto desejado",
                "Quantidade aproximada",
                "Ideia de personalização",
                "Prazo desejado",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Solicitar Orçamento Agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
