"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { IncubatedStartups } from "../general/IncubatedStartups";

export function IncubatedStartupsWrapper() {
  const { rich } = useRichText("HomePage.IncubatedStartups");

  return (
    <section className="py-[10svh] space-y-6 incubated-startups-section border-b border-solid border-white/20 ">
      <IncubatedStartups
        preTitle="Powered by Borderless Coding"
        title={<>{rich("title")}</>}
      />
    </section>
  );
}
