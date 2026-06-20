"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ENQUIRY_EMAIL } from "@/lib/grade-specs";
import { PRODUCT_OPTIONS, type ProductOption } from "@/lib/contact";
import { ArrowRight, ArrowLeft } from "lucide-react";

type ContactEnquiryFormProps = {
  defaultProduct?: string;
  defaultGrade?: string;
};

type FormData = {
  fullName: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: ProductOption | "";
  grade: "Grade 1" | "Grade 2" | "Both" | "";
  quantity: string;
  packing: "50KG" | "90KG" | "Both" | "";
  delivery: "Delivery" | "Warehouse Pickup" | "Export" | "";
  destination: string;
  notes: string;
};

const initialForm: FormData = {
  fullName: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  product: "",
  grade: "",
  quantity: "",
  packing: "",
  delivery: "",
  destination: "",
  notes: "",
};

function resolveProduct(value?: string): ProductOption | "" {
  if (!value) return "";
  const match = PRODUCT_OPTIONS.find(
    (p) => p.toLowerCase() === value.toLowerCase(),
  );
  return match ?? "";
}

function resolveGrade(value?: string): FormData["grade"] {
  if (!value) return "";
  if (value === "Grade 1" || value === "Grade 2" || value === "Both") return value;
  if (value.toLowerCase().includes("both")) return "Both";
  if (value.toLowerCase().includes("1")) return "Grade 1";
  if (value.toLowerCase().includes("2")) return "Grade 2";
  return "";
}

export default function ContactEnquiryForm({
  defaultProduct,
  defaultGrade,
}: ContactEnquiryFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      product: resolveProduct(defaultProduct) || prev.product,
      grade: resolveGrade(defaultGrade) || prev.grade,
    }));
  }, [defaultProduct, defaultGrade]);

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { submitContactEnquiry } = await import("@/app/actions/contact");
      const res = await submitContactEnquiry(form);

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
    "w-full rounded-xl border border-[#326949]/30 bg-[#132A1C] px-5 py-4 text-sm font-bold text-white outline-none transition-all focus:border-[#37F713] focus:ring-1 focus:ring-[#37F713] focus:shadow-[0_0_15px_rgba(55,247,19,0.2)]";

  const renderStepIndicator = () => (
    <div className="flex items-center gap-2 mb-10">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex-1 flex items-center gap-2">
          <div className={`h-2 rounded-full transition-all duration-500 w-full ${s <= step ? 'bg-[#37F713] shadow-[0_0_10px_rgba(55,247,19,0.5)]' : 'bg-[#132A1C]'}`} />
        </div>
      ))}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full rounded-[24px] border-2 border-[#326949]/30 bg-[#0B150F] p-8 shadow-2xl lg:p-12 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#37F713] opacity-[0.03] blur-[100px]"></div>

      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl md:text-3xl font-black lowercase tracking-tight text-white">
          {step === 1 && "Your Details"}
          {step === 2 && "Requirements"}
          {step === 3 && "Logistics"}
        </h2>
        <span className="text-sm font-black text-[#37F713] uppercase tracking-widest hidden sm:block">Step {step} of 3</span>
      </div>
      
      {renderStepIndicator()}

      <div className="space-y-5 flex-1 min-h-[400px]">
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Company / Organisation
              </label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="country" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Country *
              </label>
              <input
                id="country"
                type="text"
                required
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
            <fieldset>
              <legend className="mb-3 text-xs font-black tracking-widest text-[#326949] uppercase">
                Product Required *
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {PRODUCT_OPTIONS.map((product) => (
                  <label key={product} className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#326949]/30 bg-[#132A1C] p-4 text-sm font-bold text-white transition-all hover:border-[#37F713]/50 has-[:checked]:border-[#37F713] has-[:checked]:bg-[#37F713]/10">
                    <input
                      type="radio"
                      name="product"
                      value={product}
                      required
                      checked={form.product === product}
                      onChange={() => update("product", product)}
                      className="h-4 w-4 accent-[#37F713]"
                    />
                    {product}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-black tracking-widest text-[#326949] uppercase">
                Grade Required *
              </legend>
              <div className="flex flex-wrap gap-3">
                {(["Grade 1", "Grade 2", "Both"] as const).map((grade) => (
                  <label key={grade} className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#326949]/30 bg-[#132A1C] px-5 py-3 text-sm font-bold text-white transition-all hover:border-[#37F713]/50 has-[:checked]:border-[#37F713] has-[:checked]:bg-[#37F713]/10">
                    <input
                      type="radio"
                      name="grade"
                      value={grade}
                      required
                      checked={form.grade === grade}
                      onChange={() => update("grade", grade)}
                      className="h-4 w-4 accent-[#37F713]"
                    />
                    {grade}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="quantity" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Quantity (MT) *
              </label>
              <input
                id="quantity"
                type="number"
                min="0.1"
                step="0.1"
                required
                value={form.quantity}
                onChange={(e) => update("quantity", e.target.value)}
                className={inputClass}
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-xs font-black tracking-widest text-[#326949] uppercase">
                Packing *
              </legend>
              <div className="flex flex-wrap gap-3">
                {(["50KG", "90KG", "Both"] as const).map((pack) => (
                  <label key={pack} className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#326949]/30 bg-[#132A1C] px-5 py-3 text-sm font-bold text-white transition-all hover:border-[#37F713]/50 has-[:checked]:border-[#37F713] has-[:checked]:bg-[#37F713]/10">
                    <input
                      type="radio"
                      name="packing"
                      value={pack}
                      required
                      checked={form.packing === pack}
                      onChange={() => update("packing", pack)}
                      className="h-4 w-4 accent-[#37F713]"
                    />
                    {pack === "Both" ? "Both" : `${pack} Bags`}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
            <fieldset>
              <legend className="mb-3 text-xs font-black tracking-widest text-[#326949] uppercase">
                Delivery Preference *
              </legend>
              <div className="space-y-3">
                {(
                  [
                    ["Delivery", "Delivery to our premises"],
                    ["Warehouse Pickup", "Warehouse pickup (Nairobi)"],
                    ["Export", "Export / International freight"],
                  ] as const
                ).map(([value, label]) => (
                  <label key={value} className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#326949]/30 bg-[#132A1C] p-4 text-sm font-bold text-white transition-all hover:border-[#37F713]/50 has-[:checked]:border-[#37F713] has-[:checked]:bg-[#37F713]/10">
                    <input
                      type="radio"
                      name="delivery"
                      value={value}
                      required
                      checked={form.delivery === value}
                      onChange={() => update("delivery", value)}
                      className="h-4 w-4 accent-[#37F713]"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="destination" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Destination *
              </label>
              <input
                id="destination"
                type="text"
                required
                value={form.destination}
                onChange={(e) => update("destination", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="notes" className="mb-2 block text-xs font-black tracking-widest text-[#326949] uppercase">
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={4}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className={`${inputClass} resize-y min-h-[120px]`}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-col justify-end pt-6 border-t border-[#326949]/30">
          {error && (
            <div className="mb-6 rounded-xl bg-red-50 px-6 py-4 text-sm font-medium text-red-600 border border-red-200">
              {error}
            </div>
          )}

          {submitted ? (
            <div className="flex flex-col items-center text-center animate-in zoom-in duration-500 py-12">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#37F713]/20 text-[#326949]">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-black uppercase tracking-widest text-white">Enquiry Sent</h3>
              <p className="text-sm font-medium text-gray-400 max-w-md">
                Thank you. Your message has been sent directly to the SAF Agro Trading Floor. We will respond within 24 hours.
              </p>
            </div>
          ) : (
            <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#326949]/50 px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-300 transition-all hover:bg-[#132A1C] hover:text-white"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-3 rounded-xl bg-[#37F713] px-10 py-4 text-sm font-black uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:bg-[#326949] hover:text-white hover:shadow-[0_0_25px_rgba(55,247,19,0.3)] disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
              >
                {step < 3 ? (
                  <>Next Step <span className="transition-transform group-hover:translate-x-1">&rarr;</span></>
                ) : (
                  isSubmitting ? "Sending..." : "Submit Enquiry"
                )}
              </button>
            </div>
          )}

        <div className="mt-6 text-center text-xs font-medium text-[#326949]">
          <p>Form submits to: {ENQUIRY_EMAIL}</p>
          {!submitted && (
            <p className="mt-2">
              We respond within 24 hours on business days.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
