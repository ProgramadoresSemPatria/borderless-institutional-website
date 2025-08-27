import { ExternalLink } from "@/app/components/ui/ExternalLink";
import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { Program } from "../../hooks/useAccelerationPrograms";

export function AccelerationCard({
  description,
  features,
  title,
  className,
  href,
}: Program & { className?: string }) {
  const t = useTranslations("HomePage.AccelerationPrograms");

  return (
    <div className={twMerge("bg-tertiary rounded-md p-8", className)}>
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-base text-gray">{description}</p>

        <div className="space-y-3 text-white/90">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4">
              <IconWrapper className="p-1.5" icon={feature.icon} />
              <p className="font-medium text-sm md:text-base">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end mt-8">
        <ExternalLink href={href}>{t("buttonText")}</ExternalLink>
      </div>
    </div>
  );
}
