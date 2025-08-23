import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";
import { IconWrapper } from "../IconWrapper";
import { ComparatorFeature, IComparator } from "./types";

export function Comparator({
  comparisonData,
}: {
  comparisonData: IComparator;
}) {
  const { firstOptionTitle, secondOptionTitle, features } = comparisonData;

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-2 bg-tertiary p-2"
      >
        {features.map((feature) => (
          <ComparatorItem
            key={feature.title}
            feature={feature}
            firstOptionTitle={firstOptionTitle}
            secondOptionTitle={secondOptionTitle}
          />
        ))}
      </Accordion>
    </div>
  );
}

function ComparatorItem({
  feature,
  firstOptionTitle,
  secondOptionTitle,
}: {
  feature: ComparatorFeature;
  firstOptionTitle: string;
  secondOptionTitle: string;
}) {
  return (
    <AccordionItem
      value={feature.title}
      className="bg-[#212121] rounded-md border-0"
    >
      <AccordionTrigger className="items-center p-2">
        <div className="flex items-center gap-4">
          <IconWrapper icon={feature.icon} />
          <p className="font-medium">{feature.title}</p>
        </div>
      </AccordionTrigger>

      <AccordionContent className="p-4 h-full">
        <div>
          <p className="font-bold">{firstOptionTitle}:</p>
          <p>{feature.firstOptionFeature}</p>
        </div>

        <div className="mt-6">
          <p className="font-bold">{secondOptionTitle}:</p>
          <p>{feature.secondOptionFeature}</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
