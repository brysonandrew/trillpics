import {
  FC,
  PropsWithChildren,
} from "react";
import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { TMeasureContainerResult } from "~/shell/init/container";
import { boxSize } from "~/constants/box/size";
import { HideControls } from "~/pics/header/right/zen-mode";
import { DarkMode } from "~/pics/header/right/dark-mode";
import { ControlsPlayer } from "~/pics/hud/left/player";
import { MOTION_CONFIG } from "@brysonandrew/motion-config-constants";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { PicsHudLeftLine } from "~/pics/hud/left/line";
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { useLocation } from "react-router";
import { height } from "tailwindcss/defaultTheme";
import { useContextGrid } from "~/context";
import { Download } from "~/pages/video/player/_header/download";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  foundation: DOMRect;
  dimensions: TDimensions;
  isIdle: boolean;
  playerHeight: number;
  isVerticalScroll: boolean;
};
export const PicsHudRight: FC<
  TProps
> = ({
  foundation,
  dimensions,
  playerHeight,
  isIdle,
}) => {
  const s = boxSize();
  const { dragger } = useContextGrid();
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
            dimensions.height -
            foundation.height   +
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
            style={{ left: -s.m05 }}
          />
          <HideControls
            isLabel={isIdle}
            direction="rtl"
          />
        </div>
        <LinesVertical
          style={{
            left: -s.m05,
          }}
        />
        {/* <motion.div
          className="relative bottom-0 right-0 row-space w-0"
          style={{
            top: s.m15,
            y: dragger.y06,
            left: -s.m05,
            x: -s.m,
            top: s.m4 + s.m05,
          }}
        >
          <div />
          <Download direction="rtl" />
        </motion.div> */}
      </motion.div>
    </LayoutGroup>
  );
};
