"use client";

import { useTranslations } from "next-intl";
import { Award, DollarSign, Users2, MapPin } from "lucide-react";

export function useWhyBorderless() {
  const t = useTranslations("ForFoundersAndInvestors.WhyBorderless");

  const header = {
    preTitle: t("preTitle"),
  } as const;

  const icons = [Award, DollarSign, Users2, MapPin];
  const results = [0, 1, 2, 3].map((i) => ({
    icon: icons[i] ?? Award,
    title: t(`results.${i}.title`),
    description: t(`results.${i}.description`),
  }));

  return { header, results };
}
