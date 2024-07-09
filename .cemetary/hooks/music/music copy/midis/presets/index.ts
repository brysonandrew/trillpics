import { PRESETS_MEGABUS } from "~/hooks/music/midis/presets/megabus";
import { PRESETS_OCCAMS_LASER } from "~/hooks/music/midis/presets/occams-laser";
import { PRESETS_RUMBLER } from "~/hooks/music/midis/presets/rumbler";
import { TMidisPresetRecord } from "~/hooks/music/midis/types";

export const MIDIS_PRESETS = {
  "occams-laser": PRESETS_OCCAMS_LASER,
  rumbler: PRESETS_MEGABUS,
  megabus: PRESETS_RUMBLER,
} as const satisfies TMidisPresetRecord;
