"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Award, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Values() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t("values.integrity.title"),
      description: t("values.integrity.desc"),
    },
    {
      icon: Award,
      title: t("values.excellence.title"),
      description: t("values.excellence.desc"),
    },
    {
      icon: Lightbulb,
      title: t("values.innovation.title"),
      description: t("values.innovation.desc"),
    },
    {
      icon: Users,
      title: t("values.client.title"),
      description: t("values.client.desc"),
    },
  ];

  return (
    <section
      id="values"
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #1FEDB4 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t("values.title")}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("values.subtitle")}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 md:p-10 h-full">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-netaq-neon to-netaq-green opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 bg-gradient-to-br from-netaq-neon/20 to-netaq-green/20 rounded-xl mb-6"
                >
                  <value.icon className="text-netaq-neon" size={40} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {value.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personality Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            {t("values.personality.title")}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t("values.personality.knowledgeable"),
                desc: t("values.personality.knowledgeable.desc"),
              },
              {
                title: t("values.personality.trustworthy"),
                desc: t("values.personality.trustworthy.desc"),
              },
              {
                title: t("values.personality.innovative"),
                desc: t("values.personality.innovative.desc"),
              },
              {
                title: t("values.personality.friendly"),
                desc: t("values.personality.friendly.desc"),
              },
            ].map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <h4 className="text-xl font-bold text-netaq-neon mb-2">
                  {trait.title}
                </h4>
                <p className="text-white/70">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}
