import { Comparator } from "@/app/components/ui/Comparator";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { borderlessVsAloneComparison } from "./constants/borderlessVsAloneComparison";

export function BorderlessVsGoingAlone() {
  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader
        preTitle="Comparison"
        title={
          <>
            <span className="font-ivy">Borderless</span> vs Going Alone
          </>
        }
      />

      <Comparator comparisonData={borderlessVsAloneComparison} />
    </section>
  );
}
