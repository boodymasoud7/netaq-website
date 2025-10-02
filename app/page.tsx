"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import QuoteSection from "@/components/QuoteSection";
import Values from "@/components/Values";
import CTAButton from "@/components/CTAButton";
import Advantages from "@/components/Advantages";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Smooth scroll initialization
    const lenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    lenis().catch(console.error);
  }, []);

  return (
    <LanguageProvider>
      <SEOHead />
      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <QuoteSection />
        <Values />
        <CTAButton />
        <Advantages />
        <Partners />
        <Contact />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
}

