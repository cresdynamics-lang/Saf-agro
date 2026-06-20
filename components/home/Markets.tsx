"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const markets = [
  {
    code: "ke",
    country: "Kenya",
    badge: "HEADQUARTERS",
    role: "NAIROBI HQ",
    detail: "Primary operations base. Warehouse & logistics hub serving the entire network.",
  },
  {
    code: "tz",
    country: "Tanzania",
    badge: null,
    role: "EAST AFRICA",
    detail: "Sourcing & supply operations across the East African corridor.",
  },
  {
    code: "mu",
    country: "Mauritius",
    badge: null,
    role: "INDIAN OCEAN",
    detail: "Strategic import partner network for Indian Ocean island markets.",
  },
  {
    code: "gb",
    country: "United Kingdom",
    badge: null,
    role: "EUROPEAN MARKETS",
    detail: "Trade & export relationships connecting African supply to European demand.",
  },
];

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            
            // Ease out cubic function for smoother ending
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOutProgress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl font-black text-[#111]">
      {count}
      {suffix}
    </div>
  );
}

export default function Markets() {
  return (
    <section id="markets" className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="mb-4 text-5xl font-black lowercase tracking-tight text-[#111] sm:text-6xl lg:text-7xl whitespace-nowrap">
            Our Operational Footprint
          </h2>
          <p className="text-3xl font-bold text-[#111] sm:text-4xl whitespace-nowrap">
            Four countries. <span className="text-[#326949]">One reliable network.</span>
          </p>
        </div>
        </ScrollReveal>

        {/* Markets Grid */}
        <ScrollReveal animation="fade-up" delay={0.2}>
        <div className="mb-12 grid grid-cols-1 border border-gray-200 bg-white shadow-sm md:grid-cols-4">
          {markets.map((m, i) => (
            <article
              key={m.country}
              className={`relative flex flex-col p-10 transition-all hover:bg-gray-50 lg:p-12 ${
                i !== markets.length - 1 ? "border-b border-gray-200 md:border-b-0 md:border-r" : ""
              }`}
            >
              {m.badge && (
                <div className="absolute right-0 top-0 bg-[#37F713] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#111] shadow-sm">
                  {m.badge}
                </div>
              )}
              
              <div className="mb-8 select-none text-7xl lg:text-8xl" aria-hidden>
                <span className={`fi fi-${m.code} rounded-sm shadow-sm`}></span>
              </div>
              
              <h3 className="mb-4 text-3xl font-black text-[#111]">
                {m.country}
              </h3>
              
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#326949]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#37F713]"></span>
                {m.role}
              </div>
              
              <p className="text-base leading-relaxed text-gray-600">
                {m.detail}
              </p>
            </article>
          ))}
        </div>
        </ScrollReveal>

        {/* Green Footer Banner */}
        <ScrollReveal animation="scale-up" delay={0.3}>
        <div className="flex flex-col items-center justify-between gap-10 rounded-[15px] bg-[#37F713] p-10 shadow-lg lg:flex-row lg:p-14">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="mb-2 text-2xl font-black text-[#111] sm:text-3xl">
              Sourcing at scale across continents.
            </h3>
            <p className="text-base font-medium text-black/70">
              Every market. One point of contact.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <div className="text-center w-24">
              <AnimatedCounter end={3} />
              <p className="text-xs font-bold uppercase tracking-widest text-[#111]/70">Continents</p>
            </div>
            <div className="text-center w-24">
              <AnimatedCounter end={24} suffix="h" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#111]/70">Response</p>
            </div>
            <div className="text-center w-24">
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#111]/70">Traceable</p>
            </div>
          </div>
          
          <div className="flex flex-1 justify-center lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-[15px] bg-[#111] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-[#111] hover:shadow-[0_0_20px_rgba(17,17,17,0.3)] sm:w-auto"
            >
              SOURCE WITH US
            </Link>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
