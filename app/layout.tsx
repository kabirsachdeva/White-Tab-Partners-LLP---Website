import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";

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
    default: "White Tab Partners LLP | Litigation & Dispute Resolution",
    template: "%s | White Tab Partners LLP",
  },
  description:
    "White Tab Partners LLP is a law firm with offices in New Delhi and Dubai, practising in litigation, arbitration, corporate advisory, and cross-border matters.",
  metadataBase: new URL("https://whitetabpartners.com"),
  alternates: {
    canonical: "https://whitetabpartners.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "White Tab Partners LLP",
    images: [
      {
        url: "/images/logo-actual.jpg",
        width: 1200,
        height: 630,
        alt: "White Tab Partners LLP – Litigation & Dispute Resolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-actual.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "White Tab Partners LLP",
    alternateName: "WTP",
    description:
      "A full-service Indian law firm practising in litigation, arbitration, corporate advisory, and cross-border matters, with offices in New Delhi and Dubai.",
    url: "https://whitetabpartners.com",
    logo: "https://whitetabpartners.com/images/logo.webp",
    email: "info@whitetabpartners.com",
    telephone: "+91-81818-11881",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "T-17, Green Park Main",
        addressLocality: "New Delhi",
        postalCode: "110016",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "HDS Tower, Cluster F, JLT, Office No. 3601",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    ],
    areaServed: ["IN", "AE"],
    serviceType: [
      "Commercial Litigation",
      "Dispute Resolution",
      "Arbitration",
      "Corporate Advisory",
      "Insolvency",
      "White Collar Crime",
      "International Desk",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://whitetabpartners.com/#localbusiness",
    name: "White Tab Partners LLP",
    url: "https://whitetabpartners.com",
    telephone: "011-41326301",
    email: "info@whitetabpartners.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "T-17, Green Park Main",
      addressLocality: "New Delhi",
      postalCode: "110016",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5571,
      longitude: 77.2002,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  },
];

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
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
