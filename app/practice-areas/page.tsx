import type { Metadata } from "next";
import PracticeAreasPageContent from "./PracticeAreasPageContent";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Full-spectrum legal and advisory representation across Corporate, Finance, Dispute Resolution, and Markets practice groups.",
};

export default function PracticeAreasPage() {
  return <PracticeAreasPageContent />;
}
