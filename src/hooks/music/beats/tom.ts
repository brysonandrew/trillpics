import { useBufferInit } from "~/hooks/music/beats/hooks/buffer/init";
import { useSourceBufferStart } from "~/hooks/music/beats/hooks/source-buffer/start";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import {
  TBeatsStepsKey,
  TBeatValue,
  TPlayBeatsOptions,
} from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";
import { isDefined } from "~/utils/validation/is/defined";
import { useBufferFromSrcHandler } from "./hooks/buffer-from-source";
const key: TBeatsStepsKey = "tom";

export const useTom = () => {
  const { context, master } =
    useMusicInitContext();
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
    const gain = new GainNode(context, {
      gain: 0.4 * volume,
    });

    start({
      stepIndex,
      startTime,
      output: filter,
    });
    filter.connect(gain);
    gain.connect(master);
  };

  return { play, stop };
};
