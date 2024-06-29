import { useGainNode } from "~/hooks/music/midis/gains/hook";
import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useBasicOscillatorStart } from "~/pages/video/music/synth/nodes/oscillator/hooks/scheduling/start";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useArpeggio = () => {
  const { start, stop } =
    useBasicOscillatorStart();
  const {
    audio: {
      context,
      gains: { midis },
      delays: { delay },
      filters: { filter },
      oscillator,
    },
  } = useMusicRefs();
  // const delayTime = 0.99; // 0.000001; //0.1;
  // const Q = 1;

  const gainNode1 = useGainNode({
    context,
  });

  // const filter = useMemo(() => {
  //   const result = new BiquadFilterNode(
  //     context,
  //     {
  //       frequency: 400,
  //       type: "lowpass",
  //       detune: 0,
  //       Q,
  //     }
  //   );
  //   return result;
  // }, []);

  const handleStop = () => {
    stop();
  };

  const handler = (
    startTime: number,
    stepMidi: TMidiValue,
    options: TPlayMidisOptions
  ) => {
    const {
      duration = 1,
      stepIndex = 0,
    } = options;

    const endTime =
      startTime + duration * 4;
    start(startTime, stepMidi, options);

    oscillator.node.connect(gainNode1);
    // delay.connect(filter);
    gainNode1.gain.value =
      (options.volume ?? 1) * 0.1;

    gainNode1.connect(filter);
    filter.connect(delay);

    delay.connect(midis);

    // delay.delayTime.setValueAtTime(
    //   0.001,
    //   startTime
    // );
    // delay.delayTime.linearRampToValueAtTime(
    //   0.99,
    //   endTime
    // );
  };
  return {
    play: handler,
    stop: handleStop,
  };
};

