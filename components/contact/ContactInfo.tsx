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
    <div>
      <h2 className="mb-8 text-lg font-bold tracking-widest text-brand-black uppercase">
        Contact Info
      </h2>

      <div className="space-y-8">
        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            📍 Nairobi Office
          </p>
          <address className="text-sm not-italic leading-relaxed text-secondary">
            {OFFICE_ADDRESS.line1}
            <br />
            {OFFICE_ADDRESS.city}
          </address>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            📞 Phone
          </p>
          <a
            href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`}
            className="text-sm text-brand-black transition-colors hover:text-primary"
          >
            {ENQUIRY_PHONE}
          </a>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            📧 Email
          </p>
          <a
            href={`mailto:${ENQUIRY_EMAIL}`}
            className="text-sm text-brand-black transition-colors hover:text-primary"
          >
            {ENQUIRY_EMAIL}
          </a>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold tracking-widest text-secondary uppercase">
            💬 WhatsApp
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent transition-colors hover:text-primary"
          >
            Click to chat →
          </a>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold tracking-widest text-secondary uppercase">
            🕐 Business Hours
          </p>
          <ul className="space-y-2 text-sm text-secondary">
            {BUSINESS_HOURS.map((slot) => (
              <li key={slot.days}>
                <span className="font-semibold text-brand-black">{slot.days}:</span>{" "}
                {slot.hours}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold tracking-widest text-secondary uppercase">
            Markets We Serve
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-secondary">
            {MARKETS_SERVED.map((m) => (
              <span key={m.name} className="flex items-center gap-1.5">
                <span aria-hidden>{m.flag}</span>
                {m.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
