import Image from "next/image";

type PageHeroProps = {
  label?: string;
  title: string;
  subtitle: string;
  tagline?: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  label,
  title,
  subtitle,
  tagline,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-center overflow-hidden lg:min-h-[60vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pb-24">
        {label && (
          <p className="section-label mb-4 text-white/70">{label}</p>
        )}
        <h1 className="mb-6 max-w-3xl text-3xl leading-tight font-bold tracking-wide text-white uppercase sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed font-light text-white/90">
          {subtitle}
        </p>
        {tagline && (
          <p className="mt-6 text-sm font-semibold tracking-widest text-white/70 uppercase">
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
}
