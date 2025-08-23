"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BookOpen, MessageSquare, Target, User } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const steps = [
  {
    title: "Profile Package",
    description:
      "We optimize your LinkedIn, CV, and GitHub for global attraction.",
    icon: User,
  },
  {
    title: "Interview Engine",
    description:
      "You train English + technical interviews until you're ready to perform.",
    icon: MessageSquare,
  },
  {
    title: "Opportunity Pipeline",
    description: "We create a predictable flow of international job offers.",
    icon: Target,
  },
  {
    title: "Global Playbook",
    description:
      "You learn long-term strategies (equity, tax planning, relocation).",
    icon: BookOpen,
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
        scrollTrigger: {
          trigger: ".how-it-works-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <AnimatedText as="h2">How It Works (Your Next 90-12 Days)</AnimatedText>

      <div className="grid md:grid-cols-2 gap-2">
        {steps.map((step, index) => (
          <FeatureCard
            key={step.title}
            title={`Step ${index + 1}: ${step.title}`}
            description={step.description}
            icon={step.icon}
            className="how-it-works-card"
          />
        ))}
      </div>
    </section>
  );
}
