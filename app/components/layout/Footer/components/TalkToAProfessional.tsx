import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function TalkToAProfessional() {
  return (
    <div className="w-full flex items-center justify-center text-black gap-12 py-[15svh]">
      <p className="text-5xl xl:text-7xl font-bold">Fale com</p>

      <div className="relative">
        <Image
          width={2048}
          height={2731}
          src={"/team/yuri.webp"}
          alt="yuri"
          className="w-[15rem] rounded-2xl border-4 border-solid border-white -rotate-2"
        />

        <div className="absolute bg-primary rounded-md p-4 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <ArrowUpRight className="text-white size-10" />
        </div>
      </div>

      <p className="font-ivy text-5xl xl:text-7xl">um profissional</p>

      <Image
        src={"/borderless-logo-white.svg"}
        width={671}
        height={798}
        alt="borderless logo"
        className="absolute z-[-1] opacity-30 brightness-125 w-[50%]"
      />
    </div>
  );
}
