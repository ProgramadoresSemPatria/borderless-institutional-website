"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { useWhyInternationalize } from "./hooks/useWhyInternationalize";

export function WhyInternationalize() {
  const { rich } = useRichText("WantToInternationalize.WhyInternationalize");
  const { features } = useWhyInternationalize();

  return (
    <section className="space-y-8 py-[10svh]">
      <AnimatedText as="h2">{rich("title")}</AnimatedText>

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
        items={features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="why-internationalize-card"
          />
        ))}
      />
    </section>
  );
}
