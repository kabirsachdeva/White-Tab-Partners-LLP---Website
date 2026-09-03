"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { practiceAreaGroups } from "@/lib/data";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function PracticeAreasPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(139,105,20,0.1),transparent)]" />
        <motion.div
          className="max-w-8xl mx-auto px-6 lg:px-12 relative"
          variants={stagger(0.13)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label mb-8" variants={fadeUp}>Practice Areas</motion.p>
          <motion.h1 className="font-serif text-display-lg text-cream font-light max-w-3xl leading-tight mb-6" variants={fadeUp}>
            Full<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>spectrum legal and advisory
            <span className="text-gold-light"> representation.</span>
          </motion.h1>
          <motion.p className="text-cream/55 text-lg leading-relaxed max-w-2xl font-sans" variants={fadeUp}>
            We address matters where legal complexity and commercial consequence
            move together, across transactions, disputes, and cross-border mandates.
          </motion.p>

          <motion.div className="flex flex-wrap gap-3 mt-10" variants={stagger(0.07)} initial="hidden" animate="visible">
            {practiceAreaGroups.map((g) => (
              <motion.a
                key={g.id}
                href={`#${g.id}`}
                variants={fadeUp}
                className="border border-gold/30 hover:bg-gold/10 text-cream/70 hover:text-cream text-[11px] tracking-[0.12em] uppercase font-sans px-4 py-2 rounded-full transition-colors"
              >
                {g.title}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Practice Area Sections */}
      {practiceAreaGroups.map((group, gIdx) => (
        <section
          key={group.id}
          id={group.id}
          className={gIdx % 2 === 0 ? "bg-cream-light py-24" : "bg-white py-24"}
        >
          <div className="max-w-8xl mx-auto px-6 lg:px-12">
            <motion.div
              className="mb-14 pb-10 border-b border-dark/10"
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p className="section-label mb-6" style={{ color: "#8B6914" }} variants={fadeUp}>
                {group.title}
              </motion.p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                <motion.p className="text-dark/70 text-base leading-relaxed font-sans max-w-xl text-justify" variants={fadeUp}>
                  {group.overview}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-dark/40 font-sans mb-3">
                    Key Sector Experience
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.sectors.map((s) => (
                      <span key={s} className="border border-dark/15 text-dark/55 text-xs font-sans px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {group.areas.map((area) => (
                <motion.div key={area.name} variants={fadeUp} className="group">
                  <h3 className="font-serif text-lg text-dark font-medium mb-4 uppercase tracking-wide">
                    {area.name}
                  </h3>
                  <ul className="space-y-2.5">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-gold/40 text-[8px] flex-shrink-0 mt-1">◆</span>
                        <span className="text-dark/60 text-sm font-sans leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

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
            Our partners work directly with clients
          </motion.h2>
          <motion.p className="text-cream/50 mb-8 font-sans" variants={fadeUp}>
            From first consultation through final resolution.
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
