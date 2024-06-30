import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { ModulatorsAdd } from "~/pages/video/music/synth/nodes/modulators/add";
import { TOscillatorNumberOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
export type TOscillatorParams = [
  TOscillatorNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TOscillatorConfig = {
  type: "oscillator";
  params: TOscillatorParams;
};

export type TBiquadFilterParams = [
  TOscillatorNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];
export type TBiquadFilterConfig = {
  type: "filter";
  params: TBiquadFilterParams;
};
type TProps =
  | TBiquadFilterConfig
  | TOscillatorConfig;
export const ModulatorsParams: FC<
  TProps
> = ({ type, params }) => {
  return (
    <ul className="relative column-stretch">
      {params.map((p) => {
        const [key, param, onUpdate] =
          p;

        const name = `${type}.${key}`;
        return (
          <li
            key={key}
            className="relative"
          >
            <ModulatorsAdd
              id={name}
              audioParam={param}
            />
            <InputsNumber
              name={name}
              title={key}
              onUpdate={onUpdate}
              {...propsFromAudioparams(
                key,
                param
              )}
            />
          </li>
        );
      })}
    </ul>
  );
};
