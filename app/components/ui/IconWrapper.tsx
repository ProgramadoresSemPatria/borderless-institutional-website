import { LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function IconWrapper({
  icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  const IconComponent = icon;
  return (
    <div className={twMerge("p-2.5 size-fit rounded-sm bg-primary", className)}>
      <IconComponent className="size-5 text-white" />
    </div>
  );
}
