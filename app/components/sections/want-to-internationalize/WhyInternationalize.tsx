"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { useRichText } from "@/app/hooks/useRichText";
import { useWhyInternationalize } from "./hooks/useWhyInternationalize";

export function WhyInternationalize() {
  const { rich } = useRichText("WantToInternationalize.WhyInternationalize");
  const { features } = useWhyInternationalize();
  useGSAP(() => {
    gsap.fromTo(
      ".why-internationalize-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".why-internationalize-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <AnimatedText as="h2">{rich("title")}</AnimatedText>

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="why-internationalize-card"
          />
        ))}
      </div>
    </section>
  );
}
