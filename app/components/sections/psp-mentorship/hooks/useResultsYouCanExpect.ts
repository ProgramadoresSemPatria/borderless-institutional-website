import { LucideIcon, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export interface ResultItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function useResultsYouCanExpect(): ResultItem[] {
  const t = useTranslations("PspMentorship.ResultsYouCanExpect");
  const items = [0,1,2].map((i) => ({
    title: t(`results.${i}.title`),
    description: t(`results.${i}.description`),
    icon: Users,
  }));
  return items;
}
