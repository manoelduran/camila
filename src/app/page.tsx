import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LocationsSection } from "@/components/LocationsSection";
import { Footer } from "@/components/Footer";
import { WhenToVisitSection } from "@/components/WhenToVisitSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Camila Cendon",
  description:
    "Médica reumatologista em Salvador - BA, especialista no diagnóstico e tratamento de doenças autoimunes como lúpus, artrite reumatoide, fibromialgia e osteoporose.",
  url: "https://www.dracamilacendon.com.br",
  telephone: "+55-71-3022-9886",
  medicalSpecialty: "Rheumatology",
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "CRM 30024-BA" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "RQE 20434" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salvador",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/dracamilacendon.reumatologia/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
