import { ExternalLink } from "@/app/components/ui/ExternalLink";
import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { twMerge } from "tailwind-merge";
import { Program } from "../constants/programs";

export function AccelerationCard({
  description,
  features,
  title,
  className,
}: Program & { className?: string }) {
  return (
    <div className={twMerge("bg-tertiary rounded-md p-8", className)}>
      <div className="space-y-6">
        <h3 className="text-xl md:text-3xl font-bold">{title}</h3>
        <p className="text-white/90">{description}</p>

        <div className="space-y-3 text-white/90">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 font-semibold text-sm"
            >
              <IconWrapper className="p-1.5" icon={feature.icon} />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end mt-8">
        <ExternalLink>Saiba mais</ExternalLink>
      </div>
    </div>
  );
}
