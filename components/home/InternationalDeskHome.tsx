import Link from "next/link";

export default function InternationalDeskHome() {
  return (
    <section className="bg-dark py-24 relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
        <div className="max-w-2xl">
          <p className="section-label mb-8">International Desk</p>
          <h2 className="font-serif text-display-md text-cream font-light leading-tight mb-4">
            Cross<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>border legal support.
          </h2>
          <h3 className="font-serif text-display-sm text-gold-light font-light mb-8">
            From Jumeirah Lake Towers, Dubai.
          </h3>
          <p className="text-cream/60 text-base leading-relaxed font-sans mb-10">
            Our Dubai office supports clients on cross-border legal and advisory
            matters involving India, the UAE, and other jurisdictions. We work
            with trusted legal correspondents across multiple jurisdictions to
            coordinate cross-border matters seamlessly.
          </p>
          <Link
            href="/international-desk"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-7 py-3.5 rounded-full transition-colors"
          >
            Explore International Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
