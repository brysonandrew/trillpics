import type { FC } from "react";
import { Background1Rounded } from "@/components/decoration/background/1/rounded";
import { IconsInfo } from "@/components/icons/info";

export const ControlsEmpty: FC = () => {
  return (
    <div className="fixed column-stretch dark:text-white-5 grow-0 shrink gap-4 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 pt-4 pb-6 z-10 char-gap-6">
      <Background1Rounded />
      <div className="relative flex flex-row items-center gap-2 lg:gap-4 shrink-0">
        <IconsInfo />
        <h4 className="whitespace-nowrap font-display text-2xl md:text-4xl">
          Select images
        </h4>
      </div>
      <hr className="relative border-white border w-full" />
      <p className="relative font-display-led text-lg">
        Click on the images you'd like
        to add to your video
      </p>
    </div>
  );
};
