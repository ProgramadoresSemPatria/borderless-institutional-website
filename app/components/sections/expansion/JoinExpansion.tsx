"use client";

import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { useJoinExpansion } from "./hooks/useJoinExpansion";

export function JoinExpansion() {
  const { card } = useJoinExpansion();
  return (
    <section className="pb-[15svh]">
      <FullWidthCard title={card.title} description={card.description}>
        <ExternalLink href={'/'}>{card.cta}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
