import { Trophy } from "lucide-react";
import { IconWrapper } from "../../ui/IconWrapper";

export function WhatIsPspMentorship() {
  return (
    <section className="bg-tertiary rounded-md p-8 space-y-4">
      <h3 className="text-xl font-bold">What is PSP Mentorship?</h3>
      <p className="text-gray max-w-6xl">
        The Programador Sem Pátria (PSP) Mentorship is a high-performance career
        acceleration program designed for experienced Brazilian tech
        professionals who are ready to play in the global market. Led by Yuri
        Pereira, founder of Borderless Coding, PSP combines strategic
        positioning, technical interview mastery, networking, and direct
        mentorship to create predictable international job offers.
      </p>

      <div className="bg-[#212121] p-4 rounded-md font-medium flex gap-4 mt-12 items-start md:items-center">
        <IconWrapper
          className="size-14 flex-center shrink-0 hidden md:flex"
          icon={Trophy}
        />
        <p className="max-w-6xl font-semibold">
          Over 105+ alumni have already landed roles in companies from the US,
          Canada, Europe, and Asia — many with salaries ranging from $5K to
          $15K/month.
        </p>
      </div>
    </section>
  );
}
