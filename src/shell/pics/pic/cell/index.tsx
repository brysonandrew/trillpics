import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { PicHover } from "~/shell/pics/pic/hover";
import { PicDisplayCell } from "~/shell/pics/pic/display/cell";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";

type TProps = TBoxChildProps;
export const PicCell: FC<TProps> = ({
  ...boxChildProps
}) => {
  return (
    <AnimatePresence>
      <PicDisplayCell
        key="PicDisplayCell"
        {...boxChildProps}
      />
      <PicHover
        isHovering={false}
        key="PicHover"
        {...boxChildProps}
      >
        <IconsPicZoomIn24 />
      </PicHover>
    </AnimatePresence>
  );
};
