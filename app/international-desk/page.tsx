import type { Metadata } from "next";
import InternationalDeskPageContent from "./InternationalDeskPageContent";

export const metadata: Metadata = {
  title: "India-UAE Legal Desk – Dubai Office",
  description:
    "Cross-border legal services from our Dubai office. India-UAE matters, global mobility advisory, Dubai Golden Visa, and international dispute resolution.",
  alternates: { canonical: "https://whitetabpartners.com/international-desk" },
};

export default function InternationalDeskPage() {
  return <InternationalDeskPageContent />;
}
