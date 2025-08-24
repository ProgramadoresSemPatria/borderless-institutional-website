'use client'

import { useRichText } from "@/app/hooks/useRichText";

export function WhyBorderless() {
  const { t } = useRichText("WantToHire.WhyBorderless");
  const bullets = (t.raw("bullets") as string[]) ?? [];
  return (
    <section className="bg-tertiary rounded-md p-8 space-y-4">
      <h3 className="text-xl font-bold">{t("title")}</h3>

      <ul className="text-gray my-4 space-y-1 list-disc ml-4">
        {bullets.map((b, i) => (
          <li key={`why-bullet-${i}`}>{b}</li>
        ))}
      </ul>
    </section>
  );
}
