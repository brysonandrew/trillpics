import { useMemo } from "react";
import console from "console";
import {
  TMultiOptions,
  useSynthMulti,
  useSynthSingle,
} from "react-synthwave";
import { TPlayMidisOptions } from "~/hooks/music/midis/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { midiToHz } from "~/utils/music";

export const useMegabus = () => {
  const {
    schedule: {
      record: { bpm },
    },
    audio,
  } = useMusicRefs();
  const {
    gains,
    delays,
    context,
    oscillators,
  } = audio;
  const delayTime = 0.99; // 0.000001; //0.1;
  const Q = 1;
  const detune = 1200;
  const frequency = midiToHz(28);

  //   const [filter, filter1] =
  //     useMemo(() => {
  //       const _ = filters.create({
  //         frequency: 800,
  //         type: "lowpass",
  //         detune: 0,
  //         Q,
  //       });
  //       const __ = filters.create({
  //         frequency: 400,
  //         type: "lowpass",
  //         detune: 0,
  //         Q,
  //       });
  //       return [_, __] as const;
  //     }, []);
  //   const sm = useSynthMulti(context, {
  //     type: "sine",
  //     frequency: bpm * (1 / 240),
  //     // // 240
  //     // //  240
  //     gain: 500,
  //     // output: filter.frequency,
  //     output:
  //       audio.graph.ref.megabus.node
  //         .frequency,
  //   });

  //   const lfo = useSynthSingle(context, {
  //     type: "sine",
  //     frequency: bpm * (1 / 15),
  //     // 240
  //     //  240
  //     gain: 500,
  //     output:
  //       audio.graph.ref.megabus.node
  //         .frequency,
  //   });

  //   const lfo1 = useSynthMulti(context, {
  //     type: "sine",
  //     frequency:
  //       bpm *
  //       (1 /
  //         // 60,
  //         15),
  //     // 60
  //     //  240
  //     gain: delayTime / 2,
  //     // output: delays.delay.delayTime,
  //   });

  //   const handleStop = () => {
  //     handleStop.bind(lfo.stop);
  //     handleStop.bind(sm.stop);
  //     handleStop.bind(
  //       audio.graph.ref.megabus.node.stop
  //     );
  //   };

  //   const handler = (
  //     startTime: number,
  //     stepMidi: number,
  //     options: TPlayMidisOptions
  //   ) => {
  //     const {
  //       duration = 0.4,
  //       volume = 1,
  //       type = "sawtooth",
  //       midi: baseMidi,
  //       stepIndex = 0,
  //       ...synthwaveOptions
  //     } = options;
  //     console.log(stepIndex);
  //     if (
  //       stepIndex === 0 &&
  //       !audio.graph.ref['megabus'].isStarted
  //     ) {
  //       console.log("START");
  //       audio.graph.ref.megabus.node.start(
  //         startTime
  //       );
  //       audio.graph.ref.megabus.isStarted =
  //         true;
  //       lfo.play({
  //         start: startTime,
  //       });
  //       lfo1.play({
  //         start: startTime,
  //         count: 3,
  //         spread: 12,
  //         stagger: 0.01,
  //       });
  //     }

  //     const midi =
  //       (baseMidi ?? 0) +
  //         (stepMidi ?? 0) ?? 0;

  //     const hz = midiToHz(midi);
  //     const endTime =
  //       startTime + duration;

  //     const opts: TMultiOptions = {
  //       type: "square",
  //       frequency: hz * 4,
  //       count: 20,
  //       spread: 12,
  //       stagger: 0.0001,
  //       start: startTime,
  //       end: endTime,
  //       // output: delays.delay,
  //       gain: 0.0001,
  //     };

  //     sm.play(opts);

  //     gains.midis.preamp.gain.linearRampToValueAtTime(
  //       0.04 * volume,
  //       startTime
  //     );
  //     gains.midis.master.gain.linearRampToValueAtTime(
  //       0.01 * volume,
  //       startTime
  //     );

  //     audio.graph.ref.megabus.node.connect(
  //       filter
  //     );
  //     filter.connect(gains.midis.preamp);
  //     gains.midis.preamp.connect(
  //       gains.midis.master
  //     );

  //     // delays.delay.connect(filter1);
  //     filter1.connect(gains.midis.master);
  //     // gains.midis.master.connect(master);

  //     // delay.delayTime.setValueAtTime(
  //     //   0.99,
  //     //   startTime
  //     // );
  //     // delay.delayTime.linearRampToValueAtTime(
  //     //   0.001,
  //     //   startTime + duration
  //     // );
  //     // }
  //   };
  //   return {
  //     play: handler,
  //     stop: handleStop,
  //   };
};
export const PRESETS_MEGABUS = {};
