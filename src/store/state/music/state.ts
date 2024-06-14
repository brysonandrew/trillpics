import { MIDIS_1_R } from "~/constants/music/midis";
import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_MUSIC_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
} from "~/store/state/music/constants";
import { TMusicState } from "~/store/state/music/types";
import { TStateHandler } from "~/store/types";

export const musicState: TStateHandler<
  TMusicState
> = () => ({
  synthSteps: MIDIS_1_R,
  repeats: 1,
  beatsPresetKey: "disco",
  recording: null,
  playKey: null,
  options: DEFAULT_SYNTH_OPTIONS,
  multi: DEFAULT_MULTI_SYNTH_OPTIONS,
  ...DEFAULT_MUSIC_OPTIONS,
});
