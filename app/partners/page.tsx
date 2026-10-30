import type { Metadata } from "next";
import PartnersPageContent from "./PartnersPageContent";

export const metadata: Metadata = {
  title: "Senior Advocates – Delhi & Dubai",
  description:
    "Meet the partners of White Tab Partners LLP — senior advocates with proven authority before the Supreme Court, Delhi High Court, NCLT, and international tribunals.",
  alternates: { canonical: "https://whitetabpartners.com/partners" },
};

export default function PartnersPage() {
  return <PartnersPageContent />;
}
