import Link from "next/link";
import Image from "next/image";
import { ENQUIRY_PHONE } from "@/lib/grade-specs";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HowWeWorkCta() {
  return (
    <section className="relative overflow-hidden bg-[#0A0D10] py-24 lg:py-32">
      <Image
        src="/how we work cta.png.jpg"
        alt="SAF Agro background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h2 className="mb-8 text-5xl font-black lowercase tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            Ready to place your first order?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-up" delay={0.3}>
          <p className="mb-14 text-xl font-bold leading-relaxed text-white sm:text-2xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
            Our team will walk you through the process personally.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={0.5}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] bg-[#326949] px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#37F713] hover:text-black hover:shadow-[0_0_20px_rgba(55,247,19,0.5)] sm:w-auto"
            >
              Start an Enquiry{" "}
              <span className="text-2xl leading-none transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
            <a
              href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] border-2 border-white/60 bg-black/40 backdrop-blur-sm px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-[#37F713] hover:text-[#37F713] hover:bg-black/80 sm:w-auto"
            >
              Call Us Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
