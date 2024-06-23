import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
const key: TBeatsStepsKey = "hihat";
export const useHihat = () => {
  const { context, master,beatsMaster } =
    useContextMusicInit();
  const isReady = useBufferInit(key, 1);
  const start =
    useSourceBufferStart(key);
  const stop = useSourceBufferStop(key);

  const play = async (
    startTime: number,
    _: TBeatValue,
    options: TPlayBeatsOptions = {}
  ) => {
    const {
      volume = 1,
    } = options;
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "highpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.4 * volume,
    });

    start({
      startTime,
      output: filter,
      ...options
    });
    filter.connect(gain);
    gain.connect(beatsMaster);
  };

  return { play, stop, isReady };
};
