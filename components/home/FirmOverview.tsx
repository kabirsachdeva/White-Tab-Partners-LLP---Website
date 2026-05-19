export default function FirmOverview() {
  return (
    <section className="bg-cream-light py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-8" style={{ color: "#8B6914" }}>
              Firm Overview
            </p>
            <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-dark leading-[1.3] font-light">
              &ldquo;We named this firm after the white tab because it represents
              something specific: that when a lawyer stands before a court, their
              word must be reliable. That standard governs every instruction we
              take.&rdquo;
            </blockquote>
          </div>

          <div className="space-y-6 text-dark/70 text-base leading-relaxed font-sans">
            <p>
              White Tab Partners LLP is a full-service law firm with experience
              in litigation, arbitration, corporate advisory, and forensic
              matters. We advise clients in complex disputes, commercial matters,
              and cross-border work from our offices in New Delhi and Dubai.
            </p>
            <p>
              Our practice includes appearances before the Supreme Court of
              India, the Delhi High Court, district courts, and specialist
              tribunals such as the DRT and consumer forums. We also advise on
              international matters, including arbitration and cross-border
              transactions.
            </p>
            <p>
              We work with associated Chartered Accountants, Company Secretaries,
              and forensic professionals where a matter demands it, bringing
              stronger factual and commercial depth to disputes, investigations,
              and recovery work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
