import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HowItWorks");
  return {
    title: t("metadataTitle"),
  };
}

export default async function HowItWorksPage() {
  const t = await getTranslations("HowItWorks");

  const readList = (key: string): string[] => {
    const value = t.raw(key);
    return Array.isArray(value)
      ? value.filter((v): v is string => typeof v === "string")
      : [];
  };

  const purchaseItems = readList("purchaseItems");
  const activationItems = readList("activationItems");
  const accessItems = readList("accessItems");
  const deliveryItems = readList("deliveryItems");
  const supportItems = readList("supportItems");
  const cancellationsItems = readList("cancellationsItems");

  return (
    <section className="pt-36 pb-[10svh]">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">{t("h1")}</h1>
        </header>

        <div className="space-y-10 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("overviewTitle")}</h3>
            <p>{t("overviewBody")}</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("stepsTitle")}</h3>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">{t("purchaseTitle")}</h4>
              <ul className="list-disc pl-6 space-y-2">
                {purchaseItems.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">{t("activationTitle")}</h4>
              <ul className="list-disc pl-6 space-y-2">
                {activationItems.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">{t("accessTitle")}</h4>
              <ul className="list-disc pl-6 space-y-2">
                {accessItems.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">{t("deliveryTitle")}</h4>
              <ul className="list-disc pl-6 space-y-2">
                {deliveryItems.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">{t("supportTitle")}</h4>
              <ul className="list-disc pl-6 space-y-2">
                {supportItems.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold">
                {t("cancellationsTitle")}
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                {cancellationsItems.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
