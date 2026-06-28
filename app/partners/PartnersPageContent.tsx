"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { partners } from "@/lib/data";
import { Mail } from "lucide-react";
import PartnerImage from "@/components/ui/PartnerImage";
import { fadeUp, fadeLeft, stagger, viewport } from "@/lib/animations";

export default function PartnersPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(139,105,20,0.07),transparent)]" />
        <motion.div
          className="max-w-8xl mx-auto px-6 lg:px-12 relative"
          variants={stagger(0.13)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label mb-8" variants={fadeUp}>Our Partners</motion.p>
          <motion.h1 className="font-serif text-display-lg text-cream font-light max-w-2xl leading-tight mb-6" variants={fadeUp}>
            Experienced hands,
            <span className="text-gold-light"> directly on your matter.</span>
          </motion.h1>
          <motion.p className="text-cream/55 text-lg leading-relaxed max-w-xl font-sans" variants={fadeUp}>
            Our partners work with clients from the first consultation through
            the final resolution. No delegation, no handoffs.
          </motion.p>
        </motion.div>
      </section>

      {/* Partners */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                variants={idx % 2 === 0 ? fadeLeft : fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pb-20 border-b border-dark/10 last:border-0 last:pb-0 ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Photo */}
                <div className={`relative aspect-[4/5] rounded-xl overflow-hidden bg-dark/5 ${idx % 2 === 1 ? "lg:col-start-3" : ""}`}>
                  <PartnerImage src={partner.image} alt={partner.name} className="object-cover object-top" />
                </div>

                {/* Info */}
                <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans mb-2">{partner.role}</p>
                  <h2 className="font-serif text-display-sm text-dark font-light mb-2">{partner.name}</h2>
                  {partner.designation && (
                    <p className="text-gold text-xs font-sans tracking-wide mb-1">{partner.designation}</p>
                  )}

                  <p className="text-dark/70 text-base leading-relaxed font-sans mb-4 text-justify">{partner.bio}</p>
                  {partner.bioExtended && (
                    <p className="text-dark/60 text-sm leading-relaxed font-sans mb-8 text-justify">{partner.bioExtended}</p>
                  )}

                  {partner.priorExperience && partner.priorExperience.length > 0 && (
                    <div className="mb-8">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-dark/40 font-sans mb-3">Prior Experience</p>
                      <ul className="space-y-1">
                        {partner.priorExperience.map((exp) => (
                          <li key={exp} className="text-dark/60 text-sm font-sans flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0 mt-2" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-dark/40 font-sans mb-3">Practice Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {partner.practiceAreas.map((area) => (
                        <span key={area} className="border border-dark/15 text-dark/60 text-xs font-sans px-3 py-1 rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={`mailto:${partner.email}`} className="inline-flex items-center gap-2 text-gold text-sm font-sans hover:text-gold-light transition-colors">
                    <Mail size={14} />
                    {partner.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <motion.div
          className="max-w-8xl mx-auto px-6 lg:px-12 text-center"
          variants={stagger(0.13)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 className="font-serif text-display-sm text-cream font-light mb-4" variants={fadeUp}>
            Speak directly with a partner
          </motion.h2>
          <motion.p className="text-cream/50 mb-8 font-sans max-w-md mx-auto" variants={fadeUp}>
            Every consultation is handled by a senior lawyer, not a paralegal or junior associate.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors">
              Book a Consultation →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
