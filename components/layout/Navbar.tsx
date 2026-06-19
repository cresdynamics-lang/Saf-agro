"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src="/logo-transparent.png"
            alt="SAF Agro Products"
            width={320}
            height={96}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-10 sm:h-12" : "h-20 sm:h-24"
            }`}
            priority
          />
        </Link>

        <nav
          className={`hidden items-center gap-8 lg:flex mix-blend-difference transition-all duration-300 ${
            scrolled
              ? "pointer-events-none -translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold tracking-wide uppercase text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Request a Quote →
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden mix-blend-difference text-white"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 lg:hidden">
          <nav className="flex flex-col gap-1 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-light-grey py-4 text-sm font-semibold tracking-wide text-brand-black uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-6 justify-center"
            >
              Request a Quote →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
