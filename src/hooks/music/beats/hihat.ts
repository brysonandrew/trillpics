import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
const key: TBeatsStepsKey = "hihat";
export const useHihat = () => {
  const {
    audio: {
      context,
      gains: { beats },
    },
  } = useMusicRefs();
  const isReady = useBufferInit(key, 1);
  const start =
    useSourceBufferStart(key);
  const stop = useSourceBufferStop(key);

  const play = async (
    startTime: number,
    _: TBeatValue,
    options: TPlayBeatsOptions = {}
  ) => {
    const { volume = 1 } = options;
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "highpass",
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
