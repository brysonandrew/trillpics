import type { FC } from "react";
import { TUseDarkMode } from "@brysonandrew/dark-mode";
import { GRADIENT_MESH_LIGHT } from "~app/color/gradient/mesh";
import {
  SCROLLBAR_BORDER_WIDTH,
  SCROLLBAR_WIDTH,
} from "~uno/preflights";

export const ShellBackground: FC<
  Pick<TUseDarkMode, "isDarkMode">
> = ({ isDarkMode }) => {
  return (
    <div
      className="fill brightness-20"
      style={{
        minHeight: "100vh",
        ...GRADIENT_MESH_LIGHT,
        backgroundSize: "4px 4px",
      }}
    >
      <div
        className="fill inset-3"
        style={{
          right: `calc(0.75rem + ${
            SCROLLBAR_WIDTH +
            SCROLLBAR_BORDER_WIDTH * 2
          }px)`,
          ...GRADIENT_MESH_LIGHT,
          backgroundSize: "4px 4px",
          borderRadius: 4,
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
