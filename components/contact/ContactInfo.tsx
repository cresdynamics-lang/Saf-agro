import {
  Location01Icon,
  CallIcon,
  Mail01Icon,
  WhatsappIcon,
  Clock01Icon,
  GlobalIcon,
} from "hugeicons-react";
import "flag-icons/css/flag-icons.min.css";
import {
  ENQUIRY_EMAIL,
  ENQUIRY_PHONE,
  WHATSAPP_URL,
} from "@/lib/grade-specs";
import {
  OFFICE_ADDRESS,
  BUSINESS_HOURS,
  MARKETS_SERVED,
} from "@/lib/contact";

export default function ContactInfo() {
  return (
    <div className="flex flex-col bg-[#FAF9F6] border border-gray-100 shadow-sm rounded-[24px] p-8 md:p-12">
      <h2 className="mb-12 text-3xl md:text-4xl font-black lowercase tracking-tight text-[#111]">
        Contact info
      </h2>

      <div className="space-y-10 flex-1">
        <div className="group flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-[#37F713] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(55,247,19,0.4)]">
            <Location01Icon size={28} />
          </div>
          <div>
            <p className="mb-1 text-sm font-black tracking-widest text-gray-500 uppercase">
              Nairobi Office
            </p>
            <address className="text-lg font-bold not-italic leading-relaxed text-[#111]">
              {OFFICE_ADDRESS.line1}
              <br />
              {OFFICE_ADDRESS.city}
            </address>
          </div>
        </div>

        <div className="group flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-[#37F713] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(55,247,19,0.4)]">
            <CallIcon size={28} />
          </div>
          <div>
            <p className="mb-1 text-sm font-black tracking-widest text-gray-500 uppercase">
              Phone
            </p>
            <a
              href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
              className="text-lg font-bold text-[#111] transition-colors hover:text-[#326949]"
            >
              {ENQUIRY_PHONE}
            </a>
          </div>
        </div>

        <div className="group flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-[#37F713] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(55,247,19,0.4)]">
            <Mail01Icon size={28} />
          </div>
          <div>
            <p className="mb-1 text-sm font-black tracking-widest text-gray-500 uppercase">
              Email
            </p>
            <a
              href={`mailto:${ENQUIRY_EMAIL}`}
              className="text-lg font-bold text-[#111] transition-colors hover:text-[#326949]"
            >
              {ENQUIRY_EMAIL}
            </a>
          </div>
        </div>

        <div className="group flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
            <WhatsappIcon size={28} />
          </div>
          <div>
            <p className="mb-1 text-sm font-black tracking-widest text-gray-500 uppercase">
              WhatsApp
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-[#25D366] transition-colors hover:text-[#111]"
            >
              Click to chat →
            </a>
          </div>
        </div>

        <div className="group flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-[#37F713] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(55,247,19,0.4)]">
            <Clock01Icon size={28} />
          </div>
          <div>
            <p className="mb-1 text-sm font-black tracking-widest text-gray-500 uppercase">
              Business Hours
            </p>
            <ul className="space-y-1 text-lg font-medium text-[#111]">
              {BUSINESS_HOURS.map((slot) => (
                <li key={slot.days}>
                  <span className="font-black text-[#326949]">{slot.days}:</span>{" "}
                  {slot.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="group flex gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#111] text-[#37F713] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(55,247,19,0.4)]">
            <GlobalIcon size={28} />
          </div>
          <div>
            <p className="mb-2 text-sm font-black tracking-widest text-gray-500 uppercase">
              Markets We Serve
            </p>
            <div className="flex flex-wrap gap-4 text-base font-bold text-[#111]">
              {MARKETS_SERVED.map((m) => (
                <span key={m.name} className="flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm border border-gray-100 transition-all hover:border-[#37F713]/30 hover:shadow-md">
                  <span className={`fi fi-${m.code} text-xl rounded-sm`} aria-hidden></span>
                  {m.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
