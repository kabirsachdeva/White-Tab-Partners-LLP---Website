import type { Metadata } from "next";
import Link from "next/link";
import { partners } from "@/lib/data";
import { Mail } from "lucide-react";
import PartnerImage from "@/components/ui/PartnerImage";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Meet the partners of White Tab Partners LLP — senior advocates and legal consultants with proven courtroom authority and cross-border expertise.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(139,105,20,0.07),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">Our Partners</p>
          <h1 className="font-serif text-display-lg text-cream font-light max-w-2xl leading-tight mb-6">
            Experienced hands,
            <span className="text-gold-light"> directly on your matter.</span>
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl font-sans">
            Our partners work with clients from the first consultation through
            the final resolution — no delegation, no handoffs.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {partners.map((partner, idx) => (
              <div
                key={partner.id}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-20 border-b border-dark/10 last:border-0 last:pb-0 ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Photo */}
                <div
                  className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-dark/5 ${
                    idx % 2 === 1 ? "lg:col-start-3" : ""
                  }`}
                >
                  <PartnerImage
                    src={partner.image}
                    alt={partner.name}
                    className="object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans mb-2">
                    {partner.role}
                  </p>
                  <h2 className="font-serif text-display-sm text-dark font-light mb-2">
                    {partner.name}
                  </h2>
                  {partner.designation && (
                    <p className="text-gold text-xs font-sans tracking-wide mb-1">
                      {partner.designation}
                    </p>
                  )}
                  <p className="text-dark/40 text-xs font-sans tracking-wide mb-8">
                    {partner.enrollment}
                  </p>

                  <p className="text-dark/70 text-base leading-relaxed font-sans mb-4">
                    {partner.bio}
                  </p>
                  {partner.bioExtended && (
                    <p className="text-dark/60 text-sm leading-relaxed font-sans mb-8">
                      {partner.bioExtended}
                    </p>
                  )}

                  {partner.priorExperience && partner.priorExperience.length > 0 && (
                    <div className="mb-8">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-dark/40 font-sans mb-3">
                        Prior Experience
                      </p>
                      <ul className="space-y-1">
                        {partner.priorExperience.map((exp) => (
                          <li key={exp} className="text-dark/60 text-sm font-sans flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0 mt-2" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-dark/40 font-sans mb-3">
                      Practice Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partner.practiceAreas.map((area) => (
                        <span
                          key={area}
                          className="border border-dark/15 text-dark/60 text-xs font-sans px-3 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`mailto:${partner.email}`}
                    className="inline-flex items-center gap-2 text-gold text-sm font-sans hover:text-gold-light transition-colors"
                  >
                    <Mail size={14} />
                    {partner.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-display-sm text-cream font-light mb-4">
            Speak directly with a partner
          </h2>
          <p className="text-cream/50 mb-8 font-sans max-w-md mx-auto">
            Every consultation is handled by a senior lawyer, not a paralegal or
            junior associate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
          >
            Book a Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
