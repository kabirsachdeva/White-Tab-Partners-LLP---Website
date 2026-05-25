import Link from "next/link";
import { practiceAreaGroups } from "@/lib/data";

export default function PracticeAreasHome() {
  return (
    <section className="bg-cream-light py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-6" style={{ color: "#8B6914" }}>
              Practice Areas
            </p>
            <h2 className="font-serif text-display-md text-dark font-light leading-snug">
              Full<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>spectrum legal and
              <br />
              advisory representation.
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="border border-dark/20 hover:border-dark/50 text-dark text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-6 py-3 rounded-full transition-colors self-start md:self-auto whitespace-nowrap"
          >
            View All Practice Areas →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreaGroups.map((group) => (
            <div key={group.id}>
              <h3 className="font-serif text-xl text-dark font-medium mb-5 pb-3 border-b border-dark/10">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.areas.map((area) => (
                  <li key={area.name} className="flex items-start gap-2">
                    <span className="text-gold mt-1 text-xs">›</span>
                    <Link
                      href={`/practice-areas#${group.id}`}
                      className="text-dark/65 hover:text-dark text-sm font-sans leading-snug transition-colors"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
