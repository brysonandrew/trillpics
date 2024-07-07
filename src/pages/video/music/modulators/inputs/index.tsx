import { FC } from "react";
import { motion } from "framer-motion";
import { InputsNumber } from "~/components/inputs/number";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import {
  TModulatorNumberParams,
  TModulatorParamKey,
} from "~/pages/video/music/modulators/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { MODULATOR_PARAMS } from "~/pages/video/music/modulators/constants";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import {
  ModulatorsDropdownsSync,
  TSyncValue,
} from "~/pages/video/music/modulators/dropdowns/sync";
import {
  ModulatorsDropdownsMultiplier,
  TMultiplierValue,
} from "~/pages/video/music/modulators/dropdowns/multiplier";
import { InputsNumberSm } from "~/components/inputs/number/sm";
import { box } from "~uno/rules/box";
import { defaultsFromAudioparams } from "~/pages/video/music/synth/nodes/defaults";
import { TDivProps } from "@brysonandrew/config-types";
import { key } from "localforage";
import { TUseIdsResult } from "~/pages/video/music/modulators/ids";
const INPUTS = [
  "slider",
  "number",
] as const;

type TProps = TDivProps & {
  id: string;
  ids: TUseIdsResult;
};
export const ModulatorsInputs: FC<
  TProps
> = ({ id, ids, style, ...props }) => {
  const {
    layout,
    audio: { modulators },
    schedule,
  } = useMusicRefs();
  const resolveRange = (
    multiplier = modulators.refs[id]
      .multiplier ?? 1
  ) => {
    const min = 1 * multiplier;
    const max = 100 * multiplier;
    const range = max - min;
    return {
      min,
      max,
      step: range / 100,
    } as const;
  };
  const updateInputMultiplier = (
    name: string,
    value: number
  ) => {
    INPUTS.forEach((key) => {
      if (layout[key][name]?.current) {
        const nextValue =
          Number(
            layout[key][name]?.current
              .value
          ) * value;
        if (!isNaN(nextValue)) {
          layout[key][
            name
          ].current.value = `${nextValue}`;
        }
        const { max, min, step } =
          resolveRange(value);

        layout[key][
          name
        ].current.max = `${max}`;
        layout[key][
          name
        ].current.min = `${min}`;
        layout[key][
          name
        ].current.step = `${step}`;
      }
    });
  };
  const handleMultiplierUpdate = (
    name: string,
    value: TMultiplierValue
  ) => {
    const m = Number(value);
    modulators.refs[id].multiplier = m;
    const prevValue =
      modulators.refs[id].gain.gain
        .value;
    modulators.refs[
      id
    ].gain.gain.value = prevValue * m;

    updateInputMultiplier(name, m);
  };
  const updateInputSync = (
    name: string,
    value: number
  ) => {
    INPUTS.forEach((key) => {
      if (layout[key][name]?.current) {
        layout[key][
          name
        ].current.value = `${value}`;
      }
    });
  };
  const handleSyncUpdate = (
    name: string,
    value: TSyncValue
  ) => {
    const [n, d] = value
      .split("/")
      .map(Number);
    const next =
      (schedule.record.bpm / 60) *
      (n / d);
    modulators.refs[
      id
    ].oscillator.frequency.value = next;

    updateInputSync(name, next);
  };
  const resolveAudioParam = (
    key: TModulatorParamKey
  ) => {
    const { oscillator, gain } =
      modulators.refs[id];

    if (key === "gain") {
      return gain[key];
    } else {
      return oscillator[key];
    }
  };

  const handleUpdate =
    (
      key: TModulatorParamKey
    ): TUpdateNumberHandler =>
    (value) => {
      const param = resolveAudioParam(key);
      param.value = value;
    };

  const params = MODULATOR_PARAMS.map(
    (key: TModulatorParamKey) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      const param = resolveAudioParam(key);
      return [key, param, handler];
    }
  ).filter(
    Boolean
  ) as TModulatorNumberParams;
  const defaultMultiplierValue =
    modulators.refs[
      id
    ].multiplier.toString();
  return (
    <motion.div
      id={ids.started.inputs}
      className="relative w-full column-start"
      style={{
        gap: box._00625,
        ...style,
      }}
    >
      {params.map(
        ([
          paramKey,
          param,
          handler,
        ]) => {
          const name =
            resolveCompositeKey(
              id,
              paramKey
            );
          return (
            <InputsNumber
              key={name}
              name={name}
              title={paramKey}
              onUpdate={handler}
              {...defaultsFromAudioparams(
                param,
                {
                  graphKey:id,
                  paramKey,
                }
              )}
              {...resolveRange()}
            >
              {(_) => (
                <div
                  className="relative column-start"
                  style={{
                    gap: box._00625,
                  }}
                >
                  {paramKey ===
                  "frequency" ? (
                    <ModulatorsDropdownsSync
                      name={resolveCompositeKey(
                        name,
                        "sync"
                      )}
                      onValueChange={(
                        value: TSyncValue
                      ) =>
                        handleSyncUpdate(
                          name,
                          value
                        )
                      }
                    />
                  ) : (
                    <ModulatorsDropdownsMultiplier
                      name={resolveCompositeKey(
                        name,
                        "multiplier"
                      )}
                      defaultValue={
                        defaultMultiplierValue
                      }
                      onValueChange={(
                        v: TMultiplierValue
                      ) =>
                        handleMultiplierUpdate(
                          name,
                          v
                        )
                      }
                    />
                  )}
                  <InputsNumberSm
                    {..._}
                  />
                </div>
              )}
            </InputsNumber>
          );
        }
      )}
    </motion.div>
  );
};
