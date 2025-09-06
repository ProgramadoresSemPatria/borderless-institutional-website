"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { Star } from "lucide-react";
import { AnimatedIconWrapper } from "../../ui/AnimatedIconWrapper";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useResultsYouCanExpect } from "./hooks/useResultsYouCanExpect";

export function ResultsYouCanExpect() {
  const { rich, t } = useRichText("PspMentorship.ResultsYouCanExpect");
  const results = useResultsYouCanExpect();

  return (
    <section className="pt-[10svh] pb-[5svh] space-y-8">
      <SectionHeader preTitle={t("preTitle")} title={rich("title")} />

      <ExpandableGrid
        breakpoints={{
          lg: {
            itemsPerRow: 3,
            itemHeight: 16,
          },
        }}
        itemsPerRow={1}
        itemHeight={13}
        items={[
          ...results.map((result) => (
            <FeatureCard
              className="result-card"
              key={result.title}
              title={result.title}
              description={result.description}
              icon={result.icon}
            />
          )),
          <div className="result-card bg-tertiary rounded-md flex gap-4 p-8 lg:col-span-3">
            <AnimatedIconWrapper className="hidden lg:block" icon={Star} />
            <div className="space-y-2">
              <p className="text-xl font-bold">{t("success.title")}</p>
              <p className="max-w-6xl text-gray">{rich("success.text")}</p>
            </div>
          </div>,
        ]}
      />
    </section>
  );
}
