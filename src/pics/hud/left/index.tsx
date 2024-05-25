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
import { boxRadius } from "~/constants/box/radius";
import { Lines_Line } from "~/pages/video/_common/footer/left/lines/_line";
import { useContextGrid } from "~/context";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { usePicTableReadSize } from "~/hooks/pic/table/read/size";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { Download } from "~/pages/video/player/_header/download";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = PropsWithChildren<{
  foundation: DOMRect;
  dimensions: THudContainer;
  playerHeight: number;
  isVerticalScroll: boolean;
}>;
export const PicsHudLeft: FC<
  TProps
> = ({
  foundation,
  playerHeight,
  dimensions,
}) => {
  const size = usePicTableReadSize();
  const { dragger, isIdle } =
    useContextGrid();
  const s = boxSize();
  const rounded = boxRadius();
  const isVideoPics =
    useVideoPicsCheck();
  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          key="root"
          className="absolute flex flex-col justify-start items-start w-0 shrink-0"
          style={{
            left: -s.m05,
            gap: s.m05,
            top:
              foundation.height +
              s.m05 +
              s.m025,
            height: dimensions.height,
            // -
            // foundation.height,
          }}
        >
          <Lines_Line
            sizeClass="border-t border-l pointer-events-none"
            style={{
              borderTopLeftRadius:
                rounded,
              width: s.m,
              height: playerHeight,
              left: s.m05,
            }}
          />
          <motion.div
            className="absolute left-0 bottom-0"
            style={{
              bottom: -s.m2,
              x: 0,
              y: dragger.y06,
            }}
          >
            <ControlsPlayer
              isLabel={isIdle}
            >
              <div
                className="absolute flex-col flex items-end justify-center left-0 bottom-0 bg-white dark:bg-black"
                style={{
                  height: 0,
                  left: s.m05,
                  bottom: s.m05,
                  width:
                    dimensions.width,
                }}
              >
                <div className="absolute inset-0 row justify-center">
                  <PlaybackTimer />
                </div>
                <div
                  className="absolute row justify-center w-full"
                  style={{
                    height:0,// s.m025,
                    left:
                      s.m025 + s.m0125,
                    width:
                      dimensions.width -
                      s.m,
                    bottom: -s.m,
                  }}
                >
                  <PlaybackProgressSeeker />
                </div>

            
                <Download direction="rtl" />
              </div>
            </ControlsPlayer>
          </motion.div>
          <HudLeftVideo
            isLabel={isIdle}
            container={dimensions}
            siblings={
              <>
                <motion.div
                  className="absolute bottom-0"
                  style={{
                    left:
                      dimensions.width +
                      s.m,
                    bottom: 0,
                    x: "-100%",
                    y: dragger.y075,
                  }}
                >
                  <LeftButtonsClear
                    isLabel={isIdle}
                  />
                </motion.div>
                {isVideoPics && (
                  <motion.div
                    layout
                    className="absolute"
                    style={{
                      width: s.m,
                      left: s.m0125,
                      bottom:
                        s.m025 +
                        s.m0125 / 2,
                      x: 0,
                      y: dragger.y075,
                    }}
                  >
                    <VideoPicsCounter />
                  </motion.div>
                )}
              </>
            }
          >
            <motion.div
              className="absolute bottom-0"
              style={{
                left:
                  dimensions.width +
                  s.m,
                x: "-100%",
              }}
            >
              <HudLeftAddRandom
                isLabel={isIdle}
              />
            </motion.div>
          </HudLeftVideo>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};
