/**
 * Home Page - AFK Volta às Aulas
 * Design: Gradiente Tropical
 * Landing page promocional para etiquetas personalizadas
 * Atualizado: removido depoimentos, adicionado links catálogo
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ThemesSection from "@/components/ThemesSection";
import ContactFormSection from "@/components/ContactFormSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ThemesSection />
        <ContactFormSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
