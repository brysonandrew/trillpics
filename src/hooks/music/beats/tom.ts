import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
const key: TBeatsStepsKey = "tom";

export const useTom = () => {
  const {
    audio: {
      context,
      gains: { beats },
    },
  } = useMusicRefs();
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
      version = 2,
      volume = 1,
      stepIndex = 0,
    } = options;

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "lowpass",
      }
    );

    start({
      stepIndex,
      startTime,
      output: filter,
      volume,
      ...options
    });
    filter.connect(beats.preamp);
    beats.preamp.connect(beats.master);
  };

  return { play, stop, isReady };
};
