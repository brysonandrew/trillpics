import { useMemo } from "react";
import {
  TMultiOptions,
  useSynthMulti,
  useSynthSingle,
} from "react-synthwave";
import { useDelayNode } from "~/hooks/music/midis/delay";
import { useGainNode } from "~/hooks/music/midis/gains/hook";
import { useBasicOscillator } from "~/hooks/music/midis/oscillators/basic/hook";
import { useBasicOscillatorStart } from "~/hooks/music/midis/oscillators/scheduling/start";
import { TPlayMidisOptions } from "~/hooks/music/midis/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { midiToHz } from "~/utils/music";

export const useArpeggio = () => {
  const { context, master } =
    useMusicInitContext();
  const { set, bpm, sequence } =
    useTrillPicsStore(
      ({ set, bpm, sequence }) => ({
        set,
        bpm,
        sequence,
      })
    );
  const interval = sequence.interval;
  const delayTime = 0.99; // 0.000001; //0.1;
  const Q = 1;
  const detune = 1200;
  const frequency = midiToHz(28);

  const delay = useDelayNode({
    context,
    delayTime,
  });

  const handleStart =
    useBasicOscillatorStart();

  const gainNode = useGainNode({
    context,
  });
  const gainNode1 = useGainNode({
    context,
  });
  const o = useBasicOscillator({
    context,
    frequency,
    detune,
    type: "sawtooth",
  });

  const filter = useMemo(() => {
    const result = new BiquadFilterNode(
      context,
      {
        frequency: 400,
        type: "lowpass",
        detune: 0,
        Q,
      }
    );
    return result;
  }, []);
  const filter1 = useMemo(() => {
    const result = new BiquadFilterNode(
      context,
      {
        frequency: 800,
        type: "lowpass",
        detune: 0,
        Q,
      }
    );
    return result;
  }, []);
  const sm = useSynthMulti(context, {
    type: "sine",
    // frequency: bpm * (1 / 240),
    // // 240
    // //  240
    // gain: 500,
    // output: filter.frequency,
    // //o.oscillator.frequency,
  });

  const lfo = useSynthSingle(context, {
    type: "sine",
    frequency: bpm * (1 / 15),
    // 240
    //  240
    gain: 500,
    output: o.oscillator.frequency,
  });

  // const lfo1 = useSynthSingle(context, {
  //   type: "sine",
  //   frequency:
  //     bpm *
  //     (1 /
  //       // 60,
  //       15),
  //   // 60
  //   //  240
  //   gain: delayTime / 2,
  //   output: delay.delayTime,
  // });

  const handleStop = () => {
    // handleStop.bind(multiSynth.stop);
    // handleStop.bind(o.oscillator.stop);
  };

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
      stepIndex = 0,
      ...synthwaveOptions
    } = options;
    if (
      stepIndex === 0 &&
      !o.isStarted
    ) {
      // console.log("START");
      o.oscillator.start(startTime);
      o.isStarted = true;
      lfo.play({
        start: startTime,
      });
      // lfo1.play({
      //   start: startTime,
      //   count: 3,
      //   spread:12,
      //   stagger:0.01
      // });
    }
    const endTime =
      startTime + duration;

    gainNode.gain.linearRampToValueAtTime(
      0.04 * volume,
      startTime
    );
    gainNode1.gain.linearRampToValueAtTime(
      0.01 * volume,
      startTime
    );
    const midi =
      (baseMidi ?? 0) +
        (stepMidi ?? 0) ?? 0;

    const hz = midiToHz(midi);
    handleStart(
      o.oscillator,
      hz,
      stepIndex,
      startTime,
      duration
    );
    const opts: TMultiOptions = {
      type: "square",
      // midi: midi + 28,
      frequency: hz * 4,
      count: 20,
      spread: 12,
      stagger: 0.0001,
      start: startTime,
      end: endTime,
      output: delay,
      gain: 0.0001,
    };
    sm.play(opts);
    o.oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(master);

    delay.connect(filter1);
    filter1.connect(gainNode1);
    gainNode1.connect(master);

    if (
      (interval * 2) % stepIndex ===
      0
    ) {
      delay.delayTime.setValueAtTime(
        0.99,
        startTime
      );
      delay.delayTime.linearRampToValueAtTime(
        0.001,
        startTime +
          (duration * interval) / 2
      );
    }
  };
  return {
    play: handler,
    stop: handleStop,
  };
};
