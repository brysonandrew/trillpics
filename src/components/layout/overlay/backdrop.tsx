import type { FC } from "react";
import { motion } from "framer-motion";
import { TPillBProps } from "~/components/buttons/pill/b";
import clsx from "clsx";

type TProps = Pick<
  TPillBProps,
  "direction"
>;
export const LayoutOverlayBackdrop: FC<
  TProps
> = ({ direction }) => {
  return (
    <motion.div
      className={clsx(
        "fill rounded-lg z-20 pointer-events-none from-gray to-transparent",
        direction === "ltr"
          ? "bg-gradient-to-l"
          : "bg-gradient-to-r"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
    />
  );
};
