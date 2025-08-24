"use client";

import { useMentorshipComparison } from "@/app/components/sections/psp-mentorship/hooks/useMentorshipComparison";
import RichText from "@/app/components/ui/RichText";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { Comparator } from "../../ui/Comparator";

export function CompareOurMentorships() {
  const t = useTranslations("BaseMentorship.CompareOurMentorships");
  const comparisonData = useMentorshipComparison();

  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<RichText>{(tags) => t.rich("title", { ...tags })}</RichText>}
      />

      <Comparator comparisonData={comparisonData} />
    </section>
  );
}
