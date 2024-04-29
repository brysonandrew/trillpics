import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FADE_PRESENCE } from "~/constants/animation";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { boxRadius } from "~/constants/box/style/radius";
import { useTrillPicsStore } from "~/store";
import { TPicHoverResult } from "~/shell/pics/pic/use-hover";
import { FULLSCREEN_Z } from "~/constants/dom";
import { Floating } from "~/shell/pics/pic/floating";

export type TPicHoverProps = Pick<
  TPicHoverResult,
  "isHovering"
> &
  Pick<TBoxChildProps, "onToggle">;
export const PicHover: FC<
  TPropsWithChildren<TPicHoverProps>
> = ({
  isHovering,
  onToggle,
  children,
  ...props
}) => {
  const { isControls } =
    useTrillPicsStore(
      ({ isControls }) => ({
        isControls,
      })
    );

  return (
    <>
      {isHovering && isControls && (
        <Floating>{children}</Floating>
      )}
    </>
  );
};
