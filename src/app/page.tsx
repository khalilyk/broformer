import GearCta from "@/components/GearCta";
import Hero from "@/components/Hero";
import LandscapeBand from "@/components/LandscapeBand";
import MovementBar from "@/components/MovementBar";
import WhySection from "@/components/WhySection";
import StudioTips from "@/components/StudioTips";
import StudioCta from "@/components/StudioCta";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <MovementBar />
      <WhySection />
      <StudioTips />
      <GearCta />
      <LandscapeBand />
      <StudioCta />
      <Newsletter />
    </main>
  );
}
