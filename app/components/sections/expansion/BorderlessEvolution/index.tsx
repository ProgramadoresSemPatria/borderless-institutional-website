import { AnimatedText } from "../../../ui/AnimatedText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/Carousel";
import { Stage } from "./components/Stage";
import { roadmapStages } from "./constants/roadmapStages";

export function BorderlessEvolution() {
  return (
    <section className="py-[10svh] space-y-8">
      <AnimatedText as="h2">
        The Borderless <span className="font-ivy">evolution</span>
      </AnimatedText>

      <Carousel
        opts={{
          align: "center",
        }}
      >
        <div className="flex gap-2 mb-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>

        <div className="bg-tertiary rounded-md p-2">
          <CarouselContent className="-ml-2">
            {roadmapStages.map((stage) => (
              <CarouselItem
                key={stage.title}
                className="basis-[100%] lg:basis-[45%] xl:basis-[30%] select-none pl-2"
              >
                <Stage stage={stage} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
}
