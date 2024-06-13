import { useHihat } from "~/hooks/music/beats/hihat";
import { useKick } from "~/hooks/music/beats/kick";
import { useSnare } from "~/hooks/music/beats/snare";
import { useTom } from "~/hooks/music/beats/tom";
import {
  TBeatsSequenceKey,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";

export const useSoundBeatsLookup =
  () => {
    const hihat = useHihat();
    const snare = useSnare();
    const kick = useKick();
    const tom = useTom();

    const lookup = {
      hihat,
      snare,
      kick,
      tom,
    } satisfies Record<
      TBeatsSequenceKey,
      {
        play: (
          startTime: number,
          options?: TPlayBeatsOptions
        ) => void;
        stop: () => void;
      }
    >;
    return lookup;
  };
