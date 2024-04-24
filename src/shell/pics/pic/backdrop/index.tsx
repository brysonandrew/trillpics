import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import {
  TUsePicBackdrop,
  TUsePicBackdropConfig,
  usePicBackdrop,
} from "~/shell/pics/pic/backdrop/use-backdrop";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TUseBox } from "~/shell/pics/pic/box";

type TProps = TUseBox &
  TUsePicBackdropConfig & {
    children(
      props: TUsePicBackdrop
    ): JSX.Element;
  };
export const PicBackdrop: FC<
  TProps
> = ({
  children,
  onToggle,
  ...props
}) => {
  const backdropResult =
    usePicBackdrop(props);
  const { viewportDimensions } =
    backdropResult;
  return (
    <>
      <motion.div
        className="inset-0 zoom-out"
        style={{
          position: "fixed",
          zIndex: FULLSCREEN_Z,
          ...(viewportDimensions ?? {}),
          backdropFilter:
            "blur(28px) grayscale(80%)",
          cursor: "zoom-out",
        }}
        onClick={onToggle}
      >
        <div className="absolute top-4 left-6">
          <IconsPicZoomOut />
        </div>
      </motion.div>
      {children(backdropResult)}
    </>
  );
};
