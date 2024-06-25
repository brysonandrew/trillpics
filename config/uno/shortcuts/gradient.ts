import { StaticShortcutMap } from "unocss";

export const SHORTCUTS_BOX_GRADIENT: StaticShortcutMap =
  {
    "_sf-outline":
      "dark:_dark-outline-filter _light-outline-filter",
    "_sf-outline-inverted":
      "_dark-outline-filter dark:_light-outline-filter",
    "_bi-border":
      "dark:_dark-gradient-border _light-gradient-border",
    "_bi-text":
      "dark:_dark-gradient-text _light-gradient-text",
    "_bi-linear":
      "dark:_dark-linear-gradient _light-linear-gradient",
    "_bi-radial":
      "dark:_dark-radial-gradient _light-radial-gradient",
    "_bi-conic":
      "dark:_dark-conic _light-conic",
    "_bi-conic-metal":
      "dark:_dark-conic-metal _light-conic-metal",
  } as const;

export type TGradientShortcut =
  keyof typeof SHORTCUTS_BOX_GRADIENT;
