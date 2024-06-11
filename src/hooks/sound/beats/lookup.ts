import { useHihat } from "~/hooks/sound/beats/hihat";
import { useKick } from "~/hooks/sound/beats/kick";
import { useSnare } from "~/hooks/sound/beats/snare";
import { useTom } from "~/hooks/sound/beats/tom";
import {
  TBeatsSequenceKey,
  TPlayBeatsOptions,
} from "~/hooks/sound/beats/types";

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
      (
        startTime: number,
        options?: TPlayBeatsOptions
      ) => any
    >;
    return lookup;
  };
