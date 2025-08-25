"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useReadyToGoGlobal } from "./hooks/useReadyToGoGlobal";

export function ReadyToGoGlobal() {
  const { rich } = useRichText("WantToInternationalize.ReadyToGoGlobal");
  const { header, card } = useReadyToGoGlobal();
  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader preTitle={header.preTitle} title={rich(header.titleKey)} />

      <FullWidthCard title={card.title} description={card.description}>
        <ExternalLink href={'/'}>{card.cta}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
