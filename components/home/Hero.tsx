import Image from "next/image";
import Link from "next/link";

const markets = [
  { flag: "🇰🇪", name: "Kenya" },
  { flag: "🇹🇿", name: "Tanzania" },
  { flag: "🇲🇺", name: "Mauritius" },
  { flag: "🇬🇧", name: "United Kingdom" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <Image
        src="/hero-image-home.jpg"
        alt="Global agro-commodity logistics and supply chain"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-40 lg:px-8">
        <p className="section-label mb-6 text-white/70">
          Sourcing · Supply · Logistics · Exports
        </p>

        <h1 className="mb-6 max-w-3xl text-4xl leading-tight font-bold tracking-wide text-white uppercase sm:text-5xl lg:text-6xl">
          Connecting Global Markets
          <br />
          to Africa&apos;s Finest Grains.
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed font-light text-white/90">
          SAF Agro Products is an international agro-commodity sourcing and
          supply company — operating across Kenya, Tanzania, Mauritius, and the
          United Kingdom.
          <br />
          <br />
          We source, grade, pack, and deliver at scale.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
          <Link href="/products" className="btn-outline">
            View Our Products
          </Link>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 py-4 text-sm text-white/90 lg:gap-12 lg:px-8">
          {markets.map((m) => (
            <span key={m.name} className="flex items-center gap-2">
              <span aria-hidden>{m.flag}</span>
              {m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
