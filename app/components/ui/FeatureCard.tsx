"use client";

import { ArrowUpRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  variant = "primary",
}: FeatureCardProps) {
  const IconComponent = icon || ArrowUpRight;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={twMerge(
        "rounded-md md:h-64 p-6 flex flex-col justify-between gap-8 opacity-0 group",
        variant === "primary" ? "bg-tertiary" : "bg-[#212121]",
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="w-full flex items-center justify-between gap-4">
        <p className="text-sm md:text-base font-medium max-w-xs text-gray">
          {description}
        </p>

        <AnimatedIconWrapper icon={IconComponent} hovered={hovered} />
      </div>
    </div>
  );
}
