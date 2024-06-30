import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import { useSchedulingStart } from "~/hooks/music/midis/arpeggio/scheduling/start";
import { bitcrusher } from "~/pages/video/music/synth/nodes/worklets/bitcrusher/init";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import {
  hzToMidi,
  midiToHz,
} from "~/utils/music";

export const useArpeggio = () => {
  const { start, stop } =
    useSchedulingStart();
  const { audio, schedule } =
    useMusicRefs();
  const {
    gains,
    delays,
    filters,
    oscillator,
    context,
  } = audio;
  const endOscillator = (
    endTime?: number
  ) => {
    oscillator.node.stop(endTime);
    const prevNode = oscillator.node;
    const nextOptions: OscillatorOptions =
      oscillator.recycle(prevNode);
    oscillator.node = oscillator.create(
      nextOptions
    );
    oscillator.isStarted = false;
  };

  const handleStop = () => {
    stop();
    endOscillator();
  };

  const handler = (
    startTime: number,
    stepMidi: TMidiValue,
    options: TPlayMidisOptions
  ) => {
    if (
      schedule.record.synth.source ===
      "oscillator"
    ) {
      oscillator.node.connect(
        gains.midis.preamp
      );

      if (!oscillator.isStarted) {
        oscillator.isStarted = true;
        oscillator.node.start(
          startTime
        );
      }
      const setFrequency = (
        deltaMidi: number
      ) => {
        const currHz =
          oscillator.node.frequency
            .value;
        const currMidi =
          hzToMidi(currHz);
        const nextHz = midiToHz(
          currMidi + deltaMidi
        );
        oscillator.node.frequency.value =
          nextHz;
      };
      start(
        startTime,
        stepMidi,
        options,
        setFrequency,
        endOscillator
      );
    } else {
      const disconnect = (
        end?: number
      ) => {
        console.log("STOP");
        if (
          audio.worklets[
            "karplus-strong"
          ]
        ) {
          audio.worklets[
            "karplus-strong"
          ].disconnect(
            gains.midis.preamp
          );
          if (
            audio.worklets[
              "noise-white"
            ]
          ) {
            audio.worklets[
              "noise-white"
            ].disconnect(
              audio.worklets[
                "karplus-strong"
              ]
            );
          }
        }
      };

      let prevHz = 100;
      const setFrequency = (
        deltaMidi: number,
        stepDuration: number,
        intervalDuration: number = stepDuration
      ) => {
        if (
          !audio.worklets["noise-white"]
        ) {
          audio.worklets[
            "noise-white"
          ] = new AudioWorkletNode(
            context,
            "noise-white"
          );
        }

        if (
          !audio.worklets[
            "karplus-strong"
          ]
        ) {
          audio.worklets[
            "karplus-strong"
          ] = new AudioWorkletNode(
            context,
            "karplus-strong"
          );
        }
        audio.worklets[
          "noise-white"
        ].parameters.get(
          "gain"
        ).value = 0.99;
        audio.worklets[
          "noise-white"
        ].port.postMessage(
          startTime
        );
console.log(context.sampleRate)
        if (
          !audio.worklets[
            "karplus-strong"
          ]
        ) {
          audio.worklets[
            "karplus-strong"
          ] = new AudioWorkletNode(
            context,
            "karplus-strong"
          );
        }

        audio.worklets[
          "noise-white"
        ].connect(
          audio.worklets[
            "karplus-strong"
          ]
        );
        audio.worklets[
          "karplus-strong"
        ].connect(gains.midis.preamp);
        //  audio.worklets[
        //     "karplus-strong"
        //   ].parameters.get(
        //     "delayTime"
        //   ).value = prevHz;
        const currMidi =
          hzToMidi(prevHz);
        const nextHz = midiToHz(
          currMidi + deltaMidi
        )+261.63/2;
        const delayOffset = 128 / context.sampleRate;
        const delayTime = 1000 / nextHz - delayOffset;
        const end =
          startTime+stepDuration;
          //  +
          // intervalDuration;
          // const end2 =
          // startTime +
          // intervalDuration+stepDuration;
          // console.log(stepDuration,intervalDuration)
        // audio.worklets[
        //   "karplus-strong"
        // ].parameters.get(
        //   "delayTime"
        // ).value = prevHz;
        // audio.worklets[
        //   "karplus-strong"
        // ].parameters
        //   .get("delayTime")
        //   .value = pdelayTime
        audio.worklets[
          "karplus-strong"
        ].parameters
          .get("delayTime")
          .linearRampToValueAtTime(
            delayTime,
            startTime
          );
        prevHz = nextHz;
        // disconnect(end)
      };
      start(
        startTime,
        stepMidi,
        options,
        setFrequency,
        disconnect
      );
    }

    if (
      !schedule.record.synth.bitcrusher
    ) {
      const node = bitcrusher(
        context,
        schedule.record.synth.bitcrusher
      );
      gains.midis.preamp.connect(node);
      node.connect(
        // filters.filter
        gains.midis.master
      );
    } else {
      gains.midis.preamp.connect(
        filters.filter
        // gains.midis.master
      );
    }

    filters.filter.connect(
      delays.delay
    );

    delays.delay.connect(
      gains.midis.master
    );
  };
  return {
    play: handler,
    stop: handleStop,
  };
};
