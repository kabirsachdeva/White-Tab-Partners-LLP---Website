import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreaGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Full-spectrum legal and advisory representation across Corporate, Finance, Dispute Resolution, and Markets practice groups.",
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(139,105,20,0.1),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">Practice Areas</p>
          <h1 className="font-serif text-display-lg text-cream font-light max-w-3xl leading-tight mb-6">
            Full-spectrum legal and advisory
            <span className="text-gold-light"> representation.</span>
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-2xl font-sans">
            We address matters where legal complexity and commercial consequence
            move together, across transactions, disputes, and cross-border mandates.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mt-10">
            {practiceAreaGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="border border-gold/30 hover:bg-gold/10 text-cream/70 hover:text-cream text-[11px] tracking-[0.12em] uppercase font-sans px-4 py-2 rounded-full transition-colors"
              >
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      {practiceAreaGroups.map((group, gIdx) => (
        <section
          key={group.id}
          id={group.id}
          className={gIdx % 2 === 0 ? "bg-cream-light py-24" : "bg-white py-24"}
        >
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            {/* Group header */}
            <div className="mb-14 pb-10 border-b border-dark/10">
              <p className="section-label mb-6" style={{ color: "#8B6914" }}>
                {group.title}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <p className="text-dark/70 text-base leading-relaxed font-sans max-w-xl">
                  {group.overview}
                </p>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-dark/40 font-sans mb-3">
                    Key Sector Experience
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.sectors.map((s) => (
                      <span
                        key={s}
                        className="border border-dark/15 text-dark/55 text-xs font-sans px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-areas grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {group.areas.map((area) => (
                <div key={area.name} className="group">
                  <h3 className="font-serif text-lg text-dark font-medium mb-4 flex items-center gap-3">
                    <span className="text-gold/60 text-xs flex-shrink-0">◆</span>
                    {area.name}
                  </h3>
                  <ul className="space-y-2.5">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-gold/40 text-[8px] flex-shrink-0 mt-1">◆</span>
                        <span className="text-dark/60 text-sm font-sans leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-display-sm text-cream font-light mb-4">
            Our partners work directly with clients
          </h2>
          <p className="text-cream/50 mb-8 font-sans">
            From first consultation through final resolution.
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
