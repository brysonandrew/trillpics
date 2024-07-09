import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useSchedulingStart } from "~/hooks/music/midis/scheduling/start";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useMidisSynth = () => {
  const { start, stop } =
    useSchedulingStart();
  const { audio, schedule } =
    useMusicRefs();
  const {
    gains,
    delays,
    oscillators,
    context,
  } = audio;

  const handleStop = () => {
    stop();
  };

  const handler = (
    startTime: number,
    stepMidi: TMidiValue,
    options: TPlayMidisOptions
  ) => {
    console.log(startTime);
  };
  return {
    play: handler,
    stop: handleStop,
  };
};
