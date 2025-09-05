import { useNavItems } from "@/app/components/layout/Header/hooks/useNavItems";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/Accordion";
import { AnimatedIconWrapper } from "@/app/components/ui/AnimatedIconWrapper";
import { FeatureCard } from "@/app/components/ui/FeatureCard";
import { Link } from "@/i18n/navigation";

export default function NavItems({ onClick }: { onClick: () => void }) {
  const navItems = useNavItems();
  return (
    <Accordion type="single" collapsible className="space-y-2">
      {navItems.map((item) => (
        <AccordionItem
          value={item.title}
          key={item.title}
          className="border-0 space-y-2"
        >
          {item.subItems ? (
            <AccordionTrigger
              hideArrow={!item.subItems}
              className="w-full items-center rounded-md bg-[#212121] p-2 pr-4"
            >
              <div className="flex items-center gap-4">
                {item.icon && <AnimatedIconWrapper icon={item.icon} />}
                <p className="font-medium">{item.title}</p>
              </div>
            </AccordionTrigger>
          ) : (
            <Link
              className="flex items-center gap-4 bg-[#212121] p-2 pr-4 text-sm"
              href={item.href || "/"}
              onClick={onClick}
            >
              {item.icon && <AnimatedIconWrapper icon={item.icon} />}
              <p className="font-medium">{item.title}</p>
            </Link>
          )}

          <AccordionContent className="flex flex-col gap-2 pb-0">
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.href || "/"}
                onClick={onClick}
              >
                <FeatureCard
                  title={subItem.title}
                  description={subItem.description}
                  className="opacity-100 p-4"
                  variant="secondary"
                />
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
