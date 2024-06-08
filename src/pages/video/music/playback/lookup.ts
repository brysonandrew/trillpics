import { useCymbal } from "~/hooks/sound/percussion/useCymbal";
import { useKick } from "~/hooks/sound/percussion/useKick";
import { useSnare } from "~/hooks/sound/percussion/useSnare";
import { useTom } from "~/hooks/sound/percussion/useTom";
import { TSequenceSourceKey } from "~/store/state/music/types";

export const useMusicPlaybackLookup =
  () => {
    const cymbal = useCymbal();
    const snare = useSnare();
    const kick = useKick();
    const tom = useTom();
    const lookup = {
      cymbal,
      snare,
      kick,
      tom,
    } satisfies Record<
      TSequenceSourceKey,
      (
        startTime: number,
        options: any
      ) => any
    >;
    return lookup;
  };
export type TUseLookupResult =
  ReturnType<
    typeof useMusicPlaybackLookup
  >;
