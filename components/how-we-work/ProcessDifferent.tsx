const differentiators = [
  {
    title: "No Middlemen",
    description:
      "We source direct — better quality and better pricing.",
  },
  {
    title: "Documented Every Step",
    description:
      "Every order generates a complete paper trail for your records.",
  },
  {
    title: "Consistent Quality",
    description:
      "Same grading standards — every batch, every time.",
  },
  {
    title: "Flexible Delivery",
    description:
      "Pickup, local delivery, or international export — your call.",
  },
];

export default function ProcessDifferent() {
  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="section-heading mb-14 text-center">
          What Makes Our Process Different
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="border-t-4 border-primary bg-white p-8 text-center shadow-sm"
            >
              <h3 className="mb-4 text-sm font-bold tracking-widest text-brand-black uppercase">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
