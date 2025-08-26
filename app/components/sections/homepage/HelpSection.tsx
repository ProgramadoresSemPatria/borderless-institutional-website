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
          <ExternalLink
            className="w-full flex-row-reverse justify-end gap-4 pl-1"
            href={"/psp-mentorship"}
          >
            {t("mentorship")}
          </ExternalLink>
          <ExternalLink
            className="w-full flex-row-reverse justify-end gap-4 pl-1"
            href={"/for-founders-and-investors"}
          >
            {t("incubator")}
          </ExternalLink>
          <ExternalLink
            target="_blank"
            className="w-full flex-row-reverse justify-end gap-4 pl-1"
            href={"https://community.borderlesscoding.com/"}
          >
            {t("platform")}
          </ExternalLink>
          <ExternalLink
            target="_blank"
            className="w-full flex-row-reverse justify-end gap-4 pl-1"
            href={"/psp-mentorship"}
          >
            {t("community")}
          </ExternalLink>
        </div>
      </FullWidthCard>
    </section>
  );
}
