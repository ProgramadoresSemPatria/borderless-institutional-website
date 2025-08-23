"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { IconWrapper } from "../../ui/IconWrapper";

const features = [
  "Direct access to a mentor who has personally scaled from $5K to $90K/month in tech contracts",
  "5 specialized mentors for diverse interview preparation",
  "A clear, step-by-step system validated with 105+ success stories",
  "A high-performance community that keeps you accountable",
];

export function WhyItWorks() {
  useGSAP(() => {
    gsap.fromTo(
      ".why-it-works-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".why-it-works-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <AnimatedText className="text-sm md:text-xl font-medium">
            Why it works ?
          </AnimatedText>
        </div>
        <AnimatedText as="h2" className="max-w-4xl">
          Most career advice for devs is{" "}
          <span className="font-ivy">
            generic, outdated, or purely theoretical
          </span>
          . The PSP Mentorship gives you:
        </AnimatedText>
      </div>

      <div className="bg-tertiary rounded-md p-2 grid lg:grid-cols-2 gap-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="why-it-works-card bg-[#212121] px-6 rounded-md flex gap-4 items-center py-6"
          >
            <IconWrapper
              className="size-8 flex-center p-0 shrink-0"
              icon={Check}
            />
            <p className="max-w-2xl">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
