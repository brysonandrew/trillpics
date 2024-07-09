import { STEPS_COUNT } from "~/constants/music/timing";
import { TSequenceOptions } from "~/pages/video/music/synth/composition/sequence/types";

export const DEFAULT_SEQUENCE_OPTIONS: TSequenceOptions =
  {
    offset: 1,
    delay: 0,
    repeat: 1,
    interval: 4,
    duration: 1,
    beats: STEPS_COUNT,
  } as const;
