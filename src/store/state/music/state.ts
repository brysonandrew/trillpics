import {
  MIDIS_2_1_R,
  MIDIS_4_4_R,
} from "~/constants/music/midis";
import { PRESETS_DISCO } from "~/hooks/sound/beats/presets/disco";
import { DEFAULT_SYNTH_CONFIG } from "~/hooks/sound/midis/presets";
import { TMusicState } from "~/store/state/music/types";
import { musicUpdateSynth } from "~/store/state/music/update/synth/index";
import { musicUpdateSynthTransform } from "~/store/state/music/update/synth/transform";
import { TStateHandler } from "~/store/types";

export const musicState: TStateHandler<
  TMusicState
> = (set, get) => ({
  music: {
    ...PRESETS_DISCO,
    synth: {
      steps: musicUpdateSynthTransform(
        DEFAULT_SYNTH_CONFIG
      ),
      config: DEFAULT_SYNTH_CONFIG,
    },

    // bass:  MIDIS_PRESETS.bass.raptor
    // pulse: [...MIDIS_2_1_R],
    // arpeggio: [...MIDIS_4_4_R],
  },
  musicUpdateSynth: musicUpdateSynth(
    set,
    get
  ),
});
