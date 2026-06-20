import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  Globe02Icon, 
  Leaf02Icon, 
  Invoice01Icon, 
  ClipboardIcon, 
  CheckmarkBadge01Icon, 
  CargoShipIcon,
  File01Icon 
} from "hugeicons-react";

type DocumentsAvailableProps = {
  documents: string[];
};

function getDocIcon(docName: string) {
  const name = docName.toLowerCase();
  if (name.includes("origin")) return <Globe02Icon size={24} variant="solid" />;
  if (name.includes("phyto")) return <Leaf02Icon size={24} variant="solid" />;
  if (name.includes("invoice")) return <Invoice01Icon size={24} variant="solid" />;
  if (name.includes("packing")) return <ClipboardIcon size={24} variant="solid" />;
  if (name.includes("inspection")) return <CheckmarkBadge01Icon size={24} variant="solid" />;
  if (name.includes("lading") || name.includes("export")) return <CargoShipIcon size={24} variant="solid" />;
  return <File01Icon size={24} variant="solid" />;
}

export default function DocumentsAvailable({
  documents,
}: DocumentsAvailableProps) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl">
              Documents Available on <span className="text-[#326949]">Request</span>
            </h2>
            <div className="h-1 w-24 bg-[#37F713] rounded-full shadow-[0_0_10px_rgba(55,247,19,0.5)] mb-6"></div>
            <p className="text-lg font-medium text-gray-500 max-w-2xl mx-auto">
              On confirmed orders, SAF Agro provides a full suite of compliance and export documentation to ensure seamless logistics.
            </p>
          </div>
        </ScrollReveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <ScrollReveal key={doc} animation="fade-up" delay={index * 0.1}>
              <li className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-[#FAF9F6] p-6 shadow-sm transition-all duration-300 hover:border-[#37F713]/50 hover:shadow-md hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#111] text-[#37F713] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(55,247,19,0.3)]">
                  {getDocIcon(doc)}
                </div>
                <span className="text-sm font-bold tracking-wide text-[#111] uppercase">
                  {doc}
                </span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
