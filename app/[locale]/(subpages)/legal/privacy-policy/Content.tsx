"use client";

import { useRichText } from "../../../../hooks/useRichText";

export default function Content({ effectiveDate }: { effectiveDate: string }) {
  const { rich, t } = useRichText("Legal.PrivacyPolicy");

  return (
    <div className="space-y-8 leading-relaxed">
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s1Title")}</h3>
        <p>{t("s1Body")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s2Title")}</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>{rich("s2Items.account")}</li>
          <li>{rich("s2Items.billing")}</li>
          <li>{rich("s2Items.usage")}</li>
          <li>{rich("s2Items.content")}</li>
          <li>{rich("s2Items.mentorship")}</li>
          <li>{rich("s2Items.marketing")}</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s3Title")}</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("s3Items.provide")}</li>
          <li>{t("s3Items.improve")}</li>
          <li>{t("s3Items.comms")}</li>
          <li>{t("s3Items.compliance")}</li>
          <li>{t("s3Items.personalization")}</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s4Title")}</h3>
        <p>{t("s4Body")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s5Title")}</h3>
        <p>{t("s5Body")} </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s6Title")}</h3>
        <p>{t("s6Body")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s7Title")}</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>{rich("s7Items.account")}</li>
          <li>{rich("s7Items.program")}</li>
          <li>{rich("s7Items.marketing")}</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s8Title")}</h3>
        <p>{t("s8Body1")}</p>
        <p>{t("s8Body2")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s9Title")}</h3>
        <p>{t("s9Body")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s10Title")}</h3>
        <p>{t("s10Body")}</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s11Title")}</h3>
        {rich("s11Body", { date: effectiveDate })}
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{t("s12Title")}</h3>
        {rich("s12Body")}
      </div>
    </div>
  );
}
