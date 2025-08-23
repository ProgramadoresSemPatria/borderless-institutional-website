"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";

export const audience = [
  {
    title: "Developers (Backend/Fullstack)",
    description: "Ready to expand into blockchain/Web3",
    icon: Code2,
  },
  {
    title: "Startup Builders & Entrepreneurs",
    description: "Exploring decentralized technologies",
    icon: Rocket,
  },
  {
    title: "Researchers/Students",
    description: "Who want structured, practical Web3 training",
    icon: GraduationCap,
  },
];

export function WhoShouldJoin() {
  useGSAP(() => {
    gsap.fromTo(
      [".audience-card", ".requirements-card"],
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".audience-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <SectionHeader
        preTitle="Who Should Join?"
        title={
          <>
            This bootcamp is designed for{" "}
            <span className="font-ivy">ambitious tech professionals</span> ready
            to enter the Web3 space
          </>
        }
      />

      <div className="space-y-2">
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2">
          {audience.map((audience) => (
            <FeatureCard
              key={audience.title}
              title={audience.title}
              description={audience.description}
              icon={audience.icon}
              className="audience-card"
            />
          ))}
        </div>
        <RequirementsCard
          title="Minimum Requirements"
          items={[
            "1 Year of experience with any programming language",
            "English Intermediate (classes are held in English)",
          ]}
        />
      </div>
    </section>
  );
}
