import {
  SYNTH_MOODS,
  SYNTH_TONES,
} from "~/hooks/sound/midis/synth/constants";
import { TMidis } from "~/hooks/sound/midis/types";
import * as s from "react-synthwave";

type T = s.TMultiOptions;

export type TSynthMoods =
  typeof SYNTH_MOODS;
export type TSynthMood =
  TSynthMoods[number];

export type TSynthTones =
  typeof SYNTH_TONES;
export type TSynthTone =
  TSynthTones[number];

export type TSynthConfig = {
  mood: TSynthMood;
  tone: TSynthTone;
};
export type TSynth = {
  config: TSynthConfig;
  steps: TMidis;
};
