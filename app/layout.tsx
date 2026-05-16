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
    default: "White Tab Partners LLP – Advocates & Legal Consultants | New Delhi & Dubai",
    template: "%s | White Tab Partners LLP",
  },
  description:
    "A senior-led Indian law firm with offices in New Delhi and Dubai — built for disputes, investigations, and cross-border matters that demand more than routine legal work.",
  keywords: [
    "law firm India",
    "advocates New Delhi",
    "litigation lawyers Dubai",
    "white collar crime lawyers",
    "arbitration India",
    "cross-border legal",
    "White Tab Partners",
  ],
  metadataBase: new URL("https://whitetabpartners.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "White Tab Partners LLP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-dark text-cream antialiased">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
