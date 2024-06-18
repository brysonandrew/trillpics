import { useMemo } from "react";
import {
  TMultiOptions,
  useSynthMulti,
  useSynthSingle,
} from "react-synthwave";
import { useDelayNode } from "~/hooks/music/midis/delay";
import { TPlayMidisOptions } from "~/hooks/music/midis/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const useArpeggio = () => {
  const { context, master } =
    useMusicInitContext();
  const multiSynth =
    useSynthMulti(context);
  const { set, bpm } =
    useTrillPicsStore(
      ({ set, bpm }) => ({
        set,
        bpm,
      })
    );
  const delayTime = 0.000001; //0.1;
  const Q = 1;
  const detune = 1200;
  const frequency = 1200;

  const delay = useDelayNode({
    context,
    delayTime,
  });

  const filter = useMemo(() => {
    const result = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "lowpass",
        detune:0,
        Q,
      }
    );
    return result;
  }, []);

  const lfo = useSynthSingle(context, {
    type: "sine",
    frequency:
      bpm *
      (1 /
        //  15
        15),
      //  240
    gain: delayTime / 8,
    output: delay.delayTime,
  });

  const lfo1 = useSynthSingle(context, {
    type: "sine",
    frequency: bpm * (1 / 
      // 60,
    15
    ),
    // 60
    //  240
    gain: delayTime/2,
    output: delay.delayTime,
  });

  const handler = (
    startTime: number,
    stepMidi: number,
    options: TPlayMidisOptions = {}
  ) => {
    const {
      duration = 0.4,
      volume = 1,
      type = "sawtooth",
      midi: baseMidi,
      stepIndex,
      ...synthwaveOptions
    } = options;
    if (stepIndex === 0) {
      lfo.play({
        start: startTime,
      });
      lfo1.play({
        start: startTime,
        // count: 3,
        // spread:12,
        // stagger:0.01
      });
    }

    const gain = new GainNode(context, {
      gain: 0.001,
    });
    const midi =
      (baseMidi ?? 0) +
        (stepMidi ?? 0) ?? 0;
    const endTime =
      startTime + duration / 2;
    const multiSynthOptions: TMultiOptions =
      {
        type,
        midi,
        count: 4,
        start: startTime,
        end: endTime,
        output: delay,
        ...synthwaveOptions,
      };
    delay.connect(filter);
    // gain.connect(delay);
    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(multiSynthOptions);
  };

  const handleStop = () => {
    stop.bind(multiSynth.stop);
  };

  return {
    play: handler,
    stop: handleStop,
  };
};
