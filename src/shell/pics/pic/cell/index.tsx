import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { PicHover } from "~/shell/pics/pic/hover";
import { PicDisplayCell } from "~/shell/pics/pic/display/cell";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";

type TProps =
  TPropsWithChildren<TUseBoxChildProps>;
export const PicCell: FC<TProps> = ({
  ...boxChildProps
}) => {
  return (
    <AnimatePresence>
      <PicDisplayCell
        key="PicDisplayCell"
        onTap={boxChildProps.onToggle}
        {...boxChildProps}
      />
      <PicHover
        key="PicHover"
        {...boxChildProps}
      >
        <IconsPicZoomIn24 />
      </PicHover>
    </AnimatePresence>
  );
};
