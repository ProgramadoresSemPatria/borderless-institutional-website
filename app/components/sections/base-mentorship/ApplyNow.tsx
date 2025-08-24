"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function ApplyNow() {
  const t = useTranslations("BaseMentorship.ApplyNow");
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title={t("title")}
        description={t("description")}
      >
        <ExternalLink href={'/'}>{t("cta")}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
