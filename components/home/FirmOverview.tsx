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
              across litigation, arbitration, corporate advisory, and forensic
              matters. We advise clients in complex disputes, commercial
              transactions, and cross-border engagements from our offices in New
              Delhi and Dubai, supported by a dedicated India-UAE international
              desk.
            </motion.p>
            <motion.p variants={fadeUp}>
              Our litigation practice spans the full hierarchy of Indian courts
              and tribunals. We appear before the Supreme Court of India,
              including before Constitution Benches, and before the Delhi High
              Court and other High Courts across the country. We act in matters
              before district and subordinate courts and before specialist forums
              including the National Company Law Tribunal (NCLT) and the National
              Company Law Appellate Tribunal (NCLAT), the Debt Recovery Tribunal
              (DRT), and consumer forums. Our disputes work covers civil and
              commercial litigation, insolvency and company-law proceedings,
              criminal matters under the Negotiable Instruments Act, and recovery
              actions.
            </motion.p>
            <motion.p variants={fadeUp}>
              On the advisory side, we handle domestic and international
              arbitration, corporate and commercial advisory, contract drafting
              and vetting, and transactional work, including cross-border
              arrangements. Members of the firm hold senior counsel appointments
              for the Government of India and bring experience drawn from
              regulatory and enforcement practice.
            </motion.p>
            <motion.p variants={fadeUp}>
              Where a matter demands it, we work alongside associated Chartered
              Accountants, Company Secretaries, and forensic professionals,
              bringing stronger factual, financial, and commercial depth to
              disputes, investigations, and recovery work.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
