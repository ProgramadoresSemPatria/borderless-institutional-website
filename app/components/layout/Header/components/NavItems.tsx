import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/Accordion";
import { IconWrapper } from "@/app/components/ui/IconWrapper";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { navItems } from "../constants/navItems";

export default function NavItems({ onClick }: { onClick: () => void }) {
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
                {item.icon && <IconWrapper icon={item.icon} />}
                <p className="font-medium">{item.title}</p>
              </div>
            </AccordionTrigger>
          ) : (
            <Link
              className="flex items-center gap-4 bg-[#212121] p-2 pr-4"
              href={item.href || "/"}
              onClick={onClick}
            >
              {item.icon && <IconWrapper icon={item.icon} />}
              <p className="font-medium">{item.title}</p>
            </Link>
          )}

          <AccordionContent className="flex flex-col gap-2 pb-0">
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.title}
                href={subItem.href || "/"}
                className="bg-[#212121] pl-4 p-2 rounded-md flex items-center justify-between"
                onClick={onClick}
              >
                <p>{subItem.title}</p>
                <IconWrapper icon={ArrowUpRight} />
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
