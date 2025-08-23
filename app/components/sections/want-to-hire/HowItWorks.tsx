"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Handshake, MessageSquare, UserCheck } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const steps = [
  {
    title: "Tell Us Your Needs",
    description: "Tell us what you need – role, stack, seniority.",
    icon: MessageSquare,
  },
  {
    title: "Get Matched",
    description: "We connect you with pre-vetted professionals from our pool.",
    icon: UserCheck,
  },
  {
    title: "Hire Directly",
    description:
      "You hire directly – no agency in the middle, no percentage taken.",
    icon: Handshake,
  },
];

export function HowItWorks() {
  useGSAP(() => {
    gsap.fromTo(
      ".step-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".step-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <AnimatedText as="h2">
        How it <span className="font-ivy">Works</span>{" "}
      </AnimatedText>

      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-2">
        {steps.map((step) => (
          <FeatureCard
            key={step.title}
            title={step.title}
            description={step.description}
            icon={step.icon}
            className="step-card"
          />
        ))}
      </div>
    </section>
  );
}
