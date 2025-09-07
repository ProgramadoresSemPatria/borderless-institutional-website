"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { useInternationalizeHowItWorks } from "./hooks/useInternationalizeHowItWorks";

export function HowItWorks() {
  const { rich } = useRichText("WantToInternationalize.HowItWorks");
  const { steps, stepLabel } = useInternationalizeHowItWorks();

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
        items={steps.map((step, index) => (
          <FeatureCard
            key={step.title}
            title={`${stepLabel} ${index + 1}: ${step.title}`}
            description={step.description}
            icon={step.icon}
            className="how-it-works-card"
          />
        ))}
      />
    </section>
  );
}
