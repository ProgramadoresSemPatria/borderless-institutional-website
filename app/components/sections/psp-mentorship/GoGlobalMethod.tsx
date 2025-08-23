"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Target, Trophy, Users } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const methods = [
  {
    title: "Profile Package",
    description:
      "Optimize LinkedIn, GitHub, CV, and personal brand for global attraction.",
    icon: Users,
  },
  {
    title: "Interview Engine",
    description:
      "Master mock interviews, live coding, system design, and career storytelling in English.",
    icon: Code,
  },
  {
    title: "Opportunity Pipeline",
    description:
      "Build an active + passive job pipeline with targeted applications and inbound recruiter interest.",
    icon: Target,
  },
  {
    title: "Senior Global Playbook",
    description:
      "Long-term career and financial strategy, including equity, tax planning, and relocation options.",
    icon: Trophy,
  },
];

export function GoGlobalMethod() {
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
        preTitle="The Go Global™ Method"
        title={
          <>
            Our proprietary <span className="font-ivy">4-pillar</span> framework
            to transition from a national career to{" "}
            <span className="font-ivy">global success</span>:
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
