import { usePulse } from "~/hooks/sound/midis/pulse";
import { useArpeggio } from "~/hooks/sound/midis/arpeggio";
import {
  TMidisSequenceKey,
  TPlayMidisOptions,
} from "~/hooks/sound/midis/types";
import { useDrone } from "~/hooks/sound/midis/drone";
import { usePitch } from "~/hooks/sound/midis/pitch";

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
