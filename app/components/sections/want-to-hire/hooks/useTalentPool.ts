"use client";

import { useTranslations } from "next-intl";

export function useTalentPool() {
  const t = useTranslations("WantToHire.TalentPool");

  const header = {
    preTitle: t("preTitle"),
    titleKey: "title",
  } as const;

  const items = [0, 1, 2, 3].map((i) => t(`items.${i}`));
  const paragraph = t("paragraph");

  return { header, items, paragraph };
}
