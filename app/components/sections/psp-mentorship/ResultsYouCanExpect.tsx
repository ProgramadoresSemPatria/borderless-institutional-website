"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Star } from "lucide-react";
import { AnimatedIconWrapper } from "../../ui/AnimatedIconWrapper";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useResultsYouCanExpect } from "./hooks/useResultsYouCanExpect";

export function ResultsYouCanExpect() {
  const { rich, t } = useRichText("PspMentorship.ResultsYouCanExpect");
  const results = useResultsYouCanExpect();

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
      <SectionHeader preTitle={t("preTitle")} title={rich("title")} />

      <div className="grid lg:grid-cols-3 gap-2">
        {results.map((result) => (
          <FeatureCard
            className="result-card"
            key={result.title}
            title={result.title}
            description={result.description}
            icon={result.icon}
          />
        ))}

        <div className="result-card bg-tertiary rounded-md flex gap-4 p-8 lg:col-span-3">
          <AnimatedIconWrapper className="hidden lg:block" icon={Star} />
          <div className="space-y-2">
            <p className="text-xl font-bold">{t("success.title")}</p>
            <p className="max-w-6xl text-gray">{rich("success.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
