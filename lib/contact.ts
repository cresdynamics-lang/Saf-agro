export const OFFICE_ADDRESS = {
  line1: "Enterprise Road, Industrial Area",
  city: "Nairobi, Kenya",
};

export const BUSINESS_HOURS = [
  { days: "Monday – Friday", hours: "8:00AM – 5:30PM EAT" },
  { days: "Saturday", hours: "9:00AM – 1:00PM EAT" },
];

export const MARKETS_SERVED = [
  { flag: "🇰🇪", code: "ke", name: "Kenya" },
  { flag: "🇹🇿", code: "tz", name: "Tanzania" },
  { flag: "🇲🇺", code: "mu", name: "Mauritius" },
  { flag: "🇬🇧", code: "gb", name: "UK" },
];

export const PRODUCT_OPTIONS = [
  "Maize",
  "Soya Beans",
  "Green Grams",
  "Pigeon Peas",
  "Soya Meal",
  "Cow Peas",
  "Multiple Products",
] as const;

export type ProductOption = (typeof PRODUCT_OPTIONS)[number];
