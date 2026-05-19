import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,105,20,0.12),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark to-transparent" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,237,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,237,216,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-serif mb-6 mt-4">
            <span
              className="block text-[clamp(3.5rem,7vw,6rem)] leading-[1.0] font-light text-gold-light"
            >
              Craft. Clarity.
            </span>
            <span
              className="block text-[clamp(3.5rem,7vw,6rem)] leading-[1.05] font-light text-cream"
            >
              Commitment.
            </span>
          </h1>

          <p className="text-cream/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-sans font-light">
            A senior-led Indian law firm with offices in New Delhi and Dubai.
            Built for disputes, investigations, and cross-border matters that
            demand more than routine legal work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
            >
              Book a Consultation →
            </Link>
            <Link
              href="/practice-areas"
              className="border border-cream/30 hover:border-cream/60 text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
            >
              Our Practice Areas
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-[9px] tracking-[0.3em] uppercase font-sans">Scroll to Enter</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="bg-dark-secondary py-16 border-t border-gold/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          {/* Video frame — replace src with actual video when ready */}
          <div className="relative max-w-3xl mx-auto rounded-xl overflow-hidden border border-gold/15 bg-dark aspect-video flex items-center justify-center group">
            {/* Uncomment and add src to activate the video:
            <video
              src="/videos/firm-intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            */}

            {/* Placeholder shown until video is added */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(139,105,20,0.08),transparent)]" />
            <div className="relative z-10 flex flex-col items-center gap-4 text-cream/40">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-gold/50 border-b-[8px] border-b-transparent ml-1 group-hover:border-l-gold transition-colors" />
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-gold/40">
                Video coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
