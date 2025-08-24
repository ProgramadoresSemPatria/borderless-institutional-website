"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Globe, Laptop, MessageSquare, Star, Target } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { IconWrapper } from "../../ui/IconWrapper";
import { SectionHeader } from "../../ui/SectionHeader";
import { useTranslations } from "next-intl";
import { useRichText } from "@/app/hooks/useRichText";

export function ResultsYouCanExpect() {
  const t = useTranslations("BaseMentorship.ResultsYouCanExpect");
  const { rich } = useRichText("BaseMentorship.ResultsYouCanExpect");
  const results = [
    {
      title: t("results.higherPay.title"),
      description: t("results.higherPay.description"),
      icon: Laptop,
    },
    {
      title: t("results.english.title"),
      description: t("results.english.description"),
      icon: MessageSquare,
    },
    {
      title: t("results.portfolio.title"),
      description: t("results.portfolio.description"),
      icon: Globe,
    },
    {
      title: t("results.pspReadiness.title"),
      description: t("results.pspReadiness.description"),
      icon: Target,
    },
  ];
  useGSAP(() => {
    gsap.fromTo(
      ".result-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".result-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle={t("preTitle")}
        title={<>{rich("title")}</>}
      />

      <div className="grid lg:grid-cols-2 gap-2">
        {results.map((result) => (
          <FeatureCard
            className="result-card"
            key={result.title}
            title={result.title}
            description={result.description}
            icon={result.icon}
          />
        ))}

        <div className="result-card bg-tertiary rounded-md flex gap-4 p-8 lg:col-span-2">
          <IconWrapper className="hidden lg:block" icon={Star} />
          <div className="space-y-2">
            <p className="text-xl font-bold">{t("case.title")}</p>
            <p className="max-w-6xl text-gray">{t("case.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
