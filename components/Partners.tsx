"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Partners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useLanguage();

  // شركات التطوير العقاري
  const partners = [
    { name: "Al Basiony", logo: "/partners/Al Basiony.png" },
    { name: "Al Brolosy", logo: "/partners/Al Brolosy.png" },
    { name: "ARKANIA", logo: "/partners/ARKANIA.png" },
    { name: "Arx", logo: "/partners/Arx.png" },
    { name: "BONAT ALAHRAM", logo: "/partners/BONAT ALAHRAM.png" },
    { name: "BRO", logo: "/partners/BRO.png" },
    { name: "DAR ALHIJAZ", logo: "/partners/DAR ALHIJAZ.png" },
    { name: "DIYAR", logo: "/partners/DIYAR.png" },
    { name: "DUBAI MISR", logo: "/partners/DUBAI MISR.png" },
    { name: "Emarrak", logo: "/partners/Emarrak.png" },
    { name: "Fairmont", logo: "/partners/Fairmont.png" },
    { name: "Gemotec", logo: "/partners/Gemotec.png" },
    { name: "GSR Global", logo: "/partners/Gsr Global.png" },
    { name: "KAMCO", logo: "/partners/KAMCO.png" },
    { name: "MAHAWER", logo: "/partners/MAHAWER.png" },
    { name: "MBG", logo: "/partners/MBG.png" },
    { name: "MISK", logo: "/partners/MISK.png" },
    { name: "MTM", logo: "/partners/MTM.png" },
    { name: "OMRAN", logo: "/partners/OMRAN.png" },
    { name: "QURTUBA", logo: "/partners/QURTUBA.png" },
    { name: "SDG", logo: "/partners/SDG.png" },
    { name: "SOLD", logo: "/partners/SOLD.png" },
    { name: "TRUST", logo: "/partners/TRUST.png" },
    { name: "WE BUILD", logo: "/partners/WE BULID.png" },
  ];

  // Split partners into two rows
  const row1 = partners.slice(0, 12);
  const row2 = partners.slice(12, 24);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-gradient-to-b from-black via-netaq-green/5 to-black"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        
        .partners-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        
        .partners-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        
        .partners-scroll-left:hover,
        .partners-scroll-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-gradient">{t("partners.title")}</span>
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </motion.div>

        {/* Double Scrolling Rows */}
        <div className="space-y-8 py-4">
          {/* Row 1 - Scroll Left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden">
              <div className="flex partners-scroll-left gap-6">
                {[...row1, ...row1].map((partner, index) => (
                  <div key={`row1-${index}`} className="flex-shrink-0 w-48">
                    <div className="glass-effect rounded-xl p-5 h-44 flex flex-col items-center justify-between border border-white/10 bg-white/5 hover:border-netaq-neon/40 hover:bg-white/10 transition-all group">
                      <div className="w-full h-24 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="w-full border-t border-netaq-neon/20 pt-3 mt-2">
                        <p className="text-sm font-bold text-white group-hover:text-netaq-neon text-center transition-colors">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden">
              <div className="flex partners-scroll-right gap-6">
                {[...row2, ...row2].map((partner, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 w-48">
                    <div className="glass-effect rounded-xl p-5 h-44 flex flex-col items-center justify-between border border-white/10 bg-white/5 hover:border-netaq-neon/40 hover:bg-white/10 transition-all group">
                      <div className="w-full h-24 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div className="w-full border-t border-netaq-neon/20 pt-3 mt-2">
                        <p className="text-sm font-bold text-white group-hover:text-netaq-neon text-center transition-colors">
                          {partner.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-white/50 text-sm">
            {t("partners.more")}
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-20 w-48 h-48 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-20 w-48 h-48 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}
