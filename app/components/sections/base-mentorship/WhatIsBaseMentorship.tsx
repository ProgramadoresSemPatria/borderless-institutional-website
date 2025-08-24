"use client";

import { Trophy } from "lucide-react";
import { IconWrapper } from "../../ui/IconWrapper";
import { useRichText } from "@/app/hooks/useRichText";
import { useTranslations } from "next-intl";

export function WhatIsBaseMentorship() {
  const { t, rich } = useRichText("BaseMentorship.WhatIs");
  const tl = useTranslations("BaseMentorship.WhatIs");
  return (
    <section className="bg-tertiary rounded-md p-8 space-y-4">
      <h3 className="text-xl font-bold">{t("title")}</h3>
      <div>
        <p className="text-gray max-w-6xl">{t("description")}</p>
        <ul className="text-gray my-4 space-y-1 list-disc ml-4">
          <li>{tl("bullets.0")}</li>
          <li>{tl("bullets.1")}</li>
          <li>{tl("bullets.2")}</li>
          <li>{tl("bullets.3")}</li>
        </ul>
      </div>

      <div className="bg-[#212121] p-4 rounded-md font-medium flex gap-4 mt-12 items-start md:items-center">
        <IconWrapper
          className="size-14 flex-center shrink-0 hidden md:flex"
          icon={Trophy}
        />
        <p className="max-w-6xl font-semibold">{rich("highlight")}</p>
      </div>
    </section>
  );
}
