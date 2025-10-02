"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(t("contact.form.success"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.location"),
      content: t("contact.location.value"),
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      content: t("contact.phone.value"),
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: t("contact.email.value"),
    },
  ];

  // TikTok Icon Component
  const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/netaqinvestment", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/netaqinvestment/", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@netaqinvestment", label: "TikTok" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-netaq-green/10 to-black" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t("contact.title")}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-3xl font-bold mb-8 text-netaq-neon">
              {t("contact.form.title")}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 mb-2 font-semibold">{t("contact.form.name")}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/40 focus:border-netaq-neon focus:bg-white/15 focus:outline-none transition-all"
                  placeholder={t("contact.form.name.placeholder")}
                />
              </div>

              <div>
                <label className="block text-white/90 mb-2 font-semibold">{t("contact.form.email")}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/40 focus:border-netaq-neon focus:bg-white/15 focus:outline-none transition-all"
                  placeholder={t("contact.form.email.placeholder")}
                />
              </div>

              <div>
                <label className="block text-white/90 mb-2 font-semibold">{t("contact.form.phone")}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/40 focus:border-netaq-neon focus:bg-white/15 focus:outline-none transition-all"
                  placeholder={t("contact.form.phone.placeholder")}
                />
              </div>

              <div>
                <label className="block text-white/90 mb-2 font-semibold">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder:text-white/40 focus:border-netaq-neon focus:bg-white/15 focus:outline-none transition-all resize-none"
                  placeholder={t("contact.form.message.placeholder")}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-netaq-neon to-netaq-green rounded-xl text-black font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-netaq-neon/60 transition-all shadow-lg"
              >
                <span>{t("contact.form.submit")}</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                let href = "";
                if (info.icon === Phone) href = "tel:+201006181900";
                else if (info.icon === Mail) href = "mailto:Netaqinvestmen@gmail.com";
                else if (info.icon === MapPin) href = "https://maps.google.com/?q=Traffic+Department+Dumyat+al+Jadidah";
                
                return (
                  <motion.a
                    key={info.title}
                    href={href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-effect rounded-2xl p-6 flex items-start gap-4 cursor-pointer"
                  >
                    <div className="p-3 bg-netaq-neon/10 rounded-xl">
                      <info.icon className="text-netaq-neon" size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-white/70 hover:text-netaq-neon transition-colors">{info.content}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h4 className="text-2xl font-bold text-netaq-neon mb-6">
                {t("contact.follow")}
              </h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-netaq-neon hover:bg-netaq-neon/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="text-white hover:text-netaq-neon transition-colors" size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
            >
              <h4 className="text-2xl font-bold text-white mb-4">
                {t("contact.cta.title")}
              </h4>
              <p className="text-white/70 mb-6">
                {t("contact.cta.desc")}
              </p>
              <motion.a
                href="tel:+201006181900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-netaq-neon to-netaq-green rounded-full text-black font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-netaq-neon/60 transition-all"
              >
                <span>{t("contact.cta.button")}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-24 text-center text-white/50 border-t border-white/10 pt-8"
        >
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Netaq. {t("contact.footer.rights")}
          </p>
          <p className="text-sm">
            <span className="text-gradient font-semibold">
              {t("contact.footer.tagline")}
            </span>
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-20 w-96 h-96 bg-netaq-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-netaq-green/5 rounded-full blur-3xl" />
    </section>
  );
}
