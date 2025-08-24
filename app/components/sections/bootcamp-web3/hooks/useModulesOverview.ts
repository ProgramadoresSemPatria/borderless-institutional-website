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
  const messages = useMessages() as any;

  // Safely read translated modules structure
  const section = messages?.BootcampWeb3?.ModulesOverview as {
    modules?: Module[];
  } | undefined;

  const header = {
    preTitle: t("preTitle"),
    titleKey: "title",
  };

  const modules: Module[] = Array.isArray(section?.modules)
    ? (section!.modules as Module[])
    : [];

  return { header, modules };
}
