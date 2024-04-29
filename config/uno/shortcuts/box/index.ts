import { StaticShortcutMap } from "unocss";
import { SHORTCUTS_BOX_GRADIENT } from "../../shortcuts/box/gradient";
import {
  SHORTCUTS_BOX_BACKGROUND_COLOR,
  SHORTCUTS_BOX_BACKGROUND_IMAGE,
} from "../box/background";

export const SHORTCUTS_BOX: StaticShortcutMap =
  {
    ...SHORTCUTS_BOX_BACKGROUND_COLOR,
    ...SHORTCUTS_BOX_BACKGROUND_IMAGE,
    ...SHORTCUTS_BOX_GRADIENT,
  };
