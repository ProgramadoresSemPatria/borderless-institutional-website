import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `${process.env.BASE_URL}`;
  const pages = [
    "",
    "base-mentorship",
    "bio",
    "bootcamp-web3",
    "confirmation-call",
    "confirmation-call-base",
    "confirmation-call-psp",
    "contact",
    "expansion",
    "for-founders-and-investors",
    "how-it-works",
    "legal/privacy-policy",
    "legal/terms-of-service",
    "legal/refund-policy",
    "psp-mentorship",
    "want-to-hire",
    "want-to-hire/form",
    "want-to-internationalize",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/pt${page && `/${page}`}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        pt: `${baseUrl}/pt${page && `/${page}`}`,
        en: `${baseUrl}/en${page && `/${page}`}`,
        "x-default": `${baseUrl}/pt${page && `/${page}`}`,
      },
    },
  }));
}
