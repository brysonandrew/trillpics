import type { StaticShortcutMap } from "unocss";
import { SHORTCUTS as _SHORTCUTS } from "@brysonandrew/uno-shortcuts";
import { SHORTCUTS_LAYOUT } from "./layout";
import { SHORTCUTS_POSITION } from "./position";
import { SHORTCUTS_BOX } from "./box";
import { SHORTCUTS_GRID } from "./grid";

export const SHORTCUTS: StaticShortcutMap =
  {
    ..._SHORTCUTS,
    "_icon-fill":
      "dark:_dark-fill _light-fill",
    "border-main":
      "border-gray-8 dark:border-gray-2",
    "border-main-inverted":
      "border-gray-2 dark:border-gray-8",
    "bg-main": "bg-white dark:bg-black",
    "bg-main-inverted":
      "bg-black dark:bg-white",
    "text-main":
      "text-black dark:text-white",
    "text-main-inverted":
      "text-white dark:text-black",
    "btn-disabled":
      "disabled:(cursor-not-allowed opacity-50)",
    spin05:
      "animate-[spin_0.5s_linear_infinite]",
    spin075:
      "animate-[spin_0.75s_linear_infinite]",
    spin1:
      "animate-[spin_1s_linear_infinite]",
    ...SHORTCUTS_GRID,
    ...SHORTCUTS_POSITION,
    ...SHORTCUTS_LAYOUT,
    ...SHORTCUTS_BOX,
  } as const;
