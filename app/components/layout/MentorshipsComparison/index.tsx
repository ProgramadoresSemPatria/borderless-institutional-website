import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/Accordion";
import { IconWrapper } from "../../ui/IconWrapper";
import {
  FeatureByMentorship,
  featuresByMentorship,
} from "./constants/featuresComparison";

export function MentorshipsComparison() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-2 bg-tertiary p-2"
    >
      {featuresByMentorship.map((feature) => (
        <FeatureComparisonCard {...feature} key={feature.feature} />
      ))}
    </Accordion>
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
