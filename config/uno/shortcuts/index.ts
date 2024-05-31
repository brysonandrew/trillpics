import type { StaticShortcutMap } from "unocss";
import { SHORTCUTS as _SHORTCUTS } from "@brysonandrew/uno-shortcuts";
import { SHORTCUTS_BOX } from "../shortcuts/box";
import { INPUT } from "./input";
import { POSITION } from "./position";
import { GRID } from "./grid";
import { LAYOUT } from "./layout";

export const SHORTCUTS: StaticShortcutMap =
  {
    ..._SHORTCUTS,
    "_icon-fill": "dark:_dark-fill _light-fill",
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
    ...GRID,
    ...INPUT,
    ...POSITION,
    ...LAYOUT,
    ...SHORTCUTS_BOX,
  } as const;
