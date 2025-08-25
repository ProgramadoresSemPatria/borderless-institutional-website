"use client";

import { useTranslations } from "next-intl";
import { IComparator } from "@/app/components/ui/Comparator/types";
import { DollarSign, Users, Zap, Wrench, UserCheck } from "lucide-react";

export function useBorderlessVsAlone() {
  const t = useTranslations("WantToInternationalize.BorderlessVsGoingAlone");

  const header = { preTitle: t("preTitle"), titleKey: "title" } as const;

  const icons = [Wrench, Users, Zap, UserCheck, DollarSign];

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
