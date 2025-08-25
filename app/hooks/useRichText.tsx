"use client";

import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import RichText from "../components/ui/RichText";

export function useRichText(section: string) {
  const t = useTranslations(section);

  const rich = (key: string, values?: Record<string, ReactNode>) => (
    <RichText>{(tags) => t.rich(key, { ...tags, ...values })}</RichText>
  );

  return { rich, t };
}
