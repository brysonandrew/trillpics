import { resolveSynthSteps } from "~/constants/music/midis";
import {
  DEFAULT_MELODY_OPTIONS,
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
} from "~/store/state/music/constants";
import { TMusicState } from "~/store/state/music/types";
import { TStateHandler } from "~/store/types";

const steps = resolveSynthSteps(
  DEFAULT_MELODY_OPTIONS
);
console.log(steps);
export const musicState: TStateHandler<
  TMusicState
> = () => ({
  synth: {
    steps,
    melody: DEFAULT_MELODY_OPTIONS,
    ...DEFAULT_MULTI_SYNTH_OPTIONS,
    ...DEFAULT_SYNTH_OPTIONS,
  },
  beatsPresetKey: "disco",
  recording: null,
  playingKeys: [],
  bpm: 80,
});
