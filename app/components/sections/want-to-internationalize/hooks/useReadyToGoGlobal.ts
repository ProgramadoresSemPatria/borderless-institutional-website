"use client";

import { useTranslations } from "next-intl";

export function useReadyToGoGlobal() {
  const t = useTranslations("WantToInternationalize.ReadyToGoGlobal");
  const header = { preTitle: t("preTitle"), titleKey: "title" } as const;
  const card = {
    title: t("card.title"),
    description: t("card.description"),
    cta: t("card.cta"),
  };
  return { header, card };
}
