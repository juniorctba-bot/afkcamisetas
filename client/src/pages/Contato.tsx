/**
 * Contato - AFK Camisetas
 * Página de contato com informações e formulário
 */
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "5541987386527";

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 py-16 md:py-24">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-10 h-10 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Fale Conosco
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Estamos prontos para atender você!
            </p>
          </div>
        </section>

        {/* Contato */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">(41) 98738-6527</p>
                      <p className="text-sm text-green-600 mt-1">Clique para conversar</p>
                    </div>
                  </a>

                  <a
                    href="mailto:afkcamisetas@gmail.com.br"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">afkcamisetas@gmail.com.br</p>
                      <p className="text-sm text-blue-600 mt-1">Clique para enviar e-mail</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Localização</h3>
                      <p className="text-gray-600">Curitiba e Região Metropolitana</p>
                      <p className="text-sm text-gray-500 mt-1">Entregamos em toda a região</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horário de Atendimento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Siga-nos nas redes sociais</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/afkcamisetas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/afkcamisetas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA WhatsApp */}
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white flex flex-col justify-center">
                <MessageCircle className="w-16 h-16 mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Prefere WhatsApp?
                </h2>
                <p className="text-white/90 mb-6">
                  Atendemos pelo WhatsApp de forma rápida e prática. Clique no botão abaixo para iniciar uma conversa!
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site e gostaria de mais informações.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Iniciar Conversa
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
