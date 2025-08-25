"use client";

import { IComparator } from "@/app/components/ui/Comparator/types";
import {
  Award,
  BookOpen,
  FileText,
  Folder,
  Globe,
  Handshake,
  Layers,
  Network,
  Users,
  Zap,
} from "lucide-react";
import { useMessages, useTranslations } from "next-intl";

type ComparatorSection = {
  preTitle?: string;
  title?: string;
  firstOptionTitle?: string;
  secondOptionTitle?: string;
  features?: Array<{
    title: string;
    first: string;
    second: string;
  }>;
};

export function useBootcampComparator() {
  const messages = useMessages() as Record<string, unknown>;
  const t = useTranslations("BootcampWeb3.BootcampComparator");

  const bootcampRoot = (messages as {
    BootcampWeb3?: { BootcampComparator?: ComparatorSection };
  }).BootcampWeb3;
  const section = bootcampRoot?.BootcampComparator;

  const icons = [
    BookOpen,
    FileText,
    Layers,
    Users,
    Network,
    Award,
    Folder,
    Handshake,
    Globe,
    Zap,
  ];

  const comparisonData: IComparator = {
    firstOptionTitle: section?.firstOptionTitle ?? t("firstOptionTitle"),
    secondOptionTitle: section?.secondOptionTitle ?? t("secondOptionTitle"),
    features: Array.isArray(section?.features)
      ? section!.features.map((f, i) => ({
          icon: icons[i] ?? BookOpen,
          title: f.title,
          firstOptionFeature: f.first,
          secondOptionFeature: f.second,
        }))
      : [],
  };

  const header = {
    preTitle: section?.preTitle ?? t("preTitle"),
    titleKey: "title",
  } as const;

  return { header, comparisonData };
}
