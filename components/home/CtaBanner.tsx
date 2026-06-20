import Link from "next/link";
import Image from "next/image";
import { ENQUIRY_PHONE } from "@/lib/grade-specs";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="relative flex min-h-[500px] items-center py-24 lg:min-h-[600px] lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta-bg.jpg"
          alt="Contact SAF Agro"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Dark Overlay to make text extremely readable */}
        <div className="absolute inset-0 bg-[#0A0D10]/30"></div>
      </div>

      <ScrollReveal animation="scale-up" className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <h2 className="mb-8 text-5xl font-black lowercase tracking-tight text-white sm:text-6xl lg:text-7xl">
          Ready to Source at Scale?
        </h2>
        <p className="mb-14 text-xl font-medium leading-relaxed text-gray-300 sm:text-2xl">
          Tell us what you need — product, grade, quantity, destination.
          <br className="hidden sm:block" />
          We&apos;ll come back to you within 24 hours.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] bg-[#37F713] px-12 py-6 text-lg font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(55,247,19,0.5)] sm:w-auto"
          >
            Request a Quote{" "}
            <span className="text-2xl leading-none transition-transform group-hover:translate-x-2">
              &rarr;
            </span>
          </Link>
          <a
            href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] border-2 border-white/60 bg-transparent px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-[#37F713] hover:text-[#37F713] sm:w-auto"
          >
            {ENQUIRY_PHONE}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
