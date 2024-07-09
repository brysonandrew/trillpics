import {
  FC,
  PropsWithChildren,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
} from "framer-motion";
import { box } from "~uno/rules/box";
import { boxRadius } from "~uno/rules/box/radius";
import { Lines_Line } from "~/components/lines/_line";
import { useContextReady } from "~/shell/ready/context";
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
  
  const rounded = boxRadius();

  return (
    <AnimatePresence>
      <motion.div
        key="root"
        className={clsx(
          "absolute flex flex-col justify-start items-end w-0 shrink-0"
        )}
        style={{
          left: -box._05,
          gap: box._05,
          top: foundation.height + box._+box._025,
          height:
            container.height + box._2,
        }}
      >
        <Lines_Line
          classValue="hidden md:flex"
          sizeClass="border-t border-l pointer-events-none"
          style={{
            borderTopLeftRadius:
              rounded,
            width: box._,
            height: container.height,
            left: box._15,
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
//   right: box._2,
//   bottom:
//     box._2 + box._0125,
//   x:
//     container.width +
//     box._,
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
//     box._,
//   right: 0,
//   bottom:
//     box._3 - box._05,
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
    box._05,
  left: box._15,
  top:
    container.height -
    size / 2 -
    box._0125,
}}
>

</motion.div> */
}
