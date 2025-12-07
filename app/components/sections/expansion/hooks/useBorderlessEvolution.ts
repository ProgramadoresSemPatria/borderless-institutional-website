"use client";

import { useMessages, useTranslations } from "next-intl";
import {
  Calendar,
  Laptop,
  LucideIcon,
  Rocket,
  TrendingUp,
  Users,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  users: Users,
  laptop: Laptop,
  rocket: Rocket,
  trendingUp: TrendingUp,
  calendar: Calendar,
};

export type StageStatus = "completed" | "in-progress" | "next";
interface RoadmapStageMessage {
  title: string;
  timeline: string;
  description: string;
  goals: string[];
  status: StageStatus;
  icon: string;
  outcome?: string;
}

export type RoadmapStage = Omit<RoadmapStageMessage, "icon"> & {
  icon: LucideIcon;
};

export interface RoadmapStatusLabels {
  completed: string;
  inProgress: string;
  next: string;
}

export function useBorderlessEvolution() {
  const messages = useMessages();

  const stagesMessage = messages.Expansion.BorderlessEvolution
    .stages as RoadmapStageMessage[];

  const stages: RoadmapStage[] = stagesMessage.map((stage, i) => ({
    icon: icons[stage.icon],
    status: stage.status,
    title: stage.title,
    timeline: stage.timeline,
    description: stage.description,
    goals: stage.goals,
    outcome: stage.outcome,
  }));

  const statusLabels = messages.Expansion.BorderlessEvolution
    .status as RoadmapStatusLabels;

  return { stages, statusLabels } as const;
}
