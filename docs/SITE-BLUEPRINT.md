# SAF Agro Products (K) Ltd — Site Blueprint

**Built by Cres Dynamics** | International Agro-Commodities Platform  
**Domain:** safagroproducts.com

---

## Brand System

### Colour Palette

| Token            | Hex       | Usage                                      |
|------------------|-----------|--------------------------------------------|
| Primary Green    | `#1A5C2A` | Dominant brand colour                      |
| Secondary Grey   | `#8C8C8C` | Logo slash, accent elements                |
| Black            | `#1C1C1C` | Text, headers                              |
| White            | `#FFFFFF` | Backgrounds, clean space                   |
| Accent Green     | `#2E7D32` | Hover states, buttons, highlights          |
| Light Grey       | `#F5F5F5` | Section backgrounds, cards                 |

### Typography

| Role         | Style                                              |
|--------------|----------------------------------------------------|
| Headlines    | Bold, uppercase, tracked — authority & precision   |
| Body         | Clean sans-serif — readable at international level |
| Accent text  | Green or grey — labels, tags, specifications       |

### Design Tone

International commodity trading firm. Precision, trust, scale.  
**Reference:** Bloomberg meets agriculture — not a farm shop.  
**Positioning:** B2B supply chain company with global reach.

---

## Full Site Structure

```
safagroproducts.com
│
├── /                          → Homepage
├── /about                     → About SAF Agro
├── /products                  → Products overview / catalogue
│   ├── /products/maize
│   │   ├── /products/maize/grade-1
│   │   └── /products/maize/grade-2
│   ├── /products/soya-beans
│   │   ├── /products/soya-beans/grade-1
│   │   └── /products/soya-beans/grade-2
│   ├── /products/green-grams
│   │   ├── /products/green-grams/grade-1
│   │   └── /products/green-grams/grade-2
│   ├── /products/pigeon-peas
│   │   ├── /products/pigeon-peas/grade-1
│   │   └── /products/pigeon-peas/grade-2
│   ├── /products/soya-meal
│   │   ├── /products/soya-meal/grade-1
│   │   └── /products/soya-meal/grade-2
│   └── /products/cow-peas
│       ├── /products/cow-peas/grade-1
│       └── /products/cow-peas/grade-2
├── /how-we-work               → Process & operations
├── /services                  → Services offered
└── /contact                   → Contact & enquiries
```

---

## Page Inventory

### Top-Level Pages (6)

| Route           | Slug           | Purpose                          |
|-----------------|----------------|----------------------------------|
| Homepage        | `/`            | Hero, value prop, product highlights, CTA |
| About           | `/about`       | Company story, mission, credentials |
| Products        | `/products`    | Full product catalogue index     |
| How We Work     | `/how-we-work` | Supply chain, sourcing, quality  |
| Services        | `/services`    | Trading, logistics, support      |
| Contact         | `/contact`     | Enquiry form, offices, channels  |

### Product Categories (6)

| Category      | Slug            | Grades        |
|---------------|-----------------|---------------|
| Maize         | `maize`         | Grade 1, 2    |
| Soya Beans    | `soya-beans`    | Grade 1, 2    |
| Green Grams   | `green-grams`   | Grade 1, 2    |
| Pigeon Peas   | `pigeon-peas`   | Grade 1, 2    |
| Soya Meal     | `soya-meal`     | Grade 1, 2    |
| Cow Peas      | `cow-peas`      | Grade 1, 2    |

**Total product detail pages:** 12 (6 categories × 2 grades)  
**Total site pages:** 19 (6 top-level + 1 products index + 6 category pages + 12 grade pages — *category landing pages TBD*)

---

## Product URL Matrix

| Product       | Category URL                  | Grade 1 URL                              | Grade 2 URL                              |
|---------------|-------------------------------|------------------------------------------|------------------------------------------|
| Maize         | `/products/maize`             | `/products/maize/grade-1`                | `/products/maize/grade-2`                |
| Soya Beans    | `/products/soya-beans`        | `/products/soya-beans/grade-1`           | `/products/soya-beans/grade-2`           |
| Green Grams   | `/products/green-grams`       | `/products/green-grams/grade-1`          | `/products/green-grams/grade-2`          |
| Pigeon Peas   | `/products/pigeon-peas`       | `/products/pigeon-peas/grade-1`          | `/products/pigeon-peas/grade-2`          |
| Soya Meal     | `/products/soya-meal`         | `/products/soya-meal/grade-1`            | `/products/soya-meal/grade-2`            |
| Cow Peas      | `/products/cow-peas`          | `/products/cow-peas/grade-1`             | `/products/cow-peas/grade-2`             |

---

## Folder Structure (Project)

```
SAF-AGRO/
│
├── assets/
│   ├── logo/                  → LOGO.png (brand mark)
│   ├── images/                → Photography, hero, product shots
│   └── icons/                 → UI icons, favicons
│
├── design/
│   └── brand/                 → Colour tokens, type scale, design refs
│
├── docs/
│   └── SITE-BLUEPRINT.md      → This document
│
└── pages/                     → Route-mirrored page slots (no code yet)
    ├── home/
    ├── about/
    ├── how-we-work/
    ├── services/
    ├── contact/
    └── products/
        ├── index/
        ├── maize/
        │   ├── index/
        │   ├── grade-1/
        │   └── grade-2/
        ├── soya-beans/
        │   ├── index/
        │   ├── grade-1/
        │   └── grade-2/
        ├── green-grams/
        │   ├── index/
        │   ├── grade-1/
        │   └── grade-2/
        ├── pigeon-peas/
        │   ├── index/
        │   ├── grade-1/
        │   └── grade-2/
        ├── soya-meal/
        │   ├── index/
        │   ├── grade-1/
        │   └── grade-2/
        └── cow-peas/
            ├── index/
            ├── grade-1/
            └── grade-2/
```

---

## Navigation (Planned)

### Primary Nav
- Home
- About
- Products (dropdown → 6 categories)
- How We Work
- Services
- Contact

### Products Dropdown
- Maize
- Soya Beans
- Green Grams
- Pigeon Peas
- Soya Meal
- Cow Peas

### Footer (Planned)
- Company links (About, How We Work, Services)
- Product quick links
- Contact details
- Legal (TBD)

---

## Status

- [x] Brand system defined
- [x] Site map defined
- [x] Folder structure created
- [ ] Tech stack selection
- [ ] Page content & copy
- [ ] Component library
- [ ] Implementation

---

*Awaiting next steps from Cres Dynamics build session.*
