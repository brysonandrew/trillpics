import { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import {
  TSliderValueChangeHandler,
  TUpdateNumberHandler,
} from "~/components/inputs/slider/types";
import {
  TModulatorNumberParams,
  TModulatorParamKey,
} from "~/pages/video/music/synth/nodes/modulators/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { MODULATOR_PARAMS } from "~/pages/video/music/synth/nodes/modulators/constants";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { InputsBoxTitle } from "~/components/inputs/box/title";
import { NumberInput } from "~/components/inputs/number/input";
import { NodesFilterDropdowns } from "~/pages/video/music/synth/nodes/filter/dropdowns";
import {
  ModulatorsDropdownsSync,
  TSyncValue,
} from "~/pages/video/music/synth/nodes/modulators/dropdowns/sync";
import {
  ModulatorsDropdownsMultiplier,
  TMultiplierValue,
} from "~/pages/video/music/synth/nodes/modulators/dropdowns/multiplier";
import { isNumber } from "~/utils/validation/is/number";

type TProps = {
  id: string;
  audioParam: AudioParam;
};
export const ModulatorsNumbers: FC<
  TProps
> = (props) => {
  const { id } = props;

  const {
    audio: { modulator },
    schedule: { record },
  } = useMusicRefs();

  const handleMultiplierUpdate = (
    key: TModulatorParamKey,
    value: TMultiplierValue
  ) => {
    const m = Number(value);
    modulator.refs[id].multiplier[key] =
      m;
    if (key === "gain") {
      modulator.refs[id][
        key
      ].gain.value =
        modulator.refs[id][key].gain
          .value * m;
    }
  };

  const handleSyncUpdate = (
    value: TSyncValue
  ) => {
    const [n, d] = value
      .split("/")
      .map(Number);
    modulator.refs[
      id
    ].oscillator.frequency.value =
      (record.bpm / 60) *
      (n / d) *
      modulator.refs[id].multiplier
        .frequency;
  };
  const resolveParam = (
    key: TModulatorParamKey
  ) => {
    const { oscillator, gain } =
      modulator.refs[id];

    if (key === "gain") {
      return gain[key];
    } else {
      return oscillator[key];
    }
  };
  const resolveRange = (
    key: TModulatorParamKey
  ) => {
    const multiplier =
      modulator.refs[id].multiplier[
        key
      ] ?? 1;
    return {
      min: 1 * multiplier,
      max: 100 * multiplier,
      step: 1 * multiplier,
    } as const;
  };
  const handleUpdate =
    (
      key: TModulatorParamKey
    ): TUpdateNumberHandler =>
    (value) => {
      const param = resolveParam(key);
      const multiplier =
        modulator.refs[id].multiplier[
          key
        ];
      if (isNumber(multiplier)) {
        param.value =
          value * multiplier;
      }
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
              {...propsFromAudioparams(
                key,
                param
              )}
              {...resolveRange(key)}
            >
              {(_) => (
                <_.Box>
                  <_.Header>
                    <_.Title />
                    {_.number}
                  </_.Header>
                  {_.slider}
                  <_.Header>
                    <div className="row-end">
                      {key ===
                        "frequency" && (
                        <ModulatorsDropdownsSync
                          name={resolveCompositeKey(
                            name,
                            "sync"
                          )}
                          onValueChange={
                            handleSyncUpdate
                          }
                        />
                      )}
                      <ModulatorsDropdownsMultiplier
                        name={resolveCompositeKey(
                          name,
                          "multiplier"
                        )}
                        onValueChange={(
                          v: TMultiplierValue
                        ) =>
                          handleMultiplierUpdate(
                            key,
                            v
                          )
                        }
                        defaultValue={modulator.refs[
                          id
                        ].multiplier[
                          key
                        ].toString()}
                      />
                    </div>
                  </_.Header>
                </_.Box>
              )}
            </InputsNumber>
          );
        }
      )}
    </>
  );
};
