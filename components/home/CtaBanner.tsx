import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-20 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          Ready to Source at Scale?
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-white/85">
          Tell us what you need — product, grade, quantity, destination.
          <br />
          We&apos;ll come back to you within 24 hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-light-grey">
            Request a Quote →
          </Link>
          <a
            href="tel:+254000000000"
            className="btn-outline border-white/60 hover:border-white"
          >
            +254 XXX XXX XXX
          </a>
        </div>
      </div>
    </section>
  );
}
