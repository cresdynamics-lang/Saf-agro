import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ENQUIRY_PHONE } from "@/lib/grade-specs";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServicesCta() {
  return (
    <section className="bg-[#0B150F] py-24 lg:py-32 relative overflow-hidden">
      {/* Background neon glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[#37F713] opacity-[0.03] blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-12">
        <ScrollReveal animation="fade-up">
          <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build your <span className="text-[#37F713]">supply chain.</span>
          </h2>
          <p className="mb-12 text-lg font-medium text-gray-400 sm:text-xl">
            From single container deliveries to ongoing high-volume supply contracts, our team is ready to deliver.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="scale-up" delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] bg-[#37F713] px-10 py-5 text-lg font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#326949] hover:text-white hover:shadow-[0_0_20px_rgba(55,247,19,0.5)] sm:w-auto"
            >
              Start an Enquiry <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a
              href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-[15px] border-2 border-[#326949]/50 bg-[#132A1C] px-10 py-5 text-lg font-black uppercase tracking-widest text-white transition-all duration-300 hover:border-[#37F713] hover:text-[#37F713] sm:w-auto"
            >
              <Phone className="w-5 h-5 text-[#326949] group-hover:text-[#37F713] transition-colors" /> Call Sales
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
