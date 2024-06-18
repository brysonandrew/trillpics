import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
const key: TBeatsStepsKey = "kick";

export const useKick = () => {
  const {
    context,
    master,
  } = useMusicInitContext();
  const isReady = useBufferInit(key, 0);
  const start =
    useSourceBufferStart(key);
  const stop = useSourceBufferStop(key);

  const play = async (
    startTime: number,
    beat: TBeatValue,
    options: TPlayBeatsOptions = {}
  ) => {

    const {
      version = 0,
      volume = 1,
      stepIndex = 0,
    } = options;

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 400,
        type: "lowpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.2 * volume,
    });

    start({
      stepIndex,
      startTime,
      output: filter,
    });
    filter.connect(gain);
    gain.connect(master);
  };

  return { play, stop,isReady };
};
