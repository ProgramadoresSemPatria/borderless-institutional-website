"use client";

import { useRichText } from "@/app/hooks/useRichText";
import Image from "next/image";
import { AnimatedGrid } from "../../ui/AnimatedGrid";
import { AnimatedText } from "../../ui/AnimatedText";

export function OurHistory() {
  const { rich, t } = useRichText("HomePage.OurHistory");
  const paragraphs = [t("paragraphs.0"), t("paragraphs.1")];

  return (
    <section className="space-y-6 pt-[10svh] history-section">
      <div className="grid lg:grid-cols-2 gap-4 items-center">
        <div className="relative">
          <Image
            alt="borderless conference"
            width={828}
            height={834}
            src={"/borderless-conference.webp"}
            className="history-image size-full object-cover rounded-md aspect-video overflow-hidden"
          />
          <AnimatedGrid className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 md:w-36" />
        </div>
        <div className="bg-tertiary rounded-md p-8 flex flex-col h-full justify-between gap-12">
          <AnimatedText as="h2">{rich("title")}</AnimatedText>
          <div className="text-gray space-y-4">
            {paragraphs.map((p, index) => (
              <AnimatedText
                key={`our-history-${index}`}
                className="2xl:text-lg font-medium"
              >
                {p}
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
