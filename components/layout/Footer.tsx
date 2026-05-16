import Link from "next/link";
import { firmData, offices, navLinks } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gold/10">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-serif text-xl font-medium tracking-[0.12em] text-cream uppercase">
                White Tab Partners
              </span>
              <span className="text-[9px] tracking-[0.22em] text-gold/70 uppercase font-sans mt-0.5">
                Advocates &amp; Legal Consultants
              </span>
            </Link>
            <p className="font-serif text-lg text-gold/80 italic mb-3">
              &ldquo;{firmData.tagline}&rdquo;
            </p>
            <p className="text-cream/50 text-sm leading-relaxed">
              {firmData.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="section-label mb-6">Quick Links</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <p className="section-label mb-6">Offices</p>
            <div className="space-y-6">
              {offices.map((office) => (
                <div key={office.city}>
                  <p className="text-cream/80 text-sm font-medium mb-2">
                    {office.city}
                  </p>
                  {office.addresses.map((addr, i) => (
                    <p
                      key={i}
                      className="text-cream/50 text-xs leading-relaxed whitespace-pre-line mb-1"
                    >
                      {addr}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${firmData.email}`}
                  className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  <Mail size={13} className="text-gold/60" />
                  {firmData.email}
                </a>
              </li>
              {firmData.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p}`}
                    className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors"
                  >
                    <Phone size={13} className="text-gold/60" />
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={firmData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  WhatsApp ↗
                </a>
              </li>
              <li>
                <a
                  href={firmData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-cream text-sm transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/30">
          <p>© 2025 White Tab Partners LLP. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/disclaimer" className="hover:text-cream/60 transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-cream/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
