"use client";

import { useRichText } from "@/app/hooks/useRichText";
import ExpandableGrid from "../../ui/ExpandableGrid";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useOurServices } from "./hooks/useOurServices";

export function OurServices() {
  const { t, rich } = useRichText("HomePage.ServicesSection");
  const services = useOurServices();

  return (
    <section className="pt-[15svh] md:pt-[25svh] pb-[10svh] flex flex-col xl:flex-row xl:items-center gap-8 md:gap-12 relative">
      <SectionHeader
        title={rich("title")}
        preTitle={t("preTitle")}
        className="w-full max-w-lg xl:max-w-[40%]"
      />

      <ExpandableGrid
        itemHeight={10}
        itemsPerRow={1}
        items={services.map((service, index) => (
          <FeatureCard
            title={service.title}
            description={service.description}
            icon={service.icon}
            className={`service-card h-full md:h-full`}
            key={`service-${index}`}
          />
        ))}
        breakpoints={{
          lg: {
            itemsPerRow: 2,
            itemHeight: 16,
          },
        }}
      />
    </section>
  );
}
