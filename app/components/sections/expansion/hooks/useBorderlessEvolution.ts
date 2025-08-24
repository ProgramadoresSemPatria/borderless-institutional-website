"use client";

import { useTranslations } from "next-intl";
import { roadmapStages, RoadmapStage } from "../BorderlessEvolution/constants/roadmapStages";

export interface EvolutionHeader {
  titleKey: string;
}

export function useBorderlessEvolution() {
  const t = useTranslations("Expansion.BorderlessEvolution");
  const header: EvolutionHeader = { titleKey: "title" };

  // Map existing constant to translated fields using consistent ordering
  const stages: RoadmapStage[] = roadmapStages.map((stage, i) => ({
    icon: stage.icon,
    status: stage.status,
    title: t(`stages.${i}.title`),
    timeline: t(`stages.${i}.timeline`),
    description: t(`stages.${i}.description`),
    goals: [0, 1, 2].map((g) => t(`stages.${i}.goals.${g}`)).filter(Boolean),
    outcome: t(`stages.${i}.outcome`),
  }));

  const status = {
    completed: t("status.completed"),
    inProgress: t("status.inProgress"),
    next: t("status.next"),
  } as const;

  return { header, stages, status } as const;
}
