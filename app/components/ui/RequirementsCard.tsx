import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { AnimatedIconWrapper } from "./AnimatedIconWrapper";

interface RequirementsCardProps {
  title?: string;
  items: string[];
  className?: string;
}

export function RequirementsCard({
  title,
  items,
  className,
}: RequirementsCardProps) {
  return (
    <div
      className={twMerge(
        "requirements-card bg-tertiary rounded-md p-8 space-y-4 w-full opacity-0",
        className
      )}
    >
      {title && <p className="text-lg md:text-xl font-bold">{title}</p>}
      <div className="text-gray space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <AnimatedIconWrapper
              className="shrink-0 size-7 flex-center p-0"
              icon={Check}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
