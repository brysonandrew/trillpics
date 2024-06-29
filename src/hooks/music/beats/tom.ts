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
      rate = 1,
    } = options;

    const filter = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "lowpass",
      }
    );
    const gain = new GainNode(context, {
      gain: 0.4 * volume,
    });

    start({
      stepIndex,
      startTime,
      rate,
      output: filter,
      volume,
    });
    filter.connect(gain);
    gain.connect(beats);
  };

  return { play, stop, isReady };
};
