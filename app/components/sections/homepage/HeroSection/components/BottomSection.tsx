import { AnimatedText } from "@/app/components/ui/AnimatedText";
import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { ArrowDown } from "lucide-react";
import { NumbersHighlightCard } from "./NumbersHighlightCard";

export function BottomSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-20 grow">
      <div className="space-y-12">
        <AnimatedText
          tweenVars={{
            delay: 0.3,
            scrollTrigger: undefined,
          }}
          className="md:text-xl max-w-3xl font-bold"
        >
          O único ecossistema do Brasil que prepara, forma e conecta
          profissionais de tech com os mercados globais.
        </AnimatedText>

        <div className="hidden lg:flex items-center gap-4">
          <p className="font-semibold">Descubra mais</p>
          <IconWrapper icon={ArrowDown} />
        </div>
      </div>

      <NumbersHighlightCard />
    </div>
  );
}
