"use client";

import { useTranslations } from "next-intl";

export function useInternationalizeHero() {
  const t = useTranslations("WantToInternationalize.Hero");
  const header = { titleKey: "title" } as const;
  const subtitle = t("subtitle");
  const cta = t("cta");
  return { header, subtitle, cta };
}
