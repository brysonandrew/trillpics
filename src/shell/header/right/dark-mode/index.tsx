import {
  createElement,
  FC,
  memo,
} from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { Moon } from "~/shell/header/right/dark-mode/icons/Moon";
import { Sun } from "~/shell/header/right/dark-mode/icons/Sun";
import { useHoverKey } from "~/hooks/use-hover-key";
import {
  PRESENCE_ROTATE_FROM_TOP,
  PRESENCE_ROTATE_FROM_BOTTOM,
} from "@brysonandrew/motion-config-constants";

export const _DarkMode: FC = () => {
  const { isDarkMode, toggle } =
    useDarkMode();

  const key = isDarkMode
    ? "light"
    : "dark";
  const title = `Use ${key} mode`;

  const handleTap = toggle;
  const { isHover, handlers } =
    useHoverKey();
  return (
    <PillBHover
      title={title}
      onClick={handleTap}
      Icon={() => (
        <div className="relative overflow-hidden preserve-3d perspective-1000 -mt-0.5 center">
          {createElement(
            isDarkMode ? Moon : Sun,
            {
              ...{
                key: "title",
                ...(isDarkMode
                  ? PRESENCE_ROTATE_FROM_TOP
                  : PRESENCE_ROTATE_FROM_BOTTOM),
                ...(isHover(title)
                  ? {}
                  : { initial: false }),
              },
            }
          )}
        </div>
      )}
      {...handlers(title)}
    >
      {isHover(title) && title}
    </PillBHover>
  );
};

export const DarkMode: FC =
  memo(_DarkMode);
