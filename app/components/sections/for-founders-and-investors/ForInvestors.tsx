"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedText } from "../../ui/AnimatedText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useForInvestors } from "./hooks/useForInvestors";

export function ForInvestors() {
  const { header, incubation, hub, banner } = useForInvestors();
  const { rich } = useRichText("ForFoundersAndInvestors.ForInvestors");

  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-4">
        <SectionHeader preTitle={header.preTitle} title={rich("title")} />

        <AnimatedText className="text-gray text-lg font-medium max-w-6xl">
          {header.description}
        </AnimatedText>
      </div>

      <div className="space-y-4">
        <AnimatedText as="h2">{rich("incubationTitle")}</AnimatedText>

        <ExpandableGrid
          itemsPerRow={1}
          itemHeight={15}
          breakpoints={{
            lg: {
              itemsPerRow: 2,
              itemHeight: 16,
            },
          }}
          items={incubation.map((feature) => (
            <FeatureCard
              className="for-investors-feature-card"
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        />
      </div>

      <div className="space-y-4">
        <AnimatedText as="h2">{rich("hubTitle")}</AnimatedText>

        <div className="space-y-2 bg-tertiary p-2">
          <ExpandableGrid
            itemsPerRow={1}
            itemHeight={12}
            breakpoints={{
              lg: {
                itemsPerRow: 2,
                itemHeight: 16,
              },
            }}
            items={hub.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="secondary"
              />
            ))}
          />
          <FullWidthCard
            title={banner.title}
            description={banner.description}
          />
        </div>
      </div>
    </section>
  );
}
