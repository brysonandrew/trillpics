import type { FC } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  PicDisplayHover,
  TPicDisplayHoverProps,
} from "~/pages/home/pics/pic/display/hover";
import {
  PicDisplayVideoMode,
  TPicDisplayVideoModeProps,
} from "~/pages/home/pics/pic/display/video-mode";
import { TUsePic } from "~/pages/home/pics/pic/use-pic";

type TProps = Pick<
  TUsePic,
  "isHover" | "picProps"
> &
  TPicDisplayHoverProps &
  TPicDisplayVideoModeProps;
export const PicDisplay: FC<TProps> = ({
  picProps,
  isHover,
  isVideoMode,
  ...props
}) => {
  return (
    <>
      <motion.img {...picProps} />
      <AnimatePresence>
        {isHover && (
          <>
            <PicDisplayHover
              key="PicHover"
              isVideoMode={isVideoMode}
              {...props}
            />
          </>
        )}
        {isVideoMode && (
          <PicDisplayVideoMode
            key="PicVideoMode"
            isHover={isHover}
            {...props}
          />
        )}
      </AnimatePresence>
    </>
  );
};
