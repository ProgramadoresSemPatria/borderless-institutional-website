"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { useRichText } from "@/app/hooks/useRichText";
import { useHowItWorks } from "./hooks/useHowItWorks";

export function HowItWorks() {
  const { rich } = useRichText("WantToHire.HowItWorks");
  const { steps, header } = useHowItWorks();
  useGSAP(() => {
    gsap.fromTo(
      ".step-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".step-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <AnimatedText as="h2">{rich(header.titleKey)}</AnimatedText>

      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2">
        {steps.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            icon={step.icon}
            className="step-card"
          />
        ))}
      </div>
    </section>
  );
}
