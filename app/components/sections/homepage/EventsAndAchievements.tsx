"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { AnimatedText } from "../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel";
import { useGetEventsAndAchievements } from "./hooks/useGetEventsAndAchievements";

export function EventsAndAchievements() {
  const { rich } = useRichText("HomePage.EventsAndAchievements");
  const events = useGetEventsAndAchievements();

  useGSAP(() => {
    gsap.fromTo(
      ".event-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".event-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="flex py-12 bg-tertiary rounded-md">
      <Carousel
        className="w-full space-y-4"
        opts={{
          align: "start",
          breakpoints: { "(min-width: 640px)": { dragFree: true } },
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 justify-between px-8 lg:px-16">
          <AnimatedText as="h2">{rich("title")}</AnimatedText>

          <div className="gap-2 flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="first:ml-4 last:mr-8 lg:first:ml-12 lg:last:mr-16">
          {events.map((event) => (
            <CarouselItem
              key={event.src}
              className="event-card sm:basis-1/2 xl:basis-1/3 opacity-0"
            >
              <div className="relative w-full aspect-[9/10]">
                <Image
                  fill
                  src={event.src}
                  alt="event"
                  className="object-cover rounded-md"
                  sizes="100%"
                />
              </div>
              <p className="text-gray mt-6 text-sm md:text-base font-medium">
                {event.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
