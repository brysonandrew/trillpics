import { CheckedState } from "@radix-ui/react-checkbox";
import { TMusicState } from "~/store/state/music/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";

export const musicState: TStateHandler<
  TMusicState
> = (set, get) => ({
  sequences: [
    { source: "kick", beats: [] },
    { source: "snare", beats: [] },
    { source: "tom", beats: [] },
    { source: "cymbal", beats: [] },
  ],
  checkBeat: (
    sequenceIndex: number,
    beatIndex: number,
    checked: CheckedState
  ) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats[beatIndex] = checked
        ? 1
        : 0;
    });
  },
  checkAll: (sequenceIndex: number) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_) => 1
      );
    });
  },
  uncheckAll: (sequenceIndex: number) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_) => 0
      );
    });
  },
  checkEveryNth: (
    sequenceIndex: number,
    n: number
  ) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_, index) =>
          index % n === 0 ? 1 : 0
      );
    });
  },
});
