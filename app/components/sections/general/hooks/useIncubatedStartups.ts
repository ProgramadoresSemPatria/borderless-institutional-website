"use client";

import { useMessages } from "next-intl";

interface Startup {
  src: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function useIncubatedStartups() {
  const messages = useMessages();
  const startups = messages.IncubatedStartups as Startup[];

  return startups;
}
