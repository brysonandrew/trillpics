import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
const key: TBeatsStepsKey = "snare";

export const useSnare = () => {
  const { context, beatsMaster } =
    useMusicInitContext();
  const isReady = useBufferInit(key, 2);
  const start =
    useSourceBufferStart(key);
  const stop = useSourceBufferStop(key);
  const play = async (
    startTime: number,
    beat: TBeatValue,
    options: TPlayBeatsOptions = {}
  ) => {

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "highpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.065,
    });
    start({
      startTime,
      output: gain,
      ...options,
    });
    filter.connect(gain);
    gain.connect(beatsMaster);
  };

  return { play, stop, isReady };
};
