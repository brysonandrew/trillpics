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
      className="fill brightness-20 _gradient-mesh"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="fill inset-3 _gradient-mesh"
        style={{
          right: `calc(0.75rem + ${
            SCROLLBAR_WIDTH +
            SCROLLBAR_BORDER_WIDTH * 2
          }px)`,
        }}
      >
        <img
          className="w-full h-full opacity-10 grayscale-100 p-6"
          src={`logo-${
            isDarkMode
              ? "dark"
              : "light"
          }.svg`}
        />
      </div>
    </div>
  );
};
