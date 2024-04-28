import { StaticShortcutMap } from "unocss";

export const SHORTCUTS_BOX_GRADIENT: StaticShortcutMap =
  {
    "_gradient-border":
      "dark:_dark-gradient-border _light-gradient-border",
    "_gradient-text":
      "dark:_dark-gradient-text _light-gradient-text",
    "_radial-gradient":
      "dark:_dark-radial-gradient _light-radial-gradient",
  } as const;

export type TGradientShortcut =
  keyof typeof SHORTCUTS_BOX_GRADIENT;
