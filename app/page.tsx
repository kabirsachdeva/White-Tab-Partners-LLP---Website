import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import FirmOverview from "@/components/home/FirmOverview";
import WhyUs from "@/components/home/WhyUs";
import PracticeAreasHome from "@/components/home/PracticeAreasHome";
import InternationalDeskHome from "@/components/home/InternationalDeskHome";
import PartnersPreview from "@/components/home/PartnersPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FirmOverview />
      <WhyUs />
      <PracticeAreasHome />
      <InternationalDeskHome />
      <PartnersPreview />
      <CTASection />
    </>
  );
}
