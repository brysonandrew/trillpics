import { MIDIS } from "~/hooks/sound/midis/constants";
import { BEATS } from "~/hooks/sound/beats/constants";


export const SOUNDS = [
  ...BEATS,
  ...MIDIS,
] as const;
