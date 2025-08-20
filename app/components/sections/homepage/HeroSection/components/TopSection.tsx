import { ArrowRight, Globe } from "lucide-react";
import { AnimatedText } from "../../../../ui/AnimatedText";

export function TopSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Globe />
        <p className="text-sm md:text-xl">
          Global tech starts <span className="italic">here</span>{" "}
        </p>
      </div>

      <AnimatedText
        tweenVars={{
          scrollTrigger: undefined,
        }}
        as="h1"
        className="text-2xl md:text-4xl 2xl:text-6xl font-semibold max-w-6xl 2xl:max-w-7xl leading-snug md:leading-tight"
      >
        A ponte entre talentos tech{" "}
        <span className="font-ivy text-secondary">brasileiros</span> e o{" "}
        <span className="font-ivy text-secondary">mercado internacional</span> —
        com produtos educacionais, plataforma própria e startups em incubação.
      </AnimatedText>

      <div className="overflow-hidden pt-2">
        <button className="hero-button group border-2 border-primary py-3 w-full md:w-sm rounded-md flex-center gap-4 hover:opacity-80 cursor-pointer transition-opacity duration-150">
          Quero internacionalizar
          <ArrowRight className="group-hover:translate-x-1 transition-translate duration-150" />
        </button>
      </div>
    </div>
  );
}
