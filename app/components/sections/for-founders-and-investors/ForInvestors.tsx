"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  BriefcaseBusinessIcon,
  Building2,
  GitBranch,
  Globe2,
  Layers,
  Rocket,
  Settings,
  TrendingUp,
} from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { SectionHeader } from "../../ui/SectionHeader";

const incubationFeatures = [
  {
    title: "Independent Structure",
    description:
      "Founder-led companies – each startup is structured as an independent entity, ensuring clarity and investor protection.",
    icon: Building2,
  },
  {
    title: "International Access",
    description:
      "Global fundraising vehicle – our US-based structure enables seamless participation for international investors.",
    icon: Globe2,
  },
  {
    title: "Proven Pipeline",
    description:
      "Diversified pipeline – ventures emerge from our proven education and mentorship ecosystem, supported by hackathons and selective incubation.",
    icon: GitBranch,
  },
  {
    title: "Smart Capital",
    description:
      "Capital efficiency – startups bootstrap with talent and distribution before raising external rounds, reducing early risk and maximizing growth potential.",
    icon: TrendingUp,
  },
];

const borderlessHubfeatures = [
  {
    title: "Validated Execution",
    description:
      "Founder-led ventures with international mindset and validated execution",
    icon: Rocket,
  },
  {
    title: "Exclusive Pipeline",
    description:
      "Exclusive incubation pipeline of startups born from our mentorship and hackathon ecosystem",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Diverse Sectors",
    description:
      "Diversified opportunities in SaaS, AI, fintech, and developer tools",
    icon: Layers,
  },
  {
    title: "Scalable Operations",
    description:
      "Global-ready operations designed for scalability and transparency",
    icon: Settings,
  },
];

export function ForInvestors() {
  useGSAP(() => {
    gsap.fromTo(
      ".for-investors-feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".for-investors-feature-card",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".borderless-hub-features-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".borderless-hub-features-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-4">
        <SectionHeader
          preTitle="For Investors"
          title={
            <>
              Looking for <span className="font-ivy">high-quality</span>{" "}
              dealflow?
            </>
          }
        />

        <AnimatedText className="text-gray text-lg font-medium max-w-6xl">
          Through Borderless Hub, investors gain access to early-stage ventures
          designed for scalability, transparency, and protection. Our incubation
          model combines global talent with lean execution, ensuring ventures
          are born strong.
        </AnimatedText>
      </div>

      <div className="space-y-4">
        <AnimatedText as="h2">
          Our <span className="font-ivy">Incubation</span> Model:
        </AnimatedText>

        <div className="grid lg:grid-cols-2 gap-2">
          {incubationFeatures.map((feature) => (
            <FeatureCard
              className="for-investors-feature-card"
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <AnimatedText as="h2">
          Through <span className="font-ivy">Borderless Hub</span>, investors
          access:{" "}
        </AnimatedText>

        <div className="space-y-2 bg-tertiary p-2">
          <div className="grid lg:grid-cols-2 gap-2">
            {borderlessHubfeatures.map((feature) => (
              <FeatureCard
                className="borderless-hub-features-card"
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="secondary"
              />
            ))}
          </div>
          <FullWidthCard
            title="Connecting Latin American Talent with Global Capital"
            description="We build startups that are lean, resilient, and positioned for exponential growth."
          />
        </div>
      </div>
    </section>
  );
}
