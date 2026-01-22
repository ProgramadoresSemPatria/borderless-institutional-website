import { CheckIcon } from "lucide-react";
import { SectionHeader } from "../../ui/SectionHeader";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../../ui/Table";
import { useComparison } from "./hooks/useComparison";

export function Comparison() {
  const { title, header, items } = useComparison();

  return (
    <section className="pt-[10svh] pb-12 space-y-8">
      <SectionHeader title={title} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{header[0]}</TableHead>
            <TableHead className="text-secondary">{header[1]}</TableHead>
            <TableHead>{header[2]}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.title}>
              <TableCell className="font-semibold text-white/70">
                {item.title}
              </TableCell>
              <TableCell className="bg-tertiary min-w-[300px]">
                <div className="flex gap-3 items-center">
                  <CheckIcon size={16} className="text-secondary shrink-0" />
                  {item.borderless}
                </div>
              </TableCell>
              <TableCell className="min-w-[300px]">{item.generic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
