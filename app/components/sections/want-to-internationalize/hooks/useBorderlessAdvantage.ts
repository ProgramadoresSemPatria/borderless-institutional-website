"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Users, MessageCircle, Heart, LucideIcon } from "lucide-react";

export interface AdvantageItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useBorderlessAdvantage() {
  const t = useTranslations("WantToInternationalize.BorderlessAdvantage");

  const header = { preTitle: t("preTitle"), titleKey: "title" } as const;
  const icons = [CheckCircle, Users, MessageCircle, Heart];

  const features: AdvantageItem[] = [0, 1, 2, 3].map((i) => ({
    title: t(`features.${i}.title`),
    description: t(`features.${i}.description`),
    icon: icons[i] ?? CheckCircle,
  }));

  return { header, features };
}
