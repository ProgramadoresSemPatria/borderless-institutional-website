import { AnimatedText } from "../../ui/AnimatedText";
import { ExternalLink } from "../../ui/ExternalLink";

export function GlobalTalentConnector() {
  return (
    <section className="" style={{ minHeight: "fit-content" }}>
      <div className="bg-tertiary w-full flex-center flex-col space-y-12 rounded-md py-20 px-6">
        <AnimatedText as="h2" className="text-center text-pretty">
          A única empresa que conecta developers com empresas globais SEM TAXA
        </AnimatedText>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-pretty">
            Full-stack, ML Engineer, GoLang Dev e muito mais
          </p>
          <ExternalLink>Contratar um profissional</ExternalLink>
        </div>
      </div>
    </section>
  );
}
