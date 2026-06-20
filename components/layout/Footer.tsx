"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ENQUIRY_EMAIL, ENQUIRY_PHONE } from "@/lib/grade-specs";
import { products } from "@/lib/products";
import { Truck, Warehouse, Ship, Route } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Our Markets", href: "/#markets" },
  { label: "Partners", href: "/#partners" },
];

const serviceLinks = [
  { label: "Delivery", href: "/services", icon: Truck },
  { label: "Storage", href: "/services", icon: Warehouse },
  { label: "Exports", href: "/services", icon: Ship },
  { label: "Logistics", href: "/services", icon: Route },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { subscribeNewsletter } = await import("@/app/actions/contact");
      const res = await subscribeNewsletter(email);

      if (res.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setError(res.error || "Failed to subscribe.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#05060A] text-white">
      <div className="mx-auto max-w-[90rem] px-6 py-12 lg:px-12 lg:py-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-center">
          <div>
            <Image
              src="/logo-transparent.png"
              alt="SAF Agro Products"
              width={320}
              height={96}
              className="mb-6 h-20 w-auto brightness-0 invert sm:h-28"
            />
            <div className="flex animate-pulse flex-wrap items-center gap-3 text-sm font-bold lowercase tracking-[0.2em] text-[#37F713]">
            <span>sourcing</span>
            <span className="opacity-60">-</span>
            <span>supply</span>
            <span className="opacity-60">-</span>
            <span>logistics</span>
            <span className="opacity-60">-</span>
            <span>exports</span>
          </div>
          </div>

          <div className="w-full lg:max-w-md">
            <h3 className="mb-2 text-xl font-black text-white">Subscribe to our newsletter</h3>
            <p className="mb-5 text-sm font-medium leading-relaxed text-gray-300">
              Get monthly market updates, commodity pricing alerts, and exclusive insights on global agro-logistics and supply chains.
            </p>
            {submitted ? (
              <div className="rounded-[10px] border border-[#37F713]/30 bg-[#37F713]/10 px-5 py-4 text-sm font-bold text-[#37F713]">
                Thank you! You've been subscribed to our newsletter.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <div className="flex w-full overflow-hidden rounded-[10px] border border-white/20 focus-within:border-[#37F713]/50 transition-all">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-400 outline-none transition-colors focus:bg-[#222]"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#37F713] px-8 py-4 font-black uppercase tracking-widest text-black transition-colors hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? "..." : "Sign Up"}
                  </button>
                </div>
                {error && <span className="text-xs text-red-400 font-medium ml-1">{error}</span>}
              </form>
            )}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 text-lg font-black uppercase tracking-widest text-white">
              Products
            </h3>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-base font-medium text-gray-200 transition-colors hover:text-[#37F713]"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-black uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-gray-200 transition-colors hover:text-[#37F713]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-black uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-base font-medium text-gray-200 transition-colors hover:text-[#37F713]"
                    >
                      <Icon size={18} className="text-[#37F713] transition-transform group-hover:scale-110" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-black uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-base font-medium text-gray-200">
              <li className="text-white">Nairobi Office</li>
              <li>
                <a
                  href={`mailto:${ENQUIRY_EMAIL}`}
                  className="transition-colors hover:text-[#37F713]"
                >
                  {ENQUIRY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[#37F713]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-[#37F713] hover:text-black">
                  {/* Facebook SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-[#37F713] hover:text-black">
                  {/* Instagram SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm font-bold uppercase tracking-wide text-gray-400">
          <p>© 2026 SAF Agro Products (K) Ltd. All rights reserved.</p>
          <p className="mt-2">
            Registered in Kenya. Operating in Kenya · Tanzania · Mauritius · UK
          </p>
        </div>
      </div>
    </footer>
  );
}
