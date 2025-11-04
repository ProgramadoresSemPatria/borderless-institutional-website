"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Testimonial } from "./hooks/useTestimonials";

interface TestimonialCardProps extends Testimonial {}

export function TestimonialCard({
  img,
  name,
  role,
  iframeSrc,
  isHorizontal,
  testimony,
}: TestimonialCardProps) {
  function formatTestimony(testimony: string) {
    return testimony.split("\n").map((line, index) => {
      if (!line.trim()) return <br key={index} />;

      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={index} className="mb-2">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="font-bold text-white">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  }

  return (
    <div className="bg-tertiary rounded-md p-6 select-none flex flex-col gap-6 h-full">
      <div className="flex items-center gap-4">
        <div className="relative size-16">
          <Image
            fill
            src={img}
            alt="profile picture"
            className="rounded-full object-cover"
            sizes="100%"
          />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>

      {iframeSrc && (
        <div className={twMerge("space-y-6")}>
          <div className="bg-black/30 rounded-md overflow-hidden">
            <div
              className={twMerge(
                "mx-auto w-full relative overflow-hidden",
                isHorizontal ? "aspect-[16/9]" : "sm:w-[60%] aspect-[9/16]"
              )}
            >
              <iframe
                src={iframeSrc}
                className="absolute inset-0 size-full"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}

      {testimony && (
        <div className="text-base text-gray space-y-4 bg-background rounded-sm p-4 grow">
          {formatTestimony(testimony)}
        </div>
      )}
    </div>
  );
}
