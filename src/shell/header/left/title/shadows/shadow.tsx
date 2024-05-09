import {
  FC,
  memo,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import { APP_TITLE } from "~app/base/package";

export const TitleShadow: FC<{
  color: string;
}> = memo(({ color }) => {
  const offset = useMemo(
    () => ({
      x: -Math.random() * 5,
      y: -Math.random() * 2,
    }),
    []
  );
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 0,
      }}
      animate={{
        ...offset,
        scaleX: 1.02,
        scaleY: 1.02,
        opacity: 0.7,
      }}
      style={{
        color,

        mixBlendMode: "lighten",
      }}
      className="fill font-display char-gap-2 _gradient-text text-left w-30 text-4xl sm:(text-4.5xl w-32) md:(text-4.5xl w-auto) whitespace-nowrap"
    >
      {APP_TITLE}
    </motion.div>
  );
});
