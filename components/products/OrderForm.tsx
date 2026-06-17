"use client";

import { useState, type FormEvent } from "react";
import {
  ENQUIRY_EMAIL,
  ENQUIRY_PHONE,
  WHATSAPP_URL,
} from "@/lib/grade-specs";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Order Enquiry — ${productName} ${gradeName}`;
    const body = [
      `ORDER ENQUIRY — ${productName.toUpperCase()} ${gradeName.toUpperCase()}`,
      "─".repeat(40),
      "",
      `Full Name: ${form.fullName}`,
      `Company Name: ${form.companyName}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone}`,
      "",
      `Quantity Required: ${form.quantity} Metric Tonnes`,
      `Packing Preference: ${form.packing}`,
      `Delivery Option: ${form.delivery}`,
      `Destination: ${form.destination}`,
      "",
      `Additional Notes:`,
      form.notes,
    ].join("\n");

    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-light-grey bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-accent";

  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="border border-light-grey bg-white p-8 shadow-sm lg:p-10"
        >
          <h2 className="mb-2 text-lg font-bold tracking-widest text-brand-black uppercase">
            Order Enquiry — {productName} {gradeName}
          </h2>
          <hr className="mb-8 border-light-grey" />

          <div className="space-y-5">
            <div>
              <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Full Name
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
              <label htmlFor="companyName" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                value={form.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="country" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Country
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
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Email Address
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
              <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Phone / WhatsApp
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

            <div>
              <label htmlFor="quantity" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Quantity Required (Metric Tonnes)
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
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-xs font-semibold text-brand-black uppercase">
                Packing Preference
              </legend>
              <div className="flex flex-wrap gap-4">
                {(["50KG", "90KG", "Both"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-secondary">
                    <input
                      type="radio"
                      name="packing"
                      value={opt}
                      required
                      checked={form.packing === opt}
                      onChange={() => update("packing", opt)}
                      className="accent-primary"
                    />
                    {opt === "Both" ? "Both" : `${opt} Bags`}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 text-xs font-semibold text-brand-black uppercase">
                Delivery Option
              </legend>
              <div className="flex flex-wrap gap-4">
                {(["Delivery", "Warehouse Pickup", "Export"] as const).map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-secondary">
                    <input
                      type="radio"
                      name="delivery"
                      value={opt}
                      required
                      checked={form.delivery === opt}
                      onChange={() => update("delivery", opt)}
                      className="accent-primary"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="destination" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Destination
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
              <label htmlFor="notes" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-8 w-full justify-center sm:w-auto">
            Submit Enquiry →
          </button>

          {submitted && (
            <p className="mt-4 text-sm text-accent">
              Your email client should open with the enquiry pre-filled. If it
              doesn&apos;t, email us directly at {ENQUIRY_EMAIL}.
            </p>
          )}
        </form>

        <div className="mt-10 border-t border-secondary/30 pt-8 text-center text-sm text-secondary">
          <p className="mb-4 font-semibold text-brand-black">Or reach us directly:</p>
          <div className="flex flex-col items-center gap-2">
            <a href={`mailto:${ENQUIRY_EMAIL}`} className="hover:text-primary">
              📧 {ENQUIRY_EMAIL}
            </a>
            <a href={`tel:${ENQUIRY_PHONE.replace(/\s/g, "")}`} className="hover:text-primary">
              📞 {ENQUIRY_PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
