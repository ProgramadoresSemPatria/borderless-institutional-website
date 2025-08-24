'use client'

import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { useTranslations } from "next-intl";

export function JoinUs() {
  const t = useTranslations("ForFoundersAndInvestors.JoinUs");
  const title = t("title");
  const description = t("description");
  const cta = t("cta");
  return (
    <section className="pb-[15svh]">
      <FullWidthCard
        title={title}
        description={description}
      >
        <ExternalLink>{cta}</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
