"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { useHowItWorks } from "./hooks/useHowItWorks";
import { useRichText } from "@/app/hooks/useRichText";

export function HowItWorks() {
  const { rich } = useRichText("PspMentorship.HowItWorks");
  const instructions = useHowItWorks();
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
        scrollTrigger: { trigger: ".how-it-works-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="rounded-md space-y-8 py-[10svh]">
      <AnimatedText as="h2" className="text-pretty">
        {rich("title")}
      </AnimatedText>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 p-2 bg-tertiary">
        {instructions.map((instruction) => (
          <FeatureCard
            className="how-it-works-card"
            key={instruction.title}
            title={instruction.title}
            description={instruction.description}
            variant="secondary"
            icon={instruction.icon}
          />
        ))}
      </div>
    </section>
  );
}
