"use client";

import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { useTranslations } from "next-intl";

export function ApplyNow() {
  const t = useTranslations("BaseMentorship.ApplyNow");
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title={t("title")}
        description={t("description")}
      >
        <ExternalLink>{t("cta")}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
