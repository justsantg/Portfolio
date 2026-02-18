import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionDivider } from "@/components/section-divider";
import { LanguageToggle } from "@/components/language-toggle";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <LanguageToggle />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </main>
  );
}
