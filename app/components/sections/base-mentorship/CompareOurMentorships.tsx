import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { MentorshipsComparison } from "../../layout/MentorshipsComparison";

export function CompareOurMentorships() {
  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader
        preTitle="Your next step after BASE..."
        title={
          <>
            Compare our <span className="font-ivy">mentorships</span>
          </>
        }
      />

      <MentorshipsComparison />
    </section>
  );
}
