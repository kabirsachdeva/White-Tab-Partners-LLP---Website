"use client";
import { firmData } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-dark-secondary border-b border-gold/10 text-cream/60 text-xs hidden md:block">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 h-9 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <span className="text-gold/70">📍</span>
            New Delhi
          </span>
          <span className="w-px h-3 bg-cream/20" />
          <span className="flex items-center gap-1.5">
            <span className="text-gold/70">📍</span>
            Dubai
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${firmData.email}`}
            className="flex items-center gap-1.5 hover:text-cream transition-colors"
          >
            <Mail size={11} />
            {firmData.email}
          </a>
          <span className="w-px h-3 bg-cream/20" />
          <a
            href={`tel:${firmData.phone}`}
            className="flex items-center gap-1.5 hover:text-cream transition-colors"
          >
            <Phone size={11} />
            {firmData.phone}
          </a>
          <span className="w-px h-3 bg-cream/20" />
          <a
            href={firmData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            WhatsApp ↗
          </a>
          <span className="w-px h-3 bg-cream/20" />
          <a
            href={firmData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cream transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  );
}
