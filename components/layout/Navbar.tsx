"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/20"
          : "bg-dark border-b border-gold/10"
      )}
    >
      <nav className="max-w-8xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span
            className="font-serif text-xl font-medium tracking-[0.12em] text-cream uppercase leading-tight group-hover:text-gold-pale transition-colors"
          >
            White Tab Partners
          </span>
          <span className="text-[9px] tracking-[0.22em] text-gold/70 uppercase font-sans">
            Advocates, Solicitors &amp; Legal Consultants
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-[11px] tracking-[0.15em] uppercase font-sans font-medium transition-colors",
                pathname === link.href
                  ? "text-gold-light"
                  : "text-cream/70 hover:text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cream text-[11px] tracking-[0.15em] uppercase font-sans font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Book Consultation
          </Link>
          <button
            className="lg:hidden text-cream/70 hover:text-cream transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-secondary border-t border-gold/10">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm tracking-[0.1em] uppercase font-sans py-3 border-b border-gold/10 transition-colors",
                  pathname === link.href
                    ? "text-gold-light"
                    : "text-cream/70 hover:text-cream"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 text-center bg-gold hover:bg-gold-light text-cream text-sm tracking-[0.12em] uppercase font-sans font-medium px-5 py-3 rounded-full transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
