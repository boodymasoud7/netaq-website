"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users2, Package, Handshake, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t, language } = useLanguage();

  const advantages = [
    {
      icon: Users2,
      title: t("advantages.team.title"),
      description: t("advantages.team.desc"),
    },
    {
      icon: Package,
      title: t("advantages.comprehensive.title"),
      description: t("advantages.comprehensive.desc"),
    },
    {
      icon: Handshake,
      title: t("advantages.relationships.title"),
      description: t("advantages.relationships.desc"),
    },
    {
      icon: Zap,
      title: t("advantages.technology.title"),
      description: t("advantages.technology.desc"),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-netaq-green/5 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t("advantages.title")}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("advantages.subtitle")}
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="gradient-border p-8 md:p-10 h-full rounded-2xl">
                {/* Header with Icon and Number */}
                <div className={`flex items-center gap-4 mb-6 ${language === 'ar' ? 'justify-between' : ''}`}>
                  {/* Floating Icon - Right side in Arabic */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-5 bg-gradient-to-br from-netaq-neon/20 to-netaq-green/20 rounded-2xl ${language === 'ar' ? 'order-2' : ''}`}
                  >
                    <advantage.icon className="text-netaq-neon" size={48} />
                  </motion.div>

                  {/* Number */}
                  {language === 'ar' ? (
                    // Number on left side in Arabic
                    <div className="text-6xl font-bold text-netaq-neon/20 group-hover:text-netaq-neon/40 transition-colors order-1">
                      {index + 1}
                    </div>
                  ) : (
                    // Number in corner for English
                    <div className="absolute top-6 right-6 text-8xl font-bold text-netaq-neon/5 group-hover:text-netaq-neon/10 transition-colors">
                      {index + 1}
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-netaq-neon transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            {t("advantages.serve.title")}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("advantages.investors"),
                desc: t("advantages.investors.desc"),
              },
              {
                title: t("advantages.homebuyers"),
                desc: t("advantages.homebuyers.desc"),
              },
              {
                title: t("advantages.developers"),
                desc: t("advantages.developers.desc"),
              },
            ].map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-netaq-neon to-netaq-green rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-netaq-neon mb-3">
                  {audience.title}
                </h4>
                <p className="text-white/70 leading-relaxed">{audience.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}
