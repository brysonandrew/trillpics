import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsSvgGradient18vb240 } from "~/components/icons/svg/gradient/160";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsSvgGradient18vb24 } from "~/components/icons/svg/gradient/16vb24";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";

export const IconsLoader: FC<
  TIconsSvgProps
> = (props) => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      whileHover={{
        rotateY: [0, 180, 0],
      }}
      transition={{
        duration: 2,
        ease: "linear",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
      }}
    >
      <IconsSvgGradient24
        d="M13 2h-2v6h2zm0 14h-2v6h2zm9-5v2h-6v-2zM8 13v-2H2v2zm7-6h2v2h-2zm4-2h-2v2h2zM9 7H7v2h2zM5 5h2v2H5zm10 12h2v2h2v-2h-2v-2h-2zm-8 0v-2h2v2zv2H5v-2z"
        {...props}
      />
    </motion.div>
  );
};
