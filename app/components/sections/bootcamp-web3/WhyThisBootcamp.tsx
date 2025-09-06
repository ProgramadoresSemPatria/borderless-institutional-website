"use client";

import RichText from "@/app/components/ui/RichText";
import { Award, Code2, Globe, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const icons = [Zap, Globe, Code2, Award, Users];

export function WhyThisBootcamp() {
  const t = useTranslations("BootcampWeb3.WhyThisBootcamp");

  return (
    <section className="space-y-8 py-[10svh]">
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
          "2xl": {
            itemsPerRow: 3,
            itemHeight: 16,
          },
        }}
        items={Array.from({ length: 5 }, (_, i) => ({
          title: t(`features.${i}.title`),
          description: t(`features.${i}.description`),
          icon: icons[i],
        })).map((features) => (
          <FeatureCard
            key={features.title}
            title={features.title}
            description={features.description}
            icon={features.icon}
            className="bootcamp-feature-card"
          />
        ))}
      />
    </section>
  );
}
