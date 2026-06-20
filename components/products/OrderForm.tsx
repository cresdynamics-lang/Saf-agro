"use client";

import { useState, type FormEvent } from "react";
import {
  ENQUIRY_EMAIL,
  ENQUIRY_PHONE,
  WHATSAPP_URL,
} from "@/lib/grade-specs";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail, Phone, MessageCircle } from "lucide-react";

type OrderFormProps = {
  productName: string;
  gradeName: string;
};

type FormData = {
  fullName: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  quantity: string;
  packing: "50KG" | "90KG" | "Both" | "";
  delivery: "Delivery" | "Warehouse Pickup" | "Export" | "";
  destination: string;
  notes: string;
};

const initialForm: FormData = {
  fullName: "",
  companyName: "",
  country: "",
  email: "",
  phone: "",
  quantity: "",
  packing: "",
  delivery: "",
  destination: "",
  notes: "",
};

export default function OrderForm({ productName, gradeName }: OrderFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { submitOrderEnquiry } = await import("@/app/actions/contact");
      const res = await submitOrderEnquiry({
        product: productName,
        grade: gradeName,
        ...form,
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-[#FAF9F6] px-5 py-4 text-sm text-[#111] placeholder-gray-400 outline-none transition-all focus:border-[#326949] focus:shadow-[0_0_15px_rgba(50,105,73,0.1)]";

  return (
    <section className="bg-[#EFEEEF] py-24 lg:py-32 relative overflow-hidden">
      {/* Soft background element */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-white opacity-40 blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-[90rem] px-6 lg:px-12">
        <ScrollReveal animation="fade-up">
          <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="mb-6 text-4xl font-black lowercase tracking-tight text-[#111] sm:text-5xl">
              Order <span className="text-[#326949]">Enquiry</span>
            </h2>
            <div className="h-1 w-24 bg-[#37F713] rounded-full shadow-[0_0_10px_rgba(55,247,19,0.5)] mb-6"></div>
            <p className="text-lg font-medium text-gray-500">
              Request a custom quote for {productName} ({gradeName})
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-5xl rounded-[32px] border border-gray-100 bg-white p-8 shadow-xl lg:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    className={inputClass}
                    placeholder="Global Trading Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                    placeholder="+254 700 000 000"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="country" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      required
                      value={form.country}
                      onChange={(e) => update("country", e.target.value)}
                      className={inputClass}
                      placeholder="Kenya"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Quantity (MT)
                    </label>
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      step="0.1"
                      required
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. 50"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Packing Preference
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {(["50KG", "90KG", "Both"] as const).map((opt) => (
                      <label key={opt} className={`cursor-pointer flex items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${form.packing === opt ? 'border-[#326949] bg-[#326949]/10 text-[#326949]' : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-[#326949]'}`}>
                        <input
                          type="radio"
                          name="packing"
                          value={opt}
                          required
                          checked={form.packing === opt}
                          onChange={() => update("packing", opt)}
                          className="sr-only"
                        />
                        {opt === "Both" ? "Both" : `${opt} Bags`}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Delivery Option
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {(["Delivery", "Warehouse Pickup", "Export"] as const).map((opt) => (
                      <label key={opt} className={`cursor-pointer flex items-center justify-center rounded-xl border-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all ${form.delivery === opt ? 'border-[#326949] bg-[#326949]/10 text-[#326949]' : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-[#326949]'}`}>
                        <input
                          type="radio"
                          name="delivery"
                          value={opt}
                          required
                          checked={form.delivery === opt}
                          onChange={() => update("delivery", opt)}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="destination" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    required
                    value={form.destination}
                    onChange={(e) => update("destination", e.target.value)}
                    className={inputClass}
                    placeholder="City, Country or Port"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="notes" className="mb-2 block text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="Any specific quality requirements or logistics notes..."
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center border-t border-gray-100 pt-8">
              {error && (
                <div className="mb-6 rounded-xl bg-red-50 px-6 py-4 text-sm font-medium text-red-600 border border-red-200">
                  {error}
                </div>
              )}

              {submitted ? (
                <div className="flex flex-col items-center text-center animate-in zoom-in duration-500">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#326949]/10 text-[#326949]">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-black uppercase tracking-widest text-[#111]">Enquiry Sent</h3>
                  <p className="text-sm font-medium text-gray-500 max-w-md">
                    Thank you. Your highly-qualified order enquiry has been sent directly to the SAF Agro Trading Floor. We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full max-w-md items-center justify-center gap-3 rounded-[15px] bg-[#326949] px-6 py-4 text-sm sm:text-base font-black uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:bg-[#111] hover:text-[#37F713] hover:shadow-[0_4px_25px_rgba(50,105,73,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending Enquiry..." : "Submit Order Enquiry"}
                  {!isSubmitting && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                </button>
              )}
            </div>
          </form>
        </ScrollReveal>

        {/* Contact Info Horizontal */}
        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="mx-auto mt-16 max-w-4xl border-t border-gray-200 pt-12">
            <p className="mb-8 text-center text-xs font-black uppercase tracking-widest text-gray-500">
              Or reach our trading floor directly
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              <a 
                href={`mailto:${ENQUIRY_EMAIL}`} 
                className="group flex items-center gap-3 text-sm font-bold text-[#111] transition-colors hover:text-[#326949]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm transition-colors group-hover:border-[#326949] group-hover:bg-[#326949]/10">
                  <Mail className="h-5 w-5" />
                </div>
                {ENQUIRY_EMAIL}
              </a>
              <a 
                href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`} 
                className="group flex items-center gap-3 text-sm font-bold text-[#111] transition-colors hover:text-[#326949]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm transition-colors group-hover:border-[#326949] group-hover:bg-[#326949]/10">
                  <Phone className="h-5 w-5" />
                </div>
                {ENQUIRY_PHONE}
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-sm font-bold text-[#111] transition-colors hover:text-[#326949]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm transition-colors group-hover:border-[#326949] group-hover:bg-[#326949]/10">
                  <MessageCircle className="h-5 w-5" />
                </div>
                WhatsApp Team
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
