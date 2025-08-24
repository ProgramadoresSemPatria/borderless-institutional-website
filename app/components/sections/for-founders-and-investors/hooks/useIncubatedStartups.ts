"use client";

import { useTranslations } from "next-intl";
import { Bitcoin, Users } from "lucide-react";

export function useIncubatedStartups() {
  const t = useTranslations("ForFoundersAndInvestors.IncubatedStartups");

  const header = {
    preTitle: t("preTitle"),
  } as const;

  const icons = [Bitcoin, Users];
  const startups = [0, 1].map((i) => ({
    src: t(`startups.${i}.src`),
    title: t(`startups.${i}.title`),
    description: t(`startups.${i}.description`),
    buttonText: t(`startups.${i}.buttonText`),
    icon: icons[i] ?? Bitcoin,
  }));

  const moreCard = {
    title: t("moreCard.title"),
    description: t("moreCard.description"),
  };

  const visitLabel = t("visitLabel");

  return { header, startups, moreCard, visitLabel };
}
