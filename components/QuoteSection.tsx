"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-netaq-green/5 to-black" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative glass-effect rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <Quote className="absolute top-8 left-8 text-netaq-neon/20" size={64} />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 italic text-center">
              {t("about.quote")}
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full mx-auto" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-20 w-48 h-48 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-20 w-48 h-48 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}

