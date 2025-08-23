import { Trophy } from "lucide-react";
import { IconWrapper } from "../../ui/IconWrapper";

export function WhatIsBaseMentorship() {
  return (
    <section className="bg-tertiary rounded-md p-8 space-y-4">
      <h3 className="text-xl font-bold">What is BASE Mentorship?</h3>
      <div>
        <p className="text-gray max-w-6xl">
          The <strong>BASE Mentorship</strong> is a structured, practical
          program for early-career tech professionals who want to break out of
          the national market and prepare for global opportunities. Led by 
          <strong>Yuri Pereira</strong> and the Borderless Coding mentor team,
          BASE is designed to:
        </p>
        <ul className="text-gray my-4 space-y-1 list-disc ml-4">
          <li>Strengthen your technical foundations</li>
          <li>Build an international-ready portfolio</li>
          <li>Improve your English for interviews and collaboration</li>
          <li>
            Position you for future entry into the 
            <strong>PSP Mentorship</strong> program
          </li>
        </ul>
      </div>

      <div className="bg-[#212121] p-4 rounded-md font-medium flex gap-4 mt-12 items-start md:items-center">
        <IconWrapper
          className="size-14 flex-center shrink-0 hidden md:flex"
          icon={Trophy}
        />
        <p className="max-w-6xl font-semibold">
          This is not a generic bootcamp or online course — it is a guided path
          to transform you from a talented local developer into a globally
          competitive candidate
        </p>
      </div>
    </section>
  );
}
