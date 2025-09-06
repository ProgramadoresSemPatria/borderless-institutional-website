"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useForFounders } from "./hooks/useForFounders";

export function ForFounders() {
  const { header, features } = useForFounders();
  const { rich } = useRichText("ForFoundersAndInvestors.ForFounders");

  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-2">
        <SectionHeader preTitle={header.preTitle} title={rich("title")} />

        <AnimatedText className="text-gray text-lg font-medium">
          {header.description}
        </AnimatedText>
      </div>

      <ExpandableGrid
        itemsPerRow={1}
        itemHeight={12}
        breakpoints={{
          lg: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
        }}
        items={features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      />
    </section>
  );
}
