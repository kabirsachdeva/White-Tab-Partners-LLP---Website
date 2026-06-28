import type { Metadata } from "next";
import InternationalDeskPageContent from "./InternationalDeskPageContent";

export const metadata: Metadata = {
  title: "International Desk",
  description:
    "Cross-border legal support from our office at Jumeirah Lake Towers, Dubai. India-UAE matters, global mobility advisory, and international dispute resolution.",
};

export default function InternationalDeskPage() {
  return <InternationalDeskPageContent />;
}
