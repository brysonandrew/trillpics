import { useMidisSynth } from "~/hooks/music/midis/synth";
import {
  TMidisStepsKey,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";

export const useMidisLookup = () => {
  const synth = useMidisSynth();
  const lookup = {
    synth,
  } satisfies Record<
    TMidisStepsKey,
    {
      play: (
        startTime: number,
        midi: number,
        options: TPlayMidisOptions
      ) => void;
      stop: () => void;
    }
  >;
  return lookup;
};
export type TuseMidisLookup =
  ReturnType<typeof useMidisLookup>;
