import { stats } from "@/lib/data";

function fixHyphen(text: string) {
  return text.split(/(-)/).map((part, i) =>
    part === "-" ? (
      <span key={i} style={{ fontFamily: "Inter, sans-serif" }}>-</span>
    ) : (
      part
    )
  );
}

export default function StatsSection() {
  return (
    <section className="bg-dark-card border-y border-gold/10 py-12">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 border-r border-gold/10 last:border-0 px-2"
            >
              <span className="font-serif text-2xl md:text-3xl text-gold-light font-medium leading-none">
                {fixHyphen(stat.value)}
              </span>
              <span className="text-[10px] tracking-[0.12em] uppercase text-cream/40 font-sans leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
