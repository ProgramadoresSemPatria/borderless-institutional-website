"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckIcon } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { SectionHeader } from "../../ui/SectionHeader";
import { ITier, useTiers } from "./hooks/useTiers";
import { useRichText } from "@/app/hooks/useRichText";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/app/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Tiers() {
  const { rich } = useRichText("PspMentorship.Tiers");
  const { tiers, subtitle } = useTiers();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      tl.fromTo(".progress-line", { scaleY: 0 }, { scaleY: 1, ease: "none" });

      gsap.fromTo(
        ".tier-block",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="space-y-16 py-[10svh]">
      {/* Header - Left Aligned */}
      <div className="flex flex-col space-y-4 text-left">
        <SectionHeader title={rich("title")} />
        <AnimatedText
          tweenVars={{ delay: 0.2 }}
          className="md:text-xl max-w-3xl font-semibold text-gray"
        >
          {subtitle}
        </AnimatedText>
      </div>

      <div className="relative">
        {/* Vertical Timeline Track - Always Centered */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0">
          {/* Background Track */}
          <div className="absolute inset-0 bg-white/10 rounded-full" />
          {/* Progress Line */}
          <div className="progress-line absolute inset-0 bg-secondary origin-top scale-y-0 rounded-full shadow-[0_0_10px_#2debb1]" />
        </div>

        <div className="space-y-16 md:space-y-0">
          {tiers.map((tier, index) => {
            const isRight = index % 2 !== 0; // Index 0 is Left
            return (
              <div
                key={tier.title}
                className={cn(
                  "tier-block relative flex flex-col md:flex-row items-center w-full",
                  isRight ? "md:flex-row-reverse" : "",
                )}
              >
                {/* Content Side */}
                <div
                  className={cn(
                    "w-full md:w-[calc(50%-3rem)] relative z-10 mt-8 md:mt-0",
                  )}
                >
                  <TierCard {...tier} align={isRight ? "right" : "left"} />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 -top-10 md:top-1/2 md:-translate-y-1/2 z-20">
                  <div className="size-10 md:size-12 rounded-full bg-tertiary text-white font-bold flex items-center justify-center text-lg md:text-xl border-4 border-tertiary shadow-[0_0_0_4px_rgba(255,255,255,0.05)]">
                    {index + 1}
                  </div>
                </div>

                {/* Empty Side (Desktop only) */}
                <div className="hidden md:block w-[calc(50%-3rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ITierCardProps extends ITier {
  align?: "left" | "right";
}

function TierCard({
  index,
  goal,
  items,
  title,
  img,
  align = "left",
}: ITierCardProps) {
  const { goal: goalTitle } = useTiers();

  const isRightAligned = align === "right";

  return (
    <div className="group relative w-full">
      {/* Connector Line to Center (Desktop Only) */}
      <div
        className={cn(
          "hidden md:block absolute top-1/2 w-12 h-0.5 bg-white/10 -translate-y-1/2 transition-colors duration-500 group-hover:bg-secondary/50",
          isRightAligned ? "-left-12 origin-left" : "-right-12 origin-right",
        )}
      />

      {/* Card Container - Opaque on mobile to mask the center line */}
      <div className="rounded-xl w-full p-1 border border-white/5 bg-tertiary md:bg-tertiary/50 md:backdrop-blur-sm hover:bg-tertiary transition-colors duration-300">
        <div className="rounded-lg overflow-hidden p-6 gap-6 bg-tertiary md:bg-tertiary/80 hover:bg-tertiary transition-colors">
          <div className="flex flex-col gap-6">
            {/* Image Area */}
            <div className="relative rounded-md overflow-hidden w-full aspect-video">
              <Image
                src={img}
                alt={title}
                fill
                className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-50"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-secondary font-bold text-sm tracking-widest mb-1">
                  TIER {index}
                </p>
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">
                  {goalTitle}
                </p>
                <p className="text-white font-medium leading-relaxed">{goal}</p>
              </div>

              <div className="space-y-3 w-full">
                {items.map((item, idx) => (
                  <div
                    className="flex items-start gap-3 group/item"
                    key={`${idx}-${title}`}
                  >
                    <div className="mt-1 p-0.5 rounded-full bg-secondary/10 group-hover/item:bg-secondary/20 transition-colors shrink-0">
                      <CheckIcon className="text-secondary" size={14} />
                    </div>
                    <p className="text-gray-300 text-sm leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
