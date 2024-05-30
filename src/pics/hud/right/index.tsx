import { FC } from "react";
import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesVertical } from "~/components/lines/vertical";
import { boxSize } from "~/constants/box/size";
import { HideControls } from "~/pics/header/right/zen-mode";
import { DarkMode } from "~/pics/header/right/dark-mode";
type TProps = {
  foundation: DOMRect;
  container: TDimensions;
  isIdle: boolean;
};
export const PicsHudRight: FC<
  TProps
> = ({
  foundation,
  container,
  isIdle,
}) => {
  const s = boxSize();
  return (
    <LayoutGroup>
      <motion.div
        className="absolute flex flex-col items-end justify-evenly shrink-0 w-0"
        style={{
          right: -s.m05,
          top:
            foundation.top +
            foundation.height,
          gap: s.m025,
          height:
            container.height -
            foundation.height +
            s.m025,
        }}
      >
        <div
          className="relative flex flex-col items-end justify-evenly shrink-0 w-0"
          style={{
            top: -s.m025,
            gap: s.m025,
            height: s.m3,
          }}
        >
          <DarkMode isLabel={isIdle} />
          <LinesVertical
          classValue="hidden md:flex"
            style={{ left: -s.m05 }}
          />
          <HideControls
            isLabel={isIdle}
            direction="rtl"
          />
        </div>
        <LinesVertical
                  classValue="opacity-0 md:opacity-100"

          style={{
            left: -s.m05,
          }}
        />
      </motion.div>
    </LayoutGroup>
  );
};
