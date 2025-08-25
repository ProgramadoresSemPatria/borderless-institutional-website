"use client";

import { Comparator } from "@/app/components/ui/Comparator";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { useBorderlessVsConsultancy } from "./hooks/useBorderlessVsConsultancy";

export function BorderlessVsConsultancy() {
  const { rich, t } = useRichText("WantToHire.BorderlessVsConsultancy");
  const { comparisonData } = useBorderlessVsConsultancy();
  return (
    <section className="pt-[5svh] pb-2 space-y-8">
      <SectionHeader preTitle={t("preTitle")} title={rich("title")} />

      <Comparator comparisonData={comparisonData} />
    </section>
  );
}
