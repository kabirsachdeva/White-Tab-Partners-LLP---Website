import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About the Firm – Litigation Lawyers",
  description:
    "White Tab Partners LLP is a full-service litigation and advisory law firm in New Delhi and Dubai. Disputes, commercial litigation, arbitration, and cross-border matters.",
  alternates: { canonical: "https://whitetabpartners.com/about" },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
