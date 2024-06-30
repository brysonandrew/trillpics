import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
const key: TBeatsStepsKey = "snare";

export const useSnare = () => {
  const { audio:{context, gains:{beats}} } =
    useMusicRefs();
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
    // const gain = new GainNode(context, {
    //   gain: 0.065,
    // });
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
