import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Legal.RefundPolicy");
  return {
    title: t("metadataTitle"),
  };
}

export default async function RefundPolicyPage() {
  const t = await getTranslations("Legal.RefundPolicy");

  const readList = (key: string): string[] => {
    const value = t.raw(key);
    return Array.isArray(value)
      ? value.filter((v): v is string => typeof v === "string")
      : [];
  };

  const standardItems = readList("standardItems");
  const generalItems = readList("generalItems");

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">{t("h1")}</h1>
        </header>

        <div className="space-y-10 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("standardTitle")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {standardItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("generalTitle")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {generalItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("processTitle")}</h3>
            <p>{t("processBody")}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("methodTitle")}</h3>
            <p>{t("methodBody")}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("abuseTitle")}</h3>
            <p>{t("abuseBody")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
