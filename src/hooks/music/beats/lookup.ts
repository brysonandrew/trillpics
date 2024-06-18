import { useHihat } from "~/hooks/music/beats/hihat";
import { useKick } from "~/hooks/music/beats/kick";
import { useSnare } from "~/hooks/music/beats/snare";
import { useTom } from "~/hooks/music/beats/tom";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";

export type TUseBeatsLookupValue = {
  play: (
    startTime: number,
    beat: TBeatValue,
    options?: TPlayBeatsOptions
  ) => void;
  stop: () => void;
};
type TUseBeatsBaseLookup = Record<
  TBeatsStepsKey,
  TUseBeatsLookupValue
>;
export const useBeatsLookup = () => {
  const hihat = useHihat();
  const snare = useSnare();
  const kick = useKick();
  const tom = useTom();

  const lookup = {
    hihat,
    snare,
    kick,
    tom,
  } as const satisfies TUseBeatsBaseLookup;
  return lookup;
};
export type TUseBeatsLookup =
  ReturnType<typeof useBeatsLookup>;
