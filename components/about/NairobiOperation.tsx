import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckmarkBadge01Icon } from "hugeicons-react";

const facilities = [
  "Warehouse facility with bulk and bagged storage",
  "Quality control and grading station",
  "Export documentation processing",
  "Client pickup point for direct collection",
  "Logistics coordination for regional delivery",
];

export default function NairobiOperation() {
  return (
    <section className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal animation="fade-right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
                alt="SAF Agro warehouse and logistics facility"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white/90 backdrop-blur-md p-5 shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#37F713] text-[#111] shadow-[0_0_15px_rgba(55,247,19,0.5)]">
                  <span className="font-black tracking-tighter">HQ</span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-gray-500">Location</p>
                  <p className="text-lg font-black text-[#111]">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={0.2}>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl">
                Our Base of <span className="text-[#326949]">Operations</span>
              </h2>
              <p className="mb-10 text-lg font-medium leading-relaxed text-gray-600">
                Our Nairobi office and warehouse facility serves as the operational
                hub for all sourcing, grading, packing, and distribution activities. This is where precision happens.
              </p>
              
              <ul className="space-y-5">
                {facilities.map((item, i) => (
                  <ScrollReveal key={item} animation="fade-up" delay={i * 0.1}>
                    <li className="flex items-center gap-4 text-base font-bold text-[#111] rounded-xl bg-white p-4 shadow-sm border border-gray-100 transition-all hover:border-[#37F713]/30 hover:shadow-md">
                      <div className="flex shrink-0 items-center justify-center text-[#37F713] drop-shadow-[0_0_8px_rgba(55,247,19,0.4)]">
                        <CheckmarkBadge01Icon size={24} />
                      </div>
                      {item}
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
