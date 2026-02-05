"use client";

import { useTranslations } from "next-intl";
import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { twMerge } from "tailwind-merge";

export function ApplyNow({ className }: { className?: string }) {
  const t = useTranslations("PspMentorship.ApplyNow");
  return (
    <section className={twMerge("pb-[15svh]", className)}>
      <FullWidthCard title={t("title")} description={t("description")}>
        <ExternalLink
          className="py-2"
          href={
            "https://go.borderlesscoding.com/widget/bookings/diagnostico-carreira-2025"
          }
        >
          {t("cta")}
        </ExternalLink>
      </FullWidthCard>
    </section>
  );
}
