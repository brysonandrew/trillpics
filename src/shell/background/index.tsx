import type { FC } from "react";
import { TUseDarkMode } from "@brysonandrew/dark-mode";
import {
  SCROLLBAR_BORDER_WIDTH,
  SCROLLBAR_WIDTH,
} from "~uno/preflights";

export const ShellBackground: FC<
  Pick<TUseDarkMode, "isDarkMode">
> = ({ isDarkMode }) => {
  return (
    <div
      className="fill _gradient-mesh bg-gray"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="fill inset-1 _r-dots opacity-10"
        style={{
          right: `calc(0.25rem + ${
            SCROLLBAR_WIDTH +
            SCROLLBAR_BORDER_WIDTH * 2
          }px)`,
        }}
     />
    </div>
  );
};
