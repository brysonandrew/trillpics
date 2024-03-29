import type { StaticShortcutMap } from "unocss";
import { INPUT } from "./input";
import { POSITION } from "./position";
import { GRID } from "./grid";
import { INTERACTIVE } from "./interactive";
import { LAYOUT } from "./layout";
import { GRADIENT } from "./gradient";
import { SHORTCUTS as _SHORTCUTS } from "@brysonandrew/uno-shortcuts";

export const SHORTCUTS: StaticShortcutMap =
  {
    ..._SHORTCUTS,
    "border-main": "border-white dark:border-black",
    "border-main-inverted": "border-black dark:border-white",
    "bg-main": "bg-white dark:bg-black",
    "bg-main-inverted": "bg-black dark:bg-white",
    "text-main":
      "text-black dark:text-white",
    "text-main-inverted":
      "text-white dark:text-black",
    ...GRID,
    ...INPUT,
    ...POSITION,
    ...INTERACTIVE,
    ...LAYOUT,
    ...GRADIENT,
  } as const;
