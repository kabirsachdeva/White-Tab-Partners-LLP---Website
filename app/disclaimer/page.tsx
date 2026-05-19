import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal disclaimer for White Tab Partners LLP in accordance with the Bar Council of India Rules.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-dark pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_30%,rgba(139,105,20,0.06),transparent)]" />
        <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
          <p className="section-label mb-8">Legal Notice</p>
          <h1 className="font-serif text-display-md text-cream font-light max-w-2xl leading-tight">
            Disclaimer
          </h1>
        </div>
      </section>

      <section className="bg-cream-light py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="space-y-10 text-dark/70 text-base leading-relaxed font-sans">

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                Bar Council of India Compliance
              </h2>
              <p>
                As per the rules of the Bar Council of India, advocates are not
                permitted to solicit work or advertise in any form or manner. By
                accessing this website, you acknowledge and confirm that you are
                seeking information relating to White Tab Partners LLP of your
                own accord and that there has been no form of solicitation,
                advertisement, or inducement by the firm or its members.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                No Solicitation
              </h2>
              <p>
                The content of this website is provided for informational
                purposes only and should not be construed as solicitation or
                advertisement. Nothing on this website is intended to constitute
                legal advice, and no attorney-client relationship is created by
                accessing or using this website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                No Legal Advice
              </h2>
              <p>
                The information on this website is provided on an &ldquo;as
                is&rdquo; basis, without warranty of any kind. It is general in
                nature and may not reflect the most current legal developments.
                You should not act upon this information without seeking
                independent legal advice tailored to your specific circumstances.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                Jurisdiction
              </h2>
              <p>
                White Tab Partners LLP is a law firm registered and operating
                under the laws of India. Our advocates are enrolled with the Bar
                Council of Delhi and are authorised to practise in India. Any
                reference to international work or services from our Dubai office
                should be understood in the context of advisory and coordination
                services, subject to the applicable laws of each jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                Confidentiality
              </h2>
              <p>
                Any communication sent to this firm through this website does not
                create an attorney-client relationship. Do not send any
                confidential information to us until such time as an
                attorney-client relationship has been established through a formal
                engagement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                External Links
              </h2>
              <p>
                This website may contain links to third-party websites for
                informational purposes. White Tab Partners LLP does not endorse
                or take responsibility for the content, privacy practices, or
                accuracy of those websites.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dark font-medium mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website, including text, design, and
                structure, is the intellectual property of White Tab Partners LLP
                and may not be reproduced, distributed, or used without prior
                written consent.
              </p>
            </div>

            <div className="border-t border-dark/10 pt-8">
              <p className="text-dark/50 text-sm">
                By continuing to use this website, you agree to the terms set out
                in this disclaimer. If you have any questions, please{" "}
                <Link
                  href="/contact"
                  className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
                >
                  contact us directly
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
