import Link from "next/link";

const pillars = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Sourcing & Grading",
    description:
      "We source premium cereals directly from verified farms across East Africa, graded to your specification.",
    href: "/how-we-work",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Logistics & Delivery",
    description:
      "From our Nairobi warehouse to your door — or port. Nationwide delivery and international freight handled.",
    href: "/services",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Storage & Exports",
    description:
      "Secure warehouse facilities and full export documentation for international shipments.",
    href: "/services",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <h2 className="section-heading mb-4">
            Precision Sourcing. Reliable Supply. Global Reach.
          </h2>
          <p className="text-lg leading-relaxed text-secondary">
            SAF Agro bridges the gap between quality African agricultural
            commodities and international buyers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border-l-4 border-accent bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-primary">{pillar.icon}</div>
              <h3 className="mb-3 text-sm font-bold tracking-widest text-brand-black uppercase">
                {pillar.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-secondary">
                {pillar.description}
              </p>
              <Link href={pillar.href} className="link-arrow">
                Learn More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
