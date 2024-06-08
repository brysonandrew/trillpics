import { CheckedState } from "@radix-ui/react-checkbox";
import {
  ALL_FILLS,
  GAP_FILLS,
} from "~/pages/video/music/sequencer/buttons/constants";
import {
  TActiveButton,
  TBeats,
  TGapFill,
  TMusicState,
} from "~/store/state/music/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";

export const musicState: TStateHandler<
  TMusicState
> = (set, get) => ({
  audioBlob: null,
  sequences: [
    { source: "kick", beats: [] },
    { source: "snare", beats: [] },
    { source: "tom", beats: [] },
    { source: "cymbal", beats: [] },
    { source: "bass", beats: [] },
  ],
  resolveActiveButton: (
    nextBeats: TBeats
  ) => {
    if (nextBeats.length < 16)
      return null;
    const possiblities =
      new Set<TActiveButton>(ALL_FILLS);
    nextBeats.forEach(
      (beat: number, index: number) => {
        const isBeat = Boolean(beat);
        if (isBeat) {
          possiblities.delete("none");
        }
        if (!isBeat) {
          possiblities.delete("all");
          GAP_FILLS.forEach((value) => {
            if (index % value === 0) {
              possiblities.delete(
                value
              );
            }
          });
        }
      }
    );
    const values = [
      ...possiblities.values(),
    ];
    if (values.length > 1) return null;
    const result: TActiveButton =
      values[0] ?? null;
    return result;
  },
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
      draft.sequences[
        sequenceIndex
      ].activeButton =
        get().resolveActiveButton(
          draft.sequences[sequenceIndex]
            .beats
        );
    });
  },
  checkRandom: (
    sequenceIndex: number
  ) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_) => Math.round(Math.random())
      );
      draft.sequences[
        sequenceIndex
      ].activeButton = null;
    });
  },
  checkRandomNotes: (
    sequenceIndex: number
  ) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_) => Math.round(Math.random() * 32)
      );
      draft.sequences[
        sequenceIndex
      ].activeButton = null;
    });
  },
  checkAll: (sequenceIndex: number) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_) => 1
      );
      draft.sequences[
        sequenceIndex
      ].activeButton = "all";
    });
  },
  uncheckAll: (
    sequenceIndex: number
  ) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_) => 0
      );
      draft.sequences[
        sequenceIndex
      ].activeButton = "none";
    });
  },
  checkEveryNth: (
    sequenceIndex: number,
    n: TGapFill
  ) => {
    set((draft: TState) => {
      draft.sequences[
        sequenceIndex
      ].beats = [...Array(16)].map(
        (_, index) =>
          index % n === 0 ? 1 : 0
      );
      draft.sequences[
        sequenceIndex
      ].activeButton = n;
    });
  },
});
