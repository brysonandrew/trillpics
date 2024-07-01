import { resolveMidiSteps } from "~/hooks/music/midis/steps";
import {
  DEFAULT_MULTI_SYNTH_OPTIONS,
  DEFAULT_SYNTH_OPTIONS,
} from "~/pages/video/music/synth/constants";
import { DEFAULT_SCALE_OPTIONS } from "~/pages/video/music/synth/composition/scale/constants";
import { DEFAULT_SEQUENCE_OPTIONS } from "~/pages/video/music/synth/composition/sequence/constants";
import { DEFAULT_BEATS_SLIDER_OPTIONS } from "~/store/state/music/constants";
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
