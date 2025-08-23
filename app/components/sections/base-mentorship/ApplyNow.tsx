import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function ApplyNow() {
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title="Apply Now"
        description="Spots in BASE are limited to ensure personalized feedback and community engagement. If you want to prepare yourself to join the global tech market — and eventually the PSP Mentorship — apply today."
      >
        <ExternalLink>Apply for the Next Cohort</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
