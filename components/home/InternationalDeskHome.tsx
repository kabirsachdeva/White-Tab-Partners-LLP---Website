"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function InternationalDeskHome() {
  return (
    <section className="bg-dark py-24 relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          className="max-w-2xl"
          variants={stagger(0.13)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="section-label mb-8" variants={fadeUp}>
            International Desk
          </motion.p>
          <motion.h2
            className="font-serif text-display-md text-cream font-light leading-tight mb-4"
            variants={fadeUp}
          >
            Cross<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>border legal support.
          </motion.h2>
          <motion.h3
            className="font-serif text-display-sm text-gold-light font-light mb-8"
            variants={fadeUp}
          >
            From Jumeirah Lake Towers, Dubai.
          </motion.h3>
          <motion.p
            className="text-cream/60 text-base leading-relaxed font-sans mb-10"
            variants={fadeUp}
          >
            Our Dubai office supports clients on cross-border legal and advisory
            matters involving India, the UAE, and other jurisdictions. We work
            with trusted legal correspondents across multiple jurisdictions to
            coordinate cross-border matters seamlessly.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/international-desk"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-7 py-3.5 rounded-full transition-colors"
            >
              Explore International Services →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
