import { TBeatsStepsKey } from "~/hooks/music/beats/types";

export type TBufferSourceRecord =
  Record<
    TBeatsStepsKey,
    {
      timeout: ReturnType<
        typeof window.setTimeout
      >;
      source: AudioBufferSourceNode;
    }[]
  >;

export type TAudioBufferRecord = Partial<
  Record<
    TBeatsStepsKey,
    null | AudioBuffer
  >
>;
