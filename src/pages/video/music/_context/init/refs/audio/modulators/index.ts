import { useMemo } from "react";
import { key } from "localforage";
import {
  TGainCreate,
  TGainRecycle,
} from "~/pages/video/music/_context/init/refs/audio/gains/types";
import {
  TModulator,
  TModulatorConnect,
  TModulatorCreate,
  TModulatorCreateParameters,
  TModulatorOptions,
  TModulatorRecycle,
  TModulatorRefs,
} from "~/pages/video/music/_context/init/refs/audio/modulators/types";
import {
  TOscillatorCreate,
  TOscillatorRecycle,
} from "~/pages/video/music/_context/init/refs/audio/oscillators/types";
import { TScheduleOptions } from "~/pages/video/music/_context/init/refs/schedule/types";

export const useSynthModulators = (
  schedule: TScheduleOptions
) => {
  const ref = useMemo(() => {
    const init = (
      oscillatorCreate: TOscillatorCreate,
      oscillatorRecycle: TOscillatorRecycle,
      gainCreate: TGainCreate,
      gainRecycle: TGainRecycle
    ) => {
      const create: TModulatorCreate =
        ({
          gain,
          ...options
        }: TModulatorOptions) => [
          oscillatorCreate(options),
          gainCreate({ gain }),
        ];
      const recycle: TModulatorRecycle =
        (
          node: OscillatorNode,
          gain: GainNode
        ) => {
          return {
            ...oscillatorRecycle(node),
            ...gainRecycle(gain),
          };
        };

      const refs: TModulatorRefs = {};

      const connect: TModulatorConnect =
        (
          _param: AudioParam,
          _options = {
            frequency:
              schedule.bpm / 60,
            detune: 0,
            gain: 1,
          }
        ) => {
          const start = (
            param = _param,
            options = _options
          ) => {
            const [oscillator, gain] =
              create(_options);
            oscillator.connect(gain);
            gain.connect(param);
            oscillator.start(0);
            return [
              oscillator,
              gain,
            ] as const;
          };
          let m = start();

          const disconnect = () => {
            const [oscillator, gain] =
              m;
            oscillator.disconnect(gain);
            gain.disconnect(_param);
            oscillator.stop(0);
          };

          const reconnect = (
            param = _param
          ) => {
            disconnect();
            _param = param;
            m = start(
              param,
              recycle(...m)
            );
            return m;
          };

          return {
            reconnect,
            disconnect,
            ...m,
          };
        };
      const modulator: TModulator = {
        connect,
        recycle,
        refs,
      };
      return modulator;
    };
    return init;
  }, []);

  return ref;
};
