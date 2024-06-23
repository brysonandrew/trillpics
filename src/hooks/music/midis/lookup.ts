import { useArpeggio } from "~/hooks/music/midis/arpeggio";
import {
  TMidisStepsKey,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";

export const useNodesLookup = () => {
  const arpeggio = useArpeggio();
  const lookup = {
    synth: arpeggio,
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
export type TUseNodesLookup =
  ReturnType<typeof useNodesLookup>;
