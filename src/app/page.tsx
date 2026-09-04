import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MovementBar from "@/components/MovementBar";
import WhySection from "@/components/WhySection";
import StudioTips from "@/components/StudioTips";
import StudioCta from "@/components/StudioCta";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MovementBar />
        <WhySection />
        <StudioTips />
        <StudioCta />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
