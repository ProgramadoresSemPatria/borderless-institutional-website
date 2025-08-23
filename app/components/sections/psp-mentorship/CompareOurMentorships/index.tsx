import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/Accordion";
import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { AnimatedText } from "../../../ui/AnimatedText";
import {
  FeatureByMentorship,
  featuresByMentorship,
} from "./constants/featuresComparison";

export function CompareOurMentorships() {
  return (
    <section className="py-[10svh] space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          <AnimatedText className="text-sm md:text-xl font-medium">
            If you are not ready yet
          </AnimatedText>
        </div>
        <AnimatedText as="h2" className="max-w-4xl">
          Compare our <span className="font-ivy">mentorships</span>
        </AnimatedText>
      </div>

      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-2 bg-tertiary p-2"
      >
        {featuresByMentorship.map((feature) => (
          <FeatureComparisonCard {...feature} key={feature.feature} />
        ))}
      </Accordion>
    </section>
  );
}

function FeatureComparisonCard({
  feature,
  mentorship,
  icon,
}: FeatureByMentorship) {
  return (
    <AccordionItem value={feature} className="bg-[#212121] rounded-md border-0">
      <AccordionTrigger className="items-center p-2">
        <div className="flex items-center gap-4">
          <IconWrapper icon={icon} />
          <p className="font-medium">{feature}</p>
        </div>
      </AccordionTrigger>

      <AccordionContent className="p-4 h-full">
        <div>
          <p className="font-bold">BASE mentorship:</p>
          <p>{mentorship.base}</p>
        </div>

        <div className="mt-6">
          <p className="font-bold">PSP mentorship:</p>
          <p>{mentorship.psp}</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
