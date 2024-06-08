import { BASSES } from "~/hooks/sound/bass/constants";
import { PURCUSSIONS } from "~/hooks/sound/percussion/constants";

export const SOUNDS = [
  ...BASSES,
  ...PURCUSSIONS,
] as const;
