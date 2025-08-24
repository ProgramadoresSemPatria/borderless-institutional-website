import {
  BriefcaseBusiness,
  Calendar,
  ChartNoAxesCombined,
  Focus,
  Globe,
  Goal,
  Key,
  MessageSquare,
  Speech,
  Star,
  User,
  Users,
  Video,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { IComparator } from "@/app/components/ui/Comparator/types";

export function useMentorshipComparison(): IComparator {
  const t = useTranslations("PspMentorship.MentorshipComparison");

  const icons: LucideIcon[] = [
    BriefcaseBusiness,
    MessageSquare,
    Goal,
    Focus,
    Calendar,
    Video,
    Users,
    Speech,
    Globe,
    Key,
    ChartNoAxesCombined,
    User,
    Star,
  ];

  const features = Array.from({ length: 13 }, (_, i) => ({
    icon: icons[i],
    title: t(`features.${i}.title`),
    firstOptionFeature: t(`features.${i}.firstOptionFeature`),
    secondOptionFeature: t(`features.${i}.secondOptionFeature`),
  }));

  return {
    firstOptionTitle: t("firstOptionTitle"),
    secondOptionTitle: t("secondOptionTitle"),
    features,
  };
}
