"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Award, Code2, Github, Layers } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

export const results = [
  {
    title: "Multi-chain dApps",
    description:
      "Build and deploy multiple dApps across Ethereum, Solana, and Cosmos",
    icon: Code2,
  },
  {
    title: "Hands-on Web3",
    description:
      "Gain hands-on experience in DeFi, NFTs, DAOs, ZK proofs, and AI-Web3 integration",
    icon: Layers,
  },
  {
    title: "Portfolio Ready",
    description:
      "Have a GitHub-ready portfolio of projects and a demo-day presentation",
    icon: Github,
  },
  {
    title: "NFT Certificate",
    description: "Earn an NFT certificate recognized globally",
    icon: Award,
  },
];

export function ResultsYouCanExpect() {
  useGSAP(() => {
    gsap.fromTo(
      ".result-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: ".result-card", start: "top 90%" },
      }
    );
  });

  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle="Outcomes You Can Expect"
        title={
          <>
            By the end of the <span className="font-ivy">bootcamp</span>,
            participants will:
          </>
        }
      />

      <div className="grid lg:grid-cols-2 gap-2">
        {results.map((result) => (
          <FeatureCard
            className="result-card"
            key={result.title}
            title={result.title}
            description={result.description}
            icon={result.icon}
          />
        ))}
      </div>
    </section>
  );
}
