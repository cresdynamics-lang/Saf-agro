import Link from "next/link";

const steps = [
  { num: "01", title: "Enquiry" },
  { num: "02", title: "Sourcing & Grading" },
  { num: "03", title: "Packing & Quality QC" },
  { num: "04", title: "Delivery or Collection" },
];

export default function HowItWorks() {
  return (
    <section className="bg-near-black py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="section-label mb-3 text-white/50">How We Work</p>
        <h2 className="mb-4 text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          A simple, reliable process — from enquiry to delivery.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <span
                  className="absolute top-6 left-full hidden w-full text-center text-accent lg:block"
                  aria-hidden
                >
                  →
                </span>
              )}
              <p className="mb-3 text-3xl font-bold text-accent">{step.num}</p>
              <p className="text-sm font-semibold tracking-wide uppercase">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/how-we-work" className="link-arrow text-accent hover:text-white">
            See The Full Process →
          </Link>
        </div>
      </div>
    </section>
  );
}
