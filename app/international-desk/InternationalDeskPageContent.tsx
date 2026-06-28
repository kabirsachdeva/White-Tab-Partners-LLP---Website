"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { internationalServices } from "@/lib/data";
import { fadeUp, fadeLeft, stagger, viewport } from "@/lib/animations";

export default function InternationalDeskPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_50%,rgba(139,105,20,0.1),transparent)]" />
        <motion.div
          className="max-w-8xl mx-auto px-6 lg:px-12 relative"
          variants={stagger(0.13)}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl">
            <motion.p className="section-label mb-8" variants={fadeUp}>International Desk</motion.p>
            <motion.h1 className="font-serif text-display-lg text-cream font-light leading-tight mb-4" variants={fadeUp}>
              Cross<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>border legal support.
            </motion.h1>
            <motion.h2 className="font-serif text-display-sm text-gold-light font-light mb-8" variants={fadeUp}>
              From Jumeirah Lake Towers, Dubai.
            </motion.h2>
            <motion.p className="text-cream/55 text-lg leading-relaxed font-sans mb-4" variants={fadeUp}>
              Boutique. Senior-led. Across jurisdictions.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="bg-cream-light py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
              <p className="section-label mb-8" style={{ color: "#8B6914" }}>Our Dubai Presence</p>
              <motion.div
                className="space-y-5 text-dark/70 text-base leading-relaxed font-sans text-justify"
                variants={stagger(0.13)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {[
                  "White Tab Partners is a boutique law firm. Our Dubai office at HDS Tower, Jumeirah Lake Towers, handles matters involving India, the UAE, and other regions. We collaborate with legal correspondents across multiple jurisdictions and have coordinated proceedings spanning India, the UAE, Singapore, and Croatia.",
                  "Because we are a boutique practice, every international matter is handled directly by a senior partner, not delegated to associates or managed at arm’s length. Clients receive focused, personalised attention from the first instruction through execution.",
                  "We bring the same rigour to cross-border work that we bring to every matter, with the added advantage of lawyers who understand multiple systems, cultures, and commercial environments.",
                ].map((p, i) => (
                  <motion.p key={i} variants={fadeUp}>{p}</motion.p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="dark-card p-8 bg-dark text-cream"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="section-label mb-6">Office Details</p>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-cream/40 font-sans mb-1">Address</p>
                  <p className="text-cream/80 text-sm font-sans">HDS Tower, Cluster F, JLT<br />Office No. 3601, Dubai, UAE</p>
                </div>
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-cream/40 font-sans mb-1">Jurisdictions Covered</p>
                  <p className="text-cream/80 text-sm font-sans">India · UAE · Singapore · Croatia · Multiple International</p>
                </div>
                <div className="border-t border-gold/10 pt-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-cream/40 font-sans mb-1">Practice Style</p>
                  <p className="text-cream/80 text-sm font-sans">Boutique · Partner-led · Senior oversight on every matter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="section-label mb-4" variants={fadeUp}>Services from Dubai</motion.p>
            <motion.p className="text-cream/50 text-sm font-sans mb-12 max-w-xl" variants={fadeUp}>
              All services are delivered directly by a senior partner. We do not hand off international instructions to juniors.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {internationalServices.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeUp}
                className="dark-card p-8 hover:border-gold/30 transition-colors"
              >
                <div className="w-8 h-px bg-gold mb-6" />
                <h3 className="font-serif text-xl text-cream font-light mb-4">{svc.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed font-sans text-justify">{svc.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-cream-light py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-12 text-center"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.blockquote
            className="font-serif text-2xl md:text-3xl text-dark font-light leading-relaxed mb-10"
            variants={fadeUp}
          >
            &ldquo;Every international matter is handled with the same rigour we
            bring to every matter, with the added advantage of lawyers who
            understand both systems, both cultures, and both markets.&rdquo;
          </motion.blockquote>
          <motion.div variants={fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors">
              Discuss Your International Matter →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
