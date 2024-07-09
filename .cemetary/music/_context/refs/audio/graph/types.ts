import { FC } from "react";
import {
  TKarplusKey,
  TKarplusOptions,
} from "~/pages/video/music/synth/nodes/karplus/types";
import { TSynthSourceKey } from "~/pages/video/music/synth/nodes/sources/constants";
import { TDelays } from "~/pages/video/music/_context/refs/audio/delays/types";
import { TBiquads } from "~/pages/video/music/_context/refs/audio/biquads/types";
import { TKarplus } from "~/pages/video/music/_context/refs/audio/karpluses/types";
import { TOscillator } from "~/pages/video/music/_context/refs/audio/oscillators/types";
import {
  PINK_NOISE_KEY,
  WHITE_NOISE_KEY,
} from "~/pages/video/music/_context/refs/audio/noises";
import {
  TNoise,
  TNoiseKey,
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
import { GAIN_KEY } from "~/pages/video/music/_context/refs/audio/gains";
import { TOscillatorKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { TGains } from "~/pages/video/music/_context/refs/audio/gains/types";
import {
  TRingMod,
  TRingModOptions,
  TRingMods,
} from "~/pages/video/music/_context/refs/audio/ring-mod/types";
import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";
import { TIconsSvgProps } from "~/components/icons/svg";

type TTitleProps = {
  title: string;
  Icon: FC<TIconsSvgProps>;
};

export type TGraphNodeType =
  | {
      key: "gains.midis.preamp";
      options?: Partial<GainOptions>;
    }
  | {
      key: "gains.midis.master";
      options?: Partial<GainOptions>;
    }
  | {
      key: TGains["key"];
      options?: Partial<GainOptions>;
    }
  | {
      key: TRingMods["key"];
      options?: Partial<TRingModOptions>;
    }
  | {
      key: TBitcrushers["key"];
      options?: Partial<TBitcrusherOptions>;
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
  TGraphNodeType &
    TTitleProps & {
      amp?: GainNode;
    };
export type TGraphNodeWithId =
  TGraphNode & { id: string };

export type TGraphNodeAudioKey =
  | TSynthSourceKey
  | TGraphNode["key"];
export type TGraphAudioRef =
  | DelayNode
  | BiquadFilterNode
  | TBitcrusher
  | GainNode
  | TRingMod;

export type TGraphAudioNode =
  | DelayNode
  | BiquadFilterNode
  | TBitcrusher["node"]
  | GainNode
  | TRingMod["node"];

export type TGraphSourceAudioNode =
  | TOscillator
  | TKarplus;

export type TGraphNodeRef =
  | TGraphAudioNode
  | TGraphSourceAudioNode;

export type TGraphRef<
  T extends object
> = {
  processor: T;
  ui: JSX.Element;
};
export type TGraphRefs = {
  [OSCILLATOR_KEY]: TGraphRef<TOscillator>;
  [PINK_NOISE_KEY]: TGraphRef<TNoise>;
  [WHITE_NOISE_KEY]: TGraphRef<TNoise>;
  [KARPLUS_KEY]: TGraphRef<TKarplus>;
  [BITCRUSHER_KEY]: TGraphRef<TBitcrusher>;
  [BIQUAD_KEY]: TGraphRef<BiquadFilterNode>;
  [DELAY_KEY]: TGraphRef<DelayNode>;
  [GAIN_KEY]: TGraphRef<GainNode>;
  [RING_MOD_KEY]: TGraphRef<TRingMod>;
};
export type TGraphRefKey =
  keyof TGraphRefs;
export type TGraphSource = (
  | {
      key: TOscillatorKey;
      options?: OscillatorOptions;
    }
  | {
      key: TKarplusKey;
      options?: TKarplusOptions;
    }
  | {
      key: TNoiseKey;
      options?: TNoiseOptions;
    }
) &
  TTitleProps & {
    nodes: TGraphNode[];
    refs: Partial<TGraphRefs>;
  };
export type TGraphSourceWithId = Omit<
  TGraphSource,
  "nodes"
> & {
  id: string;
  nodes: TGraphNodeWithId[];
};
export type TAudioGraph = {
  sources: readonly TGraphSourceWithId[];
};

export type UGraphNodeWithId =
  | TGraphSourceWithId
  | TGraphNodeWithId;
