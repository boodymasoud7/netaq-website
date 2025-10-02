"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  
  // رقم الواتساب (نفس الرقم في Contact)
  const whatsappNumber = "201006181900"; // تنسيق دولي بدون + أو 00
  const message = encodeURIComponent(t("whatsapp.message"));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t("whatsapp.label")}
    >
      {/* Pulsing Ring Animation */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[#25D366] rounded-full blur-md"
      />

      {/* Main Button */}
      <div className="relative bg-[#25D366] hover:bg-[#1fb855] p-4 rounded-full shadow-2xl transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-4 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-semibold rounded-lg whitespace-nowrap shadow-xl pointer-events-none"
      >
        {t("whatsapp.tooltip")}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900/95" />
      </motion.div>

      {/* Notification Badge (Optional - للإشعارات) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
      />
    </motion.a>
  );
}

