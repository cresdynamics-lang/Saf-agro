import Link from "next/link";
import { Tractor, Award, Package, Truck, FileText, CalendarCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const trustPoints = [
  {
    title: "Direct Farm Sourcing",
    desc: "No middlemen, resulting in better pricing and full traceability.",
    icon: Tractor,
  },
  {
    title: "Independently Graded",
    desc: "Grade 1 and Grade 2 certified by independent quality inspectors.",
    icon: Award,
  },
  {
    title: "Flexible Packaging",
    desc: "Supplied in standard 50KG and 90KG options to suit your needs.",
    icon: Package,
  },
  {
    title: "Flexible Logistics",
    desc: "Choose between direct delivery to your port or warehouse pickup.",
    icon: Truck,
  },
  {
    title: "Export Documentation",
    desc: "All customs and export documentation is fully handled by our team.",
    icon: FileText,
  },
  {
    title: "Consistent Supply",
    desc: "Reliable, year-round supply to keep your operations running smoothly.",
    icon: CalendarCheck,
  },
];

export default function WhySafAgro() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-[#111] sm:text-5xl lg:text-6xl lowercase">
            Why buyers across four countries <span className="text-[#326949]">trust us.</span>
          </h2>
          <p className="text-2xl font-bold text-[#111] mb-4">
            We don&apos;t just sell grain. We deliver certainty.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every shipment is graded, documented, and fully traceable from origin to delivery.
          </p>
        </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 0.1}>
              <div 
                className="group flex flex-col items-start rounded-[15px] border border-gray-100 bg-[#FAF9F6] p-10 transition-all duration-300 hover:bg-[#111] hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#326949]/10 text-[#326949] transition-colors group-hover:bg-[#37F713] group-hover:text-[#111]">
                  <Icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#111] transition-colors group-hover:text-white">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 transition-colors group-hover:text-gray-300">
                  {point.desc}
                </p>
              </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal animation="scale-up" delay={0.2}>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-[15px] bg-[#111] px-12 py-6 text-lg font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#37F713] hover:text-[#111] hover:shadow-[0_0_20px_rgba(55,247,19,0.5)]"
          >
            REQUEST A QUOTE{" "}
            <span className="text-2xl leading-none transition-transform group-hover:translate-x-2">
              &rarr;
            </span>
          </Link>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
