import {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { boxSize } from "~uno/rules/box/size";
import { HudLeftVideo } from "~/pages/video/_root/video";
import { ControlsPlayer } from "~/pages/video/player/button";
import { boxRadius } from "~uno/rules/box/radius";
import { useReadyContext } from "~/shell/ready/context";
import { LeftButtonsClear } from "~/pages/video/_root/clear";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { HudLeftAddRandom } from "~/pages/video/_root/add-random";
import { VideoPicsCounter } from "~/pages/video/_root/video/pic-counter";
import { THudContainer } from "~/pics/hud";
import { Pill } from "~/components/layout/pill";
import { SubtitleText } from "~/pics/header/subtitle/text";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";
import { _CommonReorder } from "~/pages/video/_root/reorder";
import { AddRemoveIcon } from "~/pages/video/_root/cursor/add-remove-icon";
import { useVideoClickSelect } from "~/pages/video/_root/select";
import { PicCursor } from "~/pics/grid/pic/cursor";

export const Video_Root: FC = () => {
  const {
    main: { dragger },
    screen: { container },
  } = useReadyContext();
  const props = useVideoClickSelect();

  const s = boxSize();
  const rounded = boxRadius();
  const isVideoPics =
    useVideoPicsCheck();
  return (
    <>
      <PicCursor {...props}>
        <AddRemoveIcon
          isAdded={props.isAdded}
        />
      </PicCursor>
      <footer
        className="relative h-0 bg w-full z-0"
        style={{
          left: 0,
          bottom: s.m,
          width: container.width + s.m,
        }}
      >
        <_CommonReorder {...props} />

    

        <motion.div
          className="absolute row-space"
          style={{
            x: 0,
            height: 0,
            width:
              container.width + s.m,
            left: s.m05,
            bottom: 0,
            y: dragger.y06,
          }}
        >
                    <div className="column" style={{gap:s.m}}>
                    <_RootReorderDragger
            title="drag controls from left"
            container={container}
            width={s.m2}
            size={s.m}
            left={0}
            isColumn={false}
          />
                    <HudLeftAddRandom />

                    </div>
          <div className="column" style={{gap:s.m}}>
            <LeftButtonsClear />
            <_RootReorderDragger
              title="drag controls from right"
              container={container}
              width={s.m2}
              size={s.m}
              left={container.width}
              bottom={
                -s.m05 -
                s.m025 -
                s.m0125
              }
              isColumn={false}
            />
          </div>
        </motion.div>

      </footer>
    </>
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


// <motion.div
// className="absolute row-space"
// style={{
//   x: 0,
//   height: 0,
//   width:
//     container.width + s.m,
//   left: 0,
//   top:
//     container.height + s.m3,
// }}
// >

// <div />
// </motion.div>