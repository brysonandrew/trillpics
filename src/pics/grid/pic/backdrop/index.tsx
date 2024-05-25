import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { TLinkProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { FULLSCREEN_Z } from "~/constants/dom";

type TProps = PropsWithChildren<
  Partial<TLinkProps>
>;
export const PicBackdrop: FC<
  TProps
> = ({
  children,
  style,
  classValue,
  ...props
}) => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  const screenDimensions = {
    width: screen.width,
    height: screen.height,
  };
  return (
    <motion.div
      className={clsx(
        "fill pointer-events-none"
      )}
      style={{
        ...(screenDimensions ?? {}),
        backdropFilter:
          "blur(28px) grayscale(80%)",
        zIndex: FULLSCREEN_Z,
        ...style,
      }}
      transition={{
        ease: "linear",
        delay: 0,
        duration: 1,
      }}
    />
  );
};
