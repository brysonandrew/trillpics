import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FADE_PRESENCE } from "~/constants/animation";
import { CSSProperties } from "@emotion/serialize";
import { FULLSCREEN_Z } from "~/constants/dom";
import { boxStyleFloating } from "~/constants/box/style/floating";

type TProps = PropsWithChildren<{
  position?: CSSProperties["position"];
}>;
export const Floating: FC<TProps> = ({
  position = "absolute",
  children,
}) => {
  const { borderRadius } =
    boxStyleFloating({
      borderRadius: "XL",
    });

  return (
    <motion.div
      className={clsx(
        "cursor-pointer center aspect-square p-2 backdrop-blur-lg bg-gray-01",
        "top-3 right-3",
        position
      )}
      style={{
        borderRadius,
        zIndex: FULLSCREEN_Z,
      }}
      {...FADE_PRESENCE}
    >
      {children}
    </motion.div>
  );
};
