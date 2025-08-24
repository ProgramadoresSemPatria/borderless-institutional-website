"use client";

import { useRichText } from "@/app/hooks/useRichText";

export function useIncubatedStartups() {
  const { t, rich } = useRichText("HomePage.IncubatedStartups");

  return {
    title: rich("title"),
    startups: [
      {
        src: "/startups/rampix.png",
        title: t("startups.0.title"),
        description: t("startups.0.description"),
        buttonText: t("startups.0.buttonText"),
      },
      {
        src: "/startups/borderless-community.webp",
        title: t("startups.1.title"),
        description: t("startups.1.description"),
        buttonText: t("startups.1.buttonText"),
      },
    ],
  };
}
