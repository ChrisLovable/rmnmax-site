import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Industries />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
