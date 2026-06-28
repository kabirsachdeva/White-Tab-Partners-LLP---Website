"use client";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, stagger, viewport } from "@/lib/animations";

export default function FirmOverview() {
  return (
    <section className="bg-cream-light py-24">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="section-label mb-8" style={{ color: "#8B6914" }}>
              Firm Overview
            </p>
            <blockquote className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-dark leading-[1.3] font-light">
              The white tab finds its origin in the Tablets of Moses, a timeless
              symbol of integrity, moral conviction, and the foundations of law.
              We chose it as our name because it captures what we believe
              lawyering should stand for: trust earned through principle, and
              counsel given with clarity. At White Tab Partners, every client
              matter is approached with the same conviction. Your interests are
              protected with diligence, your confidence honoured without
              exception. With us, you do not just retain a firm. You gain a
              partner you can rely on, a White Tab Partner.
            </blockquote>
          </motion.div>

          <motion.div
            className="space-y-6 text-dark/70 text-base leading-relaxed font-sans"
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p variants={fadeUp}>
              White Tab Partners LLP is a full-service law firm with experience
              in litigation, arbitration, corporate advisory, and forensic
              matters. We advise clients in complex disputes, commercial matters,
              and cross-border work from our offices in New Delhi and Dubai.
            </motion.p>
            <motion.p variants={fadeUp}>
              Our practice includes appearances before the Supreme Court of
              India, the Delhi High Court, district courts, and specialist
              tribunals such as the DRT and consumer forums. We also advise on
              international matters, including arbitration and cross-border
              transactions.
            </motion.p>
            <motion.p variants={fadeUp}>
              We work with associated Chartered Accountants, Company Secretaries,
              and forensic professionals where a matter demands it, bringing
              stronger factual and commercial depth to disputes, investigations,
              and recovery work.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
