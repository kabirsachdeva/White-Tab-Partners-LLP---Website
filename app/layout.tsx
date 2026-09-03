import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import BCIModal from "@/components/layout/BCIModal";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "White Tab Partners LLP | Advocates, Solicitors & Legal Consultants",
    template: "%s | White Tab Partners LLP",
  },
  description:
    "White Tab Partners LLP is a law firm with offices in New Delhi and Dubai, practising in litigation, arbitration, corporate advisory, and cross-border matters.",
  metadataBase: new URL("https://whitetabpartners.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "White Tab Partners LLP",
    images: [
      {
        url: "/images/logo-actual.jpg",
        width: 1200,
        height: 630,
        alt: "White Tab Partners LLP — Advocates, Solicitors & Legal Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-actual.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "White Tab Partners LLP",
  alternateName: "WTP",
  description:
    "A full-service Indian law firm practising in litigation, arbitration, corporate advisory, and cross-border matters, with offices in New Delhi and Dubai.",
  url: "https://whitetabpartners.com",
  logo: "https://whitetabpartners.com/images/logo.webp",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  ],
  areaServed: ["IN", "AE"],
  serviceType: [
    "Litigation",
    "Arbitration",
    "Corporate Advisory",
    "International Desk",
    "Insolvency",
    "Criminal Law",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-dark text-cream antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-gold focus:text-cream focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-sans"
        >
          Skip to main content
        </a>
        <BCIModal />
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
