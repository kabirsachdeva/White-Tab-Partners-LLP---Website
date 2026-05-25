import type { Metadata } from "next";
import Link from "next/link";
import { brandStory, differentiators, sectors } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "White Tab Partners LLP is a full-service law firm with offices in New Delhi and Dubai, built for disputes, investigations, and cross-border matters.",
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

      {/* Brand Story — The White Tab */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="section-label mb-8" style={{ color: "#8B6914" }}>
                {brandStory.heading}
              </p>
              <h2 className="font-serif text-display-md text-dark font-light leading-tight mb-10">
                {brandStory.subheading}
              </h2>
              <div className="space-y-6 text-dark/70 text-base leading-relaxed font-sans">
                {brandStory.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Tagline Breakdown */}
            <div className="lg:pt-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-dark/40 font-sans mb-10">
                What our tagline means
              </p>
              <div className="space-y-0">
                {brandStory.taglineBreakdown.map((item, i) => (
                  <div
                    key={item.word}
                    className={`py-8 ${i < brandStory.taglineBreakdown.length - 1 ? "border-b border-dark/10" : ""}`}
                  >
                    <p className="font-serif text-2xl text-dark font-light mb-3">
                      {item.word}
                    </p>
                    <p className="text-dark/60 text-sm leading-relaxed font-sans">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-dark py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-8">Our Practice</p>
              <p className="font-serif text-2xl text-cream font-light leading-relaxed mb-8">
                &ldquo;Research, preparation, and practical legal advice.&rdquo;
              </p>
              <div className="space-y-5 text-cream/60 text-base leading-relaxed font-sans">
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
                  We work with associated Chartered Accountants, Company
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
                  className="flex items-center gap-4 py-4 border-b border-gold/10"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-cream/80 font-sans text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-12" style={{ color: "#8B6914" }}>
            What Sets Us Apart
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((d) => (
              <div key={d.number} className="border border-dark/10 rounded-xl p-10 hover:border-gold/30 transition-colors bg-white/30">
                <span className="font-serif text-4xl text-gold/30 font-light block mb-4">
                  {d.number}
                </span>
                <h3 className="font-serif text-xl text-dark font-medium mb-4">
                  {d.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed font-sans">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Experience */}
      <section className="bg-dark py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="section-label mb-6">Sector Experience</p>
            <h2 className="font-serif text-display-md text-cream font-light mb-4">
              Trusted across sensitive matters
              <br />
              and complex industries.
            </h2>
            <p className="text-cream/50 text-base font-sans max-w-xl">
              Our work spans a wide range of domestic and cross-border industries.
              We do not publish a public client roster, but our sector experience
              includes:
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="border border-gold/15 text-cream/60 text-sm font-sans px-4 py-2 rounded-full hover:border-gold/40 hover:text-cream transition-colors"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-secondary py-16 border-t border-gold/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-display-sm text-cream font-light mb-4">
            Ready to work with a partner<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>led firm?
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
