import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `${process.env.BASE_URL}`;
  const locales = ["en", "pt"];
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
    "legal/refund-policy",
    "psp-mentorship",
    "want-to-hire",
    "want-to-hire/form",
    "want-to-internationalize",
  ];

  return pages.flatMap((page) =>
    locales.map((locale) => {
      const path = page === "" ? `/${locale}` : `/${locale}/${page}`;
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        alternates: {
          languages: Object.fromEntries(
            locales.map((locale) => [
              locale,
              `${baseUrl}/${locale}${page ? `/${page}` : ""}`,
            ])
          ),
        },
      };
    })
  );
}
