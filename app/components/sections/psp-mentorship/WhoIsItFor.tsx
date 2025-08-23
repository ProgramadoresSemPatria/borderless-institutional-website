"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { IconWrapper } from "../../ui/IconWrapper";

export function WhoIsItFor() {
  useGSAP(() => {
    gsap.fromTo(
      ".requirements-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".requirements-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <AnimatedText className="text-sm md:text-xl font-medium">
            Who is it for?
          </AnimatedText>
        </div>
        <AnimatedText as="h2" className="max-w-4xl">
          The PSP Mentorship is built for{" "}
          <span className="font-ivy">mid-to-senior-level</span> tech
          professionals:
        </AnimatedText>
      </div>

      <div className="grid md:grid-cols-2 gap-2">
        <RequirementsCard
          title="Tech Roles"
          items={[
            "Backend, Fullstack, DevOps",
            "Cloud Specialists, Data Engineers",
            "AI Specialists, Blockchain Developers",
            "Mobile Developers, Infra Engineers",
            "Tech Leads, Engineering Managers",
          ]}
        />
        <RequirementsCard
          title="Requirements"
          items={[
            "Minimum 3 years of professional experience",
            "English level: B1 or higher (we help you get to technical fluency)",
            "Ready to work remotely for international companies",
            "Earn in USD/EUR/CHF/GBP/AED",
          ]}
        />
      </div>
    </section>
  );
}

interface RequirementsCardProps {
  title: string;
  items: string[];
}

function RequirementsCard({ title, items }: RequirementsCardProps) {
  return (
    <div className="requirements-card bg-tertiary rounded-md p-8 space-y-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="text-gray space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <IconWrapper
              className="shrink-0 size-7 flex-center p-0"
              icon={Check}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
