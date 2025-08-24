"use client";

import { useTranslations } from "next-intl";
import { Handshake, MessageSquare, UserCheck, LucideIcon } from "lucide-react";

export interface StepItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useHowItWorks() {
  const t = useTranslations("WantToHire.HowItWorks");

  const header = {
    titleKey: "title",
  } as const;

  const icons = [MessageSquare, UserCheck, Handshake];
  const steps: StepItem[] = [0, 1, 2].map((idx) => ({
    title: t(`steps.${idx}.title`),
    description: t(`steps.${idx}.description`),
    icon: icons[idx] ?? MessageSquare,
  }));

  return { header, steps };
}
