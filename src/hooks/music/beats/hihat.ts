import { STEPS_COUNT } from "~/constants/music/timing";
import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
const key: TBeatsStepsKey = "hihat";
export const useHihat = () => {
  const {
    context,
    master,
    destination,
    drumsMaster,
  } = useMusicInitContext();
  const isReady = useBufferInit(key, 1);
  const start =
    useSourceBufferStart(key);
  // const stop = useSourceBufferStop(key);

  const play = async (
    startTime: number,
    beat: TBeatValue,
    options: TPlayBeatsOptions = {}
  ) => {
    const {
      volume = 1,
      stepIndex = 0,
      rate = 1,
      loopIndex = 0,
    } = options;
    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "highpass",
      }
    );
    start({
      stepIndex,
      startTime,
      rate,
      output: filter,
      volume,
    });
    // filter.connect(gain);
    // gain.connect(master);
    // drumsMaster.connect(
    //   context.destination
    // );
  };

  return { play,stop, isReady };
};
