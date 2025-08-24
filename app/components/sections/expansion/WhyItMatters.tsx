"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { useRichText } from "@/app/hooks/useRichText";
import { useWhyExpansionMatters } from "./hooks/useWhyExpansionMatters";

export function WhyItMatters() {
  const { rich } = useRichText("Expansion.WhyItMatters");
  const { header, results } = useWhyExpansionMatters();
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
      <AnimatedText as="h2">{rich(header.titleKey)}</AnimatedText>

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
      </div>
    </section>
  );
}
