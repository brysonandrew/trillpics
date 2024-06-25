import { key } from "localforage";
import { useSynthSingle } from "react-synthwave";
import { useMusicRefs } from "~/pages/video/music/_context/init";

type TConfig = any;
export const useSourceBufferLfo = (
  config: TConfig
) => {
  // const {
  //   master,
  //   context,
  //   bufferSourceRecord,
  //   bufferRecord,
  // } = useMusicRefs();
  // const lfo = useSynthSingle(context, {
  //   type: "sine",
  //   frequency: bpm * (1 / 15),
  // });
  // lfo.play({
  //   start: startTime,
  //   gain: rate * 2,
  //   output:
  //     bufferSourceRecord[key][stepIndex]
  //       .source.playbackRate,
  // });
};
