"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { useHowItWorks } from "./hooks/useHowItWorks";

export function HowItWorks() {
  const { rich } = useRichText("WantToHire.HowItWorks");
  const { steps, header } = useHowItWorks();

  return (
    <section className="py-[10svh] space-y-4">
      <AnimatedText as="h2">{rich(header.titleKey)}</AnimatedText>

      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2"></div>

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
        items={steps.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            icon={step.icon}
            className="step-card"
          />
        ))}
      />
    </section>
  );
}
