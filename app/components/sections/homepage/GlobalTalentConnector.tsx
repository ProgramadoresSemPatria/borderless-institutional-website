"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function GlobalTalentConnector() {
  const t = useTranslations("HomePage.GlobalTalentConnector");

  return (
    <section style={{ minHeight: "fit-content" }}>
      <FullWidthCard title={t("title")} description={t("description")}>
        <ExternalLink>{t("cta")}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
