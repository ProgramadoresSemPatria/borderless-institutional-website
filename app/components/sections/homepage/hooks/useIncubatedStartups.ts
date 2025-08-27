"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useMessages } from "next-intl";

export function useIncubatedStartups() {
  const { rich } = useRichText("HomePage.IncubatedStartups");
  const messages = useMessages();
  const startups = messages.HomePage.IncubatedStartups.startups;

  return {
    title: rich("title"),
    startups,
  };
}
