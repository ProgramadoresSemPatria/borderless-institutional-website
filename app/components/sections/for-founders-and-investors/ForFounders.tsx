"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useForFounders } from "./hooks/useForFounders";
import { useRichText } from "@/app/hooks/useRichText";

export function ForFounders() {
  const { header, features } = useForFounders();
  const { rich } = useRichText("ForFoundersAndInvestors.ForFounders");
  useGSAP(() => {
    gsap.fromTo(
      ".for-founders-feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".for-founders-feature-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-2">
        <SectionHeader
          preTitle={header.preTitle}
          title={rich("title")}
        />

        <AnimatedText className="text-gray text-lg font-medium">
          {header.description}
        </AnimatedText>
      </div>

      <div className="grid lg:grid-cols-2 gap-2">
        {features.map((feature: { title: string; description: string; icon: any }) => (
          <FeatureCard
            className="for-founders-feature-card"
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
