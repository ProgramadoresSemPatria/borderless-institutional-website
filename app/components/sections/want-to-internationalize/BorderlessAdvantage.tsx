"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useRichText } from "@/app/hooks/useRichText";
import { useBorderlessAdvantage } from "./hooks/useBorderlessAdvantage";

export function BorderlessAdvantage() {
  const { rich } = useRichText("WantToInternationalize.BorderlessAdvantage");
  const { header, features } = useBorderlessAdvantage();
  useGSAP(() => {
    gsap.fromTo(
      ".borderless-advantage-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".borderless-advantage-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle={header.preTitle}
        title={rich(header.titleKey)}
      />

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="borderless-advantage-card"
          />
        ))}
      </div>
    </section>
  );
}
