import {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { TMeasureContainerResult } from "~/shell/init/container";
import { boxSize } from "~/constants/box/size";
import { HudLeftVideo } from "~/pics/hud/left/video";
import { PicsHudLeftLine } from "~/pics/hud/left/line";
import { ControlsPlayer } from "~/pics/hud/left/player";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = PropsWithChildren<{
  foundation: DOMRect;
  dimensions: TDimensions;
  isIdle: boolean;
  isVerticalScroll: boolean;
}>;
export const PicsHudLeft: FC<
  TProps
> = ({
  foundation,
  dimensions,
  isIdle,
}) => {
  const s = boxSize();

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          key="root"
          className="absolute column-start w-0 shrink-0"
          style={{
            left: 0,
            gap: s.m05,
            top:
              foundation.height +
              s.m025,
            height:
              dimensions.height -
              foundation.height +
              s.m,
          }}
        >
          <PicsHudLeftLine />
          <HudLeftVideo
            isLabel={isIdle}
          />
          <PicsHudLeftLine />
          <ControlsPlayer isLabel={isIdle} />
          <LinesVertical colorClass="border-transparent" />
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};
