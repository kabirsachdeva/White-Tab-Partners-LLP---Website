import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "White Tab Partners LLP is a full-service law firm with offices in New Delhi and Dubai, built for disputes, investigations, and cross-border matters.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
