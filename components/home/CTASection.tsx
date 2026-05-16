import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="bg-dark-card border border-gold/15 rounded-2xl px-8 md:px-16 py-16 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-display-sm text-cream font-light mb-4">
            Ready to discuss your matter
          </h2>
          <p className="text-cream/55 text-base leading-relaxed font-sans mb-10 max-w-xl mx-auto">
            Schedule a confidential consultation with our partners in New Delhi
            or Dubai. Meetings can be arranged in person, by phone, or over
            video.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
