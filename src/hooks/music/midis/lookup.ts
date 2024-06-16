import { usePulse } from "~/hooks/music/midis/pulse";
import { useArpeggio } from "~/hooks/music/midis/arpeggio";
import {
  TMidisStepsKey,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useDrone } from "~/hooks/music/midis/drone";
import { usePitch } from "~/hooks/music/midis/pitch";

export const useMidisLookup =
  () => {
    const { play: pitchPlay } =
      usePitch();
    const { play: dronePlay } =
      useDrone();
    const { play: pulsePlay } =
      usePulse();
    const arpeggio = useArpeggio();
    const lookup = {
      // pitch: pitchPlay,
      // treble: dronePlay,
      // mid: pulsePlay,
      synth: arpeggio,
    } satisfies Record<
      TMidisStepsKey,
      {
        play: (
          startTime: number,
          midi: number,
          options?: TPlayMidisOptions
        ) => void;
        stop: () => void;
      }
    >;
    return lookup;
  };
export type TUseMidisLookup =
  ReturnType<typeof useMidisLookup>;
