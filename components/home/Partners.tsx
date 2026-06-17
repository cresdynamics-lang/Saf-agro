export default function Partners() {
  return (
    <section id="partners" className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="section-heading mb-14 text-center">
          Trusted By Our Partners
        </h2>

        <div className="relative">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0 items-center gap-16">
                {["AgriPro", "EastGrain Co.", "Global Commodities", "PortLink Logistics", "FarmDirect", "TradeBridge"].map(
                  (name) => (
                    <div
                      key={`${setIndex}-${name}`}
                      className="flex h-16 w-40 items-center justify-center border border-light-grey bg-light-grey/50 grayscale"
                    >
                      <span className="text-xs font-bold tracking-widest text-secondary uppercase">
                        {name}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-secondary">
          We work with verified agro-producers, certified logistics partners,
          and established importers across four countries.
        </p>
      </div>
    </section>
  );
}
