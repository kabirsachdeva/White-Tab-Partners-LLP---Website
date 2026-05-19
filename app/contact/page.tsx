import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { firmData, offices } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Consultation",
  description:
    "Schedule a confidential consultation with White Tab Partners. Meetings can be arranged in person in New Delhi or Dubai, by phone, or over video.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,105,20,0.1),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">Book a Consultation</p>
          <h1 className="font-serif text-display-lg text-cream font-light max-w-2xl leading-tight mb-6">
            Ready to discuss
            <span className="text-gold-light"> your matter.</span>
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl font-sans">
            Schedule a confidential consultation with our partners in New Delhi
            or Dubai. Meetings can be arranged in person, by phone, or over
            video.
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="bg-cream-light py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Offices */}
              {offices.map((office) => (
                <div key={office.city}>
                  <p className="section-label mb-5" style={{ color: "#8B6914" }}>
                    {office.city}
                  </p>
                  {office.addresses.map((addr, i) => (
                    <p
                      key={i}
                      className="text-dark/65 text-sm font-sans leading-relaxed whitespace-pre-line mb-3"
                    >
                      {addr}
                    </p>
                  ))}
                </div>
              ))}

              {/* Contact details */}
              <div>
                <p className="section-label mb-5" style={{ color: "#8B6914" }}>
                  Contact
                </p>
                <div className="space-y-3">
                  <a
                    href={`mailto:${firmData.email}`}
                    className="flex items-center gap-2 text-dark/65 hover:text-dark text-sm font-sans transition-colors"
                  >
                    <Mail size={14} className="text-gold/70" />
                    {firmData.email}
                  </a>
                  {firmData.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p}`}
                      className="flex items-center gap-2 text-dark/65 hover:text-dark text-sm font-sans transition-colors"
                    >
                      <Phone size={14} className="text-gold/70" />
                      {p}
                    </a>
                  ))}
                  <a
                    href={firmData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-dark/65 hover:text-dark text-sm font-sans transition-colors"
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>

              {/* Note */}
              <div className="border border-gold/20 rounded-xl p-6">
                <p className="text-dark/60 text-sm font-sans leading-relaxed">
                  All consultations are confidential. Our partners handle every
                  enquiry personally. You will not be passed to a junior
                  associate or a paralegal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
