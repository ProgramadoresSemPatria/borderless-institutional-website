"use client";

import { useTranslations } from "next-intl";

export interface Testimonial {
  img: string;
  name: string;
  role: string;
  testimony?: string;
  iframeSrc?: string;
  description?: string;
}

export function useTestimonials(): Testimonial[] {
  const t = useTranslations("HomePage.Testimonials");

  return [
    {
      img: "/testimonials/arthur.png",
      name: t("list.0.name"),
      role: t("list.0.role"),
      iframeSrc: t("list.0.iframeSrc"),
      description: t("list.0.description"),
    },
    {
      img: "/testimonials/arthur.png",
      name: t("list.1.name"),
      role: t("list.1.role"),
      iframeSrc: t("list.1.iframeSrc"),
      description: t("list.1.description"),
    },
    {
      img: "/testimonials/arthur.png",
      name: t("list.2.name"),
      role: t("list.2.role"),
      testimony: t("list.2.testimony"),
    },
    {
      img: "/testimonials/thiago.png",
      name: t("list.3.name"),
      role: t("list.3.role"),
      testimony: t("list.3.testimony"),
    },
  ];
}
