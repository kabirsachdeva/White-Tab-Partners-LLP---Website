import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact – Book a Consultation",
  description:
    "Schedule a confidential consultation with White Tab Partners LLP in New Delhi or Dubai. Disputes, litigation, arbitration — speak directly with a partner.",
  alternates: { canonical: "https://whitetabpartners.com/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
