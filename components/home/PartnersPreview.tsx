import Link from "next/link";
import { partners } from "@/lib/data";
import PartnerImage from "@/components/ui/PartnerImage";

const featured = partners.slice(0, 3);

export default function PartnersPreview() {
  return (
    <section className="bg-cream-light py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-6" style={{ color: "#8B6914" }}>
              Our Partners
            </p>
            <h2 className="font-serif text-display-md text-dark font-light">
              Experienced hands,
              <br />
              <span style={{ color: "#8B6914" }}>directly on your matter.</span>
            </h2>
          </div>
          <Link
            href="/partners"
            className="border border-dark/20 hover:border-dark/50 text-dark text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-6 py-3 rounded-full transition-colors self-start md:self-auto whitespace-nowrap"
          >
            Meet All Partners →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((partner) => (
            <Link
              href="/partners"
              key={partner.id}
              className="group block"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-dark/10">
                <PartnerImage
                  src={partner.image}
                  alt={partner.name}
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <p className="text-[10px] tracking-[0.18em] uppercase text-gold font-sans mb-1">
                {partner.role}
              </p>
              <h3 className="font-serif text-xl text-dark font-medium mb-2">
                {partner.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {partner.practiceAreas.slice(0, 3).map((area) => (
                  <span
                    key={area}
                    className="text-[10px] text-dark/50 font-sans border border-dark/15 px-2 py-0.5 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
