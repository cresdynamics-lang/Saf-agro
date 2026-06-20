import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";


export default function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[#0A0D10] py-24 lg:py-32 border-t-8 border-[#37F713]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#37F713] opacity-[0.05] blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h2 className="mb-8 text-4xl font-black lowercase tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            Want to know more about what we can <span className="text-[#37F713]">supply?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <Link
              href="/products"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] bg-[#326949] px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#37F713] hover:text-black hover:shadow-[0_0_20px_rgba(55,247,19,0.5)] sm:w-auto"
            >
              View Our Products{" "}
              <span className="text-2xl leading-none transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] border-2 border-white/60 bg-black/40 backdrop-blur-sm px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-[#37F713] hover:text-[#37F713] hover:bg-black/80 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


