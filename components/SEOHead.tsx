"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SEOHead() {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = t("seo.title");

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", t("seo.description"));
    updateMetaTag("keywords", t("seo.keywords"));
    updateMetaTag("author", "Netaq Real Estate");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", language === "ar" ? "Arabic" : "English");

    // Open Graph Tags (Facebook, WhatsApp, LinkedIn)
    updatePropertyTag("og:title", t("seo.title"));
    updatePropertyTag("og:description", t("seo.description"));
    updatePropertyTag("og:type", "website");
    updatePropertyTag("og:url", "https://netaq-website.vercel.app");
    updatePropertyTag("og:site_name", "Netaq Real Estate");
    updatePropertyTag("og:locale", language === "ar" ? "ar_EG" : "en_US");
    // يمكن إضافة صورة OG لاحقاً
    // updatePropertyTag("og:image", "https://netaq-website.vercel.app/og-image.jpg");

    // Twitter Card Tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", t("seo.title"));
    updateMetaTag("twitter:description", t("seo.description"));
    // updateMetaTag("twitter:image", "https://netaq-website.vercel.app/og-image.jpg");

    // Mobile Tags
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("theme-color", "#1FEDB4");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");

    // Add JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Netaq Real Estate",
      description: t("seo.description"),
      url: "https://netaq-website.vercel.app",
      logo: "https://netaq-website.vercel.app/logo/english.png",
      image: "https://netaq-website.vercel.app/logo/english.png",
      telephone: "+201006181900",
      email: "Netaqinvestmen@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Traffic Department",
        addressLocality: "Dumyat al Jadidah",
        addressRegion: "Damietta",
        addressCountry: "EG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.4167,
        longitude: 31.8,
      },
      areaServed: {
        "@type": "Country",
        name: "Egypt",
      },
      sameAs: [
        "https://www.facebook.com/netaqinvestment",
        "https://www.instagram.com/netaqinvestment/",
        "https://www.tiktok.com/@netaqinvestment",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Hesham Adel",
          jobTitle: "Co-Founder",
        },
        {
          "@type": "Person",
          name: "Moataz Sherif",
          jobTitle: "Co-Founder",
        },
      ],
      foundingDate: "2024",
      priceRange: "$$",
      openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00",
    };

    // Remove existing JSON-LD script if any
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new JSON-LD script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [t, language]);

  return null; // This component doesn't render anything
}

