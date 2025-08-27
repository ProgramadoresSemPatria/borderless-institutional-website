import { useMessages } from "next-intl";

export interface Event {
  description: string;
  src: string;
}

export function useGetEventsAndAchievements(): Event[] {
  const messages = useMessages();
  const events = messages.HomePage.EventsAndAchievements.events;
  return events;
}
