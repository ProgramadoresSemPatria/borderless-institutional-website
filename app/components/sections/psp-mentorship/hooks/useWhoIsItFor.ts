import { useTranslations } from "next-intl";

export interface ListBlock {
  title: string;
  items: string[];
}

export function useWhoIsItFor(): { roles: ListBlock; requirements: ListBlock } {
  const t = useTranslations("PspMentorship.WhoIsItFor");

  const roles: ListBlock = {
    title: t("roles.title"),
    items: [0,1,2,3,4].map((i) => t(`roles.items.${i}`)),
  };

  const requirements: ListBlock = {
    title: t("requirements.title"),
    items: [0,1,2,3].map((i) => t(`requirements.items.${i}`)),
  };

  return { roles, requirements };
}
