"use client";

import { useRichText } from "@/app/hooks/useRichText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useWhyBorderless } from "./hooks/useWhyBorderless";

export function WhyBorderless() {
  const { header, results } = useWhyBorderless();
  const { rich } = useRichText("ForFoundersAndInvestors.WhyBorderless");

  return (
    <section className="pt-[10svh] pb-2 space-y-6">
      <SectionHeader preTitle={header.preTitle} title={rich("title")} />

      <ExpandableGrid
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          lg: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
          "2xl": {
            itemsPerRow: 4,
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
