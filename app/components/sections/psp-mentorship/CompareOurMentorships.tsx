import RichText from "@/app/components/ui/RichText";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { Comparator } from "../../ui/Comparator";
import { useMentorshipComparison } from "./hooks/useMentorshipComparison";

export function CompareOurMentorships() {
  const t = useTranslations("PspMentorship.CompareOurMentorships");
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
