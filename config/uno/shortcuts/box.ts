import { StaticShortcutMap } from "unocss";
import { SHORTCUTS_BOX_GRADIENT } from "./gradient";
import {
  SHORTCUTS_BOX_BACKGROUND_COLOR,
  SHORTCUTS_BOX_BACKGROUND_IMAGE,
} from "./background";

export const SHORTCUTS_BOX: StaticShortcutMap =
  {
    ...SHORTCUTS_BOX_BACKGROUND_COLOR,
    ...SHORTCUTS_BOX_BACKGROUND_IMAGE,
    ...SHORTCUTS_BOX_GRADIENT,
  };
