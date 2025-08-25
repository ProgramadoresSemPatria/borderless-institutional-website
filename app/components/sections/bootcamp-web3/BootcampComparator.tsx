'use client'

import { Comparator } from "@/app/components/ui/Comparator";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { useBootcampComparator } from "./hooks/useBootcampComparator";

export function BootcampComparator() {
  const { rich } = useRichText("BootcampWeb3.BootcampComparator");
  const { header, comparisonData } = useBootcampComparator();

  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader preTitle={header.preTitle} title={rich(header.titleKey)} />

      <Comparator comparisonData={comparisonData} />
    </section>
  );
}
