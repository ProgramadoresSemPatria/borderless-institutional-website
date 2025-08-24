"use client";

import { useTranslations } from "next-intl";

export interface StartupItem {
  src: string;
  title: string;
  description: string;
  buttonText?: string;
}

export function useIncubatedStartups() {
  const t = useTranslations("Expansion.IncubatedStartups");
  const header = { preTitle: t("preTitle"), titleKey: "title" } as const;
  const items: StartupItem[] = [0, 1].map((i) => ({
    src: t(`items.${i}.src`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    buttonText: t(`items.${i}.buttonText`),
  }));
  return { header, items } as const;
}
