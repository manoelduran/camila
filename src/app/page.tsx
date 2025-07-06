import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";
import { WhenToVisitSection } from "@/components/WhenToVisitSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TimelineSection />
        <WhenToVisitSection />
        <ServicesSection />
        <LocationsSection />
      </main>
      <Footer />
    </>
  );
}
