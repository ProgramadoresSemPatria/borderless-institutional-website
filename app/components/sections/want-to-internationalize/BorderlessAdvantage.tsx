"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle, Heart, MessageCircle, Users } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const features = [
  {
    title: "A proven system (Go Global™)",
    description: "LinkedIn, CV, GitHub, Interview prep, Networking",
    icon: CheckCircle,
  },
  {
    title: "Direct mentorship",
    description: "from professionals who already scaled globally",
    icon: Users,
  },
  {
    title: "Mock interviews",
    description: "train exactly how companies abroad will test you",
    icon: MessageCircle,
  },
  {
    title: "Community support",
    description: "stay motivated, accountable, and connected",
    icon: Heart,
  },
];

export function BorderlessAdvantage() {
  useGSAP(() => {
    gsap.fromTo(
      ".borderless-advantage-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".borderless-advantage-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle="The Borderless Advantage"
        title={
          <>
            Unlike generic courses or consultancies,{" "}
            <span className="font-ivy">we give you</span> :
          </>
        }
      />

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="borderless-advantage-card"
          />
        ))}
      </div>
    </section>
  );
}
