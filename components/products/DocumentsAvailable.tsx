type DocumentsAvailableProps = {
  documents: string[];
};

export default function DocumentsAvailable({
  documents,
}: DocumentsAvailableProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="section-heading mb-4">
          Documents Available on Request
        </h2>
        <p className="mb-10 text-secondary">
          On confirmed orders, SAF Agro provides:
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {documents.map((doc) => (
            <li
              key={doc}
              className="flex items-start gap-3 border border-light-grey bg-white p-4 text-sm text-brand-black"
            >
              <span className="mt-0.5 shrink-0 text-accent">✓</span>
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
