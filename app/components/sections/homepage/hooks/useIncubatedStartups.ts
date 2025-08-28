"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { useMessages } from "next-intl";

interface Startup {
  src: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function useIncubatedStartups() {
  const { rich } = useRichText("HomePage.IncubatedStartups");
  const messages = useMessages();
  const startups = messages.HomePage.IncubatedStartups.startups as Startup[];

  return {
    title: rich("title"),
    startups,
  };
}
