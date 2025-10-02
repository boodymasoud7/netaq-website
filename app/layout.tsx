import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Netaq | Your Domain, Your Future",
  description: "A specialized company transforming the real estate experience for investors, homebuyers, and developers. Premium real estate consulting in New Damietta, Egypt.",
  keywords: "real estate, property investment, real estate consulting, New Damietta, Egypt, Netaq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={cairo.variable} suppressHydrationWarning>{children}</body>
    </html>
  );
}

