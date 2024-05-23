import { FC, memo } from "react";
import {
  GRADIENT_BLUE_PINK_YELLOW_COLORS,
  GRADIENT_TEAL_YELLOW_PINK_COLORS,
} from "~app/color/gradient";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { TitleShadow } from "~/pics/header/left/title/shadows/shadow";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

export const TitleShadows: FC = memo(() => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      {(isDarkMode
        ? GRADIENT_BLUE_PINK_YELLOW_COLORS
        : GRADIENT_TEAL_YELLOW_PINK_COLORS
      ).map((color, index) => {
        return (
          <TitleShadow
            key={resolveCompositeKey(
              color,
              index
            )}
            color={color}
          />
        );
      })}
    </>
  );
});
