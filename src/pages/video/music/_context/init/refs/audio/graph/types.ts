import {  FC,  MutableRefObject,} from "react";
import { TKarplusStrongOptions } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
import { TSynthSourceKey } from "~/pages/video/music/synth/source/constants";
import { TDelays } from "~/pages/video/music/_context/init/refs/audio/delays/types";
import { TFilters } from "~/pages/video/music/_context/init/refs/audio/filters/types";
import { TKarplus } from "~/pages/video/music/_context/init/refs/audio/karpluses/types";
import { TOscillator } from "~/pages/video/music/_context/init/refs/audio/oscillators/types";

export type TGraphNode =
  | {
      key: TDelays["key"];
      options: DelayOptions;
    }
  | {
      key: TFilters["key"];
      options: BiquadFilterOptions;
    };

export type TGraphSource = {
  key: TSynthSourceKey;
  options?:
    | OscillatorOptions
    | TKarplusStrongOptions;
  nodes: readonly TGraphNode[];
};
export type TGraphNodeAudioKey =
  | TSynthSourceKey
  | TGraphNode["key"];
export type TGraphAudioNode =
  | DelayNode
  | BiquadFilterNode;

export type TGraphSourceAudioNode =
  | TOscillator
  | TKarplus;

export type TGraphNodeAudioRef = {
  FC: FC;
  node: TGraphAudioNode;
};
export type TGraphNodeRef = TGraphAudioNode|TGraphSourceAudioNode
export type TGraphRefs = Record<string, TGraphNodeRef>
// Record<
//   TGraphNodeAudioKey,
//   Record<string, TGraphAudioNode>
// >;

export type TAudioGraph = {
  sources: readonly TGraphSource[];
  ref: MutableRefObject<null | HTMLDivElement>;
  refs: TGraphRefs 
}