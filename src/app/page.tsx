import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { PatternSeparator } from "@/components/common/PatternSeparator/PatternSeparator";
import { HeroSection } from "@/components/features/home/HeroSection/HeroSection";
import { AboutSection } from "@/components/features/home/AboutSection/AboutSection";
import { CategoryShowcase } from "@/components/features/home/CategoryShowcase/CategoryShowcase";
import { MascotSection } from "@/components/features/home/MascotSection/MascotSection";
import { PrizesSection } from "@/components/features/home/PrizesSection/PrizesSection";
import { FlowSection } from "@/components/features/home/FlowSection/FlowSection";
import { RulesSection } from "@/components/features/home/RulesSection/RulesSection";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <HeroSection />
      <PatternSeparator />
      <AboutSection />
      <CategoryShowcase />
      <PatternSeparator />
      <PrizesSection />
      <MascotSection />
      <FlowSection />
      <RulesSection />
      <Footer />
    </main>
  );
}
