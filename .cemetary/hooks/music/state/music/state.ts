import { TMusicState } from "~/store/state/music/types";
import { TStateHandler } from "~/store/types";


export const musicState: TStateHandler<
  TMusicState
> = () => ({
  bpm: 80,
  isLoop: false,
  // steps,
  // sequence: DEFAULT_SEQUENCE_OPTIONS,
  // scale: DEFAULT_SCALE_OPTIONS,
  // synth: {
  //   ...DEFAULT_MULTI_SYNTH_OPTIONS,
  //   ...DEFAULT_SYNTH_OPTIONS,
  // },
  // beats: {
  //   presetKey: "disco",
  //   ...DEFAULT_BEATS_SLIDER_OPTIONS,
  // },
  recording: null,
  playingKeys: [],
});
