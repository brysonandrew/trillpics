import type { FC } from "react";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { TEXT_GRADIENT } from "@constants/css/gradient";
import { IconsPlay } from "@components/icons/play";

type TProps = { 
  isFirst: boolean
    playing: boolean;
    isBuffering: boolean;
};
export const PlayButton: FC<TProps> = ({
  isFirst,
}) => {
  return (
    <div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-60 pointer-events-none"
        style={TEXT_GRADIENT}
      >
        <div className="row gap-4">
{/*           
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="160"
            className="w-[45px] md:w-[80px] lg:w-[100px]"
            viewBox="0 0 24 24"
          >
            <path
              stroke={resolveUrlId(
                LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
              )}
              fill="currentColor"
              d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2z"
            />
          </svg> */}
          <IconsPlay classValue="w-[45px] md:w-[80px] lg:w-[100px]"/>
          <code className="text-2xl sm:text-5xl lg:text-6xl font-mono-pix whitespace-nowrap">
            play
            {isFirst ? "" : " again"}
          </code>
        </div>
      </div>
    </div>
  );
};
