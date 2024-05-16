import { FC, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { Moon } from "~/pics/header/right/dark-mode/icons/Moon";
import { Sun } from "~/pics/header/right/dark-mode/icons/Sun";
import { useHoverKey } from "~/hooks/use-hover-key";
import {
  PRESENCE_ROTATE_FROM_TOP,
  PRESENCE_ROTATE_FROM_BOTTOM,
} from "@brysonandrew/motion-config-constants";

export const DarkMode: FC = () => {
  const { isDarkMode, toggle } =
    useDarkMode();
  const [initial, setInitial] =
    useState<boolean>(false);

  const key = isDarkMode
    ? "light"
    : "dark";
  const title = `Use ${key} mode`;

  const handleTap = () => {
    setInitial(true);
    toggle();
  };
  const stop = () => {
    setInitial(false);
  };

  const { isHover, motionHandlers } =
    useHoverKey({
      handlers: { stop },
    });
  const Icon = isDarkMode ? Moon : Sun;

  return (
    <PillBHover
      title={title}
      onClick={handleTap}
      Icon={Icon}
      {...motionHandlers(title)}
    >
      {isHover(title) && title}
    </PillBHover>
  );
};

// <div className="relative overflow-hidden preserve-3d perspective-1000 -mt-0.5 center">
//   <AnimatePresence mode="wait">
//     <motion.div
//       {...(isDarkMode
//         ? PRESENCE_ROTATE_FROM_TOP
//         : PRESENCE_ROTATE_FROM_BOTTOM)}
//       {...(initial
//         ? {}
//         : { initial: false })}
//     >
//       <Icon />
//     </motion.div>
//   </AnimatePresence>
// </div>
// )}
