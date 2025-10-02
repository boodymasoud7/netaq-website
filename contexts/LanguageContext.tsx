"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document direction and lang
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
      // Save to localStorage
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.values": "Values",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.badge": "Discover exceptional investment opportunities",
    "hero.title": "NETAQ",
    "hero.subtitle": "Your Trusted Partner in Real Estate Investment",
    "hero.description": "Transforming the real estate experience for investors, homebuyers, and developers through specialized consulting and strategic insights that ensure your success in the property market",
    "hero.cta1": "Start Your Investment Journey",
    "hero.cta2": "Discover More",
    "hero.scroll": "Scroll Down",
    
    // About
    "about.title": "About Us",
    "about.subtitle": "Netaq is a specialized company transforming the real estate experience for investors, homebuyers, and developers",
    "about.description": "Our comprehensive consulting services are designed to provide clients with the insights and strategies they need to successfully navigate the complexities of the real estate market. The company was founded by Engineers Hesham Adel and Moataz Sherif in New Damietta, Egypt, with the aim of providing distinguished real estate services that meet the needs of the Egyptian market.",
    "about.vision.title": "Vision",
    "about.vision.text": "To be the leading company in real estate consulting known for integrity, excellence, and client satisfaction.",
    "about.mission.title": "Mission",
    "about.mission.text": "To provide clients with expert consulting to invest in the best real estate opportunities and maximize their returns.",
    "about.quote": "We strive to build trust and deliver excellence through personalized and professional services that meet our clients' needs",
    "about.story.title": "Our Story",
    "about.story.p1": "The company was launched with a firm belief that everyone deserves specialized guidance when navigating the complex real estate market.",
    "about.story.p2": "Our name \"Netaq\" means \"domain\" in Arabic, symbolizing our goal of helping clients secure their ideal domain, whether for investment or living.",
    "about.story.p3": "We are committed to providing distinguished real estate consulting services that help our clients make informed investment decisions.",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "We offer a comprehensive range of real estate services designed to meet all your needs",
    "services.investment.title": "Investment Consulting",
    "services.investment.desc": "Detailed analysis and strategic advice on the most profitable real estate investment opportunities",
    "services.brokerage.title": "Real Estate Brokerage",
    "services.brokerage.desc": "Helping clients buy, sell, and lease residential and commercial properties",
    "services.research.title": "Market Research",
    "services.research.desc": "Comprehensive market reports and analysis to help clients make informed decisions",
    "services.management.title": "Property Management",
    "services.management.desc": "Property management services to ensure the preservation and increase of real estate asset value",
    "services.custom.title": "Custom Solutions",
    "services.custom.desc": "Tailored services designed to meet the unique needs of each client",
    "services.marketing.title": "Real Estate Marketing",
    "services.marketing.desc": "Comprehensive marketing campaigns to showcase and promote properties using the latest strategies",
    "services.cta": "Get Free Consultation",
    
    // Values
    "values.title": "Our Values",
    "values.subtitle": "The values that drive our work and define our identity",
    "values.integrity.title": "Integrity",
    "values.integrity.desc": "We are committed to the highest standards of honesty and transparency in all our dealings, building trust with our clients and partners.",
    "values.excellence.title": "Excellence",
    "values.excellence.desc": "We are committed to providing high-quality services and exceeding client expectations through attention to the finest details.",
    "values.innovation.title": "Innovation",
    "values.innovation.desc": "We leverage the latest market insights and technology to deliver innovative solutions that meet the changing needs of the real estate market.",
    "values.client.title": "Client Focus",
    "values.client.desc": "We prioritize our clients' needs and goals, ensuring their satisfaction and success in achieving their real estate aspirations.",
    "values.personality.title": "Our Brand Personality",
    "values.personality.knowledgeable": "Knowledgeable",
    "values.personality.knowledgeable.desc": "Expert and skilled in real estate, we possess deep knowledge of the property market",
    "values.personality.trustworthy": "Trustworthy",
    "values.personality.trustworthy.desc": "Clients can rely on our honest and transparent advice, we put the client's interest first",
    "values.personality.innovative": "Innovative",
    "values.personality.innovative.desc": "We stay at the forefront with the latest trends and tools, offering creative solutions",
    "values.personality.friendly": "Friendly",
    "values.personality.friendly.desc": "We are friendly, understanding, and easy to work with, building positive relationships",
    
    // Advantages
    "advantages.title": "Our Competitive Edge",
    "advantages.subtitle": "What makes us the best choice for your real estate investments",
    "advantages.team.title": "Expert Team",
    "advantages.team.desc": "A team of seasoned professionals with deep knowledge and extensive experience in real estate, providing specialized consulting based on years of expertise.",
    "advantages.comprehensive.title": "Comprehensive Services",
    "advantages.comprehensive.desc": "One-stop shop for all real estate needs, from investment consulting to property management, saving clients time and effort.",
    "advantages.relationships.title": "Long-term Relationships",
    "advantages.relationships.desc": "Building long-term relationships based on trust, transparency, and mutual respect, ensuring client loyalty and continuity of cooperation.",
    "advantages.technology.title": "Advanced Technology",
    "advantages.technology.desc": "Using the latest technologies and tools to provide accurate and up-to-date information and services, giving our clients a competitive edge in the real estate market.",
    "advantages.serve.title": "Who We Serve",
    "advantages.investors": "Investors",
    "advantages.investors.desc": "Individuals and companies looking for profitable real estate investment opportunities",
    "advantages.homebuyers": "Homebuyers",
    "advantages.homebuyers.desc": "People looking for the ideal residential unit that suits their lifestyle",
    "advantages.developers": "Developers",
    "advantages.developers.desc": "Real estate developers who need market insights and specialized consulting",
    
    // Partners
    "partners.title": "Our Success Partners",
    "partners.subtitle": "We collaborate with the leading real estate development companies in Egypt",
    "partners.more": "And many more trusted partners...",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Start your investment journey with us today",
    "contact.form.title": "Send Us a Message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Enter your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "example@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+20 123 456 7890",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "How can we help you?",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you for contacting us! We will get back to you soon.",
    "contact.location": "Location",
    "contact.location.value": "Traffic Department, Dumyat al Jadidah",
    "contact.phone": "Phone",
    "contact.phone.value": "01006181900",
    "contact.email": "Email",
    "contact.email.value": "Netaqinvestment@gmail.com",
    "contact.follow": "Follow Us",
    "contact.cta.title": "Ready to Start Your Investment?",
    "contact.cta.desc": "Get a free consultation from our experts today",
    "contact.cta.button": "Call Us Now",
    "contact.footer.rights": "All rights reserved.",
    "contact.footer.tagline": "Discover exceptional investment opportunities",
    
    // WhatsApp
    "whatsapp.message": "Hello! I'm interested in learning more about Netaq's real estate services.",
    "whatsapp.tooltip": "Chat with us on WhatsApp",
    "whatsapp.label": "WhatsApp Contact Button",
    
    // SEO
    "seo.title": "Netaq | Premium Real Estate Investment & Consulting in New Damietta, Egypt",
    "seo.description": "Transform your real estate journey with Netaq. Expert consulting, investment strategies, property brokerage, and market research in New Damietta. Founded by Engineers Hesham Adel & Moataz Sherif.",
    "seo.keywords": "real estate Egypt, property investment Damietta, real estate consulting, investment opportunities, property brokerage, market research, New Damietta, Netaq real estate",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.values": "قيمنا",
    "nav.contact": "تواصل معنا",
    "nav.getStarted": "ابدأ الآن",
    
    // Hero
    "hero.badge": "اكتشف فرص استثمار استثنائية",
    "hero.title": "نطــاق",
    "hero.subtitle": "شريكك الموثوق في الاستثمار العقاري",
    "hero.description": "نحول تجربة العقارات للمستثمرين ومشتري المنازل والمطورين من خلال استشارات متخصصة ورؤى استراتيجية تضمن نجاحكم في سوق العقارات",
    "hero.cta1": "ابدأ رحلتك الاستثمارية",
    "hero.cta2": "اكتشف المزيد",
    "hero.scroll": "اسحب للأسفل",
    
    // About
    "about.title": "من نحن",
    "about.subtitle": "نطاق هي شركة متخصصة في تحويل تجربة العقارات للمستثمرين ومشتري المنازل والمطورين",
    "about.description": "خدماتنا الاستشارية الشاملة مصممة لتزويد العملاء بالرؤى والاستراتيجيات التي يحتاجونها للتنقل بنجاح في تعقيدات سوق العقارات. تأسست الشركة على يد المهندس هشام عادل والمهندس معتز شريف في دمياط الجديدة، مصر، بهدف تقديم خدمات عقارية متميزة تلبي احتياجات السوق المصري.",
    "about.vision.title": "الرؤية",
    "about.vision.text": "أن نكون الشركة الرائدة في مجال الاستشارات العقارية المعروفة بالنزاهة والتميز ورضا العملاء.",
    "about.mission.title": "الرسالة",
    "about.mission.text": "تزويد العملاء باستشارات الخبراء للاستثمار في أفضل الفرص العقارية، وتعظيم أرباحهم.",
    "about.quote": "نسعى جاهدين لبناء الثقة وتقديم التميز من خلال خدمات شخصية ومهنية تلبي احتياجات عملائنا",
    "about.story.title": "قصة نطاق",
    "about.story.p1": "انطلقت الشركة من إيمان راسخ بأن الجميع يستحق إرشادًا متخصصًا عند التنقل في سوق العقارات المعقد.",
    "about.story.p2": "اسمنا \"نطاق\" يعني \"مجال\" باللغة العربية، ويرمز إلى هدفنا في مساعدة العملاء على تأمين مجالهم المثالي، سواء للاستثمار أو للمعيشة.",
    "about.story.p3": "نلتزم بتقديم خدمات استشارية عقارية متميزة تساعد عملائنا على اتخاذ قرارات استثمارية مدروسة.",
    
    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "نقدم مجموعة شاملة من الخدمات العقارية المصممة لتلبية جميع احتياجاتكم",
    "services.investment.title": "استشارات الاستثمار",
    "services.investment.desc": "تحليلات مفصلة ونصائح استراتيجية حول أكثر فرص الاستثمار العقاري ربحية",
    "services.brokerage.title": "الوساطة العقارية",
    "services.brokerage.desc": "مساعدة العملاء في شراء وبيع وتأجير العقارات السكنية والتجارية",
    "services.research.title": "أبحاث السوق",
    "services.research.desc": "تقارير وتحليلات سوقية شاملة لمساعدة العملاء على اتخاذ قرارات مستنيرة",
    "services.management.title": "إدارة الممتلكات",
    "services.management.desc": "خدمات إدارة الممتلكات لضمان الحفاظ على قيمة الأصول العقارية وزيادتها",
    "services.custom.title": "حلول مخصصة",
    "services.custom.desc": "خدمات مصممة لتلبية الاحتياجات الفريدة لكل عميل",
    "services.marketing.title": "التسويق العقاري",
    "services.marketing.desc": "حملات تسويقية شاملة لعرض وترويج العقارات بأحدث الاستراتيجيات والأساليب",
    "services.cta": "احصل على استشارة مجانية",
    
    // Values
    "values.title": "قيمنا",
    "values.subtitle": "القيم التي تحرك عملنا وتحدد هويتنا",
    "values.integrity.title": "النزاهة",
    "values.integrity.desc": "نلتزم بأعلى معايير الصدق والشفافية في جميع تعاملاتنا، مما يبني الثقة مع عملائنا وشركائنا.",
    "values.excellence.title": "التميز",
    "values.excellence.desc": "نحن ملتزمون بتقديم خدمات عالية الجودة وتجاوز توقعات العملاء من خلال الاهتمام بأدق التفاصيل.",
    "values.innovation.title": "الابتكار",
    "values.innovation.desc": "نستفيد من أحدث رؤى السوق والتكنولوجيا لتقديم حلول مبتكرة تلبي احتياجات سوق العقارات المتغيرة.",
    "values.client.title": "التركيز على العميل",
    "values.client.desc": "نعطي الأولوية لاحتياجات عملائنا وأهدافهم، مما يضمن رضاهم ونجاحهم في تحقيق تطلعاتهم العقارية.",
    "values.personality.title": "شخصية علامتنا التجارية",
    "values.personality.knowledgeable": "واسعة المعرفة",
    "values.personality.knowledgeable.desc": "خبراء على دراية ومهارة في مجال العقارات، نمتلك المعرفة العميقة بالسوق العقاري",
    "values.personality.trustworthy": "جديرة بالثقة",
    "values.personality.trustworthy.desc": "يمكن للعملاء الاعتماد على مشورتنا الصادقة والشفافة، نضع مصلحة العميل في المقام الأول",
    "values.personality.innovative": "مبتكرة",
    "values.personality.innovative.desc": "نبقى في الطليعة بأحدث الاتجاهات والأدوات، نقدم حلولاً إبداعية",
    "values.personality.friendly": "ودودة",
    "values.personality.friendly.desc": "نحن ودودون ومتفهمون وسهل التعامل معنا، نبني علاقات إيجابية مع عملائنا",
    
    // Advantages
    "advantages.title": "ميزتنا التنافسية",
    "advantages.subtitle": "ما يجعلنا الخيار الأفضل لاستثماراتك العقارية",
    "advantages.team.title": "فريق من الخبراء",
    "advantages.team.desc": "فريق من المهنيين المتمرسين من ذوي المعرفة والخبرة العميقة في مجال العقارات، يقدمون استشارات متخصصة تستند إلى خبرة سنوات طويلة.",
    "advantages.comprehensive.title": "خدمات شاملة",
    "advantages.comprehensive.desc": "محطة واحدة لجميع الاحتياجات العقارية، من استشارات الاستثمار إلى إدارة الممتلكات، مما يوفر على العملاء الوقت والجهد.",
    "advantages.relationships.title": "علاقات طويلة الأمد",
    "advantages.relationships.desc": "بناء علاقات طويلة الأمد على أساس الثقة والشفافية والاحترام المتبادل، مما يضمن ولاء العملاء واستمرارية التعاون.",
    "advantages.technology.title": "التكنولوجيا المتقدمة",
    "advantages.technology.desc": "استخدام أحدث التقنيات والأدوات لتقديم معلومات وخدمات دقيقة ومحدثة، مما يمنح عملائنا ميزة تنافسية في سوق العقارات.",
    "advantages.serve.title": "نخدم",
    "advantages.investors": "المستثمرون",
    "advantages.investors.desc": "الأفراد والشركات الذين يبحثون عن فرص استثمار عقاري مربحة",
    "advantages.homebuyers": "مشترو المنازل",
    "advantages.homebuyers.desc": "الأشخاص الذين يبحثون عن الوحدة السكنية المثالية التي تناسب نمط حياتهم",
    "advantages.developers": "المطورون العقاريون",
    "advantages.developers.desc": "مطورو العقارات الذين يحتاجون إلى رؤى سوقية واستشارات متخصصة",
    
    // Partners
    "partners.title": "شركاؤنا في النجاح",
    "partners.subtitle": "نتعاون مع أبرز شركات التطوير العقاري في مصر",
    "partners.more": "والعديد من الشركاء الموثوقين...",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "ابدأ رحلتك الاستثمارية معنا اليوم",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.name": "الاسم",
    "contact.form.name.placeholder": "أدخل اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.email.placeholder": "example@email.com",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.phone.placeholder": "+20 123 456 7890",
    "contact.form.message": "الرسالة",
    "contact.form.message.placeholder": "كيف يمكننا مساعدتك؟",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.success": "شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.",
    "contact.location": "الموقع",
    "contact.location.value": "شارع المرور، دمياط الجديدة",
    "contact.phone": "الهاتف",
    "contact.phone.value": "01006181900",
    "contact.email": "البريد الإلكتروني",
    "contact.email.value": "Netaqinvestment@gmail.com",
    "contact.follow": "تابعنا على",
    "contact.cta.title": "جاهز لبدء استثمارك؟",
    "contact.cta.desc": "احصل على استشارة مجانية من خبرائنا اليوم",
    "contact.cta.button": "اتصل بنا الآن",
    "contact.footer.rights": "جميع الحقوق محفوظة.",
    "contact.footer.tagline": "اكتشف فرص استثمار استثنائية",
    
    // WhatsApp
    "whatsapp.message": "مرحباً! أنا مهتم بمعرفة المزيد عن خدمات نطاق العقارية.",
    "whatsapp.tooltip": "تواصل معنا عبر واتساب",
    "whatsapp.label": "زر التواصل عبر واتساب",
    
    // SEO
    "seo.title": "نطاق | استثمار واستشارات عقارية متميزة في دمياط الجديدة، مصر",
    "seo.description": "حوّل رحلتك العقارية مع نطاق. استشارات خبراء، استراتيجيات استثمار، وساطة عقارية، وأبحاث سوقية في دمياط الجديدة. تأسست على يد المهندس هشام عادل والمهندس معتز شريف.",
    "seo.keywords": "عقارات مصر, استثمار عقاري دمياط, استشارات عقارية, فرص استثمارية, وساطة عقارية, أبحاث سوقية, دمياط الجديدة, نطاق عقارات",
  },
};

