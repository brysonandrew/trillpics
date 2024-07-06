import { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { defaultsFromAudioparams } from "~/pages/video/music/synth/nodes/defaults/from-audioparams";
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
import { InputsNumberDefault } from "~/components/inputs/number/default";
import { InputsNumberSm } from "~/components/inputs/number/sm";
import { box } from "~uno/rules/box";
const INPUTS = [
  "slider",
  "number",
] as const;

type TProps = {
  id: string;
};
export const ModulatorsNumbers: FC<
  TProps
> = ({ id }) => {
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
    modulators.refs[id].gain.gain.value =
      prevValue * m;

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
  const resolveParam = (
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
      const param = resolveParam(key);
      console.log(param);
      param.value = value;

      // const multiplier =
      //   modulators.refs[id].multiplier[
      //     key
      //   ];
      // if (isNumber(multiplier)) {
      // }
    };

  const params = MODULATOR_PARAMS.map(
    (key: TModulatorParamKey) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      const param = resolveParam(key);
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
    <>
      {params.map(
        ([key, param, handler]) => {
          const name =
            resolveCompositeKey(
              id,
              key
            );
          return (
            <InputsNumber
              key={name}
              name={name}
              title={key}
              onUpdate={handler}
              {...defaultsFromAudioparams(
                param,
                key
              )}
           
              {...resolveRange()}
            >
              {(_) => (
                <>
                  <div
                  className="column-start"
                  style={{
                    gap: box.m00625,
    
                  }}
                  >
                    {key ===
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
                </>
              )}
            </InputsNumber>
          );
        }
      )}
    </>
  );
};
