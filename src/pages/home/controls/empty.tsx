import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_SVG_ID } from "@/components/gradients/linear-gradient-svg";
import { Alert } from "@components/icons/alert";
import { Line } from "@brysonandrew/layout-line";
import { Background1 } from "@/components/decoration/background-1";

export const Empty: FC = () => {
  return (
    <div className="fixed column-stretch dark:text-white-5 grow-0 shrink gap-4 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 pt-4 pb-6 z-10 char-gap-6">
      <Background1 />
      <Background1 />
      <div className="relative flex flex-row items-center gap-2 lg:gap-4 shrink-0">
        <Alert
          width={40}
          height={40}
          fill={resolveUrlId(
            LINEAR_GRADIENT_SVG_ID
          )}
        />
        <h4 className="whitespace-nowrap font-display text-2xl md:text-4xl">
          Select images
        </h4>
      </div>
      <Line />
      <p className="relative font-display-led text-lg">
        Click on the images you'd like
        to add to your video
      </p>
    </div>
  );
};
