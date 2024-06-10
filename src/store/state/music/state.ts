import {
  MIDIS_2_1_R,
  MIDIS_4_4_R,
} from "~/constants/music/midis";
import { PRESETS_DISCO } from "~/hooks/sound/beats/presets/disco";
import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets";
import { TMusicState } from "~/store/state/music/types";
import { TStateHandler } from "~/store/types";

export const musicState: TStateHandler<
  TMusicState
> = (set, get) => ({
  music: {
    ...PRESETS_DISCO,
    bass:  MIDIS_PRESETS.bass.raptor
    // pulse: [...MIDIS_2_1_R],
    // arpeggio: [...MIDIS_4_4_R],
  },
});
