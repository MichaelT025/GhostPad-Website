import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Demo from "@/components/sections/Demo";
import WhyShade from "@/components/sections/WhyShade";
import Privacy from "@/components/sections/Privacy";
import GettingStarted from "@/components/sections/GettingStarted";
import Download from "@/components/sections/Download";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-shade-bg">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <WhyShade />
      <Privacy />
      <GettingStarted />
      <Download />
      <Footer />
    </main>
  );
}
