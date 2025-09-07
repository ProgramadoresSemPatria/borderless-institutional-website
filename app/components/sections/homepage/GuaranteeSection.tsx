"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { useGuaranteeFeatures } from "./hooks/useGuaranteeFeatures";

export function GuaranteeSection() {
  const { rich } = useRichText("HomePage.GuaranteeSection");
  const features = useGuaranteeFeatures();

  return (
    <section className="py-[10svh] space-y-6">
      <AnimatedText as="h2" className="max-w-5xl">
        {rich("title")}
      </AnimatedText>

      <ExpandableGrid
        itemHeight={10}
        itemsPerRow={1}
        items={features.map((feature, index) => {
          return (
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              key={`feature-${index}`}
            />
          );
        })}
        breakpoints={{
          md: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
        }}
      />
    </section>
  );
}
