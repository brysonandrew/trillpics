import { CheckedState } from "@radix-ui/react-checkbox";
import { PURCUSSIONS } from "~/hooks/sound/percussion/constants";

export type TSequenceSourceKey =
  (typeof PURCUSSIONS)[number];
export type TSequence = {
  source: TSequenceSourceKey;
  beats: number[];
}; // | number;

export type TMusicState = {
  sequences: TSequence[];
  checkBeat(
    sequenceIndex: number,
    beatIndex: number,
    checked: CheckedState,

  ): void;
  checkAll(sequenceIndex: number): void;
  uncheckAll(sequenceIndex: number): void;
  checkEveryNth(
    sequenceIndex: number,
    n: number
  ): void;
};
