import { resolveMidiSteps } from "~/constants/music/midi/steps";
import {
  DEFAULT_BEATS_SLIDER_OPTIONS,
  DEFAULT_MIDIS_OPTIONS,
  DEFAULT_MIDIS_SLIDER_OPTIONS,
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_MUSIC_SLIDER_OPTIONS,
  DEFAULT_SCALE_OPTIONS,
  DEFAULT_SEQUENCE_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
} from "~/store/state/music/constants";
import { TMusicState } from "~/store/state/music/types";
import { TStateHandler } from "~/store/types";

const steps = resolveMidiSteps({
  ...DEFAULT_SEQUENCE_OPTIONS,
  ...DEFAULT_SCALE_OPTIONS,
});

export const musicState: TStateHandler<
  TMusicState
> = () => ({
  isLoop: false,
  beats: {
    ...DEFAULT_BEATS_SLIDER_OPTIONS,
  },
  midis: {
    ...DEFAULT_MIDIS_OPTIONS,
  },
  steps,
  synth: {
    ...DEFAULT_MULTI_SYNTH_OPTIONS,
    ...DEFAULT_SYNTH_OPTIONS,
  },
  sequence: DEFAULT_SEQUENCE_OPTIONS,
  scale: DEFAULT_SCALE_OPTIONS,
  beatsPresetKey: "disco",
  recording: null,
  playingKeys: [],
  ...DEFAULT_MUSIC_SLIDER_OPTIONS,
});
