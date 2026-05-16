import type { Metadata } from "next";
import Link from "next/link";
import { differentiators, sectors } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "White Tab Partners LLP is a full-service law firm built on proven courtroom authority, forensic integration, and cross-border capability.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(139,105,20,0.08),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">About the Firm</p>
          <h1 className="font-serif text-display-lg text-cream font-light max-w-3xl leading-tight mb-8">
            Built over decades.
            <span className="text-gold-light"> Working across jurisdictions.</span>
            <br />
            Focused on clear advice.
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-2xl font-sans">
            Clients work directly with senior lawyers from the first consultation
            through final hearing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-8" style={{ color: "#8B6914" }}>
                Our Story
              </p>
              <p className="font-serif text-2xl text-dark font-light leading-relaxed mb-8">
                &ldquo;Research, preparation, and practical legal advice.&rdquo;
              </p>
              <div className="space-y-5 text-dark/70 text-base leading-relaxed font-sans">
                <p>
                  White Tab Partners LLP is a full-service law firm with
                  experience in litigation, arbitration, corporate advisory, and
                  forensic work. We act in courts, tribunals, and commercial
                  matters, and we support clients from both our offices in New
                  Delhi and Dubai.
                </p>
                <p>
                  Our practice includes appearances before the Supreme Court of
                  India, the Delhi High Court, district courts, and specialist
                  tribunals such as the DRT and consumer forums. We also advise
                  on international matters, including arbitration and cross-border
                  transactions.
                </p>
                <p>
                  We work closely with our in-house Chartered Accountants, Company
                  Secretaries, and forensic professionals where a matter demands
                  it, bringing stronger factual and commercial depth to disputes,
                  investigations, and recovery work.
                </p>
                <p>
                  Through our Dubai office and a network of international
                  relationships, we also assist clients on cross-border advisory
                  work, enforcement strategy, immigration-related support, and
                  global mobility matters.
                </p>
              </div>
            </div>

            <div className="lg:pt-14 space-y-4">
              {[
                "Disputes, investigations, and recovery",
                "Corporate and transactional advisory",
                "White collar crime and enforcement",
                "Cross-border and international matters",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-4 border-b border-dark/10"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-dark font-sans text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-dark py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-12">What Sets Us Apart</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div key={d.number} className="dark-card p-10 hover:border-gold/25 transition-colors">
                <span className="font-serif text-4xl text-gold/20 font-light block mb-4">
                  {d.number}
                </span>
                <h3 className="font-serif text-xl text-cream font-medium mb-4">
                  {d.title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed font-sans">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Experience */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="section-label mb-6" style={{ color: "#8B6914" }}>
              Sector Experience
            </p>
            <h2 className="font-serif text-display-md text-dark font-light mb-4">
              Trusted across sensitive matters
              <br />
              and complex industries.
            </h2>
            <p className="text-dark/60 text-base font-sans max-w-xl">
              Our work spans a wide range of domestic and cross-border industries.
              We do not publish a public client roster, but our sector experience
              includes:
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="border border-dark/15 text-dark/70 text-sm font-sans px-4 py-2 rounded-full hover:border-gold/40 hover:text-dark transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-display-sm text-cream font-light mb-4">
            Ready to work with a partner-led firm?
          </h2>
          <p className="text-cream/50 mb-8 font-sans">
            Our partners work directly with clients from first consultation through final resolution.
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
