/**
 * Volta às Aulas - AFK Camisetas
 * Página promocional de etiquetas para materiais escolares
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ThemesSection from "@/components/ThemesSection";
import ContactFormSection from "@/components/ContactFormSection";
import CTASection from "@/components/CTASection";

export default function VoltaAsAulas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
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
