"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RequirementsCard } from "../../ui/RequirementsCard";
import { SectionHeader } from "../../ui/SectionHeader";

export function WhoIsItFor() {
  useGSAP(() => {
    gsap.fromTo(
      ".requirements-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".requirements-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle="Who is it for?"
        title={
          <>
            The BASE Mentorship is built for{" "}
            <span className="font-ivy">junior to early mid-level</span> tech
            professionals:
          </>
        }
      />

      <div className="grid md:grid-cols-2 gap-2">
        <RequirementsCard
          title="Tech Roles"
          items={[
            "Frontend, Backend, Fullstack Developers",
            "QA, Data Analysts",
            "Support Engineers",
          ]}
        />
        <RequirementsCard
          title="Requirements"
          items={[
            "1-2 years of professional experience or recently graduated",
            "English level: A1 to B1 (goal: B2 for international readiness)",
            "Ready to work hard, follow a clear plan, and join a high-performance community",
          ]}
        />
      </div>
    </section>
  );
}
