"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatedText } from "./AnimatedText";

interface SectionHeaderProps {
  title: ReactNode;
  preTitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  preTitle,
  className,
}: SectionHeaderProps) {
  const sectionHeaderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".header-dot",
        { y: "20%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "back.inOut",
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: { trigger: ".header-dot", start: "top 85%" },
        }
      );
    },
    { scope: sectionHeaderRef }
  );

  return (
    <div ref={sectionHeaderRef} className={twMerge("space-y-4", className)}>
      {preTitle && (
        <div className="flex items-center gap-2">
          <div className="header-dot size-2 rounded-full bg-primary" />
          <AnimatedText className="text-sm md:text-xl font-medium">
            {preTitle}
          </AnimatedText>
        </div>
      )}
      <AnimatedText as="h2" className="max-w-4xl">
        {title}
      </AnimatedText>
    </div>
  );
}
