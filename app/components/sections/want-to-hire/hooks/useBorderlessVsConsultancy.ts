"use client";

import { useTranslations } from "next-intl";
import { DollarSign, Users, Globe, Zap, Eye } from "lucide-react";
import { IComparator } from "@/app/components/ui/Comparator/types";

export function useBorderlessVsConsultancy() {
  const t = useTranslations("WantToHire.BorderlessVsConsultancy");

  const header = {
    preTitle: t("preTitle"),
    titleKey: "title",
  } as const;

  const icons = [DollarSign, Users, Globe, Zap, Eye];

  const comparisonData: IComparator = {
    firstOptionTitle: t("comparison.firstOptionTitle"),
    secondOptionTitle: t("comparison.secondOptionTitle"),
    features: [0, 1, 2, 3, 4].map((idx) => ({
      icon: icons[idx] ?? DollarSign,
      title: t(`comparison.features.${idx}.title`),
      firstOptionFeature: t(`comparison.features.${idx}.firstOptionFeature`),
      secondOptionFeature: t(`comparison.features.${idx}.secondOptionFeature`),
    })),
  };

  return { header, comparisonData };
}
