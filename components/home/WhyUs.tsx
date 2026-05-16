const pillars = [
  {
    tag: "Disputes",
    title: "Senior-led strategy from day one.",
    body: "Your matter is shaped by the lawyers who will actually argue it, not passed through layers of delegation.",
  },
  {
    tag: "Forensics",
    title: "Legal, financial, and forensic thinking in one room.",
    body: "Our advocates work alongside in-house Chartered Accountants and Company Secretaries, not on referral, but as part of the same team. Coordinated advice across disputes, compliance, and financial analysis in a single instruction.",
  },
  {
    tag: "Cross-Border",
    title: "Depth in India and the Gulf, with international reach.",
    body: "We structure, defend, and coordinate matters that move between India, Dubai, and other strategic jurisdictions.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="section-label justify-center mb-6">Why Clients Choose Us</p>
          <h2 className="font-serif text-display-md text-cream font-light">
            Built for sophisticated matters,
            <br className="hidden md:block" />
            <span className="text-gold-light"> not commodity work.</span>
          </h2>
          <p className="text-cream/50 mt-5 max-w-2xl mx-auto text-base leading-relaxed font-sans">
            From crisis-led disputes to boardroom-sensitive advisory work, we
            combine courtroom authority, forensic discipline, and cross-border
            execution in one lean team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="dark-card p-8 hover:border-gold/30 transition-colors group"
            >
              <span className="inline-block border border-gold/40 text-gold-light text-[10px] tracking-[0.18em] uppercase font-sans px-3 py-1 rounded-full mb-6 group-hover:bg-gold/5 transition-colors">
                {p.tag}
              </span>
              <h3 className="font-serif text-xl text-cream font-light leading-snug mb-4">
                {p.title}
              </h3>
              <p className="text-cream/50 text-sm leading-relaxed font-sans">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
