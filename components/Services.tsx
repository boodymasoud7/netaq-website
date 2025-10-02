"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Home,
  BarChart3,
  Building2,
  Settings,
  Megaphone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t("services.investment.title"),
      description: t("services.investment.desc"),
      color: "netaq-neon",
    },
    {
      icon: Home,
      title: t("services.brokerage.title"),
      description: t("services.brokerage.desc"),
      color: "netaq-green",
    },
    {
      icon: BarChart3,
      title: t("services.research.title"),
      description: t("services.research.desc"),
      color: "netaq-neon",
    },
    {
      icon: Building2,
      title: t("services.management.title"),
      description: t("services.management.desc"),
      color: "netaq-green",
    },
    {
      icon: Settings,
      title: t("services.custom.title"),
      description: t("services.custom.desc"),
      color: "netaq-neon",
    },
    {
      icon: Megaphone,
      title: t("services.marketing.title"),
      description: t("services.marketing.desc"),
      color: "netaq-green",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-netaq-green/10 to-black" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t("services.title")}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group relative gradient-border p-8 rounded-2xl cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-${service.color}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 bg-${service.color}/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon
                    className={`text-${service.color}`}
                    size={40}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-netaq-neon transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #1FEDB4" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full text-black font-bold text-lg"
          >
{t("services.cta")}
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-20 w-64 h-64 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-20 w-64 h-64 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}
