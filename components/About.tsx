"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-netaq-green/5 to-black" />
      
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t("about.title")}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12 mb-10 max-w-5xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Vision */}
          <motion.div
            className="about-card gradient-border p-8 md:p-10"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-netaq-neon/10 rounded-xl">
                <Eye className="text-netaq-neon" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-netaq-neon">{t("about.vision.title")}</h3>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              {t("about.vision.text")}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="about-card gradient-border p-8 md:p-10"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-netaq-green/10 rounded-xl">
                <Target className="text-netaq-green" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-netaq-green">{t("about.mission.title")}</h3>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              {t("about.mission.text")}
            </p>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative glass-effect rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <Quote className="absolute top-8 left-8 text-netaq-neon/20" size={64} />
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 italic">
              {t("about.quote")}
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full" />
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            {t("about.story.title")}
          </h3>
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <p>{t("about.story.p3")}</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}
