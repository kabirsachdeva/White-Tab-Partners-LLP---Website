import type { Metadata } from "next";
import PartnersPageContent from "./PartnersPageContent";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Meet the partners of White Tab Partners LLP, senior advocates and legal consultants with proven courtroom authority and cross-border expertise.",
};

export default function PartnersPage() {
  return <PartnersPageContent />;
}
