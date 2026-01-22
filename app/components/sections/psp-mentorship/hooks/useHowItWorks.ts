import {
  BookOpen,
  Calendar,
  Globe,
  LayoutPanelTop,
  LucideIcon,
  Network,
  ScrollText,
  Timer,
  Users,
  Video,
} from "lucide-react";
import { useTranslations } from "next-intl";

export interface InstructionItem {
  title: string;
  description: string;
  icon: LucideIcon;
  img?: string;
}

export function useHowItWorks(): InstructionItem[] {
  const t = useTranslations("PspMentorship.HowItWorks");
  const icons: LucideIcon[] = [
    Timer,
    Globe,
    Video,
    Users,
    Calendar,
    BookOpen,
    Network,
    LayoutPanelTop,
    ScrollText,
  ];

  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    icon: icons[i],
    img: t(`items.${i}.img`),
  }));
}
