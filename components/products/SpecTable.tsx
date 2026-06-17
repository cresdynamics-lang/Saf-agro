import type { GradeSpec } from "@/lib/grade-specs";

type SpecSectionProps = {
  title: string;
  rows: { label: string; value: string }[];
};

function SpecSection({ title, rows }: SpecSectionProps) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 border-b-2 border-primary pb-2 text-xs font-bold tracking-widest text-brand-black uppercase">
        {title}
      </h3>
      <dl className="space-y-3">
        {rows.map((row, i) => (
          <div
            key={`${row.label}-${i}`}
            className="grid gap-1 border-b border-light-grey pb-3 text-sm sm:grid-cols-[200px_1fr] sm:gap-4"
          >
            {row.label && (
              <dt className="font-semibold text-brand-black">{row.label}:</dt>
            )}
            {!row.label && <dt className="hidden sm:block" />}
            <dd className="whitespace-pre-line text-secondary">{row.value}</dd>
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
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="section-heading mb-12">Product Specification Sheet</h2>

        <SpecSection
          title="Identification"
          rows={[
            { label: "Product", value: identification.product },
            { label: "Grade", value: identification.gradeLabel },
            { label: "Scientific Name", value: identification.scientificName },
            { label: "HS Code", value: identification.hsCode },
          ]}
        />

        <SpecSection title="Quality Parameters" rows={spec.qualityParameters} />
        <SpecSection title="Cleaning Method" rows={spec.cleaning} />
        <SpecSection title="Origin" rows={spec.origin} />
        <SpecSection title="Availability" rows={spec.availability} />
        <SpecSection title="Quantity" rows={spec.quantity} />
        <SpecSection title="Packaging" rows={spec.packaging} />
        <SpecSection title="Delivery" rows={spec.delivery} />
      </div>
    </section>
  );
}
