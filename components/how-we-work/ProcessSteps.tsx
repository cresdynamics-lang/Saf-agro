const steps = [
  {
    num: "01",
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
    title: "Packing & Documentation",
    intro: "Packed to your specification. Documented for compliance.",
    body: null,
    subsections: [
      {
        label: "Packing",
        bullets: [
          "50KG polypropylene bags",
          "90KG polypropylene bags",
          "Custom branding available for large orders",
        ],
      },
      {
        label: "Documentation Prepared",
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
    title: "Delivery or Collection",
    intro: "Your commodity. Your preference.",
    body: null,
    subsections: [
      {
        label: "🚛 Delivery",
        bullets: [
          "Nationwide delivery across Kenya.",
          "Regional logistics to Tanzania.",
          "International freight to Mauritius, UK, and beyond.",
        ],
      },
      {
        label: "🏭 Warehouse Pickup",
        bullets: [
          "Buyers can collect directly from our Nairobi facility.",
          "Coordinates and access instructions provided on order confirmation.",
        ],
      },
      {
        label: "✈ Export Shipments",
        bullets: [
          "Full export logistics handled — from our facility to port clearance to final destination.",
        ],
      },
    ],
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="section-heading mb-16 text-center">
          A Reliable Process. Every Order. Every Time.
        </h2>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <article key={step.num}>
              {index > 0 && (
                <hr className="my-12 border-t-2 border-light-grey" />
              )}

              <div className="mb-2 flex items-baseline gap-4">
                <span className="text-sm font-bold tracking-widest text-accent uppercase">
                  Step {step.num}
                </span>
                <span className="text-secondary">—</span>
                <h3 className="text-lg font-bold tracking-wide text-brand-black uppercase">
                  {step.title}
                </h3>
              </div>

              <p className="mb-4 text-base font-semibold text-primary">
                {step.intro}
              </p>

              {step.body && (
                <p className="mb-6 text-sm leading-relaxed text-secondary lg:text-base">
                  {step.body}
                </p>
              )}

              {step.bullets && (
                <ul className="mb-4 space-y-2">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-sm text-secondary"
                    >
                      <span className="shrink-0 text-accent">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {step.subsections?.map((sub) => (
                <div key={sub.label} className="mb-6">
                  <p className="mb-3 text-xs font-bold tracking-widest text-brand-black uppercase">
                    {sub.label}:
                  </p>
                  <ul className="space-y-2">
                    {sub.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-secondary"
                      >
                        <span className="shrink-0 text-accent">→</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {step.footer && (
                <p className="mt-4 text-sm font-semibold text-brand-black">
                  {step.footer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
