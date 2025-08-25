"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatedText } from "../../ui/AnimatedText";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/Carousel";
import RichText from "../../ui/RichText";

const logosSrc = [
  "/brand-logos/coca-cola.png",
  "/brand-logos/apple.png",
  "/brand-logos/beehiiv.png",
  "/brand-logos/strike.png",
  "/brand-logos/paypal.png",
  "/brand-logos/x-team.png",
  "/brand-logos/pizza-hut.png",
  "/brand-logos/accenture.png",
  "/brand-logos/nubank.png",
  "/brand-logos/btg-pactual.png",
];

export function TalentCompanies() {
  const t = useTranslations("HomePage.TalentCompanies");

  return (
    <section className="py-[10svh] pb-[5svh] space-y-6">
      <AnimatedText as="h2" className="max-w-5xl">
        <RichText>{(tags) => t.rich("title", { ...tags })}</RichText>
      </AnimatedText>

      <Carousel
        opts={{ loop: true, dragFree: true }}
        plugins={[
          AutoScroll({
            startDelay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="bg-tertiary rounded-md p-2"
      >
        <CarouselContent className="-ml-2">
          {logosSrc.map((src, index) => (
            <CarouselItem
              key={`brand-logo-${index}`}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/8 pl-2"
            >
              <div className="brand-card bg-background rounded-xl p-8 flex-center h-full select-none">
                <Image width={800} height={800} src={src} alt="brand logo" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
