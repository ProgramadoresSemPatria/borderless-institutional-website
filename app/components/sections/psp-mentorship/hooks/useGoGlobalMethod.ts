import { Code, LucideIcon, Target, Trophy, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export interface MethodItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useGoGlobalMethod(): MethodItem[] {
  const t = useTranslations("PspMentorship.GoGlobalMethod");

  const icons: LucideIcon[] = [Users, Code, Target, Trophy];
  return [0, 1, 2, 3].map((i) => ({
    title: t(`methods.${i}.title`),
    description: t(`methods.${i}.description`),
    icon: icons[i],
  }));
}
