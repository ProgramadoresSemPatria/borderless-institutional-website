"use client";

import { useRichText } from "@/app/hooks/useRichText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useBorderlessAdvantage } from "./hooks/useBorderlessAdvantage";

export function BorderlessAdvantage() {
  const { rich } = useRichText("WantToInternationalize.BorderlessAdvantage");
  const { header, features } = useBorderlessAdvantage();

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader preTitle={header.preTitle} title={rich(header.titleKey)} />

      <ExpandableGrid
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          md: {
            itemHeight: 16,
            itemsPerRow: 2,
          },
          "2xl": {
            itemHeight: 16,
            itemsPerRow: 4,
          },
        }}
        items={features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="borderless-advantage-card"
          />
        ))}
      />
    </section>
  );
}
