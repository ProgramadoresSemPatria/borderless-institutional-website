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

      <div className="md:hidden space-y-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-white/2"
          >
            <div className="p-4 border-b border-white/10 bg-white/3">
              <h3 className="font-semibold text-white/90">{item.title}</h3>
            </div>

            <div className="p-4 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
                  {header[1]}
                </span>
                <div className="flex gap-3 p-4 rounded-xl bg-tertiary/40 border border-secondary/20 shadow-inner">
                  <CheckIcon size={18} className="text-secondary shrink-0" />
                  <span className="text-sm text-white">{item.borderless}</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                  {header[2]}
                </span>
                <div className="p-4 rounded-xl bg-white/3 border border-white/5 text-sm text-white/70">
                  {item.generic}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
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
      </div>
    </section>
  );
}
