import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="bg-primary py-20 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-10 text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          Want to know more about what we can supply?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/products"
            className="btn-primary bg-white text-primary hover:bg-light-grey"
          >
            View Our Products
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
