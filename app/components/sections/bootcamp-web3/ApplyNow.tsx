import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function ApplyNow() {
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title="Apply Now"
        description="Spots are limited to ensure a high-quality experience with direct mentorship. If you want to master Web3 and join a global network of builders, apply today."
      >
        <ExternalLink>Apply for the Next Cohort</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
