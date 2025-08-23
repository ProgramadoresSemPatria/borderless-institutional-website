import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { IconWrapper } from "./IconWrapper";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
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
  return (
    <div
      className={twMerge(
        "rounded-md md:h-64 p-6 flex flex-col justify-between gap-8",
        variant === "primary" ? "bg-tertiary" : "bg-[#212121]",
        className
      )}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm md:text-base font-medium max-w-xs text-gray">
          {description}
        </p>
        <IconWrapper className="md:p-3.5" icon={icon} />
      </div>
    </div>
  );
}
