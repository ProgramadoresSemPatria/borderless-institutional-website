"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { useHowItWorks } from "./hooks/useHowItWorks";

export function HowItWorks() {
  const { rich } = useRichText("PspMentorship.HowItWorks");
  const instructions = useHowItWorks();

  return (
    <section className="rounded-md space-y-8 pt-[10svh] pb-2">
      <AnimatedText as="h2" className="text-pretty">
        {rich("title")}
      </AnimatedText>

      <div className="p-2 bg-tertiary">
        <ExpandableGrid
          breakpoints={{
            md: {
              itemHeight: 20,
              itemsPerRow: 2,
            },
            xl: {
              itemHeight: 20,
              itemsPerRow: 3,
            },
          }}
          itemHeight={14}
          itemsPerRow={1}
          items={instructions.map((instruction) => (
            <FeatureCard
              className="how-it-works-card"
              key={instruction.title}
              title={instruction.title}
              description={instruction.description}
              variant="secondary"
              icon={instruction.icon}
              img={instruction.img}
            />
          ))}
        />
      </div>
    </section>
  );
}
