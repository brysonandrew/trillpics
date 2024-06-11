import {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "framer-motion";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { Lines_Line } from "~/components/lines/_line";
import { useReadyContext } from "~/shell/ready/context";
import { useVideoPicsCheck } from "~/hooks/pic/video/read/video-pics-check/hook";
import { THudContainer } from "~/pics/hud";
import clsx from "clsx";

type TProps = PropsWithChildren<{
  foundation: DOMRect;
  container: THudContainer;
}>;
export const PicsHudLeft: FC<
  TProps
> = ({ foundation, container }) => {
  const s = boxSize();
  const rounded = boxRadius();

  return (
    <AnimatePresence>
      <motion.div
        key="root"
        className={clsx(
          "absolute flex flex-col justify-start items-end w-0 shrink-0"
        )}
        style={{
          left: -s.m05,
          gap: s.m05,
          top: foundation.height + s.m+s.m025,
          height:
            container.height + s.m2,
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
            left: s.m15,
          }}
        />
      </motion.div>
    </AnimatePresence>
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
