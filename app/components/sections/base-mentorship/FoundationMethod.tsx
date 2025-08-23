"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Map, MessageSquare, User } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const methods = [
  {
    title: "Technical Level-Up",
    description:
      "Structured learning plan to fill technical gaps and build portfolio projects that stand out",
    icon: Code,
  },
  {
    title: "Profile Foundations",
    description:
      "Create your LinkedIn, GitHub, and résumé with international positioning from day one",
    icon: User,
  },
  {
    title: "English Upgrade",
    description:
      "3x/week classes focused on tech vocabulary, interviews, and work scenarios",
    icon: MessageSquare,
  },
  {
    title: "Career Roadmap",
    description:
      "Define your growth strategy, milestones, and transition plan to PSP Mentorship",
    icon: Map,
  },
];

export function FoundationMethod() {
  useGSAP(() => {
    gsap.fromTo(
      ".global-method-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".global-method-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle="The Borderless Career Foundation Method"
        title={
          <>
            Our 4-pillar framework to prepare you for the PSP and the{" "}
            <span className="font-ivy">global market</span>:
          </>
        }
      />

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2">
        {methods.map((method) => (
          <FeatureCard
            key={method.title}
            title={method.title}
            description={method.description}
            icon={method.icon}
            className="global-method-card"
          />
        ))}
      </div>
    </section>
  );
}
