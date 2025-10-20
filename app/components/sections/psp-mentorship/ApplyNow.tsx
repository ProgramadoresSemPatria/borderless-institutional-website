"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function ApplyNow() {
  const t = useTranslations("PspMentorship.ApplyNow");
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title={t("title")}
        description={t("description")}
      >
        <ExternalLink href={'https://go.borderlesscoding.com/widget/bookings/diagnostico-carreira-2025'}>{t("cta")}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
