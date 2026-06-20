import ScrollReveal from "@/components/ui/ScrollReveal";
import { OrganicFoodIcon, CheckmarkBadge01Icon, GlobalIcon, DeliveryTruck02Icon } from "hugeicons-react";

const features = [
  {
    icon: OrganicFoodIcon,
    title: "Direct Sourcing",
    description:
      "We work directly with farmers and cooperatives — ensuring quality at the source without middleman markups.",
  },
  {
    icon: CheckmarkBadge01Icon,
    title: "Quality Grading",
    description:
      "Every product is independently graded, tested for moisture and aflatoxins, and documented before it leaves our facility.",
  },
  {
    icon: GlobalIcon,
    title: "International Reach",
    description:
      "We operate seamlessly across Kenya, Tanzania, Mauritius, and the United Kingdom, strictly adhering to global commodity standards.",
  },
  {
    icon: DeliveryTruck02Icon,
    title: "Full Chain Coverage",
    description:
      "From farm gate to warehouse to your final destination — we handle logistics, export documentation, and every step in between.",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl lg:text-6xl">
              What Sets Us <span className="text-[#326949]">Apart</span>
            </h2>
            <p className="max-w-2xl text-lg font-medium text-gray-600">
              We aren't just another supplier. We are an integrated logistics and sourcing powerhouse built on reliability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} animation="fade-up" delay={index * 0.1}>
              <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-[24px] border border-gray-100 bg-[#FAF9F6] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#37F713]/30 hover:shadow-xl sm:flex-row sm:items-start lg:p-10">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-[#37F713] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(55,247,19,0.4)]">
                  <feature.icon size={36} variant="solid" className="drop-shadow-[0_0_8px_rgba(55,247,19,0.8)]" />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-black uppercase tracking-widest text-[#111]">
                    {feature.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
