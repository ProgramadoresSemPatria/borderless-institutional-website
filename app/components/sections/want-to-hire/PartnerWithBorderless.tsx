import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function PartnerWithBorderless() {
  return (
    <section className="pb-[10svh]">
      <FullWidthCard
        title="Partner With Borderless"
        description="Skip the consultancy fees. Hire directly from a community of vetted, international-ready tech talent."
      >
        <ExternalLink>Get Access to Our Talent Pool</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
