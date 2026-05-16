import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Legal commentary, strategic updates, and practical perspectives from White Tab Partners on disputes, arbitration, enforcement, and regulatory change.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(139,105,20,0.08),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">Insights</p>
          <h1 className="font-serif text-display-lg text-cream font-light max-w-2xl leading-tight mb-6">
            Knowledge &amp;
            <span className="text-gold-light"> Commentary.</span>
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl font-sans">
            Legal commentary, strategic updates, and practical perspectives from
            White Tab Partners on disputes, arbitration, white-collar
            enforcement, cross-border developments, and regulatory change.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-cream-light py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-px bg-gold/40 mx-auto mb-10" />
            <p className="font-serif text-2xl text-dark/60 font-light mb-5">
              New insights are currently being drafted.
            </p>
            <p className="text-dark/45 text-base font-sans leading-relaxed mb-10">
              We cover disputes, arbitration, white-collar enforcement,
              cross-border developments, and regulatory change. New pieces are
              published as matters and legal developments warrant.
            </p>
            <p className="text-dark/35 text-sm font-sans">Please check back shortly.</p>
          </div>
        </div>
      </section>
    </>
  );
}
