"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Star, Users } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { IconWrapper } from "../../ui/IconWrapper";
import { SectionHeader } from "../../ui/SectionHeader";

const results = [
  {
    title: "Fast Results",
    description: "First international job offers within 30–90 days",
  },
  {
    title: "Salary Jump",
    description: "Salary jumps to $12K+ USD/month for Tier 3 professionals",
  },
  {
    title: "Independence",
    description:
      "Confidence to negotiate offers and work globally without third-party dependency",
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
        preTitle="Our alumni report"
        title={
          <>
            <span className="font-ivy">Results</span> You Can Expect
          </>
        }
      />

      <div className="grid lg:grid-cols-3 gap-2">
        {results.map((result) => (
          <FeatureCard
            className="result-card"
            key={result.title}
            title={result.title}
            description={result.description}
            icon={Users}
          />
        ))}

        <div className="result-card bg-tertiary rounded-md flex gap-4 p-8 lg:col-span-3">
          <IconWrapper className="hidden lg:block" icon={Star} />
          <div className="space-y-2">
            <p className="text-xl font-bold">Real Sucess Story</p>
            <p className="max-w-6xl text-gray">
              Thiago, a senior backend developer from Belo Horizonte, already
              earning $10K USD/month, secured{" "}
              <span className="text-secondary">
                an additional $9K USD contract
              </span>{" "}
              in just 27 days of mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
