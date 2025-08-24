"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Award, Globe, Users } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const results = [
  {
    title: "Proven track record",
    description: "$1.5M+ revenue in last 12 months, 105+ success stories",
    icon: Award,
  },
  {
    title: "Strong dealflow",
    description: "500+ community members across LATAM and Europe",
    icon: Users,
  },
  {
    title: "Global investment structure",
    description: "bridging Latin American talent with international capital",
    icon: Globe,
  },
];

export function WhyItMatters() {
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
      <AnimatedText as="h2">
        Why <span className="font-ivy">Borderless Expansion</span> Matters
      </AnimatedText>

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
