import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useSchedulingStart } from "~/hooks/music/midis/scheduling/start";
import { bitcrusher } from "~/pages/video/music/synth/nodes/bitcrusher/init";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import {
  hzToMidi,
  midiToHz,
} from "~/utils/music";

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
