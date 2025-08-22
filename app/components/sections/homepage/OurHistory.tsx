import Image from "next/image";
import { AnimatedGrid } from "../../ui/AnimatedGrid";
import { AnimatedText } from "../../ui/AnimatedText";

export function OurHistory() {
  return (
    <section
      className="space-y-6 pt-[10svh] history-section"
      style={{ minHeight: "fit-content" }}
    >
      <div className="grid lg:grid-cols-2 gap-4 items-center">
        <div className="relative">
          <Image
            alt="borderless conference"
            width={828}
            height={834}
            src={"/borderless-conference.webp"}
            className="history-image size-full object-cover rounded-md aspect-video overflow-hidden"
          />
          <AnimatedGrid className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 md:w-36" />
        </div>
        <div className="bg-tertiary rounded-md p-8 flex flex-col h-full justify-between gap-12">
          <AnimatedText as="h2">
            Nossa <span className="font-ivy">História</span>
          </AnimatedText>
          <div className="text-gray">
            <AnimatedText className="2xl:text-lg font-medium">
              Criada em 2023 por Yuri Pereira somente como uma mentoria que
              conectava developers com o mercado, hoje se tornou um ecossistema
              com professores de Tech, Inglês, CTO&apos;s, Managers,
              Cybersecurity e diversos áreas do mercado tech.
            </AnimatedText>
            <br />
            <AnimatedText className="2xl:text-lg font-medium">
              Hoje, a Borderless já contribuiu para a internacionalização de
              mais de 105 profissionais — desde iniciantes em início de carreira
              até especialistas com mais de 10 anos de experiência.
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}
