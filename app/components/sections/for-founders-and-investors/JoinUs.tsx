import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function JoinUs() {
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title="Join Us"
        description="Whether you are a founder ready to launch your startup or an investor seeking early-stage opportunities, Borderless is the bridge between talent and capital."
      >
        <ExternalLink>Partner With Us</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
