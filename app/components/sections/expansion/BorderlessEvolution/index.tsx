"use client";

import { AnimatedText } from "../../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/Carousel";
import { Stage } from "./components/Stage";
import { useRichText } from "@/app/hooks/useRichText";
import { useBorderlessEvolution } from "../../expansion/hooks/useBorderlessEvolution";
import AutoHeight from "embla-carousel-auto-height";

export function BorderlessEvolution() {
  const { rich } = useRichText("Expansion.BorderlessEvolution");
  const { stages, statusLabels } = useBorderlessEvolution();
  return (
    <section className="py-[10svh] space-y-8">
      <AnimatedText as="h2">{rich("title")}</AnimatedText>

      <Carousel
        opts={{
          align: "center",
        }}
        plugins={[
          AutoHeight({
            breakpoints: {
              "(min-width: 1024px)": {
                active: false,
              },
            },
          }),
        ]}
      >
        <div className="flex gap-2 mb-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <div className="bg-tertiary rounded-md p-2">
          <CarouselContent className="-ml-2 items-start lg:items-stretch transition-all ease-out duration-100">
            {stages.map((stage) => (
              <CarouselItem
                key={stage.title}
                className="basis-[100%] lg:basis-[50%] 2xl:basis-[30%] select-none pl-2"
              >
                <Stage stage={stage} labels={statusLabels} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
