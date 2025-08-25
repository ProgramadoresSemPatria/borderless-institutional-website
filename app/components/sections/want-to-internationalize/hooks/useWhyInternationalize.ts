"use client";

import { useTranslations } from "next-intl";
import { DollarSign, Globe, Award, Users, LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useWhyInternationalize() {
  const t = useTranslations("WantToInternationalize.WhyInternationalize");

  const header = { titleKey: "title" } as const;
  const icons = [DollarSign, Globe, Award, Users];

  const features: FeatureItem[] = [0, 1, 2, 3].map((i) => ({
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
    icon: icons[i] ?? DollarSign,
  }));

  return { header, features };
}
