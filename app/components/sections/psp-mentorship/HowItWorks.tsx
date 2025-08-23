"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  BookOpen,
  Calendar,
  Globe,
  LayoutPanelTop,
  Network,
  ScrollText,
  Timer,
  Users,
  Video,
} from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const instructions = [
  {
    title: "Duration",
    description: "6 or 12 months (choose your plan)",
    icon: Timer,
  },
  {
    title: "Format",
    description: "100% online",
    icon: Globe,
  },
  {
    title: "Live Sessions",
    description: "Bi-weekly strategy calls with direct feedback from Yuri",
    icon: Video,
  },
  {
    title: "Expert Mentors",
    description:
      "5 mentors from different backgrounds to run mock interviews and give tailored feedback",
    icon: Users,
  },
  {
    title: "Mock Interviews",
    description:
      "Monthly simulations covering the main global interview formats",
    icon: Calendar,
  },
  {
    title: "English Coaching",
    description: "3x/week classes from basic to advanced technical fluency",
    icon: BookOpen,
  },
  {
    title: "Borderless Platform Access",
    description:
      "All mentees receive a premium account on the Borderless Platform — centralizing community, learning, and networking in one place",
    icon: Network,
  },
  {
    title: "Resumé",
    description:
      "High-conversion résumé templates adaptable to strategies reached during the mentorship",
    icon: LayoutPanelTop,
  },
  {
    title: "Scripts",
    description: "Proven scripts, templates, and pipelines to speed up results",
    icon: ScrollText,
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
