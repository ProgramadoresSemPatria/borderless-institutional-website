"use client";

import { Code, LucideIcon, Smartphone, Users, Video } from "lucide-react";
import { useTranslations } from "next-intl";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useGuaranteeFeatures(): Feature[] {
  const t = useTranslations("HomePage.GuaranteeSection");

  return [
    {
      icon: Code,
      title: t("features.implementation.title"),
      description: t("features.implementation.description"),
    },
    {
      icon: Users,
      title: t("features.community.title"),
      description: t("features.community.description"),
    },
    {
      icon: Video,
      title: t("features.live.title"),
      description: t("features.live.description"),
    },
    {
      icon: Smartphone,
      title: t("features.miniapps.title"),
      description: t("features.miniapps.description"),
    },
  ];
}
