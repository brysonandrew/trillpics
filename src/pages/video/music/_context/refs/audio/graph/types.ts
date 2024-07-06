import { MutableRefObject } from "react";
import { TKarplusStrongOptions } from "~/pages/video/music/synth/nodes/karplus/types";
import { TSynthSourceKey } from "~/pages/video/music/synth/nodes/sources/constants";
import { TDelays } from "~/pages/video/music/_context/refs/audio/delays/types";
import { TBiquads } from "~/pages/video/music/_context/refs/audio/biquads/types";
import { TKarplus } from "~/pages/video/music/_context/refs/audio/karpluses/types";
import { TOscillator } from "~/pages/video/music/_context/refs/audio/oscillators/types";
import {
  NOISE_PINK_KEY,
  WHITE_NOISE,
} from "~/pages/video/music/_context/refs/audio/noises";
import {
  TNoise,
  TNoiseOptions,
} from "~/pages/video/music/_context/refs/audio/noises/types";
import {
  TBitcrusher,
  TBitcrusherOptions,
  TBitcrushers,
} from "~/pages/video/music/_context/refs/audio/bitcrusher/types";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import { DELAY_KEY } from "~/pages/video/music/synth/nodes/delay/constants";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";

export type TGraphNodeType =
  | {
      key: TBitcrushers["key"];
      options: TBitcrusherOptions;
    }
  | {
      key: TDelays["key"];
      options: DelayOptions;
    }
  | {
      key: TDelays["key"];
      options: DelayOptions;
    }
  | {
      key: TBiquads["key"];
      options: BiquadFilterOptions;
    };
export type TGraphNode =
  TGraphNodeType & {
    amp?: GainNode;
  };
// ref: MutableRefObject<null | HTMLDivElement>;

export type TGraphNodeAudioKey =
  | TSynthSourceKey
  | TGraphNode["key"];
export type TGraphAudioNode =
  | DelayNode
  | BiquadFilterNode
  | TBitcrusher;

export type TGraphSourceAudioNode =
  | TOscillator
  | TKarplus;

export type TGraphNodeRef =
  | TGraphAudioNode
  | TGraphSourceAudioNode;

export type TGraphRef<
  T extends object
> = {
  apm: T;
  ui: JSX.Element;
};
export type TGraphRefs = {
  [OSCILLATOR_KEY]: TGraphRef<TOscillator>;
  [NOISE_PINK_KEY]: TGraphRef<TNoise>;
  [WHITE_NOISE]: TGraphRef<TNoise>;
  [KARPLUS_KEY]: TGraphRef<TKarplus>;
  [BITCRUSHER_KEY]: TGraphRef<TBitcrusher>;
  [BIQUAD_KEY]: TGraphRef<BiquadFilterNode>;
  [DELAY_KEY]: TGraphRef<DelayNode>;
};
export type TGraphSource = {
  key: string;
  options?:
    | OscillatorOptions
    | TKarplusStrongOptions
    | TNoiseOptions;
  nodes: readonly TGraphNode[];
  refs: Partial<TGraphRefs>;
  // amps: GainNode[];
  // ref?: MutableRefObject<null | HTMLDivElement>;
};
export type TAudioGraph = {
  sources: readonly TGraphSource[];
  ref: MutableRefObject<null | HTMLDivElement>;
};
