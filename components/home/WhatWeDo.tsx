"use client";

import Link from "next/link";
import { Sun, Truck, Warehouse } from "lucide-react";

const pillars = [
  {
    step: "01 / SOURCE",
    icon: <Sun size={48} color="#37F713" strokeWidth={1.5} />,
    title: "SOURCING & GRADING",
    description:
      "We source premium cereals directly from verified farms across East Africa, graded to your specification.",
    href: "/how-we-work",
  },
  {
    step: "02 / MOVE",
    icon: <Truck size={48} color="#C9A227" strokeWidth={1.5} />,
    title: "LOGISTICS & DELIVERY",
    description:
      "From our Nairobi warehouse to your door — or port. Nationwide delivery and international freight handled.",
    href: "/services",
  },
  {
    step: "03 / DELIVER",
    icon: <Warehouse size={48} color="purple" strokeWidth={1.5} />,
    title: "STORAGE & EXPORTS",
    description:
      "Secure warehouse facilities and full export documentation for international shipments.",
    href: "/services",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-light-grey py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 bg-[#FAF9F6]">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group flex flex-col p-10 sm:p-14 transition-colors duration-300 hover:bg-white ${
                index !== pillars.length - 1 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""
              }`}
            >
              <div className="mb-12 text-xs font-bold tracking-widest text-[#C9A227] uppercase">
                {pillar.step}
              </div>
              
              <div className="mb-8">{pillar.icon}</div>
              
              <h3 className="mb-6 text-sm font-bold tracking-widest text-brand-black uppercase">
                {pillar.title}
              </h3>
              
              <p className="mb-12 flex-1 text-sm leading-relaxed text-secondary">
                {pillar.description}
              </p>
              
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-black uppercase transition-colors hover:text-primary"
              >
                LEARN MORE <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
