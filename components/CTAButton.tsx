"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTAButton() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #1FEDB4" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full text-black font-bold text-lg shadow-lg"
          >
            {t("services.cta")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

