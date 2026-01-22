"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckIcon } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel";
import { SectionHeader } from "../../ui/SectionHeader";
import { ITier, useTiers } from "./hooks/useTiers";
import { useRichText } from "@/app/hooks/useRichText";

export function Tiers() {
  const { rich } = useRichText("PspMentorship.Tiers");
  const { tiers, subtitle } = useTiers();

  useGSAP(() => {
    gsap.fromTo(
      ".tier-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tier-card",
          start: "top 90%",
        },
      },
    );
  });

  return (
    <section className="space-y-8 py-[10svh]">
      <Carousel
        className="w-full space-y-8"
        opts={{
          align: "start",
          breakpoints: { "(min-width: 1024px)": { dragFree: true } },
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end w-full gap-4 justify-between">
          <div className="space-y-8">
            <SectionHeader title={rich("title")} />

            <AnimatedText
              tweenVars={{
                delay: 0.3,
                scrollTrigger: undefined,
              }}
              className="md:text-xl max-w-3xl font-semibold text-gray"
            >
              {subtitle}
            </AnimatedText>
          </div>

          <div className="gap-2 flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="">
          {tiers.map((tier) => (
            <CarouselItem
              key={tier.title}
              className="tier-card lg:basis-1/2 pl-4 opacity-0"
            >
              <TierCard {...tier} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

function TierCard({ index, goal, items, title, img }: ITier) {
  const { goal: goalTitle } = useTiers();

  return (
    <div className="rounded-md size-full p-5 pb-8 md:p-6 flex flex-col gap-6 bg-tertiary select-none">
      <div className="relative rounded-sm overflow-hidden">
        <img
          src={img}
          className="size-full aspect-9/7 sm:aspect-16/5 object-cover object-center"
        />

        <div className="absolute bottom-4 left-4 z-10 pr-4">
          <p className="font-bold text-xl">TIER {index}</p>
          <p className="w-full text-gray-400">{title}</p>
        </div>

        <div className="absolute size-full bg-linear-to-t from-15% from-black/85 to-100% to-black/30 bottom-0" />
      </div>

      <div>
        <div>
          <p className="text-gray-400 text-sm">{goalTitle}:</p>
          <p>{goal}</p>
        </div>

        <div className="space-y-4 md:space-y-2 mt-4">
          {items.map((item, index) => (
            <div className="flex items-center gap-2" key={`${index}-${title}`}>
              <CheckIcon className="text-secondary shrink-0" size={18} />
              <p className="text-gray-400">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
