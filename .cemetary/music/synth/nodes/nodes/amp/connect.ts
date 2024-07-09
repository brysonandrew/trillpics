import { ampLast } from "~/pages/video/music/synth/nodes/nodes/amp/last";
import { TSourceProps } from "~/pages/video/music/synth/nodes/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import {
  TGraphAudioNode,
  TGraphAudioRef,
} from "~/pages/video/music/_context/refs/audio/graph/types";

type TConfig<T extends TGraphAudioRef> =
  TSourceProps & {
    index: number;
    connect(gain: GainNode): T;
  };
export const useAmpConnect = <
  T extends TGraphAudioRef
>({
  index,
  source,
  connect,
}: TConfig<T>) => {
  const { audio } = useMusicRefs();

  const handler = () => {
    const amp: GainNode =
      audio.gains.create();
    const lastAmp = ampLast(
      source.nodes,
      index
    );

    const preamp =
      lastAmp ??
      audio.gains.midis.preamp;

    const processor = connect(amp);

    const node: TGraphAudioNode =
      "node" in processor
        ? processor.node
        : processor;

    preamp.connect(node);
    node.connect(amp);
    source.nodes[index].amp = amp;

    return processor;
  };

  return handler;
};
// let prevIndex = index;
// let preamp: GainNode =
//   audio.gains.midis.preamp;
// while (prevIndex > 0) {
//   prevIndex--;
//   const prev =
//     source.nodes[prevIndex];
//   if (
//     isDefined(prev) &&
//     "amp" in prev &&
//     isGainNode(prev.amp)
//   ) {
//     preamp = prev.amp;
//     // console.log('found amp, ',prevIndex, source.nodes[index])
//     break;
//   }
