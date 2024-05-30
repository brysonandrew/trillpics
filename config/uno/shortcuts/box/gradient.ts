import { StaticShortcutMap } from "unocss";

export const SHORTCUTS_BOX_GRADIENT: StaticShortcutMap =
  {
    "_outline-filter":
      "dark:_dark-outline-filter _light-outline-filter",
    "_outline-filter-inverted":
      "_dark-outline-filter dark:_light-outline-filter",
    "_gradient-border":
      "dark:_dark-gradient-border _light-gradient-border",
    "_gradient-text":
      "dark:_dark-gradient-text _light-gradient-text",
    "_gradient-linear":
      "dark:_dark-linear-gradient _light-linear-gradient",
    "_gradient-radial":
      "dark:_dark-radial-gradient _light-radial-gradient",
  } as const;

export type TGradientShortcut =
  keyof typeof SHORTCUTS_BOX_GRADIENT;
