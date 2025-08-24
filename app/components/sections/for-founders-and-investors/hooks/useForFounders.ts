"use client";

import { useTranslations } from "next-intl";
import { Users, Lightbulb, Target, Globe } from "lucide-react";

export function useForFounders() {
  const t = useTranslations("ForFoundersAndInvestors.ForFounders");

  const icons = [Users, Lightbulb, Target, Globe];

  const header = {
    preTitle: t("preTitle"),
    description: t("description"),
  } as const;

  const features = [0, 1, 2, 3].map((i) => ({
    icon: icons[i] ?? Users,
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
  }));

  return { header, features };
}
