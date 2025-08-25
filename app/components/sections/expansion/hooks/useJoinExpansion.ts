"use client";

import { useTranslations } from "next-intl";

export function useJoinExpansion() {
  const t = useTranslations("Expansion.JoinExpansion");
  return {
    card: {
      title: t("title"),
      description: t("description"),
      cta: t("cta"),
    },
  } as const;
}
