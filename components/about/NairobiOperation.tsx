import Image from "next/image";

const facilities = [
  "Warehouse facility with bulk and bagged storage",
  "Quality control and grading station",
  "Export documentation processing",
  "Client pickup point for direct collection",
  "Logistics coordination for regional delivery",
];

export default function NairobiOperation() {
  return (
    <section className="bg-light-grey">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt="SAF Agro warehouse and logistics facility"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24">
          <h2 className="section-heading mb-6">Our Base of Operations</h2>
          <p className="mb-8 text-base leading-relaxed text-secondary lg:text-lg">
            Our Nairobi office and warehouse facility serves as the operational
            hub for all sourcing, grading, packing, and distribution activities.
          </p>
          <ul className="space-y-4">
            {facilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-brand-black lg:text-base"
              >
                <span className="mt-1 text-accent" aria-hidden>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
