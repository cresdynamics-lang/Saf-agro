import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { OrganicFoodIcon, DeliveryTruck02Icon, Building01Icon, CargoShipIcon } from "hugeicons-react";

const services = [
  {
    num: "01",
    title: "Sourcing & Supply",
    description:
      "We source six core commodities directly from verified farms in Kenya and Tanzania. Grade 1 and Grade 2 available for all products. Minimum orders from 1 Metric Tonne.",
    icon: OrganicFoodIcon,
    image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=1200&q=80",
    imageAlt: "Farmer in agricultural field checking crops",
  },
  {
    num: "02",
    title: "Logistics & Delivery",
    description:
      "Nationwide delivery across Kenya. Regional logistics to Tanzania. We handle transport from our Nairobi warehouse to your facility or point of entry. Real-time tracking available.",
    icon: DeliveryTruck02Icon,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    imageAlt: "Transport truck on a highway",
  },
  {
    num: "03",
    title: "Storage",
    description:
      "Our Nairobi warehouse offers short and medium-term storage for buyers who need staged delivery or buffer stock. Secure, dry, and pest-free facilities monitored 24/7.",
    icon: Building01Icon,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c28ea?w=1200&q=80",
    imageAlt: "Interior of a massive storage warehouse",
  },
  {
    num: "04",
    title: "Export",
    description:
      "Full export capability — documentation, freight coordination, phytosanitary certification, and international logistics to Mauritius, United Kingdom, and beyond.",
    icon: CargoShipIcon,
    image: "https://images.unsplash.com/photo-1494412519320-aa3da3c14a42?w=1200&q=80",
    imageAlt: "Large cargo ship carrying containers",
  },
];

export default function ServiceBlocks() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.num}
                className={`flex flex-col gap-12 lg:items-center lg:gap-20 ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal animation={isEven ? "fade-left" : "fade-right"}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border-4 border-gray-100 shadow-2xl group">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-[#326949]/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#37F713]">
                            <service.icon size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-gray-500">Service {service.num}</p>
                            <p className="text-sm font-black text-[#111]">{service.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal animation={isEven ? "fade-right" : "fade-left"} delay={0.2}>
                    <div className="flex flex-col">
                      <span className="mb-4 text-7xl font-black text-gray-100 select-none">
                        {service.num}
                      </span>
                      <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl">
                        {service.title}
                      </h2>
                      <div className="h-1 w-24 bg-[#37F713] mb-8 rounded-full shadow-[0_0_10px_rgba(55,247,19,0.5)]"></div>
                      <p className="text-lg font-medium leading-relaxed text-gray-600 lg:text-xl">
                        {service.description}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
