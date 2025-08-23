import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function ApplyNow() {
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title="Apply Now"
        description="We work with a limited number of mentees per cohort to ensure personalized guidance. If you’re ready to stop applying blindly and start closing offers in the global market, apply today"
      >
        <ExternalLink>Apply for the Next Cohort</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
