import type { Metadata } from "next";
import Link from "next/link";
import { internationalServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "International Desk",
  description:
    "Cross-border legal support from our office at Jumeirah Lake Towers, Dubai. India-UAE transactions, disputes, Golden Visa, and global mobility.",
};

export default function InternationalDeskPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_50%,rgba(139,105,20,0.1),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl">
            <p className="section-label mb-8">International Desk</p>
            <h1 className="font-serif text-display-lg text-cream font-light leading-tight mb-4">
              Cross-border legal support.
            </h1>
            <h2 className="font-serif text-display-sm text-gold-light font-light mb-8">
              From Jumeirah Lake Towers, Dubai.
            </h2>
            <p className="text-cream/55 text-lg leading-relaxed font-sans mb-4">
              Practical support. Across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-cream-light py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-8" style={{ color: "#8B6914" }}>
                Our Dubai Presence
              </p>
              <div className="space-y-5 text-dark/70 text-base leading-relaxed font-sans">
                <p>
                  Our Dubai office at HDS Tower, Jumeirah Lake Towers handles
                  matters involving India, the UAE, and other regions. We
                  collaborate with legal correspondents across multiple
                  jurisdictions and have coordinated enforcement proceedings
                  spanning India, UAE, and Singapore.
                </p>
                <p>
                  Every international matter is handled with the same rigour we
                  bring to every matter — with the added advantage of lawyers who
                  understand both systems, both cultures, and both markets.
                </p>
              </div>
            </div>

            <div className="dark-card p-8 bg-dark text-cream">
              <p className="section-label mb-6">Office Details</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-cream/40 font-sans mb-1">
                    Address
                  </p>
                  <p className="text-cream/80 text-sm font-sans">
                    HDS Tower, Cluster F, JLT
                    <br />
                    Office No. 3601, Dubai, UAE
                  </p>
                </div>
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-cream/40 font-sans mb-1">
                    Jurisdictions Covered
                  </p>
                  <p className="text-cream/80 text-sm font-sans">
                    India · UAE · Singapore · Multiple International
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <p className="section-label mb-12">Services from Dubai</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalServices.map((svc) => (
              <div
                key={svc.title}
                className="dark-card p-8 hover:border-gold/30 transition-colors"
              >
                <div className="w-8 h-px bg-gold mb-6" />
                <h3 className="font-serif text-xl text-cream font-light mb-4">
                  {svc.title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed font-sans">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-cream-light py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-dark font-light leading-relaxed mb-10">
            &ldquo;Every international matter is handled with the same rigour we
            bring to every matter, with the added advantage of lawyers who
            understand both systems, both cultures, and both markets.&rdquo;
          </blockquote>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
          >
            Discuss Your International Matter →
          </Link>
        </div>
      </section>
    </>
  );
}
