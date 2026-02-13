import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LinkedText, MultiLinkedText } from "./LinkedText";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Legal.TermsOfService");
  return {
    title: t("metadataTitle"),
  };
}

export default async function TermsOfServicePage() {
  const t = await getTranslations("Legal.TermsOfService");

  const readList = (key: string): string[] => {
    const value = t.raw(key);
    return Array.isArray(value)
      ? value.filter((v): v is string => typeof v === "string")
      : [];
  };

  const servicesItems = readList("servicesItems");
  const eligibilityItems = readList("eligibilityItems");
  const accountItems = readList("accountItems");
  const enrollmentItems = readList("enrollmentItems");
  const paymentItems = readList("paymentItems");
  const refundSummaryItems = readList("refundSummaryItems");
  const ipItems = readList("ipItems");
  const communityItems = readList("communityItems");
  const mentorshipItems = readList("mentorshipItems");
  const liabilityItems = readList("liabilityItems");
  const thirdPartyItems = readList("thirdPartyItems");
  const disputesItems = readList("disputesItems");
  const contactItems = readList("contactItems");

  return (
    <section className="pt-36 pb-[10svh]">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">{t("h1")}</h1>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>{t("effectiveDate")}</p>
            <p>{t("lastUpdated")}</p>
          </div>
          <p className="leading-relaxed">{t("intro")}</p>
        </header>

        <div className="space-y-10 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s1Title")}</h3>
            <p>{t("s1Body")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {servicesItems.map((item: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p>{t("s1Footer")}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s2Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {eligibilityItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s3Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {accountItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s4Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {enrollmentItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s5Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {paymentItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s6Title")}</h3>
            <LinkedText translationKey="s6Body" />
            <p className="font-semibold mt-3">{t("s6SummaryTitle")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {refundSummaryItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s7Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {ipItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s8Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {communityItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s9Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {mentorshipItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s10Title")}</h3>
            <p>{t("s10Intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {liabilityItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s11Title")}</h3>
            <LinkedText translationKey="s11Body" />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s12Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {thirdPartyItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s13Title")}</h3>
            <p>{t("s13Body")}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s14Title")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {disputesItems.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s15Title")}</h3>
            <p>{t("s15Body")}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("s16Title")}</h3>
            <MultiLinkedText translationKey="s16Body" />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">{t("contactTitle")}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {contactItems.map((item: string, idx: number) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
