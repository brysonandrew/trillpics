import type { FC } from "react";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";
import { Alert } from "@components/icons/alert";
import { TEXT_GRADIENT } from "@constants/css/gradient";
import { Background } from "@components/decoration/background";

export const Empty: FC = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-4 text-xl md:text-4xl px-4 z-10 char-gap-6">
      <Background />

      <div
        className="relative flex flex-row items-center gap-8 shrink-0"
        style={TEXT_GRADIENT}
      >
        <Alert
          width={40}
          height={40}
          fill={resolveUrlId(
            LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
          )}
        />
        <span className="whitespace-nowrap font-mono-pix">
          Please select some pics
        </span>
      </div>
    </div>
  );
};
