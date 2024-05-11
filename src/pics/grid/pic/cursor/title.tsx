import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";

export const PicCursorTitle: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <>
      <motion.span
        className="fill center text-gray-9"
        style={{
          ...FILTERS_FAT_SVG_PROPS,
        }}
      >
        {children}
      </motion.span>
      <span className="fill center text-black">
        {children}
      </span>
    </>
  );
};
