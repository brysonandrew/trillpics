import {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "framer-motion";
import { boxSize } from "~/constants/box/size";
import { HudLeftVideo } from "~/pics/hud/left/video";
import { ControlsPlayer } from "~/pics/hud/left/player";
import { boxRadius } from "~/constants/box/radius";
import { Lines_Line } from "~/components/lines/_line";
import { useContextReady } from "~/shell/ready/context";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { VideoPicsCounter } from "~/pics/hud/left/video/pic-counter";
import { THudContainer } from "~/pics/hud";
import { Pill } from "~/components/layout/pill";
import { SubtitleText } from "~/pics/header/subtitle/text";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";
import clsx from "clsx";

type TProps = PropsWithChildren<{
  foundation: DOMRect;
  container: THudContainer;
}>;
export const PicsHudLeft: FC<
  TProps
> = ({ foundation, container }) => {
  const {
    main: { dragger },
  } = useContextReady();

  const s = boxSize();
  const rounded = boxRadius();
  const isVideoPics =
    useVideoPicsCheck();
  return (
    <LayoutGroup>
      <AnimatePresence>
        <motion.div
          key="root"
          className={clsx(
            "absolute flex flex-col justify-start items-end w-0 shrink-0"
          )}
          style={{
            left: -s.m05,
            gap: s.m05,
            top:
              foundation.height +
              s.m05 +
              s.m025,
            height: container.height,
          }}
        >
          <Lines_Line
            classValue="hidden md:flex"
            sizeClass="border-t border-l pointer-events-none"
            style={{
              borderTopLeftRadius:
                rounded,
              width: s.m,
              height: container.height,
              left: s.m05,
            }}
          />

          <HudLeftVideo
            inActiveSiblings={
              <motion.div
                layout
                className="absolute row-space"
                style={{
                  height: 0,
                  width:
                    container.width +
                    s.m,
                  bottom:
                    s.m2 - s.m0125,
                  x: dragger.x05,
                  left: 0,
                  y: dragger.y,
                }}
              >
                <div
                  style={{
                    width: s.m,
                  }}
                />
                <ControlsPlayer />
              </motion.div>
            }
            siblings={
              <>
                <motion.div
                  className="absolute row-space"
                  style={{
                    x: 0,
                    height: 0,
                    width:
                      container.width +
                      s.m,
                    left: 0,
                    top:
                      container.height +
                      s.m,
                  }}
                >
                  <_RootReorderDragger
                    title="drag controls from left"
                    container={
                      container
                    }
                    width={s.m2}
                    size={s.m}
                    left={0}
                    isColumn={false}
                  />
                  <div />
                </motion.div>

                <motion.div
                  className="absolute row-space"
                  style={{
                    x: 0,
                    height: 0,
                    width:
                      container.width +
                      s.m,
                    left: 0,
                    bottom:
                      -s.m + s.m0125,
                    y: dragger.y06,
                  }}
                >
                  <HudLeftAddRandom />
                  <LeftButtonsClear />
                </motion.div>

                <motion.div
                  className="absolute row-space"
                  style={{
                    height: 0,
                    width:
                      container.width +
                      s.m,
                    bottom:
                      s.m2 + s.m0125,
                    x: dragger.x05,
                    left: 0,
                    right: 0,
                    y: dragger.y,
                  }}
                >
                  {isVideoPics ? (
                    <div
                      className="relative row h-0"
                      style={{
                        top: s.m025,
                        gap: s.m05,
                        width: s.m4,
                      }}
                    >
                      <motion.div
                        className="relative h-px _gradient-radial"
                        style={{
                          left: s.m05,
                          bottom: s.m05,
                          width: s.m15,
                          rotate: -35,
                        }}
                      />
                      <VideoPicsCounter
                        classValue="relative pointer-events-none"
                        style={{
                          left: -s.m075,
                          bottom: s.m,
                        }}
                      >
                        {(count) => (
                          <>{`${count} Pics`}</>
                        )}
                      </VideoPicsCounter>
                    </div>
                  ) : (
                    <div />
                  )}
                  <div
                    className="relative row h-0"
                    style={{
                      left: 0,
                      top: s.m025,
                      gap: s.m05,
                      width: s.m4,
                    }}
                  >
                    <Pill
                      classValue="relative pointer-events-none"
                      style={{
                        height: s.m05,
                        left: s.m,
                        bottom: s.m05,
                      }}
                    >
                      <SubtitleText>
                        watch
                      </SubtitleText>
                    </Pill>
                    <motion.div
                      className="absolute h-px _gradient-radial"
                      style={{
                        right: s.m05,
                        bottom: 0,
                        width: s.m15,
                        rotate: 35,
                      }}
                    />

                  <div className="absolute right-0 h-0 column-end w-0"
                  
                  >
                  <ControlsPlayer
                    
                    />
                  </div>
                  </div>
                </motion.div>
                <div
                  style={{
                    height: s.m2,
                  }}
                />
                <_RootReorderDragger
                  title="drag controls from right"
                  container={container}
                  width={s.m2}
                  size={s.m}
                  left={container.width}
                  bottom={-s.m05-s.m025 - s.m0125}
                  isColumn={false}
                />
              </>
            }
          />
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
};

// <motion.div
// layout
// className="absolute  w-0 h-0 column-end"
// style={{
//   height: 0,
//   right: s.m2,
//   bottom:
//     s.m2 + s.m0125,
//   x:
//     container.width +
//     s.m,
//   y: dragger.y,
// }}
// >

// </motion.div>
// <motion.div
// layout
// className="absolute right-0 w-0 h-0 column-end"
// style={{
//   y: dragger.y,
//   x:
//     container.width +
//     s.m,
//   right: 0,
//   bottom:
//     s.m3 - s.m05,
// }}
// >
// </motion.div>
{
  /* <motion.div
className="absolute w-0 h-0 right-0 column-end"
style={{
  y: dragger.y06,
  x:
    container.width -
    s.m05,
  left: s.m15,
  top:
    container.height -
    size / 2 -
    s.m0125,
}}
>

</motion.div> */
}
