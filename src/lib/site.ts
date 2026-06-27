/**
 * Single source of truth for site-wide constants. Founders can edit copy and
 * links here without touching component code.
 *
 * NOTE — placeholders flagged with `// TODO:` need real values from the founders.
 */
export const site = {
  name: "Tenure",
  domain: "tenurework.com",
  url: "https://www.tenurework.com",

  tagline: "The ERP that keeps the memory when the people change.",
  description:
    "Tenure is the operating system for university administrations and student organizations. Operations, money, events, and institutional memory live in one place — and an AI that has learned everything the role has done gets each new leader productive in days, not a semester.",

  // TODO: replace with the real scheduling link (Cal.com / Calendly).
  bookingUrl: "https://cal.com/tenure/intro",
  // TODO: replace with the real founders / contact inbox.
  email: "hello@tenurework.com",

  founders: [
    { name: "Almamy Diaby", role: "Co-founder" },
    { name: "Satvik Adyanthaya", role: "Co-founder" },
  ],

  origin: {
    school: "Simon Business School",
    university: "University of Rochester",
    partner: "Simon's Office of Student Engagement",
  },

  pilot: {
    season: "Fall 2026",
    orgCount: 6,
  },

  nav: [
    { label: "Product", href: "/product" },
    { label: "Story", href: "/story" },
    { label: "Pilot", href: "/pilot" },
  ],

  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],

  // TODO: replace with the real social profiles.
  socials: {
    linkedin: "https://www.linkedin.com/company/tenurework",
    x: "https://x.com/tenurework",
  },

  supporters: [
    {
      name: "Startup Wednesday",
      src: "/logos/startup-wednesday.png",
      width: 2000,
      height: 563,
    },
    {
      name: "Simon Business School",
      src: "/logos/simon-business-school.png",
      width: 1000,
      height: 625,
    },
  ],
} as const;

export type Site = typeof site;
