import { STEPS_COUNT } from "~/constants/music/timing";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";

export const DEFAULT_SEQUENCE_OPTIONS: TSequenceOptions =
  {
    offset: 0,
    delay: 0,
    repeat: 1,
    interval: 4,
    duration: 1,
    beats: STEPS_COUNT,
  } as const;
