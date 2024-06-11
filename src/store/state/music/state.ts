import {
  MIDIS_2_1_R,
  MIDIS_4_4_R,
} from "~/constants/music/midis";
import { PRESETS_DISCO } from "~/hooks/sound/beats/presets/disco";
import { PRESETS_SYNTH } from "~/hooks/sound/midis/presets";
import { MIDIS_PRESETS } from "~/hooks/sound/midis/presets/_index";
import { TMusicState } from "~/store/state/music/types";
import { TStateHandler } from "~/store/types";

export const musicState: TStateHandler<
  TMusicState
> = (set, get) => ({
  music: {
    ...PRESETS_DISCO,
    ...PRESETS_SYNTH
    // bass:  MIDIS_PRESETS.bass.raptor
    // pulse: [...MIDIS_2_1_R],
    // arpeggio: [...MIDIS_4_4_R],
  },
});
