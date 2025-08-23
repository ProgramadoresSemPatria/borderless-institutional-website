"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Globe, Laptop, MessageSquare, Star, Target } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { IconWrapper } from "../../ui/IconWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

const results = [
  {
    title: "Remote Roles",
    description:
      "Move from local junior/mid-level positions to higher-paying remote roles",
    icon: Laptop,
  },
  {
    title: "English Proficiency",
    description:
      "Achieve English proficiency and confidence for international interviews",
    icon: MessageSquare,
  },
  {
    title: "Global Portfolio",
    description: "Build a portfolio that attracts recruiters from abroad",
    icon: Globe,
  },
  {
    title: "PSP Readiness",
    description:
      "Progress to PSP Mentorship fully prepared to close $7K+ USD/month contracts",
    icon: Target,
  },
];

export function ResultsYouCanExpect() {
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
      <SectionHeader
        preTitle="Results you can expect"
        title={
          <>
            Our BASE alumni <span className="font-ivy">typically</span>:
          </>
        }
      />

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

        <div className="result-card bg-tertiary rounded-md flex gap-4 p-8 lg:col-span-2">
          <IconWrapper className="hidden lg:block" icon={Star} />
          <div className="space-y-2">
            <p className="text-xl font-bold">Real Case</p>
            <p className="max-w-6xl text-gray">
              Amanda, a junior fullstack developer from São Paulo, entered BASE
              with no portfolio and B1 English. After 6 months, she had 3 solid
              projects, a polished LinkedIn, and joined PSP — closing her first
              $7,500/month contract within 4 months of graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
