const trustPoints = [
  "Direct farm sourcing — no middlemen, better pricing",
  "Independently graded — Grade 1 and Grade 2 certified",
  "Flexible packaging — 50KG and 90KG options",
  "Delivery or warehouse pickup",
  "Export documentation handled",
  "Consistent supply year-round",
];

export default function WhySafAgro() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-primary px-8 py-16 text-white lg:px-16 lg:py-24">
        <h2 className="mb-6 text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          Why buyers across four countries trust us.
        </h2>
        <p className="mb-4 text-lg font-semibold text-white/90">
          We don&apos;t just sell grain.
          <br />
          We deliver certainty.
        </p>
        <p className="text-sm leading-relaxed text-white/70">
          Every shipment is graded, documented, and traceable from origin to
          delivery.
        </p>
      </div>

      <div className="flex flex-col justify-center bg-white px-8 py-16 lg:px-16 lg:py-24">
        <ul className="space-y-5">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                ✓
              </span>
              <span className="text-sm leading-relaxed text-brand-black">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
