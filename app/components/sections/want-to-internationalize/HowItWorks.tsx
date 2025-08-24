"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { useRichText } from "@/app/hooks/useRichText";
import { useInternationalizeHowItWorks } from "./hooks/useInternationalizeHowItWorks";

export function HowItWorks() {
  const { rich } = useRichText("WantToInternationalize.HowItWorks");
  const { steps, stepLabel } = useInternationalizeHowItWorks();
  useGSAP(() => {
    gsap.fromTo(
      ".how-it-works-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".how-it-works-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <AnimatedText as="h2">{rich("title")}</AnimatedText>

      <div className="grid md:grid-cols-2 gap-2">
        {steps.map((step, index) => (
          <FeatureCard
            key={step.title}
            title={`${stepLabel} ${index + 1}: ${step.title}`}
            description={step.description}
            icon={step.icon}
            className="how-it-works-card"
          />
        ))}
      </div>
    </section>
  );
}
