"use client";

import { useRichText } from "@/app/hooks/useRichText";
import AutoHeight from "embla-carousel-auto-height";
import { ReactNode } from "react";
import { AnimatedText } from "../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/Carousel";
import { SectionHeader } from "../../ui/SectionHeader";
import { useTestimonials } from "./hooks/useTestimonials";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials({
  title,
  preTitle,
}: {
  title?: ReactNode;
  preTitle?: string;
}) {
  const testimonials = useTestimonials();
  const { rich } = useRichText("HomePage.Testimonials");

  const horizontalTestimonials = testimonials.filter(
    (testimonial) => testimonial.isHorizontal
  );

  const verticalTestimonials = testimonials.filter(
    (testimonial) => !testimonial.isHorizontal && testimonial.iframeSrc
  );

  const testimonialsWithoutVideo = testimonials.filter(
    (testimonial) => !testimonial.iframeSrc
  );

  return (
    <section className="py-[10svh] border-b border-solid border-white/20 space-y-12">
      <Carousel
        opts={{
          align: "start",
          breakpoints: { "(min-width: 768px)": { dragFree: true } },
        }}
        className="flex flex-col gap-4 lg:gap-8"
        plugins={[
          AutoHeight({
            breakpoints: {
              "(min-width: 768px)": {
                active: false,
              },
            },
          }),
        ]}
      >
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-12">
          {title && preTitle ? (
            <SectionHeader title={title} preTitle={preTitle} />
          ) : (
            <AnimatedText as="h2" className="max-w-4xl">
              {rich("title")}
            </AnimatedText>
          )}
          <div className="flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="-ml-2 items-start md:items-stretch">
          {horizontalTestimonials.map((testimonial, index) => (
            <CarouselItem
              key={`testimonial-${index}`}
              className="md:basis-1/2 xl:basis-1/3 pl-2"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        opts={{
          align: "start",
          breakpoints: { "(min-width: 768px)": { dragFree: true } },
        }}
        plugins={[
          AutoHeight({
            breakpoints: {
              "(min-width: 768px)": {
                active: false,
              },
            },
          }),
        ]}
        className="flex flex-col gap-4 lg:gap-8"
      >
        <div className="w-full gap-2 flex lg:justify-end">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselContent className="-ml-2 items-start md:items-stretch">
          {verticalTestimonials.map((testimonial, index) => (
            <CarouselItem
              key={`testimonial-vert-${index}`}
              className="md:basis-1/2 xl:basis-1/3 pl-2"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        opts={{
          align: "start",
          breakpoints: { "(min-width: 768px)": { dragFree: true } },
        }}
        plugins={[
          AutoHeight({
            breakpoints: {
              "(min-width: 768px)": {
                active: false,
              },
            },
          }),
        ]}
        className="flex flex-col gap-4 lg:gap-8"
      >
        <div className="w-full gap-2 flex lg:justify-end">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <CarouselContent className="-ml-2 items-start md:items-stretch">
          {testimonialsWithoutVideo.map((testimonial, index) => (
            <CarouselItem
              key={`testimonial-text-${index}`}
              className="md:basis-1/2 xl:basis-1/3 pl-2"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
