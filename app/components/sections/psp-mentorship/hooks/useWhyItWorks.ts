import { useTranslations } from "next-intl";

export function useWhyItWorks(): string[] {
  const t = useTranslations("PspMentorship.WhyItWorks");
  return [0,1,2,3].map((i) => t(`features.${i}`));
}
