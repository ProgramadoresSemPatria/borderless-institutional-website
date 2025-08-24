"use client";

import {
  Bitcoin,
  Code,
  Earth,
  LucideIcon,
  Network,
  Speech,
  User,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

export interface Program {
  title: string;
  description: string;
  features: {
    title: string;
    icon: LucideIcon;
  }[];
}

export function useAccelerationPrograms(): Program[] {
  const t = useTranslations("HomePage.AccelerationPrograms");

  return [
    {
      title: t("programs.psp.title"),
      description: t("programs.psp.description"),
      features: [
        { title: t("programs.psp.features.mentoring"), icon: User },
        { title: t("programs.psp.features.projects"), icon: Code },
        { title: t("programs.psp.features.network"), icon: Users },
      ],
    },
    {
      title: t("programs.base.title"),
      description: t("programs.base.description"),
      features: [
        { title: t("programs.base.features.tech"), icon: Code },
        { title: t("programs.base.features.softSkills"), icon: Speech },
        { title: t("programs.base.features.global"), icon: Earth },
      ],
    },
    {
      title: t("programs.bootcamp.title"),
      description: t("programs.bootcamp.description"),
      features: [
        { title: t("programs.bootcamp.features.stack"), icon: Code },
        { title: t("programs.bootcamp.features.dapps"), icon: Network },
        { title: t("programs.bootcamp.features.blockchain"), icon: Bitcoin },
      ],
    },
  ];
}
