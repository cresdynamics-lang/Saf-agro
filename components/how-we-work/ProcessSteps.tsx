import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  ClipboardIcon, 
  MapPinIcon, 
  CheckmarkBadge01Icon, 
  Package01Icon, 
  DeliveryTruck02Icon, 
  ArrowRight01Icon,
  Home01Icon,
  Airplane01Icon
} from "hugeicons-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    Icon: ClipboardIcon,
    title: "Enquiry & Requirements",
    intro: "You tell us what you need.",
    body: "A buyer reaches out via our website, email, or phone with their product requirement. We collect:",
    bullets: [
      "Product type (maize, soya beans, green grams, etc.)",
      "Grade required (Grade 1 or Grade 2)",
      "Quantity (in Metric Tonnes)",
      "Packing preference (50KG or 90KG)",
      "Delivery method (pickup, delivery, or export)",
      "Destination country",
    ],
    footer: "Response time: Within 24 hours on business days.",
  },
  {
    num: "02",
    Icon: MapPinIcon,
    title: "Sourcing & Procurement",
    intro: "We go to the source.",
    body: "Once requirements are confirmed, we activate our sourcing network across Kenya and Tanzania. We work directly with verified farmers and cooperatives — ensuring supply quality before a single bag is packed.",
    bullets: [
      "Direct farm-level sourcing",
      "Quantity verification at source",
      "Origin documentation initiated",
    ],
  },
  {
    num: "03",
    Icon: CheckmarkBadge01Icon,
    title: "Grading & Quality Control",
    intro: "Every batch is inspected. No exceptions.",
    body: "All commodities pass through our Nairobi facility for grading, cleaning, and quality verification before packing.",
    bullets: [
      "Moisture content testing",
      "Foreign matter inspection",
      "Machine cleaning (Grade 1) or farm-cleaned verification",
      "Aflatoxin and contaminant screening",
      "Pre-shipment inspection available via SGS/KEBS",
    ],
  },
  {
    num: "04",
    Icon: Package01Icon,
    title: "Packing & Documentation",
    intro: "Packed to your specification. Documented for compliance.",
    body: null,
    subsections: [
      {
        label: "Packing",
        iconType: "arrow",
        bullets: [
          "50KG polypropylene bags",
          "90KG polypropylene bags",
          "Custom branding available for large orders",
        ],
      },
      {
        label: "Documentation Prepared",
        iconType: "arrow",
        bullets: [
          "Commercial Invoice",
          "Packing List",
          "Certificate of Origin",
          "Phytosanitary Certificate",
          "Bill of Lading (export orders)",
        ],
      },
    ],
  },
  {
    num: "05",
    Icon: DeliveryTruck02Icon,
    title: "Delivery or Collection",
    intro: "Your commodity. Your preference.",
    body: null,
    subsections: [
      {
        label: "Delivery",
        iconType: "truck",
        bullets: [
          "Nationwide delivery across Kenya.",
          "Regional logistics to Tanzania.",
          "International freight to Mauritius, UK, and beyond.",
        ],
      },
      {
        label: "Warehouse Pickup",
        iconType: "warehouse",
        bullets: [
          "Buyers can collect directly from our Nairobi facility.",
          "Coordinates and access instructions provided on order confirmation.",
        ],
      },
      {
        label: "Export Shipments",
        iconType: "plane",
        bullets: [
          "Full export logistics handled — from our facility to port clearance to final destination.",
        ],
      },
    ],
  },
];

function getSubsectionIcon(type: string) {
  switch (type) {
    case "truck":
      return <DeliveryTruck02Icon className="shrink-0 text-[#326949] h-5 w-5 mt-0.5" />;
    case "warehouse":
      return <Home01Icon className="shrink-0 text-[#326949] h-5 w-5 mt-0.5" />;
    case "plane":
      return <Airplane01Icon className="shrink-0 text-[#326949] h-5 w-5 mt-0.5" />;
    case "arrow":
    default:
      return <ArrowRight01Icon className="shrink-0 text-[#326949] h-5 w-5 mt-0.5" />;
  }
}

export default function ProcessSteps() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
        <div className="mb-24 text-center flex flex-col items-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-[#111] sm:text-5xl lg:text-6xl">
            A reliable process. <span className="text-[#326949]">Every order. Every time.</span>
          </h2>
        </div>
        </ScrollReveal>

        <div className="mx-auto w-full max-w-4xl">
          <div className="relative border-l-4 border-[#37F713]/30 pl-8 md:pl-16 ml-6 md:ml-10 space-y-20">
            {steps.map((step, index) => (
              <ScrollReveal key={step.num} animation="fade-up" delay={index * 0.1}>
              <article className="group relative bg-[#FAF9F6] rounded-[20px] p-8 md:p-12 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:border-[#37F713]/50">
                {/* Neon Huge Icon Marker */}
                <div className="absolute -left-[74px] md:-left-[106px] top-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#111] text-[#37F713] shadow-[0_0_20px_rgba(55,247,19,0.4)] border-2 border-[#37F713]/30 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(55,247,19,0.7)]">
                  <step.Icon className="h-10 w-10 drop-shadow-[0_0_10px_rgba(55,247,19,0.8)]" />
                </div>

                <h3 className="mb-2 text-2xl md:text-3xl font-black text-[#111] uppercase tracking-tight">
                  {step.title}
                </h3>
                
                <p className="mb-6 text-lg font-bold text-[#326949]">
                  {step.intro}
                </p>

                {step.body && (
                  <p className="mb-8 text-base leading-relaxed text-gray-600">
                    {step.body}
                  </p>
                )}

                {step.bullets && (
                  <ul className="mb-8 grid gap-4 sm:grid-cols-2">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm font-medium text-gray-700"
                      >
                        <CheckmarkBadge01Icon className="shrink-0 text-[#37F713] drop-shadow-[0_0_8px_rgba(55,247,19,0.6)] h-5 w-5 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {step.subsections?.map((sub) => (
                  <div key={sub.label} className="mb-8 last:mb-0 bg-white p-6 rounded-xl border border-gray-100">
                    <p className="mb-4 text-sm font-black tracking-widest text-[#111] uppercase">
                      {sub.label}
                    </p>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {sub.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm font-medium text-gray-600"
                        >
                          {getSubsectionIcon(sub.iconType)}
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {step.footer && (
                  <div className="mt-8 rounded-xl bg-[#37F713]/10 px-6 py-4 border border-[#37F713]/20">
                    <p className="text-sm font-bold text-[#326949]">
                      {step.footer}
                    </p>
                  </div>
                )}
              </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
