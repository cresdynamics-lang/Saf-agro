import Image from "next/image";
import Link from "next/link";
import { ENQUIRY_EMAIL, ENQUIRY_PHONE } from "@/lib/grade-specs";
import { products } from "@/lib/products";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Our Markets", href: "/#markets" },
  { label: "Partners", href: "/#partners" },
];

const serviceLinks = [
  { label: "Delivery", href: "/services" },
  { label: "Storage", href: "/services" },
  { label: "Exports", href: "/services" },
  { label: "Logistics", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 border-b border-white/10 pb-12">
          <Image
            src="/logo-transparent.png"
            alt="SAF Agro Products"
            width={320}
            height={96}
            className="mb-6 h-20 sm:h-24 w-auto brightness-0 invert"
          />
          <p className="text-sm tracking-widest text-secondary uppercase">
            Sourcing · Supply · Logistics · Exports
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
              Products
            </h3>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-secondary uppercase">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Nairobi Office</li>
              <li>
                <a
                  href={`mailto:${ENQUIRY_EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {ENQUIRY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {ENQUIRY_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>© 2026 SAF Agro Products (K) Ltd. All rights reserved.</p>
          <p className="mt-1">
            Registered in Kenya. Operating in Kenya · Tanzania · Mauritius · UK
          </p>
        </div>
      </div>
    </footer>
  );
}
