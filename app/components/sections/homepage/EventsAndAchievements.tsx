import Image from "next/image";
import { AnimatedText } from "../../ui/AnimatedText";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/Carousel";

const events = [
  {
    description:
      "Primeira borderless conf São Paulo, Brasil, para mais de 70 convidados",
    src: "/events/conference.webp",
  },
  {
    description:
      "Entrevista do Nosso founder, Yuri Pereira, para a revista Entrepreneur em Dubai, UAE ",
    src: "/events/interview.webp",
  },
  {
    description: "Brainstorm durante uma hackthon de AI na frança",
    src: "/events/brainstorm.webp",
  },
  {
    description:
      "Mentorados da borderless receberam o segundo lugar na hackathon da EthCC em Cannes, França",
    src: "/events/hackthon.webp",
  },
];

export function EventsAndAchievements() {
  return (
    <section
      className="flex flex-col gap-8 py-12 bg-tertiary"
      style={{ minHeight: "fit-content" }}
    >
      <AnimatedText as="h2" className="w-fit px-8 lg:px-16">
        Eventos e <span className="font-ivy">conquistas</span>
      </AnimatedText>

      <Carousel>
        <CarouselContent className="first:ml-4 last:mr-8 lg:first:ml-12 lg:last:mr-16">
          {events.map((event) => (
            <CarouselItem key={event.src} className="sm:basis-1/2 xl:basis-1/3">
              <div className="relative w-full aspect-[9/10]">
                <Image
                  fill
                  src={event.src}
                  alt="event"
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-white/80 mt-2">{event.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
