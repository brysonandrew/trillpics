import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import {
  TUsePicBackdrop,
  usePicBackdrop,
} from "~/shell/pics/pic/backdrop/use-backdrop";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";

type TProps = TUseBoxChildProps & {
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
  const { screenDimensions } =
    backdropResult;
  return (
    <>
      <motion.div
        className="inset-0 zoom-out"
        style={{
          position: "fixed",
          zIndex: FULLSCREEN_Z,
          ...(screenDimensions ?? {}),
          backdropFilter:
            "blur(28px) grayscale(80%)",
          cursor: "zoom-out",
        }}
        onClick={onToggle}
      />
      {children(backdropResult)}

    </>
  );
};
