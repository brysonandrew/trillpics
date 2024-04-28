import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FADE_PRESENCE } from "~/constants/animation";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { boxRadius } from "~/constants/box/style/radius";
import { useTrillPicsStore } from "~/store";
import { TPicHoverResult } from "~/shell/pics/pic/use-hover";

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
  const borderRadius = boxRadius();

  return (
    <>
      {isHovering && isControls && (
        <motion.div
          key="zoom"
          className={clsx(
            "fixed cursor-pointer z-50 center aspect-square p-2 backdrop-blur-lg bg-white-01",
            "top-3 right-3"
          )}
          style={{ borderRadius }}
          {...FADE_PRESENCE}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
