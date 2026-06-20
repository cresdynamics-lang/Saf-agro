import type { GradeSpec } from "@/lib/grade-specs";
import { CheckmarkBadge01Icon, Diamond01Icon, Award01Icon } from "hugeicons-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const icons = [CheckmarkBadge01Icon, Diamond01Icon, Award01Icon];

type WhyGradeProps = {
  spec: GradeSpec;
};

export default function WhyGrade({ spec }: WhyGradeProps) {
  const gradeTitle = spec.identification.gradeLabel.split("—")[0].trim();

  return (
    <section className="bg-[#111] py-24 lg:py-32 relative overflow-hidden">
      {/* Background neon glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#37F713] opacity-[0.03] blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-white sm:text-5xl">
              Why <span className="text-[#37F713]">{gradeTitle}?</span>
            </h2>
            <div className="h-1 w-24 bg-[#37F713] rounded-full shadow-[0_0_10px_rgba(55,247,19,0.5)]"></div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {spec.whyGrade.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <ScrollReveal key={item.title} animation="fade-up" delay={i * 0.1}>
                <article className="group relative flex h-full flex-col items-center justify-center rounded-[24px] bg-[#1A1F1B] p-10 text-center shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(55,247,19,0.15)] overflow-hidden border border-[#326949]/20">
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0e2417] text-[#37F713] shadow-[0_0_15px_rgba(55,247,19,0.2)] border border-[#37F713]/20 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(55,247,19,0.4)]">
                    <Icon size={36} className="drop-shadow-[0_0_8px_rgba(55,247,19,0.8)]" />
                  </div>
                  
                  <h3 className="mb-4 text-xl font-black tracking-widest text-white uppercase">
                    {item.title}
                  </h3>
                  
                  <p className="text-base font-medium leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
