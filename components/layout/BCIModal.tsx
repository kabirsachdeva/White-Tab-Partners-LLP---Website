"use client";
import { useEffect, useState } from "react";

export default function BCIModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const agreed = localStorage.getItem("wtp_bci_agreed");
      if (!agreed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAgree = () => {
    try {
      localStorage.setItem("wtp_bci_agreed", "1");
    } catch {}
    setVisible(false);
  };

  const handleLeave = () => {
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-dark-card border border-gold/20 rounded-2xl max-w-lg w-full p-10 shadow-2xl">
        {/* Logo mark */}
        <div className="mb-8">
          <p className="font-serif text-gold-light text-lg font-light tracking-wide">
            White Tab Partners LLP
          </p>
          <div className="w-8 h-px bg-gold/30 mt-3" />
        </div>

        <h2
          id="bci-modal-title"
          className="font-serif text-cream text-xl font-light leading-snug mb-6"
        >
          Disclaimer
        </h2>

        <div className="space-y-4 text-cream/60 text-sm font-sans leading-relaxed mb-8">
          <p>
            This website is not an advertisement or solicitation. The information
            provided here is solely for informational purposes and should not be
            construed as legal advice.
          </p>
          <p>
            By clicking &ldquo;I Agree&rdquo; below, you confirm that you are
            seeking information about White Tab Partners LLP on your own accord
            and that there has been no solicitation, advertisement, or inducement
            by the firm or its members.
          </p>
          <p>
            White Tab Partners LLP is regulated by the Bar Council of India and
            complies with the Advocates Act, 1961 and Bar Council of India Rules
            in all professional matters.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAgree}
            className="flex-1 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-6 py-3.5 rounded-full transition-colors"
          >
            I Agree &amp; Proceed
          </button>
          <button
            onClick={handleLeave}
            className="flex-1 border border-cream/20 hover:border-cream/40 text-cream/60 hover:text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-6 py-3.5 rounded-full transition-colors"
          >
            Leave Site
          </button>
        </div>
      </div>
    </div>
  );
}
