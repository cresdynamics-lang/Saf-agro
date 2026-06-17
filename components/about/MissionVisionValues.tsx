const pillars = [
  {
    title: "Our Mission",
    content:
      "To source, grade, and supply premium agricultural commodities reliably to buyers across Africa and beyond.",
  },
  {
    title: "Our Vision",
    content:
      "To be East Africa's most trusted agro-commodity partner for international trade and local supply chains.",
  },
  {
    title: "Our Values",
    content: "Quality. Reliability. Transparency. Precision. Scale.",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="border-t-4 border-primary bg-white p-8 shadow-sm"
            >
              <h3 className="mb-6 text-sm font-bold tracking-widest text-brand-black uppercase">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary lg:text-base">
                {pillar.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
