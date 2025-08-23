"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  BookOpen,
  CircleQuestionMark,
  Code,
  FileUser,
  Globe,
  Map,
  Network,
  Timer,
  User,
  Video,
} from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const instructions = [
  {
    title: "Duration",
    description: "12 months",
    icon: Timer,
  },
  {
    title: "Format",
    description: "100% online",
    icon: Globe,
  },
  {
    title: "Live Sessions",
    description: "Weekly group calls with another amabassors",
    icon: Video,
  },
  {
    title: "Q&A Session",
    description: "Monthly sessions with Yuri Pereira",
    icon: CircleQuestionMark,
  },
  {
    title: "Mock Interviews",
    description:
      "Practice sessions with junior-to-mid-level scenarios to build confidence",
    icon: User,
  },
  {
    title: "English Coaching",
    description:
      " 3x/week, tailored to technology professionals starting their global journey",
    icon: BookOpen,
  },
  {
    title: "Borderless Platform Access",
    description:
      "All mentees get a premium account to access lessons, community, and progress tracking",
    icon: Network,
  },
  {
    title: "Portfolio",
    description:
      "Portfolio project templates to impress international recruiters",
    icon: Code,
  },
  {
    title: "Resumé",
    description: "A high-conversion résumé tailored to your career stage",
    icon: FileUser,
  },
  {
    title: "Milestones",
    description: "Step-by-step milestones to reach PSP readiness",
    icon: Map,
  },
];

export function HowItWorks() {
  useGSAP(() => {
    gsap.fromTo(
      ".how-it-works-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".how-it-works-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="rounded-md space-y-8 py-[10svh]">
      <AnimatedText as="h2" className="text-pretty">
        How the <span className="font-ivy">Mentorship</span> Works ?
      </AnimatedText>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 p-2 bg-tertiary">
        {instructions.map((instruction) => (
          <FeatureCard
            className="how-it-works-card"
            key={instruction.title}
            title={instruction.title}
            description={instruction.description}
            variant="secondary"
            icon={instruction.icon}
          />
        ))}
      </div>
    </section>
  );
}
