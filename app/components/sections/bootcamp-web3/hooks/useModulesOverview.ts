"use client";

import { useMessages, useTranslations } from "next-intl";

interface Week {
  title: string;
  content: string[];
  length: string;
  extra?: string;
}

export interface Module {
  title: string;
  goal: string;
  weeks: Week[];
}

export function useModulesOverview() {
  const t = useTranslations("BootcampWeb3.ModulesOverview");
  const messages = useMessages() as Record<string, unknown>;

  // Safely read translated modules structure
  const section = (messages as {
    BootcampWeb3?: { ModulesOverview?: { modules?: Module[] } };
  }).BootcampWeb3?.ModulesOverview;

  const header = {
    preTitle: t("preTitle"),
    titleKey: "title",
  };

  const modules: Module[] = Array.isArray(section?.modules)
    ? section!.modules
    : [];

  return { header, modules };
}
