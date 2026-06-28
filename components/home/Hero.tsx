"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-dark">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,105,20,0.12),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,237,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,237,216,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center"
          variants={stagger(0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="font-serif mb-6 mt-4" variants={fadeUp}>
            <span className="block text-[clamp(3.5rem,7vw,6rem)] leading-[1.0] font-light text-gold-light">
              Craft. Clarity.
            </span>
            <span className="block text-[clamp(3.5rem,7vw,6rem)] leading-[1.05] font-light text-cream">
              Commitment.
            </span>
          </motion.h1>

          <motion.p
            className="text-cream/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-sans font-light"
            variants={fadeUp}
          >
            An Indian law firm with offices in New Delhi and Dubai. Built for
            disputes, investigations, and cross-border matters that demand more
            than routine legal work.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUp}
          >
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
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-sans">Scroll to Enter</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
        </motion.div>
      </section>

      {/* Brand Film — full-width banner */}
      <div className="w-full bg-dark overflow-hidden">
        <video
          src="/videos/firm-intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto block"
        />
      </div>
    </>
  );
}
