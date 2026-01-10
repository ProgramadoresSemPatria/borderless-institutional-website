import type { Metadata } from "next";

export const siteConfig = {
  url: process.env.BASE_URL!,
  ogImage: "/thumbnail.png",
  locales: {
    pt: {
      name: "Borderless Coding",
      description:
        "A ponte entre talentos tech brasileiros e o mercado internacional — com produtos educacionais, plataforma própria e startups em incubação",
    },
    en: {
      name: "Borderless Coding",
      description:
        "The bridge between Brazilian tech talents and the international market — with educational products, our own platform, and incubated startups",
    },
  },
};

type CreateMetadataProps = {
  title?: Metadata["title"];
  description?: string;
  pathname?: string;
  locale: string;
};

export function createMetadata({
  title,
  description,
  locale,
  pathname = "",
}: CreateMetadataProps): Metadata {
  const safeLocale = locale === "pt" ? "pt" : "en";
  const safePathname = pathname.startsWith("/") ? pathname : `/${pathname}`;

  const fullUrl = `${siteConfig.url}/${safeLocale}${safePathname}`;

  const resolvedTitle = title ?? siteConfig.locales[safeLocale].name;
  const resolvedDescription =
    description ?? siteConfig.locales[safeLocale].description;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: fullUrl,
      languages: {
        pt: `${siteConfig.url}/pt${safePathname}`,
        en: `${siteConfig.url}/en${safePathname}`,
        "x-default": `${siteConfig.url}/pt${safePathname}`,
      },
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: fullUrl,
      type: "website",
      locale: safeLocale,
      images: [
        {
          url: siteConfig.ogImage,
          width: 579,
          height: 385,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [siteConfig.ogImage],
    },
  };
}
