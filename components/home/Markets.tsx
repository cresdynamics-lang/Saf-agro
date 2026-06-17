const markets = [
  {
    flag: "🇰🇪",
    country: "Kenya",
    role: "Nairobi HQ",
    detail: "Warehouse & Logistics Hub",
  },
  {
    flag: "🇹🇿",
    country: "Tanzania",
    role: "East Africa",
    detail: "Sourcing & Supply",
  },
  {
    flag: "🇲🇺",
    country: "Mauritius",
    role: "Indian Ocean",
    detail: "Import Partner Network",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    role: "European Markets",
    detail: "Trade & Export Relationships",
  },
];

export default function Markets() {
  return (
    <section id="markets" className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="section-heading mb-14">Our Operational Footprint</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <article
              key={m.country}
              className="border border-white bg-white p-8 text-center shadow-sm"
            >
              <span className="text-4xl" aria-hidden>
                {m.flag}
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-wide text-brand-black uppercase">
                {m.country}
              </h3>
              <p className="mt-2 text-sm font-semibold text-accent">{m.role}</p>
              <p className="mt-1 text-sm text-secondary">{m.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
