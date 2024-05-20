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
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { TMeasureContainerResult } from "~/shell/init/container";
import { boxSize } from "~/constants/box/size";
import { HudLeftVideo } from "~/pics/hud/left/video";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { usePicVideo } from "~/hooks/pic/video";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { useTrillPicsStore } from "~/store/middleware";
import {
  DELAY_TRANSITION_PROPS,
  MOTION_CONFIG,
} from "~/constants/animation";
import { PicsHudLeftLine } from "~/pics/hud/left/line";

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
  isVerticalScroll,
}) => {
  const s = boxSize();
  const { isScroll } =
    useTrillPicsStore(
      ({ isScroll }) => ({
        isScroll,
      })
    );

  const isScrollTopShown =
    isScroll && isVerticalScroll;

  const SCROLL_TOP_TRANSITION =
    MOTION_CONFIG;

  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          key="root"
          className="absolute column justify-between w-0 bg-red"
          style={{
            left: 0,
            gap: s.m05,
            top:
              foundation.height +
              s.m025,
            height:
              dimensions.height -
              foundation.height
          }}
        >
          <PicsHudLeftLine
            {...SCROLL_TOP_TRANSITION}
          />
          <motion.div
            layout
            className="column-start shrink-0 justify-evenly w-0"
            style={{
              gap: s.m05,
              height: isScrollTopShown
                ? s.m4
                : "auto",
            }}
            {...SCROLL_TOP_TRANSITION}
          >
            <HudLeftShuffle
              isLabel={isIdle}
            />
            {isScrollTopShown && (
              <>
                <PicsHudLeftLine />
                <PicsHeaderScrollTop
                  isLabel={isIdle}
                />
              </>
            )}
          </motion.div>
          <PicsHudLeftLine
            {...SCROLL_TOP_TRANSITION}
          />
          <motion.div
            layout
            className="column-start shrink-0 justify-evenly w-0"
            style={{
              gap: s.m05,
            }}
          >
            <HudLeftVideo
              isLabel={isIdle}
            />
          </motion.div>
          <PicsHudLeftLine />
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};
