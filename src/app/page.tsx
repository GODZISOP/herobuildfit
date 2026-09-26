import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CoachProfile from "@/components/CoachProfile";
import HeroSystem from "@/components/HeroSystem";
import TransformationSlider from "@/components/TransformationSlider";
import MacroCalculator from "@/components/MacroCalculator";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-brand-neon selection:text-bg-dark">
      <Navbar />
      <Hero />
      <Marquee />
      <CoachProfile />
      <HeroSystem />
      <TransformationSlider />
      <MacroCalculator />
      <Pricing />
      <Footer />
    </main>
  );
}
