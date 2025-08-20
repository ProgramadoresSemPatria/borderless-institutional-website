import Image from "next/image";
import { AnimatedGrid } from "../../ui/AnimatedGrid";

export function DataCard() {
  return (
    <div className="bg-tertiary rounded-lg p-6 font-bold w-full lg:max-w-sm h-40 relative">
      <div className="flex flex-col justify-between h-full">
        <p className="italic">
          &quot;500 alunos, 105 internacionalizados e 2 startups encubadas
          &quot;
        </p>

        <div className="flex items-center gap-2">
          <Image
            className="size-6"
            width={501}
            height={596}
            src={"/borderless-logo-white.svg"}
            alt="borderless logo"
          />
          <p className="font-bold text-sm mr-auto">Borderless Coding</p>
        </div>
      </div>

      <div className="absolute right-0 top-0 -translate-y-1/3 lg:translate-x-2/6 z-[-1]">
        <AnimatedGrid />
      </div>
    </div>
  );
}
