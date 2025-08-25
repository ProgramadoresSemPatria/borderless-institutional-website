import { Code, GraduationCap, LucideIcon, Users } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useOurServices(): ServiceItem[] {
  const t = useTranslations("HomePage.ServicesSection");

  return [
    {
      title: t("education.title"),
      description: t("education.description"),
      icon: GraduationCap,
    },
    {
      title: t("tech.title"),
      description: t("tech.description"),
      icon: Code,
    },
    {
      title: t("people.title"),
      description: t("people.description"),
      icon: Users,
    },
  ];
}
