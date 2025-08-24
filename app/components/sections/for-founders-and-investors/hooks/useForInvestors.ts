"use client";

import { useTranslations } from "next-intl";
import { Rocket, BriefcaseBusinessIcon, Layers, Settings, Building2, Globe2, GitBranch, TrendingUp } from "lucide-react";

export function useForInvestors() {
  const t = useTranslations("ForFoundersAndInvestors.ForInvestors");

  const header = {
    preTitle: t("preTitle"),
    description: t("description"),
  } as const;

  const incubationIcons = [Building2, Globe2, GitBranch, TrendingUp];
  const incubation = [0, 1, 2, 3].map((i) => ({
    icon: incubationIcons[i] ?? Building2,
    title: t(`incubation.${i}.title`),
    description: t(`incubation.${i}.description`),
  }));

  const hubIcons = [Rocket, BriefcaseBusinessIcon, Layers, Settings];
  const hub = [0, 1, 2, 3].map((i) => ({
    icon: hubIcons[i] ?? Rocket,
    title: t(`hub.${i}.title`),
    description: t(`hub.${i}.description`),
  }));

  const banner = {
    title: t("banner.title"),
    description: t("banner.description"),
  };

  return { header, incubation, hub, banner };
}
