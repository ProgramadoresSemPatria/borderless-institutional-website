"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Award, DollarSign, Globe, Users } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const features = [
  {
    title: "Strong Currencies",
    description: "Earn in USD/EUR/GBP/CHF/AED instead of BRL",
    icon: DollarSign,
  },
  {
    title: "Remote Freedom",
    description: "Gain freedom to work from anywhere",
    icon: Globe,
  },
  {
    title: "Real Recognition",
    description: "Be recognized for your real technical value",
    icon: Award,
  },
  {
    title: "Global Network",
    description: "Join a community of 500+ global professionals",
    icon: Users,
  },
];

export function WhyInternationalize() {
  useGSAP(() => {
    gsap.fromTo(
      ".why-internationalize-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".why-internationalize-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <AnimatedText as="h2">
        Why <span className="font-ivy">Internationalize?</span>
      </AnimatedText>

      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            className="why-internationalize-card"
          />
        ))}
      </div>
    </section>
  );
}
