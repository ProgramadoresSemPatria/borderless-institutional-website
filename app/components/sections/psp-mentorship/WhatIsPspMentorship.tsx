"use client";

import { useRichText } from "@/app/hooks/useRichText";
import { Trophy } from "lucide-react";
import { AnimatedIconWrapper } from "../../ui/AnimatedIconWrapper";

export function WhatIsPspMentorship() {
  const { t, rich } = useRichText("PspMentorship.WhatIs");
  return (
    <section className="bg-tertiary rounded-md p-8 space-y-4">
      <h3 className="text-xl font-bold">{t("title")}</h3>
      <p className="text-gray max-w-6xl">{t("description")}</p>

      <div className="bg-[#212121] p-4 rounded-md font-medium flex gap-4 mt-12 items-start md:items-center">
        <AnimatedIconWrapper
          className="size-14 flex-center shrink-0 hidden md:flex"
          icon={Trophy}
        />
        <p className="max-w-6xl font-semibold">{rich("highlight")}</p>
      </div>
    </section>
  );
}
