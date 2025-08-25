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
import { useTranslations } from "next-intl";
import { useRichText } from "@/app/hooks/useRichText";

export function HowItWorks() {
  const t = useTranslations("BaseMentorship.HowItWorks");
  const { rich } = useRichText("BaseMentorship.HowItWorks");
  const instructions = [
    { title: t("items.duration.title"), description: t("items.duration.description"), icon: Timer },
    { title: t("items.format.title"), description: t("items.format.description"), icon: Globe },
    { title: t("items.live.title"), description: t("items.live.description"), icon: Video },
    { title: t("items.qna.title"), description: t("items.qna.description"), icon: CircleQuestionMark },
    { title: t("items.mocks.title"), description: t("items.mocks.description"), icon: User },
    { title: t("items.english.title"), description: t("items.english.description"), icon: BookOpen },
    { title: t("items.platform.title"), description: t("items.platform.description"), icon: Network },
    { title: t("items.portfolio.title"), description: t("items.portfolio.description"), icon: Code },
    { title: t("items.resume.title"), description: t("items.resume.description"), icon: FileUser },
    { title: t("items.milestones.title"), description: t("items.milestones.description"), icon: Map },
  ];
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
        {rich("title")}
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
