"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <motion.div
          className="bg-dark-card border border-gold/15 rounded-2xl px-8 md:px-16 py-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
        >
          <motion.div
            variants={stagger(0.13)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2
              className="font-serif text-display-sm text-cream font-light mb-4"
              variants={fadeUp}
            >
              Ready to discuss your matter
            </motion.h2>
            <motion.p
              className="text-cream/55 text-base leading-relaxed font-sans mb-10 max-w-xl mx-auto"
              variants={fadeUp}
            >
              Schedule a confidential consultation with our partners in New Delhi
              or Dubai. Meetings can be arranged in person, by phone, or over
              video.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-8 py-4 rounded-full transition-colors"
              >
                Contact Us →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
