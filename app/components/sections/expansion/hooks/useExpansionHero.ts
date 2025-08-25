"use client";

import { useTranslations } from "next-intl";

export function useExpansionHero() {
  const t = useTranslations("Expansion.Hero");
  const header = { titleKey: "title" } as const;
  const subtitle = t("subtitle");
  const cta = t("cta");
  return { header, subtitle, cta };
}
