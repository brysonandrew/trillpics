import { useArpeggio } from "~/hooks/music/midis/arpeggio";
import {
  TNodesStepsKey,
  TPlayNodesOptions,
} from "~/hooks/music/midis/types";

export const useNodesLookup = () => {
  const arpeggio = useArpeggio();
  const lookup = {
    synth: arpeggio,
  } satisfies Record<
    TNodesStepsKey,
    {
      play: (
        startTime: number,
        midi: number,
        options: TPlayNodesOptions
      ) => void;
      stop: () => void;
    }
  >;
  return lookup;
};
export type TUseNodesLookup =
  ReturnType<typeof useNodesLookup>;
