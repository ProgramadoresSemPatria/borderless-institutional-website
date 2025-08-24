"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Map, MessageSquare, User } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useTranslations } from "next-intl";
import { useRichText } from "@/app/hooks/useRichText";

export function FoundationMethod() {
  const t = useTranslations("BaseMentorship.FoundationMethod");
  const { rich } = useRichText("BaseMentorship.FoundationMethod");

  const methods = [
    {
      title: t("methods.technical.title"),
      description: t("methods.technical.description"),
      icon: Code,
    },
    {
      title: t("methods.profile.title"),
      description: t("methods.profile.description"),
      icon: User,
    },
    {
      title: t("methods.english.title"),
      description: t("methods.english.description"),
      icon: MessageSquare,
    },
    {
      title: t("methods.roadmap.title"),
      description: t("methods.roadmap.description"),
      icon: Map,
    },
  ];
  useGSAP(() => {
    gsap.fromTo(
      ".global-method-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".global-method-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<>{rich("title")}</>}
      />

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2">
        {methods.map((method) => (
          <FeatureCard
            key={method.title}
            title={method.title}
            description={method.description}
            icon={method.icon}
            className="global-method-card"
          />
        ))}
      </div>
    </section>
  );
}
