"use client";

import RichText from "@/app/components/ui/RichText";
import { Award, Code2, Github, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const icons = [Code2, Layers, Github, Award];

export function ResultsYouCanExpect() {
  const t = useTranslations("BootcampWeb3.ResultsYouCanExpect");

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<RichText>{(tags) => t.rich("title", { ...tags })}</RichText>}
      />

      <ExpandableGrid
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          md: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
        }}
        items={Array.from({ length: 4 }, (_, i) => ({
          title: t(`results.${i}.title`),
          description: t(`results.${i}.description`),
          icon: icons[i],
        })).map((result) => (
          <FeatureCard
            className="result-card"
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
