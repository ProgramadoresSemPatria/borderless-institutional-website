"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useTranslations } from "next-intl";
import { useRichText } from "@/app/hooks/useRichText";

export function WhoIsItFor() {
  const t = useTranslations("BaseMentorship.WhoIsItFor");
  const { rich } = useRichText("BaseMentorship.WhoIsItFor");
  useGSAP(() => {
    gsap.fromTo(
      ".requirements-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".requirements-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<>{rich("title")}</>}
      />

      <div className="grid md:grid-cols-2 gap-2">
        <RequirementsCard
          title={t("techRoles.title")}
          items={[t("techRoles.items.0"), t("techRoles.items.1"), t("techRoles.items.2")]}
        />
        <RequirementsCard
          title={t("requirements.title")}
          items={[
            t("requirements.items.0"),
            t("requirements.items.1"),
            t("requirements.items.2"),
          ]}
        />
      </div>
    </section>
  );
}
