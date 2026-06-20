"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const steps = [
  {
    badge: "START HERE",
    title: "Enquiry",
    desc: "Share your requirements with our team.",
    num: "01",
  },
  {
    badge: "STEP 2",
    title: "Sourcing & Grading",
    desc: "We locate and grade stock to spec.",
    num: "02",
  },
  {
    badge: "STEP 3",
    title: "Packing & Quality QC",
    desc: "Every order is packed and verified.",
    num: "03",
  },
  {
    badge: "FINAL",
    title: "Delivery or Collection",
    desc: "Choose your preferred fulfilment method.",
    num: "04",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black tracking-tight text-[#111] sm:text-6xl lg:text-7xl whitespace-nowrap">
            From enquiry to <span className="text-[#326949]">delivery.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 border border-gray-200 bg-white md:grid-cols-4 shadow-sm">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={step.num}
                className={`relative flex h-[320px] flex-col justify-between border-b border-gray-100 p-8 transition-all duration-500 ease-in-out md:border-b-0 md:border-r last:border-r-0 sm:p-10 ${
                  isActive
                    ? "z-10 scale-[1.02] bg-[#111513] text-white shadow-2xl"
                    : "bg-white text-brand-black hover:bg-gray-50 cursor-pointer"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Active arrow indicator pointing right */}
                {isActive && index !== steps.length - 1 && (
                  <div className="absolute -right-[20px] top-1/2 z-20 hidden -translate-y-1/2 border-b-[20px] border-l-[20px] border-t-[20px] border-b-transparent border-l-[#111513] border-t-transparent md:block" />
                )}

                <div className="relative z-10">
                  {/* Badge */}
                  <span
                    className={`mb-6 inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                      isActive
                        ? "bg-[#1B3B2B] text-[#37F713]"
                        : "bg-[#EAEFEA] text-[#5A876A]"
                    }`}
                  >
                    {step.badge}
                  </span>

                  {/* Title & Desc */}
                  <h3
                    className={`mb-4 text-3xl font-bold ${
                      isActive ? "text-white" : "text-[#111]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      isActive ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Giant Background Number */}
                <div
                  className={`absolute bottom-4 right-6 text-7xl font-black transition-colors duration-500 ${
                    isActive ? "text-[#172D21]" : "text-[#EFEFEF]"
                  }`}
                >
                  {step.num}
                </div>
                
                {/* Green top accent line for active card */}
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#326949]" />
                )}
              </div>
            );
          })}
        </div>

        {/* View Full Process Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/how-we-work"
            className="group inline-flex items-center gap-3 rounded-[15px] bg-[#111] px-10 py-5 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#37F713] hover:text-[#111] hover:shadow-[0_0_20px_rgba(55,247,19,0.5)]"
          >
            SEE FULL PROCESS{" "}
            <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
