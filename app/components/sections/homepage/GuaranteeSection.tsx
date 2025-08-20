"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Smartphone, Users, Video } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";
import { FeatureCard } from "../../ui/FeatureCard";

const features = [
  {
    icon: Code,
    title: "Aulas de implementação",
    description: "Aprenda fazendo com projetos práticos e reais",
  },
  {
    icon: Users,
    title: "Comunidade & Networking",
    description: "Rede de contatos global para sua carreira",
  },
  {
    icon: Video,
    title: "Encontros ao vivo",
    description: "Interação direta com mentores especialistas",
  },
  {
    icon: Smartphone,
    title: "Mini-apps para acompanhamento",
    description: "Tecnologia para acompanhar sua evolução",
  },
];

export function GuaranteeSection() {
  useGSAP(() => {
    gsap.fromTo(
      ".feature-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 90%",
        },
      }
    );
  });

  return (
    <section
      className="py-[10svh] space-y-6"
      style={{ minHeight: "fit-content" }}
    >
      <AnimatedText as="h2">
        Consiga um <span className="font-ivy">emprego</span> em tech ou seu{" "}
        <span className="font-ivy">dinheiro de volta</span>
      </AnimatedText>

      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-2">
        {features.map((feature, index) => {
          return (
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={`feature-card`}
              key={`feature-${index}`}
            />
          );
        })}
      </div>
    </section>
  );
}
