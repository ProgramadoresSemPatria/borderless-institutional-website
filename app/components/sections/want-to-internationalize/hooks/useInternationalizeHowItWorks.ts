"use client";

import { useTranslations } from "next-intl";
import { User, MessageSquare, Target, BookOpen, LucideIcon } from "lucide-react";

export interface StepItem { title: string; description: string; icon: LucideIcon }

export function useInternationalizeHowItWorks() {
  const t = useTranslations("WantToInternationalize.HowItWorks");

  const header = { titleKey: "title" } as const;
  const icons = [User, MessageSquare, Target, BookOpen];

  const steps: StepItem[] = [0, 1, 2, 3].map((i) => ({
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
    icon: icons[i] ?? User,
  }));

  const stepLabel = t("stepLabel");

  return { header, steps, stepLabel };
}
