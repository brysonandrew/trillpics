import { usePulse } from "~/hooks/music/midis/pulse";
import { useArpeggio } from "~/hooks/music/midis/arpeggio";
import {
  TMidisSequenceKey,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useDrone } from "~/hooks/music/midis/drone";
import { usePitch } from "~/hooks/music/midis/pitch";

export const useSoundMidisLookup =
  () => {
    const { play: pitchPlay } =
      usePitch();
    const { play: dronePlay } =
      useDrone();
    const { play: pulsePlay } =
      usePulse();
    const arpeggio =
      useArpeggio();
    const lookup = {
      // pitch: pitchPlay,
      // treble: dronePlay,
      // mid: pulsePlay,
      synth: arpeggio,
    } satisfies Record<
      TMidisSequenceKey,
      {
        play:(
          startTime: number,
          midi: number,
          options?: TPlayMidisOptions
        ) => any,
        stop:()=>void
      }
    >;
    return lookup;
  };
