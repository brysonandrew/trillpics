import { PRESETS_DISCO } from "~/hooks/music/beats/presets/disco";
import { PRESETS_DNB } from "~/hooks/music/beats/presets/dnb";
import { PRESETS_RAP } from "~/hooks/music/beats/presets/rap";
import { PRESETS_ROCK } from "~/hooks/music/beats/presets/rock";
import { PRESETS_TECHNO } from "~/hooks/music/beats/presets/techno";
import { PRESETS_TRAP } from "~/hooks/music/beats/presets/trap";
import { TBeatsPresetRecord } from "~/hooks/music/beats/types";

export const BEATS_PRESETS = {
  disco: PRESETS_DISCO,
  trap: PRESETS_TRAP,
  techno: PRESETS_TECHNO,
  rock: PRESETS_ROCK,
  rap: PRESETS_RAP,
  dnb: PRESETS_DNB,
} as const satisfies TBeatsPresetRecord;
