import { useTranslations } from "next-intl";

export interface Event {
  description: string;
  src: string;
}

export function useGetEventsAndAchievements(): Event[] {
  const t = useTranslations("HomePage.EventsAndAchievements");

  return [
    {
      description: t("event1"),
      src: "/events/conference.webp",
    },
    {
      description: t("event2"),
      src: "/events/interview.webp",
    },
    {
      description: t("event3"),
      src: "/events/brainstorm.webp",
    },
    {
      description: t("event4"),
      src: "/events/hackthon.webp",
    },
  ];
}
