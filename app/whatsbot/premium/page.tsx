import { Header } from "@/components/landing-wpp-premium/header";
import { HeroSection } from "@/components/landing-wpp-premium/hero-section";
import { AboutSection } from "@/components/landing-wpp-premium/about-section";
import { AdvantagesSection } from "@/components/landing-wpp-premium/advantages-section";
import { PricingSection } from "@/components/landing-wpp-premium/pricing-section";
import { TestimonialsSection } from "@/components/landing-wpp-premium/testimonials-section";
import { CTASection } from "@/components/landing-wpp-premium/cta-section";
import { QuoteFlow } from "@/components/landing-wpp-premium/quote-flow";
import { Footer } from "@/components/landing-wpp-premium/footer";
import { WhatsAppButton } from "@/components/landing-wpp-premium/whatsapp-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <QuoteFlow />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
