'use client'

import { useRichText } from "@/app/hooks/useRichText";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function PartnerWithBorderless() {
  const { t } = useRichText("WantToHire.PartnerWithBorderless");
  return (
    <section className="pb-[10svh]">
      <FullWidthCard
        title={t("title")}
        description={t("description")}
      >
        <ExternalLink>{t("cta")}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
