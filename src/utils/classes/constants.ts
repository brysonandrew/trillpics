import { COLOR_RECORD } from "~uno/color";
import { SHORTCUTS_POSITION } from "~uno/shortcuts/position";

export const POSITION_LOOKUP = {
  static: { position: "static" },
  fixed: { position: "fixed" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  sticky: { position: "sticky" },
  ...SHORTCUTS_POSITION
} as const;

export const COLOR_LOOKUP = { 
  ...COLOR_RECORD,
};

export const RX_GENERIC_TEXT_CLASS =
  /text-\w*/;

  export const FONT_SIZE_LOOKUP = {
    ...COLOR_LOOKUP
  } as const