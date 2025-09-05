"use client";

import ExpandableGrid from "@/app/components/ui/ExpandableGrid";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { AnimatedGrid } from "../../../ui/AnimatedGrid";
import { useAccelerationPrograms } from "../hooks/useAccelerationPrograms";
import { AccelerationCard } from "./components/AccelerationCard";

export function AccelerationPrograms() {
  const { t, rich } = useRichText("HomePage.AccelerationPrograms");
  const programs = useAccelerationPrograms();

  return (
    <section className="py-[10svh] space-y-6 xl:items-center gap-8 md:gap-12 flex flex-col-reverse xl:grid xl:grid-cols-[60%_1fr] relative">
      <ExpandableGrid
        itemHeight={25}
        itemsPerRow={1}
        items={programs.map((program) => (
          <AccelerationCard {...program} key={program.title} />
        ))}
        breakpoints={{
          md: {
            itemsPerRow: 2,
          },
        }}
      />

      <SectionHeader title={rich("title")} preTitle={t("preTitle")} />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-[-1]">
        <AnimatedGrid />
      </div>
    </section>
  );
}
