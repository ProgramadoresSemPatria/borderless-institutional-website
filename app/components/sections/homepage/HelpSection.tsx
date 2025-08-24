"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";

export function HelpSection() {
  const t = useTranslations("HomePage.HelpSection");

  return (
    <section style={{ minHeight: "fit-content" }}>
      <FullWidthCard title={t("title")} description={t("description")}>
        <div className="w-full grid sm:grid-cols-2 gap-2 max-w-4xl">
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            {t("mentorship")}
          </ExternalLink>
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            {t("incubator")}
          </ExternalLink>
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            {t("platform")}
          </ExternalLink>
          <ExternalLink className="w-full flex-row-reverse justify-end gap-4 pl-1">
            {t("community")}
          </ExternalLink>
        </div>
      </FullWidthCard>
    </section>
  );
}
