import type { FC } from "react";
import { motion } from "framer-motion";
import {
  TUsePicBackdrop,
  usePicBackdrop,
} from "~/shell/pics/pic/backdrop/use-backdrop";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { TPicHoverResult } from "~/shell/pics/pic/use-hover";

type TProps = TBoxChildProps & TPicHoverResult & {
  children(
    props: TUsePicBackdrop
  ): JSX.Element;
};
export const PicBackdrop: FC<
  TProps
> = ({ children, ...props }) => {
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
        onClick={props.onToggle}
      />
      {children(backdropResult)}
    </>
  );
};
