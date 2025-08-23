"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ClockIcon } from "lucide-react";
import { SectionHeader } from "../../../ui/SectionHeader";
import { Module, modules } from "./constants/modules";

export function ModulesOverview() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".module-overview-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: "10%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "back.inOut",
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
          },
        }
      );
    });
  });

  return (
    <section className="space-y-8">
      <SectionHeader
        preTitle="Modules Overview"
        title={
          <>
            A comprehensive 12-week journey from blockchain fundamentals to
            <span className="font-ivy">advanced Web3 development</span>
          </>
        }
      />

      <div className="flex flex-col gap-8">
        {modules.map((module, index) => (
          <ModuleOverview key={module.title} {...module} index={index} />
        ))}
      </div>
    </section>
  );
}

function ModuleOverview({
  title,
  weeks,
  goal,
  index,
}: Module & { index: number }) {
  return (
    <div className="module-overview-card bg-tertiary rounded-md p-2 space-y-4">
      <div className="space-y-2 p-4">
        <p className="text-xl font-medium">
          <span className="font-bold font-ivy text-secondary">
            Module {index + 1}:
          </span>{" "}
          {title}
        </p>
        <p className="text-gray">{goal}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-2">
        {weeks.map((week) => (
          <div
            key={week.title}
            className="flex flex-col bg-[#232322] rounded-md p-4 space-y-6"
          >
            <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
              <p className="font-medium">{week.title}</p>
              <div className="flex items-center gap-2 text-gray">
                <ClockIcon className="size-4" />
                <p>{week.length}</p>
              </div>
            </div>

            <ul className="space-y-2 grow">
              {week.content.map((content, index) => (
                <li
                  key={`${content[0]}-${index}`}
                  className="flex items-center gap-4 text-gray"
                >
                  <div className="bg-primary shrink-0 size-1.5 rounded-full" />
                  <p className="text-sm md:text-base">{content}</p>
                </li>
              ))}
            </ul>

            {week.extra && (
              <div className="bg-tertiary rounded-md px-4 py-4 text-sm font-medium text-pretty">
                {week.extra}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
