import { CheckedState } from "@radix-ui/react-checkbox";
import { SOUNDS } from "~/hooks/sound/constants";
import { PURCUSSIONS } from "~/hooks/sound/percussion/constants";
import {
  ALL_FILLS,
  GAP_FILLS,
} from "~/pages/video/music/sequencer/buttons/constants";

export type TSequenceSourceKey =
  (typeof SOUNDS)[number];
export type TActiveButton =
  | (typeof ALL_FILLS)[number]
  | null;
// | "none"
// | "all"
// | TGapFill
// | null;
export type TBeats = number[];
export type TSequence = {
  source: TSequenceSourceKey;
  beats: TBeats;
  activeButton?: TActiveButton;
}; // | number;
export type TGapFill =
  (typeof GAP_FILLS)[number];
export type TMusicState = {
  audioBlob: Blob | null;
  sequences: TSequence[];
  resolveActiveButton(
    nextBeats: TBeats
  ): TActiveButton;
  checkBeat(
    sequenceIndex: number,
    beatIndex: number,
    checked: CheckedState
  ): void;
  checkRandom(
    sequenceIndex: number
  ): void;
  checkRandomNotes(
    sequenceIndex: number
  ): void;
  checkAll(sequenceIndex: number): void;
  uncheckAll(
    sequenceIndex: number
  ): void;
  checkEveryNth(
    sequenceIndex: number,
    n: number
  ): void;
};
