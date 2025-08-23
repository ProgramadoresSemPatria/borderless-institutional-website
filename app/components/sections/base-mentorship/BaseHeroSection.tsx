import { ArrowRight } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";

export function BaseHeroSection() {
  return (
    <section>
      <section className="py-[10svh] space-y-12">
        <div className="space-y-6">
          <AnimatedText
            tweenVars={{
              scrollTrigger: undefined,
            }}
            as="h1"
            className="text-2xl md:text-4xl 2xl:text-6xl font-semibold max-w-6xl 2xl:max-w-7xl leading-snug md:leading-tight"
          >
            Build Your Global Career Foundation -{" "}
            <span className="font-ivy text-secondary">From Zero to Ready</span>{" "}
            in 12 Months
          </AnimatedText>

          <div className="space-y-12">
            <AnimatedText
              tweenVars={{
                delay: 0.3,
                scrollTrigger: undefined,
              }}
              className="md:text-xl max-w-3xl font-semibold text-gray"
            >
              BASE Mentorship is the career foundation program for ambitious
              Brazilian tech professionals who want to prepare for high-paying
              international roles. Develop the skills, portfolio, and confidence
              to step into the global market — and become ready for PSP
              Mentorship
            </AnimatedText>
          </div>

          <div className="overflow-hidden pt-2">
            <button className="hero-button group border-2 border-primary py-3 w-full md:w-sm rounded-md flex-center gap-4 hover:opacity-80 cursor-pointer transition-opacity duration-150">
              Apply for the Next Cohort
              <ArrowRight className="group-hover:translate-x-1 transition-translate duration-150" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
