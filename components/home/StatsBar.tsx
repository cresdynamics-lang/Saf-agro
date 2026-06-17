const stats = [
  {
    value: "6+",
    label: "Products",
    sub: "We Source",
  },
  {
    value: "4",
    label: "Markets",
    sub: "Served",
  },
  {
    value: "50KG–90KG",
    label: "Pack Sizes",
    sub: "Available",
  },
  {
    value: "10,000MT+",
    label: "Supply Capacity",
    sub: "Per Season",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold tracking-widest text-white/90 uppercase">
              {stat.label}
            </p>
            <p className="mt-0.5 text-xs text-white/60">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
