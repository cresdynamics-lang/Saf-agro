import type { GradeSpec } from "@/lib/grade-specs";
import { 
  File01Icon, 
  CheckmarkBadge01Icon, 
  CleanIcon, 
  Location01Icon, 
  Clock01Icon, 
  BalanceScaleIcon, 
  Package01Icon, 
  DeliveryTruck02Icon 
} from "hugeicons-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type SpecSectionProps = {
  title: string;
  rows: { label: string; value: string }[];
  icon: React.ElementType;
};

import { Droplets, Wind, AlertTriangle, ShieldAlert } from "lucide-react";
import { Search01Icon, Alert01Icon, Bug01Icon, PaintBoardIcon } from "hugeicons-react";

function getRowIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("moisture")) return <Droplets className="h-4 w-4 text-[#37F713]" />;
  if (l.includes("foreign")) return <Search01Icon className="h-4 w-4 text-[#37F713]" />;
  if (l.includes("broken")) return <AlertTriangle className="h-4 w-4 text-[#37F713]" />;
  if (l.includes("aflatoxin")) return <ShieldAlert className="h-4 w-4 text-[#37F713]" />;
  if (l.includes("colour") || l.includes("color")) return <PaintBoardIcon className="h-4 w-4 text-[#37F713]" />;
  if (l.includes("smell")) return <Wind className="h-4 w-4 text-[#37F713]" />;
  if (l.includes("insect") || l.includes("bug")) return <Bug01Icon className="h-4 w-4 text-[#37F713]" />;
  
  // Default fallback
  return <CheckmarkBadge01Icon className="h-4 w-4 text-[#37F713]" />;
}

export function SpecSection({ title, rows, icon: Icon }: SpecSectionProps) {
  return (
    <div className="rounded-[24px] border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
      <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#111] text-[#37F713] shadow-md">
          <Icon size={24} />
        </div>
        <h3 className="text-sm font-black tracking-widest text-[#111] uppercase">
          {title}
        </h3>
      </div>
      <dl className="space-y-4">
        {rows.map((row, i) => (
          <div
            key={`${row.label}-${i}`}
            className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 border-b border-gray-50 pb-3 last:border-0 last:pb-0"
          >
            {row.label && (
              <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 sm:w-2/5 shrink-0">
                {getRowIcon(row.label)}
                {row.label}
              </dt>
            )}
            <dd className="text-sm font-bold text-[#111] sm:text-right whitespace-pre-line sm:w-3/5">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type SpecTableProps = {
  spec: GradeSpec;
};

export default function SpecTable({ spec }: SpecTableProps) {
  const { identification } = spec;

  return (
    <section className="bg-[#FAF9F6] py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mb-16">
            <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl">
              Specification <span className="text-[#326949]">Sheet</span>
            </h2>
            <div className="h-1 w-24 bg-[#37F713] rounded-full shadow-[0_0_10px_rgba(55,247,19,0.5)]"></div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal animation="fade-up" delay={0.1}>
            <SpecSection
              title="Identification"
              icon={File01Icon}
              rows={[
                { label: "Product", value: identification.product },
                { label: "Grade", value: identification.gradeLabel },
                { label: "Scientific Name", value: identification.scientificName },
                { label: "HS Code", value: identification.hsCode },
              ]}
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <SpecSection 
              title="Quality Parameters" 
              icon={CheckmarkBadge01Icon} 
              rows={spec.qualityParameters} 
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.3}>
            <SpecSection 
              title="Cleaning Method" 
              icon={CleanIcon} 
              rows={spec.cleaning} 
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.4}>
            <SpecSection 
              title="Origin" 
              icon={Location01Icon} 
              rows={spec.origin} 
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.5}>
            <SpecSection 
              title="Availability" 
              icon={Clock01Icon} 
              rows={spec.availability} 
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.6}>
            <SpecSection 
              title="Quantity" 
              icon={BalanceScaleIcon} 
              rows={spec.quantity} 
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.7}>
            <SpecSection 
              title="Packaging" 
              icon={Package01Icon} 
              rows={spec.packaging} 
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.8}>
            <SpecSection 
              title="Delivery" 
              icon={DeliveryTruck02Icon} 
              rows={spec.delivery} 
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
