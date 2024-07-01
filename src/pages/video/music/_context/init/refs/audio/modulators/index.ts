import { useMemo } from "react";
import {
  TGainCreate,
  TGainRecycle,
} from "~/pages/video/music/_context/init/refs/audio/gains/types";
import {
  TModulator,
  TModulatorConnect,
  TModulatorCreate,
  TModulatorOptions,
  TModulatorRecycle,
  TModulatorRef,
  TModulatorRefs,
} from "~/pages/video/music/_context/init/refs/audio/modulators/types";
import {
  TOscillatorCreate,
  TOscillatorRecycle,
} from "~/pages/video/music/_context/init/refs/audio/oscillators/types";
import { TScheduleOptions } from "~/pages/video/music/_context/init/refs/schedule/types";
import { resolveSync } from "~/pages/video/music/_context/init/refs/audio/modulators/sync";
import { resolveMultiplier } from "~/pages/video/music/_context/init/refs/audio/modulators/multiplier";

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
        }: TModulatorOptions) => ({
          oscillator:
            oscillatorCreate(options),
          gain: gainCreate({ gain }),
        });
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
          id,
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
            const { oscillator, gain } =
              create(options);
            oscillator.connect(gain);
            gain.connect(param);
            return {
              oscillator,
              gain,
            } as const;
          };
          let m = start(
            _param,
            _options
          );

          const disconnect = () => {
            const { oscillator, gain } =
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
              recycle(
                m.oscillator,
                m.gain
              )
            );
            return m;
          };

          const ref: TModulatorRef = {
            reconnect,
            disconnect,
            sync: resolveSync(id),
            multiplier:
              resolveMultiplier(
                id,
                _param
              ),
            ...m,
          };

          return ref;
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
