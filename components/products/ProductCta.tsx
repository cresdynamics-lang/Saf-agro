import Link from "next/link";
import { contactUrl } from "@/lib/product-details";

type ProductCtaProps = {
  productName: string;
};

export default function ProductCta({ productName }: ProductCtaProps) {
  return (
    <section className="bg-primary py-20 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          Ready to Order {productName}?
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-white/85">
          Tell us your grade, quantity, packing preference, and delivery
          destination. We respond within 24 hours.
        </p>
        <Link
          href={contactUrl(productName)}
          className="btn-primary bg-white text-primary hover:bg-light-grey"
        >
          Make an Enquiry →
        </Link>
      </div>
    </section>
  );
}
