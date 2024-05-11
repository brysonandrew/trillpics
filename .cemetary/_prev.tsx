import { resolveSquare } from "@brysonandrew/measure";
import { table } from "console";
import { AnimatePresence } from "framer-motion";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";
import { VideoPic } from "~/pages/video/_common/pic";

<AnimatePresence>
{hoverPicProps && (
  <VideoPic
    {...hoverPicProps}
    videoPics={videoPics}
    style={{
      y: scrollY,
      left:
        hoverPicProps
          .column * table.size,
      top:
        hoverPicProps.row *
        table.size,
      ...resolveSquare(
        table.size
      ),
    }}
    {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
  />
)}
</AnimatePresence>