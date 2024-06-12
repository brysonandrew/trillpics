import {
  TBeats,
  TBeatsSequenceKey,
} from "~/hooks/sound/beats/types";
import { TSynth } from "~/hooks/sound/midis/synth/types";
import {
  TMidis,
  TMidisSequenceKey,
} from "~/hooks/sound/midis/types";
import {
  ALL_FILLS,
  GAP_FILLS,
} from "~/pages/video/music/buttons/constants";
import { MUSIC_TYPES } from "~/store/state/music/constants";
import { TMusicUpdateSynthHanlder } from "~/store/state/music/update/synth";

export type TMusicKey =
  (typeof MUSIC_TYPES)[number];
export type TSequenceKey<
  T extends TMusicKey
> = T extends "beats"
  ? TBeatsSequenceKey
  : TMidisSequenceKey;
export type USequenceEntry =
  | [TBeatsSequenceKey, TBeats]
  | [TMidisSequenceKey, TMidis];
export type TActiveButton =
  | (typeof ALL_FILLS)[number]
  | null;
export type TSequenceBeatRecord =
  Record<TBeatsSequenceKey, TBeats>;
export type TPartialSequenceBeatRecord =
  Partial<TSequenceBeatRecord>;
export type TSequenceMidiRecord =
  Record<TMidisSequenceKey, TMidis>;
export type TPartialSequenceMidiRecord =
  Partial<TSequenceMidiRecord>;

export type USequenceKey =
  | TBeatsSequenceKey
  | TMidisSequenceKey;

export type TGapFill =
  (typeof GAP_FILLS)[number];
export type TMusicState = {
  music: TPartialSequenceBeatRecord & {
    synth: TSynth;
  };
  musicUpdateSynth: TMusicUpdateSynthHanlder;
};
