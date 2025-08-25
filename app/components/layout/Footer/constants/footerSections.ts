export type FooterSectionConfig = {
  titleKey: string;
  items: { nameKey: string; href: string }[];
};

export const footerSections: FooterSectionConfig[] = [
  {
    titleKey: "company",
    items: [
      { nameKey: "howItWorks", href: "/how-it-works" },
      { nameKey: "privacyPolicy", href: "/legal/privacy-policy" },
      { nameKey: "refundPolicy", href: "/legal/refund-policy" },
      { nameKey: "contact", href: "/contact" },
    ],
  },
  {
    titleKey: "mentorships",
    items: [
      { nameKey: "psp", href: "/psp-mentorship" },
      { nameKey: "base", href: "/base-mentorship" },
      { nameKey: "bootcamp", href: "/bootcamp-web3" },
    ],
  },
  {
    titleKey: "partnerships",
    items: [
      { nameKey: "foundersInvestors", href: "/for-founders-and-investors" },
      { nameKey: "hire", href: "/want-to-hire" },
    ],
  },
  {
    titleKey: "evolution",
    items: [
      { nameKey: "internationalize", href: "/want-to-internationalize" },
      { nameKey: "expansion", href: "/expansion" },
    ],
  },
];
