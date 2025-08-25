import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Content from "./Content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Legal.PrivacyPolicy");
  return {
    title: t("metadataTitle"),
  };
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("Legal.PrivacyPolicy");
  const effectiveDate = "08/13/2025";

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">{t("h1")}</h1>
          <p className="text-gray/90">{t("updated", { date: effectiveDate })}</p>
        </header>

        <Content effectiveDate={effectiveDate} />
      </div>
    </section>
  );
}
