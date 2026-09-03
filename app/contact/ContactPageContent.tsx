"use client";
import ContactForm from "@/components/contact/ContactForm";
import { firmData, offices } from "@/lib/data";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, stagger, viewport } from "@/lib/animations";

export default function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,105,20,0.1),transparent)]" />
        <motion.div
          className="max-w-8xl mx-auto px-6 lg:px-12 relative"
          variants={stagger(0.13)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-label mb-8" variants={fadeUp}>Book a Consultation</motion.p>
          <motion.h1 className="font-serif text-display-lg text-cream font-light max-w-2xl leading-tight mb-6" variants={fadeUp}>
            Ready to discuss
            <span className="text-gold-light"> your matter.</span>
          </motion.h1>
          <motion.p className="text-cream/55 text-lg leading-relaxed max-w-xl font-sans" variants={fadeUp}>
            Schedule a confidential consultation with our partners in New Delhi
            or Dubai. Meetings can be arranged in person, by phone, or over video.
          </motion.p>
        </motion.div>
      </section>

      {/* Form + Details */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-3"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              className="lg:col-span-2 space-y-10"
              variants={stagger(0.13)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {offices.map((office) => (
                <motion.div key={office.city} variants={fadeUp}>
                  <p className="section-label mb-5" style={{ color: "#8B6914" }}>{office.city}</p>
                  {office.addresses.map((addr, i) => (
                    <p key={i} className="text-dark/65 text-sm font-sans leading-relaxed whitespace-pre-line mb-3">
                      {addr}
                    </p>
                  ))}
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <p className="section-label mb-5" style={{ color: "#8B6914" }}>Contact</p>
                <div className="space-y-3">
                  <a href={`mailto:${firmData.email}`} className="flex items-center gap-2 text-dark/65 hover:text-dark text-sm font-sans transition-colors">
                    <Mail size={14} className="text-gold/70" />
                    {firmData.email}
                  </a>
                  {firmData.phones.map((p) => (
                    <a key={p} href={`tel:${p}`} className="flex items-center gap-2 text-dark/65 hover:text-dark text-sm font-sans transition-colors">
                      <Phone size={14} className="text-gold/70" />
                      {p}
                    </a>
                  ))}
                  <a href={firmData.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-dark/65 hover:text-dark text-sm font-sans transition-colors">
                    WhatsApp ↗
                  </a>
                </div>
              </motion.div>

              <motion.div className="border border-gold/20 rounded-xl p-6" variants={fadeUp}>
                <p className="text-dark/60 text-sm font-sans leading-relaxed text-justify">
                  All consultations are confidential. Our partners handle every
                  enquiry personally. You will not be passed to a junior
                  associate or a paralegal.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
