"use client";

import { useTranslations } from "next-intl";
import { Award, Users, Globe, LucideIcon } from "lucide-react";

export interface ResultItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useWhyExpansionMatters() {
  const t = useTranslations("Expansion.WhyItMatters");
  const header = { titleKey: "title" } as const;
  const icons = [Award, Users, Globe];
  const results: ResultItem[] = [0, 1, 2].map((i) => ({
    title: t(`results.${i}.title`),
    description: t(`results.${i}.description`),
    icon: icons[i] ?? Award,
  }));
  return { header, results } as const;
}
