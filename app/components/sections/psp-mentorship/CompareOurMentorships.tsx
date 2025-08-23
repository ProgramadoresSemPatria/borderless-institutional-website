import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { mentorshipComparison } from "@/app/constants/mentorshipComparison";
import { Comparator } from "../../ui/Comparator";

export function CompareOurMentorships() {
  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader
        preTitle="If you are not ready yet"
        title={
          <>
            Compare our <span className="font-ivy">mentorships</span>
          </>
        }
      />

      <Comparator comparisonData={mentorshipComparison} />
    </section>
  );
}
