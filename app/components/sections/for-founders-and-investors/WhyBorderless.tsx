"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";
import { useWhyBorderless } from "./hooks/useWhyBorderless";
import { useRichText } from "@/app/hooks/useRichText";

export function WhyBorderless() {
  const { header, results } = useWhyBorderless();
  const { rich } = useRichText("ForFoundersAndInvestors.WhyBorderless");
  useGSAP(() => {
    gsap.fromTo(
      ".results-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".results-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-6">
      <SectionHeader preTitle={header.preTitle} title={rich("title")} />

      <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-2">
        {results.map((result: any) => (
          <FeatureCard
            className="results-card"
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
