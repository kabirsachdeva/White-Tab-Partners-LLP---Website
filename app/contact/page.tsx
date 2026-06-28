import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Schedule a confidential consultation with White Tab Partners. Meetings can be arranged in person in New Delhi or Dubai, by phone, or over video.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
