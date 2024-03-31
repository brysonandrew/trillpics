import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";
import { Alert } from "@components/icons/alert";
import { TEXT_GRADIENT } from "@constants/css/gradient";
import { Background } from "@components/decoration/background";
import { Line } from "@brysonandrew/layout-line";

export const Empty: FC = () => {
  return (
    <div className="fixed column-stretch grow-0 shrink gap-2 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 z-10 char-gap-6">
      <Background />
      <div className="relative flex flex-row items-center gap-2 lg:gap-4 shrink-0">
        <Alert
          width={40}
          height={40}
          fill={resolveUrlId(
            LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
          )}
        />
        <h4
          className="whitespace-nowrap font-mono-pix text-2xl md:text-4xl"
          style={TEXT_GRADIENT}
        >
          Select images
        </h4>
      </div>
      <Line />
      <p
        className="relative font-mono-pix text-lg text-main"
        //  style={TEXT_GRADIENT}
      >
        Click on the images you'd like
        to add to your video
      </p>
    </div>
  );
};
