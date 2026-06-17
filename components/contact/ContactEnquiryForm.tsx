"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ENQUIRY_EMAIL } from "@/lib/grade-specs";
import { PRODUCT_OPTIONS, type ProductOption } from "@/lib/contact";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Product Enquiry — ${form.product} ${form.grade}`;
    const body = [
      "PRODUCT ENQUIRY FORM",
      "─".repeat(40),
      "",
      `Full Name: ${form.fullName}`,
      `Company / Organisation: ${form.company}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone}`,
      "",
      `Product Required: ${form.product}`,
      `Grade Required: ${form.grade}`,
      `Quantity (MT): ${form.quantity}`,
      `Packing: ${form.packing}`,
      `Delivery Preference: ${form.delivery}`,
      `Destination: ${form.destination}`,
      "",
      "Additional Notes:",
      form.notes,
    ].join("\n");

    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-light-grey bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors focus:border-accent";

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-light-grey bg-white p-8 shadow-sm lg:p-10"
    >
      <h2 className="mb-2 text-lg font-bold tracking-widest text-brand-black uppercase">
        Product Enquiry Form
      </h2>
      <hr className="mb-8 border-light-grey" />

      <div className="space-y-5">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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
          <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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
          <label htmlFor="country" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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

        <fieldset>
          <legend className="mb-2 text-xs font-semibold text-brand-black uppercase">
            Product Required *
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {PRODUCT_OPTIONS.map((product) => (
              <label key={product} className="flex items-center gap-2 text-sm text-secondary">
                <input
                  type="radio"
                  name="product"
                  value={product}
                  required
                  checked={form.product === product}
                  onChange={() => update("product", product)}
                  className="accent-primary"
                />
                {product}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-xs font-semibold text-brand-black uppercase">
            Grade Required *
          </legend>
          <div className="flex flex-wrap gap-4">
            {(["Grade 1", "Grade 2", "Both"] as const).map((grade) => (
              <label key={grade} className="flex items-center gap-2 text-sm text-secondary">
                <input
                  type="radio"
                  name="grade"
                  value={grade}
                  required
                  checked={form.grade === grade}
                  onChange={() => update("grade", grade)}
                  className="accent-primary"
                />
                {grade}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="quantity" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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
          <legend className="mb-2 text-xs font-semibold text-brand-black uppercase">
            Packing *
          </legend>
          <div className="flex flex-wrap gap-4">
            {(["50KG", "90KG", "Both"] as const).map((pack) => (
              <label key={pack} className="flex items-center gap-2 text-sm text-secondary">
                <input
                  type="radio"
                  name="packing"
                  value={pack}
                  required
                  checked={form.packing === pack}
                  onChange={() => update("packing", pack)}
                  className="accent-primary"
                />
                {pack === "Both" ? "Both" : `${pack} Bags`}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-xs font-semibold text-brand-black uppercase">
            Delivery Preference *
          </legend>
          <div className="space-y-2">
            {(
              [
                ["Delivery", "Delivery to our premises"],
                ["Warehouse Pickup", "Warehouse pickup (Nairobi)"],
                ["Export", "Export / International freight"],
              ] as const
            ).map(([value, label]) => (
              <label key={value} className="flex items-center gap-2 text-sm text-secondary">
                <input
                  type="radio"
                  name="delivery"
                  value={value}
                  required
                  checked={form.delivery === value}
                  onChange={() => update("delivery", value)}
                  className="accent-primary"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="destination" className="mb-1.5 block text-xs font-semibold text-brand-black uppercase">
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

      <div className="mt-8 border-t border-light-grey pt-6 text-xs text-secondary">
        <p>Form submits to: {ENQUIRY_EMAIL}</p>
        {submitted ? (
          <p className="mt-2 text-accent">
            Your email client should open with your enquiry. We respond within 24
            hours on business days.
          </p>
        ) : (
          <p className="mt-2">
            We respond within 24 hours on business days.
          </p>
        )}
      </div>
    </form>
  );
}
