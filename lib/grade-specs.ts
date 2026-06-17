import type { GradeSlug } from "./product-details";

export type SpecRow = { label: string; value: string };

export type GradeSpec = {
  heroImage: string;
  heroTagline: string;
  identification: {
    product: string;
    gradeLabel: string;
    scientificName: string;
    hsCode: string;
  };
  qualityParameters: SpecRow[];
  cleaning: SpecRow[];
  origin: SpecRow[];
  availability: SpecRow[];
  quantity: SpecRow[];
  packaging: SpecRow[];
  delivery: SpecRow[];
  whyGrade: { title: string; description: string }[];
  documents: string[];
};

type SpecKey = `${string}/${GradeSlug}`;

const specs: Record<SpecKey, GradeSpec> = {
  "maize/grade-1": {
    heroImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&q=80",
    heroTagline: "Premium Quality | Machine Cleaned | Export Ready",
    identification: {
      product: "Maize (Corn)",
      gradeLabel: "Grade 1 — Premium",
      scientificName: "Zea mays L.",
      hsCode: "1005.90.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 13.5%" },
      { label: "Foreign Matter", value: "Maximum 0.5%" },
      { label: "Broken Grains", value: "Maximum 2%" },
      { label: "Aflatoxin", value: "< 10 ppb (parts per billion)" },
      { label: "Colour", value: "Uniform yellow / white" },
      { label: "Smell", value: "Fresh, free from off-odours" },
      { label: "Insect Damage", value: "Maximum 0.2%" },
    ],
    cleaning: [
      { label: "Processing", value: "Machine Cleaned" },
      { label: "Sortex", value: "Available on request" },
      { label: "Quality Check", value: "Pre-shipment inspection available" },
    ],
    origin: [
      {
        label: "Primary",
        value: "Kenya — Rift Valley, Western, Nyanza",
      },
      {
        label: "Secondary",
        value: "Tanzania — Iringa, Mbeya",
      },
      {
        label: "Traceability",
        value: "Farm-level sourcing records available",
      },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "May–July · November–January" },
      { label: "Lead Time", value: "7–14 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      {
        label: "Markings",
        value: "Customer brand/logo printing on bags available",
      },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      {
        label: "Payment Terms",
        value: "Proforma Invoice basis — enquire for terms",
      },
      {
        label: "Documentation",
        value:
          "Phytosanitary Certificate, Certificate of Origin, Packing List, Commercial Invoice",
      },
    ],
    whyGrade: [
      {
        title: "Export Certified",
        description:
          "Grade 1 meets international food safety standards for export to Mauritius, UK, and beyond.",
      },
      {
        title: "Machine Cleaned",
        description:
          "Every batch passes through our cleaning facility — removing dust, stones, and foreign matter.",
      },
      {
        title: "Consistent Supply",
        description:
          "We maintain Grade 1 stock year-round with verified farm contracts across two countries.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Packing List",
      "Commercial Invoice",
      "Pre-Shipment Inspection Report (SGS/KEBS on request)",
      "Bill of Lading (for export shipments)",
    ],
  },

  "maize/grade-2": {
    heroImage:
      "https://images.unsplash.com/photo-1551754650-d80d9d13f0b4?w=1920&q=80",
    heroTagline: "Standard Quality | Farm Cleaned | Processing Ready",
    identification: {
      product: "Maize (Corn)",
      gradeLabel: "Grade 2 — Standard",
      scientificName: "Zea mays L.",
      hsCode: "1005.90.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 14.5%" },
      { label: "Foreign Matter", value: "Maximum 1.5%" },
      { label: "Broken Grains", value: "Maximum 4%" },
      { label: "Aflatoxin", value: "< 20 ppb (parts per billion)" },
      { label: "Colour", value: "Good yellow / white" },
      { label: "Smell", value: "Normal, free from mould" },
      { label: "Insect Damage", value: "Maximum 0.5%" },
    ],
    cleaning: [
      { label: "Processing", value: "Farm Cleaned" },
      { label: "Sortex", value: "Available on request for large orders" },
      { label: "Quality Check", value: "Batch inspection on dispatch" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Rift Valley, Western, Nyanza" },
      { label: "Secondary", value: "Tanzania — Iringa, Mbeya" },
      { label: "Traceability", value: "Supplier records maintained" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "May–July · November–January" },
      { label: "Lead Time", value: "5–10 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Standard SAF Agro bag markings" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      {
        label: "Payment Terms",
        value: "Proforma Invoice basis — enquire for terms",
      },
      {
        label: "Documentation",
        value:
          "Certificate of Origin, Packing List, Commercial Invoice",
      },
    ],
    whyGrade: [
      {
        title: "Cost Effective",
        description:
          "Grade 2 offers competitive pricing for local milling, animal feed, and flour production.",
      },
      {
        title: "Reliable Volume",
        description:
          "Higher availability during peak harvest with consistent domestic supply chains.",
      },
      {
        title: "Flexible Orders",
        description:
          "Ideal for processors who clean and grade further in their own facilities.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Delivery Note",
    ],
  },

  "soya-beans/grade-1": {
    heroImage:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80",
    heroTagline: "Premium Quality | High Protein | Export Ready",
    identification: {
      product: "Soya Beans",
      gradeLabel: "Grade 1 — Premium",
      scientificName: "Glycine max",
      hsCode: "1201.90.00",
    },
    qualityParameters: [
      { label: "Protein Content", value: "Minimum 38%" },
      { label: "Moisture Content", value: "Maximum 12%" },
      { label: "Foreign Matter", value: "Maximum 0.5%" },
      { label: "Broken Beans", value: "Maximum 2%" },
      { label: "Colour", value: "Uniform yellow" },
      { label: "Smell", value: "Fresh, free from off-odours" },
      { label: "Insect Damage", value: "Maximum 0.2%" },
    ],
    cleaning: [
      { label: "Processing", value: "Machine Cleaned & Sorted" },
      { label: "Sortex", value: "Available on request" },
      { label: "Quality Check", value: "Pre-shipment inspection available" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Rift Valley, Western Kenya" },
      { label: "Secondary", value: "Tanzania — Morogoro, Iringa, Mbeya" },
      { label: "Traceability", value: "Farm-level sourcing records available" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "April–June · September–November" },
      { label: "Lead Time", value: "7–14 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Customer brand/logo printing on bags available" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      {
        label: "Documentation",
        value:
          "Phytosanitary Certificate, Certificate of Origin, Packing List, Commercial Invoice",
      },
    ],
    whyGrade: [
      {
        title: "High Protein",
        description:
          "Grade 1 soya beans meet premium protein thresholds for crushing and feed formulation.",
      },
      {
        title: "Export Grade",
        description:
          "Suitable for international buyers requiring strict quality and cleanliness standards.",
      },
      {
        title: "Verified Supply",
        description:
          "Sourced from certified farms with documented quality at origin.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Packing List",
      "Commercial Invoice",
      "Pre-Shipment Inspection Report (SGS/KEBS on request)",
      "Bill of Lading (for export shipments)",
    ],
  },

  "soya-beans/grade-2": {
    heroImage:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80",
    heroTagline: "Standard Quality | Farm Cleaned | Industrial Use",
    identification: {
      product: "Soya Beans",
      gradeLabel: "Grade 2 — Standard",
      scientificName: "Glycine max",
      hsCode: "1201.90.00",
    },
    qualityParameters: [
      { label: "Protein Content", value: "Minimum 35%" },
      { label: "Moisture Content", value: "Maximum 13%" },
      { label: "Foreign Matter", value: "Maximum 1.5%" },
      { label: "Broken Beans", value: "Maximum 4%" },
      { label: "Colour", value: "Good yellow" },
      { label: "Smell", value: "Normal, free from mould" },
      { label: "Insect Damage", value: "Maximum 0.5%" },
    ],
    cleaning: [
      { label: "Processing", value: "Farm Cleaned" },
      { label: "Sortex", value: "Available on request for large orders" },
      { label: "Quality Check", value: "Batch inspection on dispatch" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Rift Valley, Western Kenya" },
      { label: "Secondary", value: "Tanzania — Morogoro, Iringa, Mbeya" },
      { label: "Traceability", value: "Supplier records maintained" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "April–June · September–November" },
      { label: "Lead Time", value: "5–10 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Standard SAF Agro bag markings" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      { label: "Documentation", value: "Certificate of Origin, Packing List, Commercial Invoice" },
    ],
    whyGrade: [
      {
        title: "Industrial Grade",
        description: "Ideal for local crushing, feed mills, and processing operations.",
      },
      {
        title: "Competitive Pricing",
        description: "Cost-effective option for high-volume domestic buyers.",
      },
      {
        title: "Steady Availability",
        description: "Consistent supply from established farm networks across East Africa.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Delivery Note",
    ],
  },

  "green-grams/grade-1": {
    heroImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&q=80",
    heroTagline: "Premium Quality | Export Grade | Uniform Green",
    identification: {
      product: "Green Grams (Mung Beans)",
      gradeLabel: "Grade 1 — Premium",
      scientificName: "Vigna radiata",
      hsCode: "0713.31.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 12%" },
      { label: "Foreign Matter", value: "Maximum 0.5%" },
      { label: "Broken Grains", value: "Maximum 1%" },
      { label: "Colour", value: "Uniform green" },
      { label: "Smell", value: "Fresh, free from off-odours" },
      { label: "Insect Damage", value: "Maximum 0.2%" },
      { label: "Whole Grains", value: "Minimum 98%" },
    ],
    cleaning: [
      { label: "Processing", value: "Machine Cleaned" },
      { label: "Sortex", value: "Available on request" },
      { label: "Quality Check", value: "Pre-shipment inspection available" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Eastern, Coast, Rift Valley" },
      { label: "Secondary", value: "Tanzania — Morogoro, Dodoma, Shinyanga" },
      { label: "Traceability", value: "Farm-level sourcing records available" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "March–May · August–October" },
      { label: "Lead Time", value: "7–14 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Customer brand/logo printing on bags available" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      {
        label: "Documentation",
        value:
          "Phytosanitary Certificate, Certificate of Origin, Packing List, Commercial Invoice",
      },
    ],
    whyGrade: [
      {
        title: "Export Quality",
        description: "Premium export quality meeting international pulse standards.",
      },
      {
        title: "Uniform Appearance",
        description: "Consistent green colour and whole grains for premium retail and food manufacturing.",
      },
      {
        title: "Dal Milling Ready",
        description: "Cleaned and sorted for immediate processing into dal and flour products.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Packing List",
      "Commercial Invoice",
      "Pre-Shipment Inspection Report (SGS/KEBS on request)",
      "Bill of Lading (for export shipments)",
    ],
  },

  "green-grams/grade-2": {
    heroImage:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&q=80",
    heroTagline: "Standard Quality | Farm Cleaned | Domestic Trade",
    identification: {
      product: "Green Grams (Mung Beans)",
      gradeLabel: "Grade 2 — Standard",
      scientificName: "Vigna radiata",
      hsCode: "0713.31.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 13%" },
      { label: "Foreign Matter", value: "Maximum 1.5%" },
      { label: "Broken Grains", value: "Maximum 3%" },
      { label: "Colour", value: "Good green" },
      { label: "Smell", value: "Normal, free from mould" },
      { label: "Insect Damage", value: "Maximum 0.5%" },
      { label: "Whole Grains", value: "Minimum 95%" },
    ],
    cleaning: [
      { label: "Processing", value: "Farm Cleaned" },
      { label: "Sortex", value: "Available on request for large orders" },
      { label: "Quality Check", value: "Batch inspection on dispatch" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Eastern, Coast, Rift Valley" },
      { label: "Secondary", value: "Tanzania — Morogoro, Dodoma, Shinyanga" },
      { label: "Traceability", value: "Supplier records maintained" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "March–May · August–October" },
      { label: "Lead Time", value: "5–10 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Standard SAF Agro bag markings" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      { label: "Documentation", value: "Certificate of Origin, Packing List, Commercial Invoice" },
    ],
    whyGrade: [
      {
        title: "Domestic Trade",
        description: "Well-suited for local markets, wholesalers, and regional distributors.",
      },
      {
        title: "Value Pricing",
        description: "Competitive rates for dal millers and food processors.",
      },
      {
        title: "Good Availability",
        description: "Reliable volumes from dual-country sourcing networks.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Delivery Note",
    ],
  },

  "pigeon-peas/grade-1": {
    heroImage:
      "https://images.unsplash.com/photo-1515547692169-1967b17049b0?w=1920&q=80",
    heroTagline: "Premium Quality | Uniform Colour | Export Ready",
    identification: {
      product: "Pigeon Peas (Toor Dal)",
      gradeLabel: "Grade 1 — Premium",
      scientificName: "Cajanus cajan",
      hsCode: "0713.60.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 12%" },
      { label: "Foreign Matter", value: "Maximum 0.5%" },
      { label: "Broken Peas", value: "Maximum 2%" },
      { label: "Colour", value: "Uniform colour grade" },
      { label: "Smell", value: "Fresh, free from off-odours" },
      { label: "Insect Damage", value: "Maximum 0.2%" },
      { label: "Whole Peas", value: "Minimum 97%" },
    ],
    cleaning: [
      { label: "Processing", value: "Machine Cleaned" },
      { label: "Sortex", value: "Available on request" },
      { label: "Quality Check", value: "Pre-shipment inspection available" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Eastern, Coast, Lower Eastern" },
      { label: "Secondary", value: "Tanzania — Dodoma, Singida, Tabora" },
      { label: "Traceability", value: "Farm-level sourcing records available" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "February–April · July–September" },
      { label: "Lead Time", value: "7–14 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Customer brand/logo printing on bags available" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      {
        label: "Documentation",
        value:
          "Phytosanitary Certificate, Certificate of Origin, Packing List, Commercial Invoice",
      },
    ],
    whyGrade: [
      {
        title: "Colour Consistency",
        description: "Uniform colour grading essential for export and premium dal milling.",
      },
      {
        title: "Export Standards",
        description: "Meets international pulse quality requirements for Mauritius and UK markets.",
      },
      {
        title: "Whole & Clean",
        description: "Machine cleaned with minimal breakage for maximum yield in processing.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Packing List",
      "Commercial Invoice",
      "Pre-Shipment Inspection Report (SGS/KEBS on request)",
      "Bill of Lading (for export shipments)",
    ],
  },

  "pigeon-peas/grade-2": {
    heroImage:
      "https://images.unsplash.com/photo-1515547692169-1967b17049b0?w=1920&q=80",
    heroTagline: "Standard Quality | Multiple Colours | Processing Grade",
    identification: {
      product: "Pigeon Peas (Toor Dal)",
      gradeLabel: "Grade 2 — Standard",
      scientificName: "Cajanus cajan",
      hsCode: "0713.60.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 13%" },
      { label: "Foreign Matter", value: "Maximum 1.5%" },
      { label: "Broken Peas", value: "Maximum 4%" },
      { label: "Colour", value: "Multiple colour grades accepted" },
      { label: "Smell", value: "Normal, free from mould" },
      { label: "Insect Damage", value: "Maximum 0.5%" },
      { label: "Whole Peas", value: "Minimum 93%" },
    ],
    cleaning: [
      { label: "Processing", value: "Farm Cleaned" },
      { label: "Sortex", value: "Available on request for large orders" },
      { label: "Quality Check", value: "Batch inspection on dispatch" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Eastern, Coast, Lower Eastern" },
      { label: "Secondary", value: "Tanzania — Dodoma, Singida, Tabora" },
      { label: "Traceability", value: "Supplier records maintained" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "February–April · July–September" },
      { label: "Lead Time", value: "5–10 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Standard SAF Agro bag markings" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      { label: "Documentation", value: "Certificate of Origin, Packing List, Commercial Invoice" },
    ],
    whyGrade: [
      {
        title: "Feed & Processing",
        description: "Ideal for animal feed blending and local dal milling operations.",
      },
      {
        title: "Flexible Grading",
        description: "Accepts natural colour variation for cost-effective bulk supply.",
      },
      {
        title: "Volume Supply",
        description: "Higher tonnage availability for domestic processors.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Delivery Note",
    ],
  },

  "soya-meal/grade-1": {
    heroImage:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80",
    heroTagline: "Premium Quality | High Protein | Feed Grade",
    identification: {
      product: "Soya Meal",
      gradeLabel: "Grade 1 — Premium",
      scientificName: "Processed soya (Glycine max)",
      hsCode: "2304.00.00",
    },
    qualityParameters: [
      { label: "Protein Content", value: "Minimum 44%" },
      { label: "Moisture Content", value: "Maximum 12%" },
      { label: "Fibre Content", value: "Maximum 7%" },
      { label: "Fat Content", value: "Maximum 2%" },
      { label: "Texture", value: "Fine, uniform" },
      { label: "Smell", value: "Fresh, free from rancidity" },
      { label: "Urease Activity", value: "Within acceptable feed limits" },
    ],
    cleaning: [
      { label: "Processing", value: "Industrial processed & screened" },
      { label: "Sortex", value: "N/A — meal product" },
      { label: "Quality Check", value: "Lab-tested batch certificates provided" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Nairobi processing hub, Rift Valley supply" },
      { label: "Secondary", value: "N/A" },
      { label: "Traceability", value: "Batch processing records available" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "Continuous production" },
      { label: "Lead Time", value: "7–14 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Customer brand/logo printing on bags available" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      {
        label: "Documentation",
        value:
          "Certificate of Origin, Packing List, Commercial Invoice, Lab Analysis Report",
      },
    ],
    whyGrade: [
      {
        title: "High Protein",
        description: "≥44% protein content for premium poultry and aquaculture feed formulations.",
      },
      {
        title: "Lab Certified",
        description: "Every batch tested with certificates available on request.",
      },
      {
        title: "Consistent Texture",
        description: "Uniform fine meal for reliable feed mill blending and pelleting.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Lab Analysis Report",
      "Pre-Shipment Inspection Report (SGS/KEBS on request)",
      "Bill of Lading (for export shipments)",
    ],
  },

  "soya-meal/grade-2": {
    heroImage:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80",
    heroTagline: "Standard Quality | Feed Grade | Cost Effective",
    identification: {
      product: "Soya Meal",
      gradeLabel: "Grade 2 — Standard",
      scientificName: "Processed soya (Glycine max)",
      hsCode: "2304.00.00",
    },
    qualityParameters: [
      { label: "Protein Content", value: "Minimum 40%" },
      { label: "Moisture Content", value: "Maximum 13%" },
      { label: "Fibre Content", value: "Maximum 9%" },
      { label: "Fat Content", value: "Maximum 3%" },
      { label: "Texture", value: "Good, uniform" },
      { label: "Smell", value: "Normal, free from rancidity" },
      { label: "Urease Activity", value: "Within acceptable feed limits" },
    ],
    cleaning: [
      { label: "Processing", value: "Industrial processed & screened" },
      { label: "Sortex", value: "N/A — meal product" },
      { label: "Quality Check", value: "Quality documentation provided" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Nairobi processing hub, Rift Valley supply" },
      { label: "Secondary", value: "N/A" },
      { label: "Traceability", value: "Batch processing records available" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "Continuous production" },
      { label: "Lead Time", value: "5–10 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Standard SAF Agro bag markings" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      { label: "Documentation", value: "Certificate of Origin, Packing List, Commercial Invoice" },
    ],
    whyGrade: [
      {
        title: "Feed Mill Grade",
        description: "Suitable for general livestock and poultry feed production.",
      },
      {
        title: "Competitive Rates",
        description: "Cost-effective protein source for high-volume feed operations.",
      },
      {
        title: "Reliable Supply",
        description: "Year-round production from Kenya processing facility.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Delivery Note",
    ],
  },

  "cow-peas/grade-1": {
    heroImage:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=80",
    heroTagline: "Premium Quality | Export Grade | Whole Peas",
    identification: {
      product: "Cow Peas (Black-eyed Peas)",
      gradeLabel: "Grade 1 — Premium",
      scientificName: "Vigna unguiculata",
      hsCode: "0713.33.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 12%" },
      { label: "Foreign Matter", value: "Maximum 0.5%" },
      { label: "Broken Peas", value: "Maximum 2%" },
      { label: "Colour", value: "Uniform cream with eye" },
      { label: "Smell", value: "Fresh, free from off-odours" },
      { label: "Insect Damage", value: "Maximum 0.2%" },
      { label: "Whole Peas", value: "Minimum 97%" },
    ],
    cleaning: [
      { label: "Processing", value: "Machine Cleaned" },
      { label: "Sortex", value: "Available on request" },
      { label: "Quality Check", value: "Pre-shipment inspection available" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Eastern, Coast, Western" },
      { label: "Secondary", value: "Tanzania — Mwanza, Shinyanga, Tabora" },
      { label: "Traceability", value: "Farm-level sourcing records available" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "March–May · September–November" },
      { label: "Lead Time", value: "7–14 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Customer brand/logo printing on bags available" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      {
        label: "Documentation",
        value:
          "Phytosanitary Certificate, Certificate of Origin, Packing List, Commercial Invoice",
      },
    ],
    whyGrade: [
      {
        title: "Human Consumption",
        description: "Premium grade suitable for export and food retail markets.",
      },
      {
        title: "Whole & Uniform",
        description: "Machine cleaned with consistent cream colour and intact eye marking.",
      },
      {
        title: "Export Ready",
        description: "Meets international standards for pulse exports to Mauritius and UK.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Phytosanitary Certificate",
      "Packing List",
      "Commercial Invoice",
      "Pre-Shipment Inspection Report (SGS/KEBS on request)",
      "Bill of Lading (for export shipments)",
    ],
  },

  "cow-peas/grade-2": {
    heroImage:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=80",
    heroTagline: "Standard Quality | Feed & Processing Grade",
    identification: {
      product: "Cow Peas (Black-eyed Peas)",
      gradeLabel: "Grade 2 — Standard",
      scientificName: "Vigna unguiculata",
      hsCode: "0713.33.00",
    },
    qualityParameters: [
      { label: "Moisture Content", value: "Maximum 13%" },
      { label: "Foreign Matter", value: "Maximum 1.5%" },
      { label: "Broken Peas", value: "Maximum 4%" },
      { label: "Colour", value: "Good colour" },
      { label: "Smell", value: "Normal, free from mould" },
      { label: "Insect Damage", value: "Maximum 0.5%" },
      { label: "Whole Peas", value: "Minimum 93%" },
    ],
    cleaning: [
      { label: "Processing", value: "Farm Cleaned" },
      { label: "Sortex", value: "Available on request for large orders" },
      { label: "Quality Check", value: "Batch inspection on dispatch" },
    ],
    origin: [
      { label: "Primary", value: "Kenya — Eastern, Coast, Western" },
      { label: "Secondary", value: "Tanzania — Mwanza, Shinyanga, Tabora" },
      { label: "Traceability", value: "Supplier records maintained" },
    ],
    availability: [
      { label: "Current Status", value: "✅ In Stock" },
      { label: "Supply Mode", value: "Year-round" },
      { label: "Seasonal Peak", value: "March–May · September–November" },
      { label: "Lead Time", value: "5–10 business days from confirmed order" },
    ],
    quantity: [
      { label: "Minimum Order", value: "1 Metric Tonne (domestic)" },
      { label: "", value: "20 Metric Tonnes (export / international)" },
      { label: "Available Stock", value: "Enquire for current tonnage" },
      { label: "Unit", value: "Metric Tonnes (MT)" },
    ],
    packaging: [
      { label: "Standard Pack", value: "50 KG polypropylene bags" },
      { label: "Bulk Pack", value: "90 KG polypropylene bags" },
      { label: "Custom Packing", value: "Available for orders above 20MT" },
      { label: "Markings", value: "Standard SAF Agro bag markings" },
    ],
    delivery: [
      {
        label: "Options",
        value:
          "→ Delivery to buyer premises (Kenya-wide)\n→ International freight (TZ, Mauritius, UK)\n→ Warehouse pickup — Nairobi facility",
      },
      { label: "Payment Terms", value: "Proforma Invoice basis — enquire for terms" },
      { label: "Documentation", value: "Certificate of Origin, Packing List, Commercial Invoice" },
    ],
    whyGrade: [
      {
        title: "Dual Purpose",
        description: "Suitable for both human food processing and animal feed blending.",
      },
      {
        title: "Value Supply",
        description: "Competitive pricing for local traders and processors.",
      },
      {
        title: "Good Volumes",
        description: "Steady availability from Kenya and Tanzania farm networks.",
      },
    ],
    documents: [
      "Certificate of Origin",
      "Packing List",
      "Commercial Invoice",
      "Delivery Note",
    ],
  },
};

export function getGradeSpec(slug: string, grade: GradeSlug): GradeSpec | undefined {
  return specs[`${slug}/${grade}` as SpecKey];
}

export const ENQUIRY_EMAIL = "info@safagroproducts.com";
export const ENQUIRY_PHONE = "+254 XXX XXX XXX";
export const WHATSAPP_URL = "https://wa.me/254000000000";
