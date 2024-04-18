import {
  createElement,
  FC,
  memo,
} from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";
import {
  PRESENCE_ROTATE_FROM_TOP,
  PRESENCE_ROTATE_FROM_BOTTOM,
} from "@brysonandrew/animation";
import { PillBHover } from "@/components/buttons/pill/b/hover";
import { Moon } from "@/pages/home/header/right/dark-mode/icons/Moon";
import { Sun } from "@/pages/home/header/right/dark-mode/icons/Sun";
import { useCircleButtonStyleMd } from "@/components/buttons/use-circle-button-style/md";

export const DarkMode: FC = memo(() => {
  const { isDarkMode, toggle } =
    useDarkMode();
  const { width, ...style } =
    useCircleButtonStyleMd();

  const key = isDarkMode
    ? "light"
    : "dark";
  const title = `Use ${key} mode`;

  const handleTap = () => {
    toggle();
  };
  return (
    <PillBHover
      title={title}
      onClick={handleTap}
      style={style}
      Icon={() => (
        <div className="relative preserve-3d perspective-1000 -mt-0.5 center overflow-hidden">
          {createElement(
            isDarkMode ? Moon : Sun,
            {
              ...{
                key: "title",
                ...(isDarkMode
                  ? PRESENCE_ROTATE_FROM_TOP
                  : PRESENCE_ROTATE_FROM_BOTTOM),
              },
            }
          )}
        </div>
      )}
    >
      {title}
    </PillBHover>
  );
});
