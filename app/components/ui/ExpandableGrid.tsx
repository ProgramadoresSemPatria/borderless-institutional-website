import { cn } from "@/app/lib/utils";
import React from "react";

export type ExpandingGridProps = {
  /** altura de cada item (em rem) */
  itemSize: number;
  /** gap entre itens e linhas (em rem) */
  gap: number;
  itemsPerRow: number;
  items: React.ReactNode[];
};

export default function ExpandableGrid({
  itemSize,
  gap,
  itemsPerRow,
  items,
}: ExpandingGridProps) {
  const rowsQty = Math.ceil(items.length / itemsPerRow);
  const containerHeightRem = itemSize * rowsQty + gap * (rowsQty - 1);

  const rows: React.ReactNode[][] = [];
  for (let r = 0; r < rowsQty; r++) {
    const start = r * itemsPerRow;
    rows.push(items.slice(start, start + itemsPerRow));
  }

  return (
    <div
      className={"w-full flex flex-col justify-center"}
      style={{
        height: `${containerHeightRem}rem`,
        gap: `${gap}rem`,
      }}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="flex transition-all h-full has-[div:hover]:h-[115%] duration-[450ms] ease-bouncy"
          style={{
            gap: `${gap}rem`,
          }}
        >
          {row.map((colItem, colIndex) => (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              className={cn(
                "size-full transition-all duration-[450ms] ease-bouncy",
                row.length > 1 && "hover:w-[110%]"
              )}
            >
              {colItem}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
