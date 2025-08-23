import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/Accordion";
import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import {
  FeatureByMentorship,
  featuresByMentorship,
} from "./constants/featuresComparison";

export function CompareOurMentorships() {
  return (
    <section className="pt-[10svh] pb-2 space-y-8">
      <SectionHeader
        preTitle="If you are not ready yet"
        title={
          <>
            Compare our <span className="font-ivy">mentorships</span>
          </>
        }
      />

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
