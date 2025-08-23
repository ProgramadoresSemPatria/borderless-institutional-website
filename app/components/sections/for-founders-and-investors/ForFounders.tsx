"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Globe, Lightbulb, Target, Users } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const features = [
  {
    title: "Global Developer Community",
    description:
      "A community of 500+ internationalized developers and engineers",
    icon: Users,
  },
  {
    title: "Expert Mentorship",
    description:
      "Mentorship from experienced operators in tech, growth, and fundraising",
    icon: Lightbulb,
  },
  {
    title: "Strategic Guidance",
    description:
      "Guidance on product, technical architecture, and go-to-market strategies",
    icon: Target,
  },
  {
    title: "Investor Network",
    description:
      "Direct connections to investors and partners across the US, EU, and LATAM",
    icon: Globe,
  },
];

export function ForFounders() {
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
          preTitle="For Founders"
          title={
            <>
              Are you a builder with{" "}
              <span className="font-ivy">global ambition?</span>
            </>
          }
        />

        <AnimatedText className="text-gray text-lg font-medium">
          At Borderless Hub, we help top tech professionals transition from
          talent to founder. Through our ecosystem, founders gain:
        </AnimatedText>
      </div>

      <div className="grid lg:grid-cols-2 gap-2">
        {features.map((feature) => (
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
