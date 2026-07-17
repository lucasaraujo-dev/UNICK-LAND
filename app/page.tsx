import AboutAndStats01 from "@/components/shadcn-space/blocks/about-us-01";
import Contact from "@/components/shadcn-space/blocks/contact-01";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import Navbar from "@/components/shadcn-space/blocks/navbar-01/navbar";
import Services from "@/components/shadcn-space/blocks/services-01/services";
import {
  FinalCtaSection,
  SegmentsSection,
  TechnologySection
} from "@/components/unik/landing-sections";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <AgencyHeroSection />
        <AboutAndStats01 />
        <Services />
        <SegmentsSection />
        <TechnologySection />
        <Faq />
        <Contact />
        <FinalCtaSection />
      </main>
    </>
  );
}
