"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: "products",
    end: 6,
    suffix: "+",
    label: "Products",
    sub: "We Source",
    colorClass: "text-primary",
    textSizeClass: "text-4xl md:text-5xl lg:text-6xl",
    spanClass: "col-span-2 sm:col-span-1 lg:col-span-1",
  },
  {
    id: "markets",
    end: 4,
    suffix: "",
    label: "Markets",
    sub: "Served",
    colorClass: "text-primary",
    textSizeClass: "text-4xl md:text-5xl lg:text-6xl",
    spanClass: "col-span-2 sm:col-span-1 lg:col-span-1",
  },
  {
    id: "sizes",
    isRange: true,
    end1: 50,
    end2: 90,
    label: "Pack Sizes",
    sub: "Available",
    colorClass: "text-primary",
    textSizeClass: "text-3xl md:text-4xl lg:text-5xl",
    spanClass: "col-span-2 sm:col-span-2 lg:col-span-2",
  },
  {
    id: "capacity",
    end: 10000,
    suffix: "MT+",
    separator: ",",
    label: "Supply Capacity",
    sub: "Per Season",
    colorClass: "text-primary",
    textSizeClass: "text-3xl md:text-4xl lg:text-5xl",
    spanClass: "col-span-2 sm:col-span-2 lg:col-span-2",
  },
];

export default function StatsBar() {
  const fullTitle = "SAF Agro in numbers!";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let currentLength = 0;
    const typingInterval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, currentLength));
      currentLength++;
      if (currentLength > fullTitle.length) {
        clearInterval(typingInterval);
      }
    }, 120); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative z-30 bg-light-grey pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Typing Animation Title sitting right below the intersection curve */}
        <div className="mb-14 flex justify-center text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-brand-black md:text-5xl lg:text-6xl">
            {typedTitle.split("").map((char, index) => (
              char === "!" ? <span key={index} className="text-primary">{char}</span> : char
            ))}
            <span className="animate-pulse text-primary font-light">|</span>
          </h2>
        </div>

        {/* 6-column grid layout to allow specific cards to stretch wider */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-lg border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-xl ${stat.spanClass}`}
            >
              <div className={`font-black tracking-tight ${stat.textSizeClass} ${stat.colorClass} whitespace-nowrap`}>
                {stat.isRange ? (
                  <>
                    <CountUp end={stat.end1 || 0} duration={2.5} enableScrollSpy scrollSpyOnce />KG–<CountUp end={stat.end2 || 0} duration={2.5} enableScrollSpy scrollSpyOnce />KG
                  </>
                ) : (
                  <CountUp 
                    end={stat.end || 0} 
                    duration={2.5} 
                    suffix={stat.suffix} 
                    separator={stat.separator || ""} 
                    enableScrollSpy 
                    scrollSpyOnce 
                  />
                )}
              </div>
              <p className="mt-4 text-sm font-bold tracking-widest text-brand-black uppercase">
                {stat.label}
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-secondary uppercase">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
