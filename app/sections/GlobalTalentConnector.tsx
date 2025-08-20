import { AnimatedText } from "../components/ui/AnimatedText";
import { ExternalLink } from "../components/ui/ExternalLink";

export function GlobalTalentConnector() {
  return (
    <section>
      <AnimatedText as="h2">
        A única empresa que conecta developers com empresas globais SEM TAXA
      </AnimatedText>
      <p>Full-stack, ML Engineer, GoLang Dev e muito mais</p>
      <ExternalLink>Contratar um profissional</ExternalLink>
    </section>
  );
}
