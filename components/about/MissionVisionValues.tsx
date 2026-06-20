import ScrollReveal from "@/components/ui/ScrollReveal";
import { Target01Icon, ViewIcon, Diamond01Icon } from "hugeicons-react";

const pillars = [
  {
    title: "Our Mission",
    icon: Target01Icon,
    content:
      "To source, grade, and supply premium agricultural commodities reliably to buyers across Africa and beyond.",
  },
  {
    title: "Our Vision",
    icon: ViewIcon,
    content:
      "To be East Africa's most trusted agro-commodity partner for international trade and local supply chains.",
  },
  {
    title: "Our Values",
    icon: Diamond01Icon,
    content: "Quality. Reliability. Transparency. Precision. Scale.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} animation="fade-up" delay={index * 0.1}>
              <article className="group relative flex h-full flex-col items-center justify-center rounded-[24px] bg-[#111] p-10 text-center shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(55,247,19,0.15)] overflow-hidden">
                {/* Subtle background glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#37F713] opacity-[0.03] blur-[60px] transition-opacity group-hover:opacity-[0.08]"></div>
                
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0e2417] text-[#37F713] shadow-[0_0_15px_rgba(55,247,19,0.2)] border border-[#37F713]/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(55,247,19,0.4)]">
                  <pillar.icon size={36} className="drop-shadow-[0_0_8px_rgba(55,247,19,0.8)]" />
                </div>
                
                <h3 className="mb-4 text-xl font-black tracking-widest text-white uppercase">
                  {pillar.title}
                </h3>
                
                <p className="text-base font-medium leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {pillar.content}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
