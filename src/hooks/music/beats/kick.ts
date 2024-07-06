import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
const key: TBeatsStepsKey = "kick";

export const useKick = () => {
  const { audio:{context,gains:{beats}},  } =
    useMusicRefs();
  const isReady = useBufferInit(key, 0);
  const start =
    useSourceBufferStart(key);
  const stop = useSourceBufferStop(key);

  const play = async (
    startTime: number,
    beat: TBeatValue,
    options: TPlayBeatsOptions = {}
  ) => {
    const { volume = 1 } = options;
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 400,
        type: "lowpass",
      }
    );

    start({
      startTime,
      output: filter,
      ...options,
    });
    filter.connect(beats.preamp);
    beats.preamp.connect(beats.master);
  };

  return { play, stop, isReady };
};
