import { useSynthSingle } from "react-synthwave";
import { useSourceBufferStop } from "~/hooks/music/beats/hooks/source-buffer/stop";
import { TBeatsKey } from "~/hooks/music/beats/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
type THandlerConfig = {
  stepIndex: number;
  startTime: number;
  output: AudioNode;
  rate: number;
  volume: number;
};
export const useSourceBufferStart = (
  key: TBeatsKey
) => {
  const {
    drumsMaster,
    master,
    context,
    bufferSourceRecord,
    bufferRecord,
  } = useMusicInitContext();
  

  const { set, bpm } =
    useTrillPicsStore(
      ({ set, bpm }) => ({
        set,
        bpm,
      })
    );
    const lfo = useSynthSingle(
      context,
      {
        type: "sine",
        frequency: bpm * (1 / 15),
        // 240
        //  240
   
        //o.oscillator.frequency,
      }
    );
  const stop = useSourceBufferStop(key);

  const handler = (
    config: THandlerConfig
  ) => {
    const {
      startTime,
      stepIndex,
      output,
      rate,
      volume,
    } = config;
    const sampleBuffer =
      bufferRecord[key];
    if (!sampleBuffer) {
      console.log("NO SAM");
      return;
    }
    if (!bufferSourceRecord[key]) {
      console.log("NO BUFF REC");
      bufferSourceRecord[key] = [];
    }

    const stopTime =
      (sampleBuffer.duration +
        startTime) *
      1000;

    bufferSourceRecord[key][stepIndex] =
      {
        source:
          context.createBufferSource(),
        timeout: setTimeout(() => {
          stop(stepIndex);
        }, stopTime),
      };

    bufferSourceRecord[key][
      stepIndex
    ].source.buffer = sampleBuffer;
    bufferSourceRecord[key][
      stepIndex
    ].source.connect(output);
    bufferSourceRecord[key][
      stepIndex
    ].source.start(startTime);
    const gain = new GainNode(context, {
      gain: volume * 0.1,
    });
    output.connect(gain);
    gain.connect(master);

    bufferSourceRecord[key][
      stepIndex
    ].source.playbackRate.value = rate;
 
    lfo.play({
      start: startTime,
      gain: rate *2,
      output:
        bufferSourceRecord[key][
          stepIndex
        ].source.playbackRate,
    });
  };
  return handler;
};
