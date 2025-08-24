"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../../ui/AnimatedText";
import { FeatureCard } from "../../../ui/FeatureCard";
import { useGuaranteeFeatures } from "./hooks/useGuaranteeFeatures";

export function GuaranteeSection() {
  const { rich } = useRichText("HomePage.GuaranteeSection");
  const features = useGuaranteeFeatures();

  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-6">
      <AnimatedText as="h2" className="max-w-5xl">
        {rich("title")}
      </AnimatedText>

      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-2">
        {features.map((feature, index) => {
          return (
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={`feature-card`}
              key={`feature-${index}`}
            />
          );
        })}
      </div>
    </section>
  );
}
