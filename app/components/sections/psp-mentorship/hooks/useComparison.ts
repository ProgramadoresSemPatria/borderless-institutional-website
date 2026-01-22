import { useMessages } from "next-intl";

interface ComparisonItem {
  title: string;
  borderless: string;
  generic: string;
}

export function useComparison() {
  const message = useMessages();
  const comparison = message.PspMentorship.Comparison;

  return {
    title: comparison.title as string,
    header: comparison.header as string[],
    items: comparison.items as ComparisonItem[],
  };
}
