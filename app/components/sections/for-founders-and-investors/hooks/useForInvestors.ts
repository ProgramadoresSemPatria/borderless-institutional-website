"use client";

import { useTranslations } from "next-intl";
import { Rocket, BriefcaseBusinessIcon, Layers, Settings, Building2, Globe2, GitBranch, TrendingUp } from "lucide-react";

export type InvestorFeature = {
  icon: typeof Rocket;
  title: string;
  description: string;
};

export type Banner = {
  title: string;
  description: string;
};

export function useForInvestors() {
  const t = useTranslations("ForFoundersAndInvestors.ForInvestors");

  const header = {
    preTitle: t("preTitle"),
    description: t("description"),
  } as const;

  const incubationIcons = [Building2, Globe2, GitBranch, TrendingUp];
  const incubation: InvestorFeature[] = [0, 1, 2, 3].map((i) => ({
    icon: incubationIcons[i] ?? Building2,
    title: t(`incubation.${i}.title`),
    description: t(`incubation.${i}.description`),
  }));

  const hubIcons = [Rocket, BriefcaseBusinessIcon, Layers, Settings];
  const hub: InvestorFeature[] = [0, 1, 2, 3].map((i) => ({
    icon: hubIcons[i] ?? Rocket,
    title: t(`hub.${i}.title`),
    description: t(`hub.${i}.description`),
  }));

  const banner: Banner = {
    title: t("banner.title"),
    description: t("banner.description"),
  };

  return { header, incubation, hub, banner };
}
