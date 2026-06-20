import ScrollReveal from "@/components/ui/ScrollReveal";
import { UserCheck01Icon, DocumentValidationIcon, HonourStarIcon, DeliveryTruck01Icon } from "hugeicons-react";

const differentiators = [
  {
    title: "No Middlemen",
    description: "We source direct — better quality and better pricing.",
    Icon: UserCheck01Icon,
  },
  {
    title: "Documented Every Step",
    description: "Every order generates a complete paper trail for your records.",
    Icon: DocumentValidationIcon,
  },
  {
    title: "Consistent Quality",
    description: "Same grading standards — every batch, every time.",
    Icon: HonourStarIcon,
  },
  {
    title: "Flexible Delivery",
    description: "Pickup, local delivery, or international export — your call.",
    Icon: DeliveryTruck01Icon,
  },
];

export default function ProcessDifferent() {
  return (
    <section className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black lowercase tracking-tight text-[#111]">
            What makes our process <span className="text-[#326949]">different</span>
          </h2>
        </div>
        </ScrollReveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 0.2}>
            <article className="group relative rounded-[20px] border border-gray-100 bg-white px-8 pb-10 pt-16 shadow-md transition-all duration-300 hover:border-[#37F713]/50 hover:shadow-[0_0_30px_rgba(55,247,19,0.15)] h-full flex flex-col items-center text-center">
              {/* Badge (starts dark, bright on hover) */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 bg-white">
                <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="absolute inset-0 -skew-x-12 transform bg-[#111] transition-colors duration-300 group-hover:bg-[#37F713]"></span>
                  <span className="relative z-10 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-black block">
                    {item.title}
                  </span>
                </span>
              </span>
              
              {/* Huge Icon */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FAF9F6] text-[#326949] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#111] group-hover:text-[#37F713] group-hover:shadow-[0_0_20px_rgba(55,247,19,0.3)]">
                <item.Icon size={40} />
              </div>

              <p className="text-base font-bold leading-relaxed text-gray-500 group-hover:text-[#111] transition-colors">
                {item.description}
              </p>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
