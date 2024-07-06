import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphAudioNode } from "~/pages/video/music/_context/refs/audio/graph/types";
import { isDefined } from "~/utils/validation/is/defined";

type TConfig<
  T extends TGraphAudioNode
> = TSourceNodesProps & {
  connect(gain: GainNode): T;
};
export const useAmpConnect = <
  T extends TGraphAudioNode
>({
  index,
  source,
  connect,
}: TConfig<T>) => {
  const { audio } = useMusicRefs();

  const handler = () => {
    const amp = audio.gains.create();
    const preamp =
      index === 0
        ? audio.gains.midis.preamp
        : source.nodes[index - 1].amp;
    const apm = connect(amp);
    const node:
      | AudioWorkletNode
      | BiquadFilterNode
      | DelayNode =
      "node" in apm ? apm.node : apm;

    if (isDefined(preamp)) {
      preamp.connect(node);
    }
    node.connect(amp);
    source.nodes[index].amp = amp;

    return apm;
  };

  return handler;
};
