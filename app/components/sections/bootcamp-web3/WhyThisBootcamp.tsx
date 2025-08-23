"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Award, Code2, Globe, Users, Zap } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const features = [
  {
    title: "Intensive & Practical",
    description: "12 weeks, 100% online, 8–12 hours per week",
    icon: Zap,
  },
  {
    title: "Global Perspective",
    description:
      "Mentors from across Web3 ecosystems (Ethereum, Solana, Cosmos)",
    icon: Globe,
  },
  {
    title: "Project-First Learning",
    description: "Deploy dApps, protocols, and integrations from week one",
    icon: Code2,
  },
  {
    title: "Proof of Graduation",
    description: "NFT-backed certification issued on-chain",
    icon: Award,
  },
  {
    title: "Community & Networking",
    description: "Join a global network of developers, founders, and investors",
    icon: Users,
  },
];

export function WhyThisBootcamp() {
  useGSAP(() => {
    gsap.fromTo(
      ".bootcamp-feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".bootcamp-feature-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle="Why This Bootcamp?"
        title={
          <>
            The most comprehensive and practical Web3 development program
            designed for <span className="font-ivy">global success</span>
          </>
        }
      />

      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2">
        {features.map((features) => (
          <FeatureCard
            key={features.title}
            title={features.title}
            description={features.description}
            icon={features.icon}
            className="bootcamp-feature-card"
          />
        ))}
      </div>
    </section>
  );
}
