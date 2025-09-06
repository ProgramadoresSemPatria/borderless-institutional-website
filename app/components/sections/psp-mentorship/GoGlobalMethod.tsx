"use client";

import { useRichText } from "@/app/hooks/useRichText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useGoGlobalMethod } from "./hooks/useGoGlobalMethod";

export function GoGlobalMethod() {
  const { rich, t } = useRichText("PspMentorship.GoGlobalMethod");
  const methods = useGoGlobalMethod();

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader preTitle={t("preTitle")} title={rich("title")} />

      <ExpandableGrid
        items={methods.map((method) => (
          <FeatureCard
            key={method.title}
            title={method.title}
            description={method.description}
            icon={method.icon}
          />
        ))}
        itemHeight={12}
        itemsPerRow={1}
        breakpoints={{
          md: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
          "2xl": {
            itemsPerRow: 4,
            itemHeight: 16,
          },
        }}
      />
    </section>
  );
}
