import { Comparator } from "@/app/components/ui/Comparator";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { bootcampComparison } from "./constants/bootcampComparison";

export function BootcampComparator() {
  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader
        preTitle="Why Choose Borderless Bootcamp?"
        title={
          <>
            Compare our <span className="font-ivy">mentorships</span> with a
            typical online course
          </>
        }
      />

      <Comparator comparisonData={bootcampComparison} />
    </section>
  );
}
