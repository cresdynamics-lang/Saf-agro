import { Leaf, Wheat, Globe, Ship, Tractor, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const partnerCategories = [
  {
    title: "Agro-Producers",
    partners: [
      { name: "AgriPro", icon: Leaf },
      { name: "FarmDirect", icon: Tractor },
    ],
  },
  {
    title: "Global Logistics",
    partners: [
      { name: "PortLink", icon: Ship },
      { name: "Global Commodities", icon: Globe },
    ],
  },
  {
    title: "Trade Networks",
    partners: [
      { name: "EastGrain Co.", icon: Wheat },
      { name: "TradeBridge", icon: Handshake },
    ],
  },
];

export default function Partners() {
  return (
    <section id="partners" className="bg-[#FAF9F6] py-24 lg:py-32 border-t border-gray-200">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        
        {/* Massive Section Header */}
        <ScrollReveal animation="fade-up">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black lowercase tracking-tight text-[#111]">
            <span className="text-[#326949]">Trusted</span> By Our Partners
          </h2>
          <p className="max-w-3xl text-lg sm:text-xl font-medium leading-relaxed text-gray-600">
            We work with verified agro-producers, certified logistics partners,
            and established importers across four countries to guarantee reliable supply chains.
          </p>
        </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {partnerCategories.map((category, index) => (
            <ScrollReveal key={category.title} animation="fade-up" delay={index * 0.2}>
            <div 
              className="relative rounded-[15px] border border-gray-100 bg-white px-8 py-14 shadow-md transition-all hover:border-[#326949]/30 hover:shadow-xl h-full"
            >
              {/* Box Title sitting on the border with Highlighter Effect */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 bg-white">
                <span className="relative inline-block">
                  <span className="absolute inset-0 -skew-x-12 transform bg-[#37F713]"></span>
                  <span className="relative z-10 px-2 text-sm font-black uppercase tracking-widest text-black">
                    {category.title}
                  </span>
                </span>
              </span>
              
              {/* Partner Logos */}
              <div className="flex flex-col gap-12 items-center justify-center">
                {category.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex cursor-pointer items-center gap-4 opacity-60 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
                  >
                    <partner.icon size={36} className="text-[#326949]" />
                    <span className="text-2xl font-black tracking-tighter text-[#111]">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
