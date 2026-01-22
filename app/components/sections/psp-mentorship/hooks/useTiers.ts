import { useMessages } from "next-intl";

export interface ITier {
  index: number;
  title: string;
  goal: string;
  items: string[];
  img: string;
}

export function useTiers() {
  const message = useMessages();
  const tiers = message.PspMentorship.Tiers;
  return {
    subtitle: tiers.subtitle,
    tiers: tiers.items as ITier[],
    goal: tiers.goal,
  };
}
