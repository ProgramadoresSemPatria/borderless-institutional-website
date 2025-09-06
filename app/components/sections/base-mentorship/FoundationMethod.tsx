"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { Code, Map, MessageSquare, User } from "lucide-react";
import { useTranslations } from "next-intl";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

export function FoundationMethod() {
  const t = useTranslations("BaseMentorship.FoundationMethod");
  const { rich } = useRichText("BaseMentorship.FoundationMethod");

  const methods = [
    {
      title: t("methods.technical.title"),
      description: t("methods.technical.description"),
      icon: Code,
    },
    {
      title: t("methods.profile.title"),
      description: t("methods.profile.description"),
      icon: User,
    },
    {
      title: t("methods.english.title"),
      description: t("methods.english.description"),
      icon: MessageSquare,
    },
    {
      title: t("methods.roadmap.title"),
      description: t("methods.roadmap.description"),
      icon: Map,
    },
  ];

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader preTitle={t("preTitle")} title={<>{rich("title")}</>} />

      <ExpandableGrid
        items={methods.map((method) => (
          <FeatureCard
            key={method.title}
            title={method.title}
            description={method.description}
            icon={method.icon}
          />
        ))}
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          md: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
          "2xl": {
            itemsPerRow: 4,
            itemHeight: 16,
          },
        }}
      />
    </section>
  );
}
