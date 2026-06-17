import Link from "next/link";
import { ENQUIRY_PHONE } from "@/lib/grade-specs";

export default function HowWeWorkCta() {
  return (
    <section className="bg-primary py-20 text-white lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-wide uppercase sm:text-3xl">
          Ready to Place Your First Order?
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-white/85">
          Our team will walk you through the process personally.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary hover:bg-light-grey"
          >
            Start an Enquiry →
          </Link>
          <a
            href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
            className="btn-outline"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
