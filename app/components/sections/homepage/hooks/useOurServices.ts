"use client";

import { Code, GraduationCap, LucideIcon, Users } from "lucide-react";
import { useMessages } from "next-intl";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServiceFromMessage {
  title: string;
  description: string;
  icon: string;
}

const icons = {
  graduationCap: GraduationCap,
  code: Code,
  users: Users,
} as const;

export function useOurServices(): ServiceItem[] {
  const messages = useMessages();
  const servicesFromMessage = messages.HomePage.ServicesSection
    .services as ServiceFromMessage[];

  return servicesFromMessage.map((service) => ({
    ...service,
    icon: icons[service.icon as keyof typeof icons],
  }));
}
