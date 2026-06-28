import type { Metadata } from "next";
import { firmData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join White Tab Partners LLP. We are always looking for lawyers and professionals who combine intellectual rigour with genuine commitment to their clients.",
};

const qualities = [
  { title: "Strong Academic Foundation", desc: "A first-class academic record or equivalent professional achievement." },
  { title: "Courtroom Hunger", desc: "A genuine appetite for advocacy, trial work, and live matter experience from early in your career." },
  { title: "Drafting Precision", desc: "Clear thinking and careful drafting that anticipates how arguments will land in court." },
  { title: "Commercial Awareness", desc: "An understanding of what is at stake for the client beyond the legal question." },
  { title: "Integrity Without Compromise", desc: "Professional standards that do not bend under pressure." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_40%_50%,rgba(139,105,20,0.08),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">Careers</p>
          <h1 className="font-serif text-display-lg text-cream font-light max-w-2xl leading-tight mb-6">
            Join White Tab Partners.
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl font-sans">
            Build your practice through direct work on live matters with the
            team.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-8" style={{ color: "#8B6914" }}>
                Why Join Us
              </p>
              <div className="space-y-5 text-dark/70 text-base leading-relaxed font-sans text-justify">
                <p>
                  We are always looking for lawyers and professionals who combine
                  intellectual rigour with genuine commitment to their clients.
                </p>
                <p>
                  You will work on live matters from early in your career,
                  including court and tribunal work where appropriate. We
                  prioritise clear thinking, careful drafting, and genuine
                  curiosity about the law.
                </p>
                <p>
                  We accept applications from advocates at all levels of
                  experience, as well as from Chartered Accountants and forensic
                  professionals interested in integrated legal practice.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="section-label mb-6" style={{ color: "#8B6914" }}>
                What We Look For
              </p>
              {qualities.map((q) => (
                <div
                  key={q.title}
                  className="border border-dark/10 rounded-xl px-6 py-5 hover:border-gold/20 transition-colors"
                >
                  <h3 className="font-sans font-medium text-dark text-sm mb-1">
                    {q.title}
                  </h3>
                  <p className="text-dark/55 text-sm font-sans leading-relaxed text-justify">
                    {q.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="bg-dark py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="section-label mb-8">How to Apply</p>
            <h2 className="font-serif text-display-sm text-cream font-light mb-6">
              Send us your CV and a covering note.
            </h2>
            <p className="text-cream/55 text-base leading-relaxed font-sans mb-10 text-justify">
              Tell us what you are working towards, why White Tab Partners is the
              right place to build that practice, and what you would bring to the
              team. Applications are reviewed on a rolling basis.
            </p>

            <a
              href={`mailto:${firmData.careerEmail}`}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
            >
              Apply: {firmData.careerEmail} →
            </a>

            <p className="text-cream/30 text-sm font-sans mt-6">
              We accept applications from advocates at all levels, CAs, and
              forensic professionals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
