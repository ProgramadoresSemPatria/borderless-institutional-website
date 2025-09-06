"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";

export function WhoShouldJoin() {
  const { rich, t } = useRichText("BootcampWeb3.WhoShouldJoin");

  const audience = [
    { icon: Code2 },
    { icon: Rocket },
    { icon: GraduationCap },
  ].map((item, i) => ({
    ...item,
    title: t(`audience.${i}.title`),
    description: t(`audience.${i}.description`),
  }));

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader preTitle={t("preTitle")} title={rich("title")} />

      <ExpandableGrid
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          md: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
          "2xl": {
            itemsPerRow: 3,
            itemHeight: 16,
          },
        }}
        items={[
          ...audience.map((audience) => (
            <FeatureCard
              key={audience.title}
              title={audience.title}
              description={audience.description}
              icon={audience.icon}
              className="audience-card"
            />
          )),
          <RequirementsCard
            title={t("requirements.title")}
            items={[t("requirements.items.0"), t("requirements.items.1")]}
          />,
        ]}
      />
    </section>
  );
}
