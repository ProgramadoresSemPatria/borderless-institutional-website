import { Comparator } from "@/app/components/ui/Comparator";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { borderlessComparison } from "./constants/borderlessComparison";

export function BorderlessVsConsultancy() {
  return (
    <section className="pt-[5svh] pb-2 space-y-8">
      <SectionHeader
        preTitle="Why Choose Borderless ?"
        title={
          <>
            Compare <span className="font-ivy">Borderless</span> with
            Traditional Consultancy
          </>
        }
      />

      <Comparator comparisonData={borderlessComparison} />
    </section>
  );
}
