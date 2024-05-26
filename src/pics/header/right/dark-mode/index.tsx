import { FC, useState } from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { Moon } from "~/pics/header/right/dark-mode/icons/Moon";
import { Sun } from "~/pics/header/right/dark-mode/icons/Sun";

export const DarkMode: FC<
  Partial<TPillBHoverProps>
> = (props) => {
  const { isDarkMode, toggle } =
    useDarkMode();


  const key = isDarkMode
    ? "light"
    : "dark";
  const title = `${key} mode`;

  const handleTap = () => {
    toggle();
  };

  const Icon = isDarkMode ? Moon : Sun;
  return (
    <PillBHover
      title={title}
      onClick={handleTap}
      Icon={Icon}
      direction="rtl"
      {...props}
   />
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
