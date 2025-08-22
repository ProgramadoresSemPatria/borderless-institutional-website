"use client";

import Image from "next/image";
import { AnimatedText } from "../../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/Carousel";
import { testimonials } from "./constants/testimonials";

export function Testimonials() {
  return (
    <section className="py-[10svh] border-b border-solid border-white/20 space-y-12">
      <Carousel className="flex flex-col gap-4 lg:gap-8">
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center gap-12">
          <AnimatedText as="h2" className="max-w-4xl">
            Prova real - Mais de 105{" "}
            <span className="font-ivy">devs globalizados</span>
          </AnimatedText>
          <div className="flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="-ml-2">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={`testimonial-${index}`}
              className="md:basis-1/2 xl:basis-1/3 pl-2"
            >
              <div className="bg-tertiary rounded-md min-h-[30rem] p-6 select-none flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative size-16">
                    <Image
                      fill
                      src={testimonial.img}
                      alt="profile picture"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {testimonial.testimony && (
                  <div className="text-base text-gray">
                    {testimonial.testimony}
                  </div>
                )}

                {testimonial.iframeSrc && (
                  <div className="size-full space-y-6">
                    <div className="bg-black/30 rounded-md overflow-hidden">
                      <div className="mx-auto w-full sm:w-[60%] aspect-[9/16] relative overflow-hidden">
                        <iframe
                          src={testimonial.iframeSrc}
                          className="absolute inset-0 size-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="text-gray">{testimonial.description}</p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
