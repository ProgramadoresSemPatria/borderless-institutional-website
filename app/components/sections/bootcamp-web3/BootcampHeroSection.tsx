import { ArrowRight } from "lucide-react";
import { AnimatedText } from "../../ui/AnimatedText";

export function BootcampHeroSection() {
  return (
    <section className="py-[10svh] space-y-12">
      <div className="space-y-6">
        <AnimatedText
          tweenVars={{
            scrollTrigger: undefined,
          }}
          as="h1"
          className="text-2xl md:text-4xl 2xl:text-6xl font-semibold max-w-6xl 2xl:max-w-7xl leading-snug md:leading-tight"
        >
          Master{" "}
          <span className="font-ivy text-secondary">Web3 Development</span> in
          12 Weeks
        </AnimatedText>

        <div className="space-y-12">
          <AnimatedText
            tweenVars={{
              delay: 0.3,
              scrollTrigger: undefined,
            }}
            className="md:text-xl max-w-3xl font-semibold text-gray"
          >
            Hands-on, project-based bootcamp designed to transform developers
            into global-ready Web3 professionals. Learn blockchain, smart
            contracts, DeFi, NFTs, and cutting-edge integrations — directly from
            industry experts.
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
  );
}
