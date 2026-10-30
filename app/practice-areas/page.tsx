import type { Metadata } from "next";
import PracticeAreasPageContent from "./PracticeAreasPageContent";

export const metadata: Metadata = {
  title: "Litigation, Arbitration & Advisory",
  description:
    "Commercial litigation, dispute resolution, arbitration, corporate advisory, insolvency, white collar crime, and cross-border matters across India and internationally.",
  alternates: { canonical: "https://whitetabpartners.com/practice-areas" },
};

export default function PracticeAreasPage() {
  return <PracticeAreasPageContent />;
}
