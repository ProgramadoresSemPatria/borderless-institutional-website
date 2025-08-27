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
import { useMessages } from "next-intl";

interface ProgramFromMessage {
  title: string;
  description: string;
  features: { title: string; icon: string }[];
  href: string;
}

export interface Program {
  title: string;
  description: string;
  features: { title: string; icon: LucideIcon }[];
  href: string;
}

const icons = {
  user: User,
  code: Code,
  users: Users,
  speech: Speech,
  earth: Earth,
  network: Network,
  bitcoin: Bitcoin,
};

export function useAccelerationPrograms(): Program[] {
  const messages = useMessages();
  const programsFromMessages = messages.HomePage.AccelerationPrograms
    .programs as ProgramFromMessage[];

  const programs = programsFromMessages.map((program) => ({
    ...program,
    features: program.features.map((feature) => ({
      ...feature,
      icon: icons[feature.icon as keyof typeof icons],
    })),
  })) as Program[];

  return programs;
}
