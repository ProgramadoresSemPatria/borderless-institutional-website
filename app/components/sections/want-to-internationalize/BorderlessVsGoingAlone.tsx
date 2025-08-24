"use client";

import { Comparator } from "@/app/components/ui/Comparator";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { useBorderlessVsAlone } from "./hooks/useBorderlessVsAlone";

export function BorderlessVsGoingAlone() {
  const { rich } = useRichText("WantToInternationalize.BorderlessVsGoingAlone");
  const { header, comparisonData } = useBorderlessVsAlone();
  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader preTitle={header.preTitle} title={rich(header.titleKey)} />

      <Comparator comparisonData={comparisonData} />
    </section>
  );
}
