"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { useWhyExpansionMatters } from "./hooks/useWhyExpansionMatters";

export function WhyItMatters() {
  const { rich } = useRichText("Expansion.WhyItMatters");
  const { header, results } = useWhyExpansionMatters();

  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <AnimatedText as="h2">{rich(header.titleKey)}</AnimatedText>

      <ExpandableGrid
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          lg: {
            itemsPerRow: 3,
            itemHeight: 16,
          },
        }}
        items={results.map((result) => (
          <FeatureCard
            key={result.title}
            title={result.title}
            description={result.description}
            icon={result.icon}
          />
        ))}
      />
    </section>
  );
}
